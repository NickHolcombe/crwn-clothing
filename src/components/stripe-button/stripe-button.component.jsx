import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_4WqYq9nef6pOEO1DpWfzRAQk';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
      <StripeCheckout
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is £${price}`}
          amount={priceForStripe}
          currency="GBP"
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
      />
    );
};

export default StripeCheckoutButton;