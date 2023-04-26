import React, { useContext } from 'react'
import CartItem from '../components/CartItem'
import { ShopContext } from '../context/shopContext'
import { PRODUCTS } from '../products'

const Cart = () => {

  const {cartItems} = useContext(ShopContext)
  
  return (
    <div>
      {PRODUCTS.map((product)=>{
        if (cartItems[product.id]!==0){
          return <CartItem id={product.id}
          key={product.id}
          productName={product.productName}
          productDescription={product.productDescription}
          currentPrice={product.currentPrice}
          discount={product.discount}
          oldPrice={product.oldPrice}
          productImages={product.productImages}/>
        }
      })}
    </div>
  )
}

export default Cart