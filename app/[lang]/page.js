import Ads from "@/components/home/Ads";
import Category from "@/components/home/Category";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import NewArrival from "@/components/home/NewArrival";
import TrendingProducts from "@/components/home/TrendingProducts";

export default async function Home({ params }) {
  const { lang } = await params;
  return (
    <>
      <Hero lang={lang} />
      <Feature lang={lang} />
      <Category lang={lang} />
      <NewArrival lang={lang} />
      <Ads />
      <TrendingProducts lang={lang} />
    </>
  );
}
