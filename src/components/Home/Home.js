import React from 'react'; 
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="home_container">
                {/* Top Fade Out Image  */}
                <img 
                className="home_image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3195_SVOD_DiamondFallBack2/Amazon_GW_DesktopTallHero_3P_ENG_RB-3195_SVOD_DiamondFallback2_v2_3000x1200._CB416678521_.jpg" 
                alt="" />

                {/* Rows of Products */}
                <div className="home_row">
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product  */}
                </div>

                <div className="home_row">
                    {/* Product  */}
                    {/* Product  */}
                </div>

                <div className="home_row">
                    {/* Product  */}
                </div>
            </div>
        </div>
    )
}
