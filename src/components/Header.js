import React from 'react';
import { BsList } from 'react-icons/bs'
import { useHistory } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'

const Header = props => {
    const history = useHistory();
    const goHome = () => {
        history.push('/');
    }
    const seeCart = () => {
        history.push('/cart');
    }
    return(
        <div className="header">
            <h1 onClick={goHome}>Rental Stars</h1>
            <div>
                <FaShoppingCart className="cart-icon" onClick={seeCart}/>
                <BsList className="hamburger" />
            </div>
        </div>
    )
}

export default Header;