import Bredcrumb from "@/components/Bredcrumb";
import { Suspense } from "react";
import MobileDrawer from "@/components/shop/filter/MobileDrawer";
import ProductList from "@/components/shop/product/ProductList";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import Sidebar from "../../../components/shop/filter/Sidebar";

export const metadata = {
  title: "Shop | CARTY",
  description: "CARTY. Shop Page.",
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=LWS Kart Shop`,
        width: 1200,
        height: 600,
      },
    ],
  },
};

const allCategories = [
  {
    id: "6651c745ce8bcba5b1e3019a",
    category_name: "Mattress",
    thumbnail:
      "https://res.cloudinary.com/di1qocbyt/image/upload/v1715965705/lwskart/mattress.jpg",
    total_products: 11,
    category_code: "mattress",
    sizes: ["Twin", "Full", "Queen", "King"],
    icon: "https://res.cloudinary.com/di1qocbyt/image/upload/v1716630299/lwskart/category_icons/mattress-icon.svg",
  },
  {
    id: "6651c745ce8bcba5b1e3019b",
    category_name: "Mattress",
    thumbnail:
      "https://res.cloudinary.com/di1qocbyt/image/upload/v1715965705/lwskart/mattress.jpg",
    total_products: 11,
    category_code: "mattress",
    sizes: ["Twin", "Full", "Queen", "King"],
    icon: "https://res.cloudinary.com/di1qocbyt/image/upload/v1716630299/lwskart/category_icons/mattress-icon.svg",
  },
];

const products = [
  {
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
  },
  {
    id: "665f5e3bfb99260cb949f292",
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
    id: "665f5e3bfb99260cb949f293",
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
    id: "665f5e3bfb99260cb949f294",
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

const ProductListPage = async ({ params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const count = 10;
  return (
    <>
      <Bredcrumb path="Shop" />
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        {/* mobile view sidebar */}
        <MobileDrawer
          // category={category}
          allCategories={allCategories}
          dictionary={dictionary}
        />

        {/* sidebar */}
        <Sidebar
          // category={category}
          allCategories={allCategories}
          dictionary={dictionary}
        />

        {/* product lists */}
        <Suspense>
          <ProductList
            total_products={count}
            products={products}
            dictionary={dictionary}
            lang={lang}
            // wishList={wishList}
          />
        </Suspense>
      </div>
    </>
  );
};

export default ProductListPage;
