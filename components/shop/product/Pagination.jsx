"use client";

export default function PaginationComponent({
  currentPage,
  totalPages,
  paginate,
}) {
  return (
    <div className="flex justify-center items-center mt-6">
      <nav
        className="relative z-0 inline-flex shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        {/* previous button */}
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
          className="relative inline-flex items-center px-[14px] py-2 border border-gray-300 dark:border-primary bg-white dark:bg-dark text-sm font-medium text-gray-500 hover:bg-orange-200 hover:border-primary hover:text-gray-600 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:hover:text-gray-500 disabled:hover:border-gray-300 dark:disabled:bg-dark dark:disabled:border-gray-950 rounded-l"
        >
          <span className="sr-only">Previous</span>
          {/* <!-- Heroicon name: chevron-left --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Prev.
        </button>

        {/* pages */}
        {[...Array(totalPages).keys()].map((value, index) => (
          <button
            disabled={currentPage === index + 1}
            onClick={() => paginate(index + 1)}
            key={value}
            className={`relative inline-flex items-center px-5 py-2 border border-gray-300 dark:border-primary text-sm font-medium hover:border-primary hover:bg-orange-200 dark:hover:border-primary disabled:cursor-not-allowed disabled:hover:bg-primary my-transition ${
              currentPage === index + 1
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 dark:bg-dark dark:text-gray-200 dark:hover:bg-orange-100 dark:hover:text-primary"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* next button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => paginate(currentPage + 1)}
          className="relative inline-flex items-center px-[14px] py-2 rounded-r border border-gray-300 bg-white dark:bg-dark dark:hover:bg-orange-100 dark:hover:text-primary dark:border-primary text-sm font-medium text-gray-500 dark:text-gray-200 hover:bg-orange-200 hover:border-primary hover:text-gray-600 disabled:bg-slate-200 disabled:cursor-not-allowed disabled:hover:bg-slate-200 disabled:hover:text-gray-500 disabled:hover:border-gray-300"
        >
          <span className="sr-only">Next</span>
          {/* <!-- Heroicon name: chevron-right --> */}
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
