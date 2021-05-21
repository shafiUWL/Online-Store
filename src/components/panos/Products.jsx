import React from 'react'
import Grid from '@material-ui/core/Grid';
import Product from './product/Product'
//Mock Products
const pears = {id:1, name:'Pears',price:'£2.64',origin:'Spain',expiryDate:'23/6/21'}
const apples = {id:2, name:'Apples',price:'£3.14',origin:'UK',expiryDate:'13/2/21'}
const nuts = {id:3, name:'Nuts',price:'£3.14',origin:'UK',expiryDate:'13/2/21'}
const apples3 = {id:4, name:'Cucumbers',price:'£3.14',origin:'UK',expiryDate:'13/2/21'}
const apples4 = {id:5, name:'Peaches',price:'£3.14',origin:'UK',expiryDate:'13/2/21'}
const apples5 = {id:6, name:'Dates',price:'£3.14',origin:'UK',expiryDate:'13/2/21'}
const apples6 = {id:7, name:'Potatoes',price:'£3.14',origin:'UK',expiryDate:'13/2/21'}
const apples7 = {id:8, name:'Lemons',price:'£3.14',origin:'UK',expiryDate:'13/2/21'}
const apples8 = {id:9, name:'Limes',price:'£3.14',origin:'UK',expiryDate:'13/2/21'}

const products = [pears,apples,nuts,apples3,apples4,apples5,apples6,apples7,apples8]

function Products() {
    return (
        <main>
            <Grid container justify = 'center' spacing = {4}>
                {products.map((product)=>(
                    <Grid item key = {product.id}xs={32} sm={16} md={8} lg={4}>
                        <Product product = {product}/>
                    </Grid>
                ))}
                
            </Grid>
        </main>
    )
}

export default Products
