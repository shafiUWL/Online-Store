import { Form, FormGroup, Label, Input } from 'reactstrap'
import React from 'react'
import './LoginRegister.css'

function LoginPage() {
    return (
        <Form className='login-form'>
            <h1 className='text-center'>Website.com</h1>
            <h3 className='text-center'>Log in</h3>
            <FormGroup>
                <Label>Email</Label>
                <Input type='email' placeholder='Email' />
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type='password' placeholder='Password' />
            </FormGroup>
            <br/>
            <div class="d-grid gap-2 col-12 mx-auto">
                <button class="btn btn-success btn-lg" type="button">Log in</button>
            </div>
            <div className='text-center'>
                <p className='p'>Don't have an account?  </p>
                <a href='http://localhost:3000/RegisterPage'>Sign up</a>
            </div>
        </Form>
    )
}

export default LoginPage
