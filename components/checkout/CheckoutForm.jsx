"use client"

const CheckoutForm = ({dictionary, session}) => {
  const handleChange = async () => {
    console.log("hello world");
  }
  return (
    <div className="col-span-8 border border-gray-200 p-4 rounded">
      <h3 className="text-lg font-medium capitalize mb-4">{dictionary?.checkout}</h3>
      <div className="space-y-4">
        {/* name */}
        <div>
          <label htmlFor="name" className="text-gray-600">
            {dictionary?.full_name} <span className="text-primary">*</span>
          </label>
          <input
            onChange={handleChange}
            required
            type="text"
            name="name"
            id="name"
            value={session?.user?.name}
            className="input-box"
          />
        </div>

        {/* email */}
        <div>
          <label htmlFor="email" className="text-gray-600">
            {dictionary?.email} <span className="text-primary">*</span>
          </label>
          <input
            disabled
            onChange={handleChange}
            required
            type="email"
            name="email"
            id="email"
            value={session?.user?.email}
            className="input-box disabled:bg-gray-200 disabled:cursor-not-allowed"
          />
        </div>

        {/* phone number */}
        <div>
          <label htmlFor="phone" className="text-gray-600">
            {dictionary?.phone_number} <span className="text-primary">*</span>
          </label>
          <input
            onChange={handleChange}
            required
            type="text"
            name="phone"
            id="phone"
            value={session?.user?.phone}
            placeholder="Phone"
            className="input-box"
          />
        </div>

        {/* division */}
        <div>
          <label htmlFor="division" className="text-gray-600">
            {dictionary?.division} <span className="text-primary">*</span>
          </label>
          <input
            onChange={handleChange}
            value={session?.user?.shipping_address?.division}
            type="text"
            name="division"
            id="division"
            className="input-box"
            placeholder={dictionary?.division}
          />
        </div>

        {/* city */}
        <div>
          <label htmlFor="city" className="text-gray-600">
            {dictionary?.city} <span className="text-primary">*</span>
          </label>
          <input
            onChange={handleChange}
            value={session?.user?.shipping_address?.city}
            type="text"
            name="city"
            id="city"
            className="input-box"
            placeholder={dictionary?.city}
          />
        </div>

        {/* street address */}
        <div>
          <label htmlFor="street" className="text-gray-600">
            {dictionary?.street_address} <span className="text-primary">*</span>
          </label>
          <input
            onChange={handleChange}
            value={session?.user?.shipping_address?.street}
            type="text"
            name="street"
            id="street"
            className="input-box"
            placeholder={dictionary?.street_address}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
