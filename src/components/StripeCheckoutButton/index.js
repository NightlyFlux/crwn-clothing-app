import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51IK54PGGhVZqGyQh5ugfq2vuU5w8xUtSwpj5G1XAsov1xGGFdI9RnAeUdPXXcpuQ0aTdnjEUP0YrzfIGhAYE37Yx00VL2YpF7P'

  const onToken = (token) => {
    axios
      .post('https://ks-crwn-clothing-api.herokuapp.com/payment', {
        amount: priceForStripe,
        token,
      })
      .then((response) => alert('Payment Successful'))
      .catch((error) => {
        console.log('Payment error: ', error)
        alert(
          'There was an issue with your payment. Plase make sure you use the provided credentials'
        )
      })
    console.log(price, priceForStripe)
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
