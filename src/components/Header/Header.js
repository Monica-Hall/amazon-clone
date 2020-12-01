import React from 'react'; 
import "./Header.css"; 

function Header() {
    return (
        <div className="header">
            <img 
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="" 
            />

            <div className="header__search">
                <input 
                    className="header__searchInput" 
                    type="text"/>
            </div>

            <div className="header__nav">
                {/* Option 1  */}
                <div className="header__options">
                    <span className="header__optionLineOne">Hello</span>

                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                {/* Option 2 */}
                <div className="header__options">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                {/* Option 3 */}
                <div className="header__options">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

            </div>
        </div>
    )
}

export default Header
