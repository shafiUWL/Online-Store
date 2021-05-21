import React from 'react'
import fruit from './fruit.jpg'
export default function home (){
    return (
        <div>
            <h1>Home page of our Online Store</h1>
            <img src={fruit} alt ="Fruit"/>
        </div>
    )
}
