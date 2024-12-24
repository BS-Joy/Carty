const ProductDescription = ({ description, dictionary }) => {
  return (
    <div className="container pb-16">
      <h3 className="border-b border-gray-200 dark:border-gray-500 font-roboto text-gray-800 dark:text-gray-200 pt-6 pb-1 font-medium">
        {dictionary?.product_details}
      </h3>
      <div className="w-3/5 pt-6">
        <div className="text-gray-600 dark:text-gray-300">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
