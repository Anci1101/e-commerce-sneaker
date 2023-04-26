import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';

const CartItem = ({ id, productName, productDescription,currentPrice, discount, oldPrice, productImages}) => {

const {cartItems} = useContext(ShopContext)



const cartItemAmount = cartItems[id];

  return (
    <div className='cartItem'>
        <img src={productImages} alt="" />
        <div>
            <p>{productName}</p>
            <p>amount: {cartItemAmount}</p>
        </div>
    </div>
  )
}

export default CartItem