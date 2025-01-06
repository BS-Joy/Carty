import { getDictionary } from "@/app/dictionaries/dictionaries";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

const Hero = async ({ lang = "en" }) => {
  const dictionary = await getDictionary(lang);
  return (
    <div className="relative">
      <HeroCarousel />
      <div className="absolute w-full h-full flex items-center top-0">
        <div className="container">
          <h1 className="text-xl lg:text-2xl xl:text-6xl text-center lg:text-start text-gray-800 font-medium mb-4 capitalize font-lato">
            best collection for <br /> home decoration
          </h1>
          <p className="text-black text-[12px] lg:text-sm xl:text-[18px] xl:leading-6 lg:text-ellipsis text-center lg:text-start">
            Transform your living space with our curated <br /> collection of
            home decor essentials. From cozy bedroom <br /> furnishings to
            stylish living room accents, discover <br /> everything you need to
            create your perfect oasis.
          </p>
          <div className="mt-12 flex justify-center lg:justify-start">
            <Link
              href="#"
              className="bg-primary border border-primary text-white xl:px-8 xl:py-3 font-medium 
                    rounded-md hover:shadow-night-button my-transition text-sm xl:text-base px-4 py-2"
            >
              {dictionary?.shop_now}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
