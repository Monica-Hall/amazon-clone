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
                    rating={4}/> 

                    {/* https://www.amazon.com/dp/B0043R48Z4/ref=cg_HHG20-Hub-Creative_1b1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-top-slot-6&pf_rd_r=250FEQ7MEX2AKEB4716P&pf_rd_t=0&pf_rd_p=3391987a-735e-411e-8b3e-7c21077cb4f7&pf_rd_i=gf-events--HHG20-Hub */}
                    <Product 
                    id="2"
                    title="NEST Fragrances Classic Candle- Holiday , 8.1 oz (NEST01HL)"
                    price={42.95}
                    image="https://images-na.ssl-images-amazon.com/images/I/816TV-bGJ3L._AC_SX679_.jpg"
                    rating={4}
                    />

                    {/* https://www.amazon.com/Vmini-Bottle-Insulated-Stainless-Gradient/dp/B087C4Q55V/?_encoding=UTF8&pd_rd_w=MIP9k&pf_rd_p=138eb05e-0690-4979-a6da-7a70b321c201&pf_rd_r=T80TG0SXKBVDPR0B41YA&pd_rd_r=c33a5606-0bf1-4eb2-872d-c2d32d78661b&pd_rd_wg=S8ykd&ref_=pd_gw_hl_comp_mis_psims&th=1 */}
                    <Product 
                    id="3"
                    title="Vmini Water Bottle with Straw, Wide Rotating Handle Straw Lid, Wide Mouth Double Walled Vacuum Insulated Stainless Steel Water Bottle, Gradient Mint+Pink+Purple, 40 oz"
                    price={22.09}
                    image="https://m.media-amazon.com/images/I/611objBqdOL._AC_SL1500_.jpg"
                    rating={5}
                    />
                    
                </div>

                <div className="home_row">
                    {/* Product  */}

                    <Product 
                    id="4"
                    title="Post-it Super Sticky Pop-up Notes, 3x3 in, 10 Pads, 2x the Sticking Power, Miami Collection, Neon Colors (Pink, Blue, Green), Recyclable (R330-10SSMIA)"
                    price={16.91}
                    image="https://m.media-amazon.com/images/I/71MNFCcOnvL._AC_SL1500_.jpg"
                    rating={5}
                    />
                    
                    {/* https://www.amazon.com/dp/B08C4LC7TG/ref=cg_HHG20-Hub-Creative_1c1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-top-slot-6&pf_rd_r=250FEQ7MEX2AKEB4716P&pf_rd_t=0&pf_rd_p=3391987a-735e-411e-8b3e-7c21077cb4f7&pf_rd_i=gf-events--HHG20-Hub */}
                    <Product 
                    id="5"
                    title="iRobot Roomba i3+ (3550) Robot Vacuum with Automatic Dirt Disposal"
                    price={599.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51RKEg3dp1L._AC_SL1000_.jpg"
                    rating={3}
                    />

                    {/* https://www.amazon.com/dp/B075H7Z5L8/ref=cm_gf_aasc_iaai_d_p0_qd0_6uc1H8dT9qT00f8VMzXX */}
                    <Product 
                    id="6"
                    title="MyQ Smart Garage Door Opener Chamberlain MYQ-G0301"
                    price={29.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/61EgKv96u2L._AC_SL1000_.jpg"
                    rating={4}
                    />

                    {/* https://www.amazon.com/dp/B019HR91W4/ref=cm_gf_aasc_iaab_d_p0_qd0_783sfYVjpUurJOJupkt4 */}
                    <Product 
                    id="7"
                    title="Ecolution Original Microwave Micro-Pop Popcorn Popper"
                    price={12.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81aTLT1IstL._AC_SL1500_.jpg"
                    rating={3}
                    />
                </div>

                <div className="home_row">
                    {/* Product  */}

                    {/* https://www.amazon.com/dp/B084TM9VB3/ref=cm_gf_aasc_iaab_d_p0_qd0_A11tefmTYikMT0u8JMYD */}
                    <Product 
                    id="8"
                    title="Goodful Premium Non-Stick Cookware Set"
                    price={119.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/813psexGaBL._AC_SL1500_.jpg"
                    rating={4}
                    />

                    {/* https://www.amazon.com/Oral-Essentials-Treatments-Sensitivity-Artificial/dp/B082TPDTM2?pd_rd_w=Bpk9N&pf_rd_p=ba22ea03-d3c1-4ebb-8d3e-472aa0cf3b30&pf_rd_r=PX47EZG3689E28D89DQ2&pd_rd_r=0dd0c9fe-1f64-4b92-bb4e-bcd347a4f979&pd_rd_wg=2woP8&pd_rd_i=B082TPDTM2&psc=1&ref_=pd_bap_d_rp_1_i */}
                    <Product 
                    id="9"
                    title="Lumineux Teeth Whitening Strips by Oral Essentials - 21 Treatments Dentist Formulated and Certified Non Toxic - Sensitivity Free - Whiter Teeth in 7 Days - NO Artificial Flavors, Colors, and SLS Free"
                    price={49.99}
                    image="https://m.media-amazon.com/images/I/71GTkqqWZ6L._AC_SL1500_.jpg"
                    rating={4}
                    />
                </div>

                <div className="home_row">
                    {/* Product  */}

                    {/* https://www.amazon.com/dp/B00TQ47CPW?pd_rd_i=B00TQ47CPW&pd_rd_w=qfQPM&pf_rd_p=ee186ce0-6bf7-4893-85b9-f3368b019e0f&pd_rd_wg=PCfDG&pf_rd_r=KVCP3BCP0K26RV8JAFKC&pd_rd_r=652779f3-e5ea-473a-b90c-7a5530dd8122 */}
                    <Product 
                    id="10"
                    title="PetFusion Ultimate Dog Bed, Solid CertiPur-US Memory Foam Orthopedic Dog Bed, 3 Colors & 4 Sizes, Medium Firmness Pillow, Waterproof Dog Bed Liner & Breathable Cover, Cert Skin Contact Safe, 3yr Warr"
                    price={89.95}
                    image="https://m.media-amazon.com/images/I/71l2iEu1EaL._AC_SL1500_.jpg"
                    rating={4}
                    />

                    {/* https://www.amazon.com/Wongeto-Paracord-Handle-Carrier-Shoulder/dp/B07Y5JXM2X/ref=pd_rhf_ee_s_bmx_gp_ghcd49un_2/136-6904600-3093423?pd_rd_w=PhsWK&pf_rd_p=1b0c9386-52e8-4f8c-b741-5f097372617b&pf_rd_r=72HVRSHN96FNX7ESPPZY&pd_rd_r=f4c20359-dace-4a05-b565-ccad920d957f&pd_rd_wg=pt1Ml&pd_rd_i=B07Y5JXM2X&th=1 */}
                    <Product 
                    id="11"
                    title="Wongeto Paracord Handle Carrier Holder with Shoulder Strap,Compatible with Hydro Flask Wide Mouth Water Bottles 12oz - 64 oz and Other Wide Mouth Water Bottle for Walking Hiking Camping"
                    price={12.99}
                    image="https://m.media-amazon.com/images/I/719O-3HjLPS._AC_SL1500_.jpg"
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}
