
const CardSkeleton = () => {
  return (
    <div
      role="status"
      className="max-w-sm border border-gray-200 rounded shadow animate-pulse dark:border-gray-700 flex flex-col justify-between"
    >
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-tl rounded-tr dark:bg-gray-700">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>

      <div className="ml-4">
        <div className="h-6 bg-gray-200 rounded pl-4 dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-3"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-2.5"></div>
      </div>

      {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div> */}

      {/* button */}
      <div className="h-8 bg-gray-200 dark:bg-gray-700 mt-4"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default CardSkeleton;