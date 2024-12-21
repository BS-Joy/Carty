import { blurImageUrl } from "@/utils/getBlurImage";
import Image from "next/image";
import Link from "next/link";

const Ads = () => {
  return (
    <div className="container mb-16 hover:cursor-pointer">
      <Link href="#">
        <Image
          src="/images/offer.jpg"
          alt="ads"
          className="w-full rounded-md  shadow-md shadow-orange-300"
          width={1504}
          height={362}
          placeholder="blur"
          blurDataURL={blurImageUrl}
        />
      </Link>
    </div>
  );
};

export default Ads;
