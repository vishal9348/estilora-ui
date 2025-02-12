import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const PaypalButton = ({ amount, onSuccess, onError }) => {
  return <PayPalScriptProvider options={{
    'client-id': "Ac0rqQ7TIjp4-kMWUcjNfIMYQR8gMaI2Nl6-X1zBaGLXX8NfaklOPPpWLIDujt_6ywMCOhOO5XjYEKOP"
  }} >

    <PayPalButtons style={{ layout: "vertical" }}
      createOrder={(data, action) => {
        return action.order.create({
          purchase_units: [{ amount: { value: amount } }]
        })
      }}

      onApprove={(data, action) => {
        return action.order.capture().then(onSuccess);
      }}

      onError={onError}
    />
  </PayPalScriptProvider>



}

export default PaypalButton