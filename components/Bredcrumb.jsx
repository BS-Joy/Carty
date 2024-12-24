import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

const Bredcrumb = ({ path }) => {
  return (
    <div className="container py-4 flex items-center gap-3">
      <Link href="/" className="text-primary text-base">
        <FaHouse />
      </Link>
      <span className="text-sm text-gray-400 dark:text-gray-200">
        <FaChevronRight />
      </span>
      <p className="text-gray-600 dark:text-primary font-medium">{path}</p>
    </div>
  );
};

export default Bredcrumb;
