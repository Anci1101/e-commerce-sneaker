import React from 'react'
import { PRODUCTS } from '../products'
import Product from './Product'

const Products = () => {
  return (
    <div>
        {PRODUCTS.map((product)=>(
            <Product 
            id={product.id}
            key={product.id}
            productName={product.productName}
            productDescription={product.productDescription}
            currentPrice={product.currentPrice}
            discount={product.discount}
            oldPrice={product.oldPrice}
            productImages={product.productImages}
            />
        ))}
    </div>
  )
}

export default Products