import Copyright from "@/components/layout/Copyright";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import ThemeSwitchProvider from "@/contexts/ThemeSwitchProvider";

const MainLayout = async ({ children, params }) => {
  const { lang } = await params;
  return (
    <div>
      <ThemeSwitchProvider>
        <Header lang={lang} />
        <Navbar lang={lang} />
        {children}
        <Footer lang={lang} />
        <Copyright />
      </ThemeSwitchProvider>
    </div>
  );
};

export default MainLayout;
