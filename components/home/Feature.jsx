import { getDictionary } from "@/app/dictionaries/dictionaries";
import Image from "next/image";
import * as motion from "motion/react-client";

const Feature = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        {/* fast delivery */}
        <motion.div
          className="border border-primary rounded-md hover:shadow-md hover:shadow-orange-200 dark:shadow-orange-600 my-transition hover:cursor-pointer px-3 py-6 flex justify-center items-center gap-5 dark:hover:shadow-night-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          <Image
            src="/images/icons/delivery-van.svg"
            alt="Delivery"
            className="w-12 h-12 object-contain"
            width={48}
            height={48}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dictionary?.free_shipping}
            </h4>
            <p className="text-gray-500 text-sm">
              {dictionary?.oreder_over_2000}
            </p>
          </div>
        </motion.div>

        {/* 100% money returns */}
        <motion.div
          className="border border-primary rounded-md hover:shadow-md hover:shadow-orange-200 dark:shadow-orange-600 my-transition hover:cursor-pointer px-3 py-6 flex justify-center items-center gap-5 dark:hover:shadow-night-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          <Image
            src="/images/icons/money-back.svg"
            alt="Delivery"
            className="w-12 h-12 object-contain"
            width={48}
            height={48}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dictionary?.money_returns}
            </h4>
            <p className="text-gray-500 text-sm">
              {dictionary?.thirty_days_money_returs}
            </p>
          </div>
        </motion.div>

        {/* 24x7 support */}
        <motion.div
          className="border border-primary rounded-md hover:shadow-md hover:shadow-orange-200 dark:shadow-orange-600 my-transition hover:cursor-pointer px-3 py-6 flex justify-center items-center gap-5 dark:hover:shadow-night-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          <Image
            src="/images/icons/service-hours.svg"
            alt="Delivery"
            className="w-12 h-12 object-contain"
            width={48}
            height={48}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dictionary?.two47_support}
            </h4>
            <p className="text-gray-500 text-sm">
              {dictionary?.customer_support}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
