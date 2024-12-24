import Bredcrumb from "@/components/Bredcrumb";
// import { auth } from "@/auth";
import CheckoutContainer from "@/components/checkout/CheckoutContainer";
import { getDictionary } from "@/app/dictionaries/dictionaries";

const CheckoutPage = async ({ params }) => {
  const { lang } = await params;
  // const session = await auth();
  // if (!session?.user?.email) {
  //   redirect(`/${lang}/login`);
  // }
  const dictionary = await getDictionary(lang);
  // const orderUserData = {
  //   name: session?.user?.name || "",
  //   email: session?.user?.email || "",
  //   phone: session?.user?.phone || "",
  //   shipping_address: {
  //     division: session?.user?.shipping_address?.division || "",
  //     city: session?.user?.shipping_address?.city || "",
  //     street: session?.user?.shipping_address?.street || "",
  //   },
  // };

  const orderUserData = {
    name: "abc",
    email: "abc@gmail.com",
    phone: "123456789",
    shipping_address: {
      division: "Barishal",
      city: "Barishal",
      street: "Chakhar",
    },
  };

  return (
    <>
      <Bredcrumb path={"Checkout"} />

      <CheckoutContainer
        lang={lang}
        // session={session}
        dictionary={dictionary}
      />
    </>
  );
};

export default CheckoutPage;
