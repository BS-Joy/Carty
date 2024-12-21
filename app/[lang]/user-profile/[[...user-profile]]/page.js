import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const UserProfilePage = async ({ params }) => {
  const { lang } = await params;
  const { userId } = await auth();
  if (!userId) {
    redirect(`/${lang}/sign-in`);
  }
  return (
    <div className="flex mt-3 justify-center">
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
