"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "@/app/style/carousel-style.css";
import hero from "@/public/images/banner-bg.jpg";
import hero2 from "@/public/images/hero_banner.jpg";

const imageLink =
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HeroCarousel = (props) => {
  const { slides, options } = props;
  const OPTIONS = { direction: "rtl", loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);

  const SLIDE_COUNT = 2;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const imageLinks = [hero, hero2];

  return (
    <section className="embla w-full" dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SLIDES.map((index) => (
            <div className="embla__slide w-full" key={index}>
              <Image
                src={imageLinks[index]}
                alt="Hero Image"
                width={1920}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
