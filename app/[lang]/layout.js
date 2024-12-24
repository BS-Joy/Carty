import Copyright from "@/components/layout/Copyright";
import Footer from "@/components/layout/Footer";
import Footer2 from "@/components/layout/Footer2";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import MobileNavStateProvider from "@/contexts/MobileNavStateProvider";
import ThemeSwitchProvider from "@/contexts/ThemeSwitchProvider";

const MainLayout = async ({ children, params }) => {
  const { lang } = await params;
  return (
    <div>
      <ThemeSwitchProvider>
        <MobileNavStateProvider>
          <Header lang={lang} />
          <Navbar lang={lang} />
          {children}
          {/* <Footer lang={lang} /> */}
          <Footer2 lang={lang} />
          <Copyright />
        </MobileNavStateProvider>
      </ThemeSwitchProvider>
    </div>
  );
};

export default MainLayout;
