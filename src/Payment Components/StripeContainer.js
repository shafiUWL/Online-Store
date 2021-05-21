import react from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51IqmbjItVkJpmzEp5KH3RvC6w2xU4Vc3V1JCW6gf8IiRRtoIQuYUhicySfq8zGs98N1B9CF4m4XFtdGKOR30Ocl700oBGO5aXH"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(){
    return (
        <Elements stripe={stripeTestPromise}>

            <PaymentForm />

        </Elements>

    )
}