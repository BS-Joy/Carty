import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const locales = ["bn", "en"];
const defaultLocale = "en";

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

// Function to get the best-matched locale from the request
function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };

  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

export default async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect to the locale-prefixed version of the root URL (e.g., `/` → `/en`)
  if (pathname === "/") {
    const locale = getLocale(request); // Get the preferred locale
    return NextResponse.redirect(new URL(`/${locale}/`, request.url));
  }

  // Check if the URL already includes a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect to locale-prefixed URL if no locale is present in the pathname
  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // Process Clerk middleware separately
  const clerkResponse = await clerkMiddleware()(request);

  // If Clerk middleware generates a response (e.g., redirect for unauthenticated users), return it
  if (clerkResponse) {
    return clerkResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Clerk's configuration with static file and internal path exclusions
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    // Include API routes for Clerk explicitly
    "/(api|trpc)(.*)",

    // Locale-based middleware logic (your existing matcher)
    "/((?!api|assets|.*\\..*|_next).*)",
  ],
};
