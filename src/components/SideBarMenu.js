import React from 'react'
import '../scss/scss-style'
import closeIcon from '../images/icon-close.svg'


const SideBarMenu = ({showSideBar, sidebar}) => {
  return (
    <div className={sidebar ? 'sideBar active' : 'sideBar'}>
        <div onClick={showSideBar} className='closeIcon'>
            <img  src={closeIcon} alt="" />
        </div>
        <div className='sideBarItems'>
            <p onClick={showSideBar}>Collections</p>
            <p onClick={showSideBar}>Men</p>
            <p onClick={showSideBar}>Women</p>
            <p onClick={showSideBar}>About</p>
            <p onClick={showSideBar}>Contact</p>
        </div>
    </div>
  )
}

export default SideBarMenu