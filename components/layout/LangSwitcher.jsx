"use client";
import { useEffect, useRef, useState } from "react";
import bdFlag from "@/public/images/bd-flag.png";
import usFlag from "@/public/images/us-flag.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";

const LangSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglerRef = useRef(null);
  const pathName = usePathname();
  const router = useRouter();

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
  const foundLang = languages.find((lang) => pathName.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    foundLang ?? languages[0]
  );

  const handleLangChange = (langCode) => {
    setSelectedLanguage({
      ...selectedLanguage,
      code: langCode,
      language: langCode === "en" ? "English" : "বাংলা",
    });
    setIsOpen(false);
    router.push(`/${langCode}`);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (togglerRef && !togglerRef?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div
      ref={togglerRef}
      onClick={() => setIsOpen(!isOpen)}
      className="text-center text-gray-700 hover:border-primary my-transition relative cursor-pointer flex gap-2 items-center border px-4 rounded py-1"
    >
      <div className="text-xl">
        <Image
          alt="bn"
          src={selectedLanguage.code === "bn" ? bdFlag : usFlag}
          className="w-5 h-5"
        />
      </div>
      <div className="text-sm leading-3 dark:text-white">
        {selectedLanguage.language}
      </div>
      <span className="dark:text-white">
        <FaAngleDown />
      </span>
      <div
        className={`absolute bg-white dark:bg-black dark:text-white rounded hover:border-primary my-transition top-[30px] right-0 w-full border ${
          isOpen ? "visible" : "hidden"
        } z-10`}
      >
        <div
          onClick={() => handleLangChange("bn")}
          className="flex w-full justify-center items-center gap-2 py-1 border-b hover:bg-slate-200 dark:hover:text-black"
        >
          <Image alt="bn" src={bdFlag} className="w-5 h-5" />
          <p>{languages[1].language}</p>
        </div>
        <div
          onClick={() => handleLangChange("en")}
          className="flex w-full justify-center items-center gap-2 py-1 hover:bg-slate-200 dark:hover:text-black"
        >
          <Image alt="bn" src={usFlag} className="w-4 h-4" />
          <p>{languages[0].language}</p>
        </div>
      </div>
    </div>
  );
};

export default LangSwitcher;
