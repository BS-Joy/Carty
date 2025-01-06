import Copyright from "@/components/layout/Copyright";
import Footer from "@/components/layout/Footer";
import Footer2 from "@/components/layout/Footer2";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import MobileNavStateProvider from "@/contexts/MobileNavStateProvider";
import ThemeSwitchProvider from "@/contexts/ThemeSwitchProvider";
import { getDictionary } from "../dictionaries/dictionaries";
import { getCategories } from "@/queries/categoryQueries";

export async function generateStaticParams() {
  return [{ lang: "bn" }, { lang: "en" }];
}

const MainLayout = async ({ children, params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const categories = await getCategories();

  return (
    <>
      <ThemeSwitchProvider>
        <MobileNavStateProvider>
          <Header lang={lang} />
          <Navbar dictionary={dictionary} lang={lang} categories={categories} />
          {children}
          {/* <Footer lang={lang} /> */}
          <Footer2 lang={lang} />
          <Copyright />
        </MobileNavStateProvider>
      </ThemeSwitchProvider>
    </>
  );
};

export default MainLayout;
