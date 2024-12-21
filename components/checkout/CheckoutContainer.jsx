import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

const CheckoutContainer = ({lang, dictionary, session}) => {
    return (
        <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <CheckoutForm lang={lang} session={session} dictionary={dictionary} />

        <OrderSummary lang={lang} dictionary={dictionary} />
      </div>
    );
}

export default CheckoutContainer;
