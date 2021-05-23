import React from 'react'

import StripeCheckout from 'react-stripe-checkout';

function Payment() {

    /**Tokens allow the server to deal with personal
     * and banking details securely are temporary.
     */
const onToken = (token) => {
console.log(token);
}
    return(
        <div>
            

            <StripeCheckout width="500" height="500"
        token={onToken}
        stripeKey="pk_test_51IqmbjItVkJpmzEp5KH3RvC6w2xU4Vc3V1JCW6gf8IiRRtoIQuYUhicySfq8zGs98N1B9CF4m4XFtdGKOR30Ocl700oBGO5aXH"
      />
        </div>
    )
}
export default Payment;
