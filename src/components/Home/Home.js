import React from 'react'; 
import "./Home.css"
import Product from "../Product/Product"; 

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
                    {/* https://www.amazon.com/dp/B07XJ8C8F5/ref=ods_gw_dec_d_be_xpl_1_en?pf_rd_r=XY88PCR4RHG6T5N1R3Z7&pf_rd_p=8d258d31-9bdf-4910-b555-94a817670cf1 */}
                    <Product 
                    id="1"
                    title="All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg"
                    rating={5}/> 

                    {/* https://www.amazon.com/dp/B0043R48Z4/ref=cg_HHG20-Hub-Creative_1b1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-top-slot-6&pf_rd_r=250FEQ7MEX2AKEB4716P&pf_rd_t=0&pf_rd_p=3391987a-735e-411e-8b3e-7c21077cb4f7&pf_rd_i=gf-events--HHG20-Hub */}
                    <Product 
                    id="2"
                    title="NEST Fragrances Classic Candle- Holiday , 8.1 oz (NEST01HL)"
                    price={42.95}
                    image="https://images-na.ssl-images-amazon.com/images/I/816TV-bGJ3L._AC_SX679_.jpg"
                    rating={4}
                    />
                    
                </div>

                <div className="home_row">
                    {/* Product  */}
                    
                    {/* https://www.amazon.com/dp/B08C4LC7TG/ref=cg_HHG20-Hub-Creative_1c1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-top-slot-6&pf_rd_r=250FEQ7MEX2AKEB4716P&pf_rd_t=0&pf_rd_p=3391987a-735e-411e-8b3e-7c21077cb4f7&pf_rd_i=gf-events--HHG20-Hub */}
                    <Product 
                    id="3"
                    title="iRobot Roomba i3+ (3550) Robot Vacuum with Automatic Dirt Disposal"
                    price={599.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51RKEg3dp1L._AC_SL1000_.jpg"
                    rating={4}
                    />

                    {/* https://www.amazon.com/dp/B075H7Z5L8/ref=cm_gf_aasc_iaai_d_p0_qd0_6uc1H8dT9qT00f8VMzXX */}
                    <Product 
                    id="4"
                    title="MyQ Smart Garage Door Opener Chamberlain MYQ-G0301"
                    price={29.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/61EgKv96u2L._AC_SL1000_.jpg"
                    rating={4}
                    />

                    {/* https://www.amazon.com/dp/B019HR91W4/ref=cm_gf_aasc_iaab_d_p0_qd0_783sfYVjpUurJOJupkt4 */}
                    <Product 
                    id="5"
                    title="Ecolution Original Microwave Micro-Pop Popcorn Popper"
                    price={12.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81aTLT1IstL._AC_SL1500_.jpg"
                    rating={5}
                    />
                </div>

                <div className="home_row">
                    {/* Product  */}

                    {/* https://www.amazon.com/dp/B084TM9VB3/ref=cm_gf_aasc_iaab_d_p0_qd0_A11tefmTYikMT0u8JMYD */}
                    <Product 
                    id="6"
                    title="Goodful Premium Non-Stick Cookware Set"
                    price={119.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/813psexGaBL._AC_SL1500_.jpg"
                    rating={4}
                    />
                </div>
            </div>
        </div>
    )
}
