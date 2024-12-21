"use client";
import Image from "next/image";
import { blurImageUrl } from "@/utils/getBlurImage";
import { useState } from "react";

const ProductGallery = ({ thumbnail, images }) => {
  const [selectedImage, setSelectedImage] = useState(thumbnail);
  const handleSelectedImage = (thumbnailSrc) => {
    setSelectedImage(thumbnailSrc);
  };
  return (
    <div>
      <Image
        src={selectedImage}
        alt="product"
        className="w-full h-auto"
        width={740}
        height={548}
        placeholder="blur"
        blurDataURL={blurImageUrl}
        quality={100}
      />
      <div className="grid grid-cols-5 gap-4 mt-4">
        <button onClick={() => handleSelectedImage(thumbnail)}>
          <Image
            src={thumbnail}
            alt="product2"
            className={`w-full h-auto cursor-pointer border ${
              selectedImage === thumbnail ? "border-primary" : ""
            }`}
            width={135}
            height={101}
            placeholder="blur"
            blurDataURL={blurImageUrl}
          />
        </button>
        {images?.map((image, index) => (
          <button onClick={() => handleSelectedImage(image)} key={index}>
            <Image
              src={image}
              alt="product2"
              className={`w-full h-auto cursor-pointer border ${
                selectedImage === image ? "border-primary" : ""
              }`}
              width={135}
              height={101}
              placeholder="blur"
              blurDataURL={blurImageUrl}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
