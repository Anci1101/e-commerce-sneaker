import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import {ReactComponent as CartIcon} from '../images/icon-cart.svg'
import menuIcon from '../images/icon-menu.svg'
import avatarIcon from '../images/image-avatar.png'
import '../scss/scss-style'
import SideBarMenu from './SideBarMenu'
import { PRODUCTS } from '../products'
import deleteIcon from '../images/icon-delete.svg'


const NavBar = () => {
    const {cartItems, removeFromCart} = useContext(ShopContext)

    const [sidebar, setSidebar] = useState(false)
    const [showQuickCart, setShowQuickCart] = useState(false)

    const openQuickCart = () => {
        setShowQuickCart(!showQuickCart)
    }

    const showSideBar = () => setSidebar(!sidebar)

    const productsInCart = PRODUCTS.filter((product) => {
        if (cartItems[product.id] !== 0) {
            return product
        }
       
    })


console.log('productsInCart',productsInCart)

  return (
    <>
        <div className='navbar'>
            <div className='links'>
                <div className='menuWrapper'>
                    <div className='menuIcon' onClick={showSideBar}>
                        <img src={menuIcon} alt="menu Icon" />
                    </div>
                    <Link to='/' className='sneakerTitle'>sneakers</Link>
                </div>
                <SideBarMenu showSideBar={showSideBar} sidebar={sidebar}/>
                <div className='cartWrapper'>
                    <div className='cartIcon'>
                        <Link to='/cart'>
                            <CartIcon/>
                        </Link>
                    </div>
                    <div onClick={openQuickCart} className='avatarIcon'>
                        <img src={avatarIcon} alt="avatar" />
                    </div>
                </div>
            </div>
            {showQuickCart && (
                <div className='quickCart'>
                    <h4>Cart</h4>
                    {productsInCart.length === 0 && (
                        <div className='quickEmptyCartMessage'>
                            <div>Your cart is empty.</div>    
                        </div>
                    )}
                    {productsInCart.map((item)=>{
                        const totalPrice = item.currentPrice * cartItems[item.id]
            
                        return (
                          <div className='quickCartProdcutInfoWrapper' key={item.id}>
                                <div className='quickCartProductInfo'>
                                    <img src={Object.values(item.productImages[0])} alt="" />
                                    <div className='quickProductNamePrice'>
                                        <p>{item.productName}</p>
                                        <p>${item.currentPrice} * {cartItems[item.id]} = <span>${totalPrice}</span> </p>
                                    </div>
                                    <div onClick={()=>removeFromCart(item.id)} className='deleteIcon' >
                                        <img src={deleteIcon} alt="" />
                                    </div>
                                </div>
                                <button className='checkountBtn'>Checkout</button>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    </>
  )
}

export default NavBar