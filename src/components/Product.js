import React from 'react'
import ProductDetails from './ProductDetails'
import Slider from './Slider'
import '../scss/scss-style'

const Product = ({ id, productName, productDescription,currentPrice, discount, oldPrice, productImages}) => {

  return (
    <div className='singleProductContainer'>
        <Slider images={productImages}/>
        <ProductDetails id={id}
                        productName={productName}
                        productDescription={productDescription}
                        currentPrice={currentPrice}
                        discount={discount}
                        oldPrice={oldPrice}
                        images={productImages}/>
    </div>
  )
}

export default Product