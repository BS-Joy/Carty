import { getDictionary } from "@/app/dictionaries/dictionaries";
import Image from "next/image";

const Feature = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        {/* fast delivery */}
        <div className="border border-primary rounded-md hover:shadow-md hover:shadow-orange-200 dark:shadow-orange-600 tmy-transition hover:cursor-pointer px-3 py-6 flex justify-center items-center gap-5 dark:hover:shadow-night-button">
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
        </div>

        {/* 100% money returns */}
        <div className="border border-primary rounded-md hover:shadow-md hover:shadow-orange-200 dark:shadow-orange-600 tmy-transition hover:cursor-pointer px-3 py-6 flex justify-center items-center gap-5 dark:hover:shadow-night-button">
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
        </div>

        {/* 24x7 support */}
        <div className="border border-primary rounded-md hover:shadow-md hover:shadow-orange-200 dark:shadow-orange-600 tmy-transition hover:cursor-pointer px-3 py-6 flex justify-center items-center gap-5 dark:hover:shadow-night-button">
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
        </div>
      </div>
    </div>
  );
};

export default Feature;
