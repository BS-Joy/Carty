import Bredcrumb from "@/components/Bredcrumb";
import Empty from "@/components/Empty";
import WishProductCard from "@/components/wish/WishProductCard";
// import { getProductById, getWishListByUser } from "@/db/queries";
import { replaceMongoIdInObject } from "@/utils";
import Link from "next/link";
import { redirect } from "next/navigation";

const WishPage = async ({ params: { lang } }) => {
  // const session = await auth();

  // if (!session?.user?.email) {
  //   redirect(`/${lang}/login`);
  // }

  // const wishes = await getWishListByUser(
  //   session?.user?.id || session?.user?._id
  // );

  // const wishedProducts = await Promise.all(
  //   wishes.map(async (wish) => {
  //     const temp = await getProductById(wish?.product_id);
  //     const plainWhishProduct = wish.toObject ? wish.toObject() : wish;
  //     const product = {
  //       ...plainWhishProduct,
  //       product_id: plainWhishProduct?.product_id.toString(),
  //       user_id: plainWhishProduct?.user_id.toString(),
  //       title: temp?.title,
  //       price: temp?.offer_price,
  //       thumbnail: temp?.thumbnail,
  //       availability: temp?.availability,
  //       sizes: temp?.sizes,
  //     };
  //     return replaceMongoIdInObject(product);
  //   })
  // );

  const wishedProducts = [
    {
      product_id: "665f5e3bfb99260cb949f291",
      user_id: "some-user-id",
      title: "Vintage Leather Sofa",
      price: 799.99,
      thumbnail:
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      availability: true,
      sizes: ["2 seater", "3 seater"],
    },
  ];
  return (
    <>
      <Bredcrumb path={"Wish"} />
      <div className="container gap-6 pt-4 pb-16">
        {/* <!-- wishlist --> */}
        <div className="mx-auto space-y-4 max-w-6xl">
          {wishedProducts?.length > 0 ? (
            wishedProducts?.map((product) => (
              <WishProductCard
                key={product?.product_id}
                product={product}
                lang={lang}
              />
            ))
          ) : (
            <div>
              <Empty msg={"Your wishlist is empty!"} />
              <div className="flex justify-center">
                <Link
                  href={`/${lang}/shop`}
                  className="border border-primary bg-primary text-white px-5 py-3 rounded hover:bg-transparent hover:text-primary"
                >
                  Explore all products
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default WishPage;
