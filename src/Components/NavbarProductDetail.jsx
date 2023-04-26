import React from 'react'
import './NavbarProductDetail.css'
import Unilever from './images/unilever-logo.png'
import OTC from './images/MT.png'
const NavbarProductDetail = () => {
  return (
    <>
      <div className='productDetailsNavbar'>
        <div className='LogoContainer'>
            <div className='brandlogo'>
                    <img src={Unilever} alt="" srcSet=""  className='brandNbLogo' />
                    <img src={OTC} alt=""  srcSet=""  className=' logoOtc' />
                    <span className='brandLogotext'> Order to cash</span>
            </div>
            <div className='menuContent'>
              <p className='products'>Products</p>
              <p className='contactUs'>Contact Us</p>
            </div>
        </div>
        <div className='pageNavigator'>
        <p>Home &gt;&gt; Products &gt;&gt; Neo</p>
     <h3>Product Details</h3>
        </div>
      </div>
    </>
  )
}

export default NavbarProductDetail
