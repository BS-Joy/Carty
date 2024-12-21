import Empty from "../Empty";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import ProductCard from "../shop/product/ProductCard";
// import { getWishListByUser } from "@/db/queries";

const products = [
  {
    _id: "665f5e3bfb99260cb949f291",
    title: "Vintage Leather Sofa",
    availability: true,
    stock: 1,
    brand: "ElegantHome",
    category: "sofa",
    sku: "SOFA456",
    original_price: 899.99,
    offer_price: 799.99,
    summary: "A luxurious vintage leather sofa for classic interiors.",
    details:
      "Crafted with premium leather and sturdy wooden frame, this sofa offers both style and comfort.",
    thumbnail:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591290953364-109131700de0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    reviews: ["review_id_4", "review_id_5"],
    rating: 4,
    color: "brown",
    sizes: ["2 seater", "3 seater"],
    total_sold: 93,
    createdAt: "2024-05-17T09:20:15.210+00:00",
    updatedAt: {
      $date: "2024-12-13T12:58:20.142Z",
    },
  },
  {
    _id: "665f5e3bfb99260cb949f291",
    title: "Vintage Leather Sofa",
    availability: true,
    stock: 1,
    brand: "ElegantHome",
    category: "sofa",
    sku: "SOFA456",
    original_price: 899.99,
    offer_price: 799.99,
    summary: "A luxurious vintage leather sofa for classic interiors.",
    details:
      "Crafted with premium leather and sturdy wooden frame, this sofa offers both style and comfort.",
    thumbnail:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591290953364-109131700de0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    reviews: ["review_id_4", "review_id_5"],
    rating: 4,
    color: "brown",
    sizes: ["2 seater", "3 seater"],
    total_sold: 93,
    createdAt: "2024-05-17T09:20:15.210+00:00",
    updatedAt: {
      $date: "2024-12-13T12:58:20.142Z",
    },
  },
  {
    _id: "665f5e3bfb99260cb949f291",
    title: "Vintage Leather Sofa",
    availability: true,
    stock: 1,
    brand: "ElegantHome",
    category: "sofa",
    sku: "SOFA456",
    original_price: 899.99,
    offer_price: 799.99,
    summary: "A luxurious vintage leather sofa for classic interiors.",
    details:
      "Crafted with premium leather and sturdy wooden frame, this sofa offers both style and comfort.",
    thumbnail:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591290953364-109131700de0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    reviews: ["review_id_4", "review_id_5"],
    rating: 4,
    color: "brown",
    sizes: ["2 seater", "3 seater"],
    total_sold: 93,
    createdAt: "2024-05-17T09:20:15.210+00:00",
    updatedAt: {
      $date: "2024-12-13T12:58:20.142Z",
    },
  },
  {
    _id: "665f5e3bfb99260cb949f291",
    title: "Vintage Leather Sofa",
    availability: true,
    stock: 1,
    brand: "ElegantHome",
    category: "sofa",
    sku: "SOFA456",
    original_price: 899.99,
    offer_price: 799.99,
    summary: "A luxurious vintage leather sofa for classic interiors.",
    details:
      "Crafted with premium leather and sturdy wooden frame, this sofa offers both style and comfort.",
    thumbnail:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591290953364-109131700de0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    reviews: ["review_id_4", "review_id_5"],
    rating: 4,
    color: "brown",
    sizes: ["2 seater", "3 seater"],
    total_sold: 93,
    createdAt: "2024-05-17T09:20:15.210+00:00",
    updatedAt: {
      $date: "2024-12-13T12:58:20.142Z",
    },
  },
];

// const TrendingProducts = async ({ lang, products }) => {
const TrendingProducts = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  // const session = await auth();
  // const wishList = await getWishListByUser(
  //   session?.user?.id || session?.user?._id
  // );
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {dictionary?.trending_products}
      </h2>
      {products?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductCard
              key={product?.id}
              product={product}
              dictionary={dictionary}
              lang={lang}
              // wishList={wishList}
            />
          ))}
        </div>
      ) : (
        <Empty msg="Sorry! no trending products found." />
      )}
    </div>
  );
};

export default TrendingProducts;
