import { getDictionary } from "@/app/dictionaries/dictionaries";
import Bredcrumb from "@/components/Bredcrumb";
import ProductDescription from "@/components/productDetails/ProductDescription";
import ProductDetails from "@/components/productDetails/ProductDetails";
import ProductGallery from "@/components/productDetails/ProductGallery";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
// import { getAllProducts, getProductById, getWishListByUser } from "@/db/queries";
import { notFound } from "next/navigation";
// import { dbConnect } from "@/services/mongo";
// import { auth } from "@/auth";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  // const product = await getProductById(id);
  const product = {
    id: "665f5e3bfb99260cb949f291",
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
  };

  return {
    title: product?.title,
    description: product?.summary,
    openGraph: {
      images: [product?.thumbnail],
    },
  };
};

// export async function generateStaticParams() {
//   await dbConnect();
//   const allProducts = await getAllProducts();

//   return allProducts?.products?.map((product) => ({
//     id: product?.id.toString(),
//   }));
// }

const product = {
  id: "665f5e3bfb99260cb949f291",
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
};

const ProductDetailsPage = async ({ params }) => {
  const { id, lang } = await params;

  const dictionary = await getDictionary(lang);
  // const product = await getProductById(id);
  // const session = await auth();
  // const wishList = await getWishListByUser(
  //   session?.user?.id || session?.user?._id
  // );
  // const isWished = wishList.some(
  //   (product) => product?.product_id?.toString() === id
  // );

  const isWished = false;
  if (!product?.id) {
    notFound();
  }
  return (
    <>
      <Bredcrumb path="Product" />

      <div className="container grid grid-cols-2 gap-6">
        {/* product gallery */}
        <ProductGallery
          thumbnail={product?.thumbnail}
          images={product?.images}
        />

        {/* product details */}
        <ProductDetails
          product={product}
          dictionary={dictionary}
          lang={lang}
          isWished={isWished}
        />
      </div>

      {/* product description */}
      <ProductDescription
        description={product?.details}
        dictionary={dictionary}
      />

      {/* related products */}
      <RelatedProducts
        category_code={product?.category}
        detailedProductId={product?.id}
        dictionary={dictionary}
        lang={lang}
      />
    </>
  );
};

export default ProductDetailsPage;
