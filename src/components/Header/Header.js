import React from 'react'; 
import "./Header.css"; 
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            {/* Logo */}
            <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="" 
            />
            {/* Search Bar and Icon */}
            <div className="header_search">
                <input 
                    className="header_searchInput" 
                    type="text"/>
                    <SearchIcon
                    className="header_searchIcon" />
            </div>
            {/* Nav Bar */}
            <div className="header_nav">
                {/* Option 1  */}
                <div className="header_options">
                    <span className="header_optionLineOne">Hello</span>

                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                {/* Option 2 */}
                <div className="header_options">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                {/* Option 3 */}
                <div className="header_options">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                {/* Shopping Cart and Count  */}
                <div className="header_basket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header_basketCount">0</span>
                </div>

            </div>
        </div>
    )
}

export default Header
