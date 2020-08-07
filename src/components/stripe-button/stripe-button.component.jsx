import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HDVwYF9x6s4Oep6B7ggVjel0Sm2bmDKPkO9dJ7nlbOnlTO4sHbbQYeKczxk2N8WjMW9ywyqHSqWDCNenTaw1CtH00WAoTfd8U';

const onToken = token => {
	console.log(token);
	alert('Payment Successful');
}

	return (
		<StripeCheckout
			label='Pay Now'
			name='Crown Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			descriptionn={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;