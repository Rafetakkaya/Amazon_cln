import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./Firebase";





function Header() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
            history.push("/");


        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"></img>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link className="link" to={!user && "/login"}>
                    <div onClick={handleAuthenticaton} className="header_option">
                        <span className="header_option-LineOne">
                            Hello {!user ? "Guest" : user.email}
                        </span>
                        <span className="header_option-LineTwo">
                            {user ? "Sing out" : "Sing in"}
                        </span>
                    </div>
                </Link>
                <Link className="link" to="/orders">
                    <div className="header_option">
                        <span className="header_option-LineOne">
                            Return
                        </span>
                        <span className="header_option-LineTwo">
                            & Orders
                        </span>

                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_option-LineOne">
                        Your
                    </span>
                    <span className="header_option-LineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout" className="link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_BasketCount">
                            {basket?.length}
                        </span>

                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header;
