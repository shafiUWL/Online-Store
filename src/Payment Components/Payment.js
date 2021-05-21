import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function Payment(){

    const onToken = (token) => {
console.log(token);
    }

    return <div className="Payment">
        <StripeCheckout
        name="Pay"
        description="Secure Checkout"
        token={onToken}
        stripeKey="pk_test_51IqmbjItVkJpmzEp5KH3RvC6w2xU4Vc3V1JCW6gf8IiRRtoIQuYUhicySfq8zGs98N1B9CF4m4XFtdGKOR30Ocl700oBGO5aXH"
      />
    </div>
}

export default Payment;