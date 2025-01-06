import mongoose from "mongoose";

export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    ?.map((item) => {
      return {
        id: item?._id?.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInArraysObject = (products) => {
  const mappedArray = products
    ?.map((product) => ({
      ...product,
      id: product?._id.toString(),
      product_id: product?.product_id.toString(),
      user_id: product?.user_id.toString(),
    }))
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const getRefinedOrderedItems = (products, shipping, billing) => {
  const mappedArray = products
    ?.map((product) => ({
      ...product,
      product_id: product?.id,
    }))
    .map(
      ({ id, availability, createdAt, updatedAt, stock, __v, ...rest }) => rest
    );

  return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
  const isObjectId = mongoose.Types.ObjectId.isValid(obj);
  const { _id, ...updatedObj } = { ...obj, id: obj?._id?.toString() };
  return updatedObj;
};

export const getDateDifference = (productDate) => {
  const today = new Date().getTime();
  const create = new Date(productDate).getTime();
  const dif = (today - create) / (1000 * 60 * 60 * 24);
  return Number(dif);
};

export const getCategoriesFromProducts = (products) => {
  const categoryMap = {};

  products?.forEach((product) => {
    const category = product.category;
    if (categoryMap[category]) {
      categoryMap[category].total_products += 1;
    } else {
      categoryMap[category] = {
        category_name: category
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        category_code: category.toLowerCase().replace(/\s+/g, "_"),
        total_products: 1,
      };
    }
  });

  return Object.values(categoryMap);
};

export const getPriceRangeObj = (priceRangeString) => {
  let obj = {};

  let pairs = priceRangeString.split("&");

  pairs.forEach((pair) => {
    let [key, value] = pair.split("=");

    if (!isNaN(value)) {
      value = Number(value);
    }

    obj[key] = value;
  });

  return obj;
};

export const getAllSizes = (categories) => {
  let allSizes = [];
  categories.forEach((category) => {
    allSizes = allSizes.concat({
      category_name: category.category_name,
      sizes: category.sizes,
    });
  });
  return allSizes;
};

export const refineCategory = (category) => {
  if (category === undefined) {
    return "";
  } else {
    return decodeURI(category);
  }
};

export const refinePriceRange = (priceRange) => {
  if (priceRange === undefined) {
    return "";
  } else {
    return priceRange;
  }
};

export const refineSize = (size) => {
  if (size === undefined) {
    return "";
  } else {
    return size;
  }
};

export const refinePageNum = (page) => {
  if (page === undefined) {
    return 1;
  } else {
    return page;
  }
};

export const refineSearchParams = (searchParams) => {
  if (searchParams === undefined) {
    return "";
  } else {
    return searchParams;
  }
};

export const debounce = (callback, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
};

export const convertTimestamp = (timestamp) => {
  // Create a new Date object from the timestamp
  const date = new Date(timestamp);

  // Define months and suffixes arrays
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const suffixes = ["th", "st", "nd", "rd"];

  // Get date components
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes();

  // Determine the correct suffix for the day
  const daySuffix =
    day % 10 <= 3 && day % 10 > 0 && !(day >= 11 && day <= 13)
      ? suffixes[day % 10]
      : suffixes[0];

  // Format hours and minutes for 12-hour clock
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Construct the formatted date string
  const formattedDate = `${day}${daySuffix} ${months[month]} ${year} at ${hours}:${formattedMinutes} ${period}`;

  return formattedDate;
};
