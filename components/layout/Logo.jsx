import Link from "next/link";
import { FaOpencart } from "react-icons/fa6";

const Logo = ({ lang }) => {
  return (
    <Link href={`/${lang}`} className="flex gap-2 items-center text-primary">
      <FaOpencart size={"2.5rem"} />
      <span className="text-2xl font-bold text-black dark:text-white drop-shadow-text tracking-[.3rem] font-josefin relative top-2">
        CARTY
      </span>
    </Link>
  );
};

export default Logo;
