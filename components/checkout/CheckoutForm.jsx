"use client";

const CheckoutForm = ({ dictionary, session }) => {
  const handleChange = async () => {
    console.log("hello world");
  };
  return (
    <div className="col-span-8 border shadow-md dark:border-primary p-4 rounded">
      <h3 className="text-lg font-medium capitalize mb-4">
        {dictionary?.checkout}
      </h3>
      <div className="space-y-4">
        {/* name */}
        <div>
          <label htmlFor="name" className="text-gray-600 dark:text-gray-300">
            {dictionary?.full_name} <span className="text-primary">*</span>
          </label>
          <input
            onChange={handleChange}
            required
            type="text"
            name="name"
            id="name"
            value={session?.user?.name}
            className="input_field mt-2"
            placeholder={dictionary?.full_name}
          />
        </div>

        {/* email */}
        <div>
          <label htmlFor="email" className="text-gray-600 dark:text-gray-300">
            {dictionary?.email} <span className="text-primary">*</span>
          </label>
          <input
            disabled
            onChange={handleChange}
            required
            type="email"
            name="email"
            id="email"
            value={session?.user?.email || "alsdf@gmail.com"}
            className="input_field disabled:bg-gray-200 dark:disabled:bg-gray-600 disabled:cursor-not-allowed mt-2"
          />
        </div>

        {/* phone number */}
        <div>
          <label htmlFor="phone" className="text-gray-600 dark:text-gray-300">
            {dictionary?.phone_number} <span className="text-primary">*</span>
          </label>
          <input
            onChange={handleChange}
            required
            type="text"
            name="phone"
            id="phone"
            value={session?.user?.phone}
            placeholder={dictionary?.phone_number}
            className="input_field mt-2"
          />
        </div>

        {/* division */}
        <div>
          <label
            htmlFor="division"
            className="text-gray-600 dark:text-gray-300"
          >
            {dictionary?.division} <span className="text-primary">*</span>
          </label>
          <input
            onChange={handleChange}
            value={session?.user?.shipping_address?.division}
            type="text"
            name="division"
            id="division"
            className="input_field mt-2"
            placeholder={dictionary?.division}
          />
        </div>

        {/* city */}
        <div>
          <label htmlFor="city" className="text-gray-600 dark:text-gray-300">
            {dictionary?.city} <span className="text-primary">*</span>
          </label>
          <input
            onChange={handleChange}
            value={session?.user?.shipping_address?.city}
            type="text"
            name="city"
            id="city"
            className="input_field mt-2"
            placeholder={dictionary?.city}
          />
        </div>

        {/* street address */}
        <div>
          <label htmlFor="street" className="text-gray-600 dark:text-gray-300">
            {dictionary?.street_address} <span className="text-primary">*</span>
          </label>
          <input
            onChange={handleChange}
            value={session?.user?.shipping_address?.street}
            type="text"
            name="street"
            id="street"
            className="input_field mt-2"
            placeholder={dictionary?.street_address}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
