import React from 'react'; 
import "./Header.css"; 
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"; 
import { useStateValue } from '../../ducks/reducer/StateProvider';
import {auth} from "../../firebase"; 

function Header() {

    const [{basket, user}] = useStateValue(); 

    const handleAuth = () => {
        if(user) {
            auth.signOut(); 
        }
    }

    return (
        <div className="header">
            {/* Logo */}
            <Link to="/">
                <img 
                    className="header_logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" 
                />
            </Link>
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
                {/* GREETING  AND SIGN IN OPTION */}
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header_options">
                        <span className="header_optionLineOne">Hello, {!user ? 'Guest' : user.email}</span>
                        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                {/* RETUNS AND ORDERS  OPTION */}
                <div className="header_options">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                {/* YOUR PRIME OPTION */}
                <div className="header_options">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                {/* SHOPPING CART AND ORDER COUNT */}
                <Link to="/checkout">
                    <div className="header_basket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
