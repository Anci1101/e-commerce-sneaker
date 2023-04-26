import React, { useContext } from 'react'
import cartIcon from '../images/icon-cart.svg'
import iconMinus from '../images/icon-minus.svg'
import iconPlus from '../images/icon-plus.svg'
import '../scss/scss-style'

import { ShopContext } from '../context/shopContext'
const ProductDetails = ({ id, productName, productDescription,currentPrice, discount, oldPrice}) => {

    const {addToCart, removeFromCart, cartItems} = useContext(ShopContext)


    const cartProductAmount = cartItems[id]
  return (
    <div className="productDescriptionContainer">
        <h4 className="brandName">sneaker company</h4>
        <h2 className="productName">{productName}</h2>
        <p className="productDescription">{productDescription}</p>

        <div className="priceInfo">
            <div>
                <p className="currentPrice">${currentPrice}</p>
                <p className="discount">{discount}</p>
            </div>
            <p className="oldPrice">${oldPrice}</p>
        </div>
        <div className='productCounterCartWrapper'>
            <div className="productCounter">
                <button onClick={()=> removeFromCart(id)} className=" btnCounter decrease">
                    <img src={iconMinus} alt="" />
                </button>
                <p>{cartProductAmount}</p>
                <button onClick={()=> addToCart(id)} className="btnCounter increase">
                    <img src={iconPlus} alt="" />
                </button>
            </div>
            <button onClick={()=> addToCart(id)} className="cartBtn">
                <img src={cartIcon} alt="" className="cartIcon" />
                <p>Add to cart</p>
            </button>
        </div>
    </div>
  )
}

export default ProductDetails