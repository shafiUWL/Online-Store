import React from 'react'
import { Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import './Product.css'

//Tutorial for Cards and Grid found on https://www.youtube.com/watch?v=377AQ0y6LPA

const styles =  //Inline Material UI styling, pictures won't render without this
{

media: {
  height: 0,
  paddingTop: '70%',
}
  };

function Product({ product }) {
    return (
        <Card className= 'productCard'>
            <CardMedia style={styles.media} image ='https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg' title={product.name}/>
            <CardContent className='productContent'>
                <div>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                       
                    </Typography>                
                </div>
            </CardContent>
        </Card>
    )
}

export default Product
