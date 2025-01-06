"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Dropdown = ({ categories }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace, push } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleNavigation = (category) => {
    params.set("category", category?.category_code);
    const objectIdPattern = /[0-9a-fA-F]{24}/; //regex for monogdb objectId
    if (objectIdPattern.test(pathName)) {
      const othersPathName = pathName.slice(3);
      replace(`${pathName.replace(othersPathName, "")}/shop?${params}`);
    } else if (pathName.includes("shop")) {
      replace(`${pathName}?${params}`);
    } else if (!pathName.includes("shop")) {
      const othersPathName = pathName.slice(3);
      replace(`${pathName.replace(othersPathName, "")}/shop?${params}`);
    }
  };

  return (
    <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 my-transition duration-300 invisible group-hover:visible z-20">
      {categories?.length > 0 ? (
        categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => handleNavigation(category)}
            className="flex items-center w-full px-6 py-3 hover:bg-gray-100 transition"
          >
            <Image
              src={category?.icon}
              alt="sofa"
              className="w-5 h-5 object-contain"
              width={20}
              height={20}
            />
            <span className="ml-6 text-gray-600 text-sm">
              {category?.category_name}
            </span>
          </button>
        ))
      ) : (
        <span>No categories found</span>
      )}
    </div>
  );
};

export default Dropdown;
