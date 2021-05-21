import React from 'react'
import './LoginRegister.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function RegisterPage() {
    return (
        <Form className='login-form'>
            <h1 className='text-center'>Website.com</h1>
            <h3 className='text-center'>Sign up</h3>
            <FormGroup>
                <Label>Email</Label>
                <Input type='email' placeholder='Email' />
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type='password' placeholder='Password' />
            </FormGroup>
            <FormGroup>
                <Label>Confirm password</Label>
                <Input type='password' placeholder='Confirm password' />
            </FormGroup>
            <br/>
            <div class="d-grid gap-2 col-12 mx-auto">
                <button class="btn btn-success btn-lg" type="button">Sign up</button>
            </div>
            <div className='text-center'>
                <p className='p'>Already have an account?  </p>
                <a href='http://localhost:3000/LoginPage'>Log in</a>
            </div>
        </Form>
    )
}

export default RegisterPage
