import { motion } from "motion/react";
import Image from "next/image";
import bdFlag from "@/public/images/bd-flag.png";
import usFlag from "@/public/images/us-flag.png";

const LanguageList = ({ isOpen, mobileNav }) => {
  const languages = [
    {
      code: "en",
      language: "English",
    },
    {
      code: "bn",
      language: "বাংলা",
    },
  ];
  return (
    <motion.div
      key={isOpen}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        scale: 0.5,
        // opacity: 0,
        //,
      }}
      className={`absolute bg-white dark:bg-black dark:text-white rounded hover:border-primary my-transition ${
        mobileNav ? "top-[42px]" : "top-[30px]"
      } right-0 w-full border z-0`}
    >
      <div
        onClick={() => handleLangChange("bn")}
        className="flex w-full justify-center items-center gap-2 py-1 border-b hover:bg-slate-200 dark:hover:text-black my-transition"
      >
        <Image alt="bn" src={bdFlag} className="w-5 h-5" />
        <p>{languages[1].language}</p>
      </div>
      <div
        onClick={() => handleLangChange("en")}
        className="flex w-full justify-center items-center gap-2 py-1 hover:bg-slate-200 dark:hover:text-black my-transition"
      >
        <Image alt="bn" src={usFlag} className="w-4 h-4" />
        <p>{languages[0].language}</p>
      </div>
    </motion.div>
  );
};

export default LanguageList;
