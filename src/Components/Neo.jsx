import React from 'react'
import neoImage from "./images/Neo_Color_Horizontal 2.png"
import '../Components/Neo.css'
import shareImg from './images/shareImg.png'
const Neo = () => {
    return (
        <>
            <div className='parentContainer'>
                <div className='mainNeoContainer'>
                    <div className='NeoContent'>
                        <img src={neoImage} alt="" srcSet='' className='neoImage' />
                        <span className='neoText'>Neo</span>
                    </div>
                    <div className='ClusterLive'>
                        <p className='clusterTitle'>Cluster Live</p>
                        <p className='clusterCountry'>Africa (South Africa) Namet (Kenya)</p>
                    </div>
                    <div className='orderCapturingTitle'>
                        <p className='orderTitle'>Fully automated order capturing solution</p>
                    </div>
                </div>
            </div>
            <div className='benefitSection'>

                <h3 className='benefitHeading'>Top <span className='bene'> Benefits </span></h3>
                <div className='cards'>
                    <div className='innerBorder'>
                        <div className='ManualEffort'>
                            <p className='line1'> Manual</p>
                            <p className='line2'>Effort Saved</p>
                        </div>
                    </div>
                    <div className='shareImg'>
                        <img src={shareImg} alt="" srcSet="" className='shareIcon' />

                    </div>
                </div>
            </div>
        </>

    )
}

export default Neo
