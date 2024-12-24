import { getDictionary } from "@/app/dictionaries/dictionaries";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Footer = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  return (
    <footer className="bg-white dark:bg-dark pt-16 pb-12 border-t dark:border-none border-gray-100">
      <div className="container grid grid-cols-3">
        <div className="col-span-1 space-y-8 mr-2">
          <Logo lang={lang} />
          <div className="mr-2">
            <p className="text-gray-500 dark:text-gray-300">
              {dictionary?.site_summary}
            </p>
          </div>

          {/* social links */}
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-primary"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-primary"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-primary"
            >
              <FaTwitterSquare />
            </Link>
            <Link
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-primary"
            >
              <FaGithubSquare />
            </Link>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {dictionary?.solutions}
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.marketing}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.analytics}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.commerce}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.insights}
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {dictionary?.support}
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.pricing}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.documentation}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.guides}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.api_status}
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {dictionary?.solutions}
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.marketing}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.analytics}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.commerce}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.insights}
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {dictionary?.support}
              </h3>
              <div className="mt-4 space-y-4">
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.pricing}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.documentation}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.guides}
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 dark:text-gray-400 dark:hover:text-primary my-transition hover:text-gray-900 block"
                >
                  {dictionary?.api_status}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
