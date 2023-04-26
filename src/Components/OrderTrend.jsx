import React from 'react'
import SA from './images/SouthAfrica.png'
const OrderTrend = () => {
  return (
    <>
      <div className='orderTrendContainer'>
        <div className='rightContainer'>
            <h3>Order Trend</h3>
        </div>
        <div className='leftContainer'>
                    <h3>Market</h3>
                    <div>
                        <img src={SA} alt="" srcSet="" />
                    </div>
        </div>
      </div>
    </>
  )
}

export default OrderTrend
