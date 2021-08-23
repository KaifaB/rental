import React from 'react';
import { useState, useEffect } from 'react';

//Cart item component
import CartItem from '../components/CartItem';

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

const Cart = (props) => {
    //Get array of cart from localstorage
    const itemCart = JSON.parse(localStorage.getItem('cart'));
    //Initialize amount
    let amount = 0;
    //State of quantity
    const [total, setTotal] = useState(amount);
    //get total from cart
    if (itemCart !== null) {
        itemCart.map(curr =>{
            amount += curr.price*curr.quantity
            return 0;
        })
    }
    //Rerender componenet after updating an items quantity
    useEffect(() => {
        document.getElementsByClassName("update-amount").value = "";
    }, [total]);

    if (itemCart !== null) {
    return(
        <div>
            <div className="cart appear-block">
                <div className="cart-header">
                    <h1>Your Cart</h1>
                </div>
                {itemCart.map((curr, index) => {
                    return(
                        <CartItem 
                        name={curr.item}
                        price={curr.price}
                        quantity={curr.quantity}
                        type={curr.type}
                        id={curr.id}
                        changeTotal={total => setTotal(total)}
                        index={index}
                        key={index}
                        />
                    )
                })
                }
                <div className="flex-end cart-box">
                    <p>Tax = ${(amount * 0.09).toFixedDown(2)} </p>
                </div>
                <div className="flex-end cart-box">
                    <p>Total = ${(amount + amount*(0.09)).toFixedDown(2)} </p>
                </div>
            </div>
            <div>
                <button className="checkout">Checkout</button>
            </div>
        </div>
    )
} else {
    return(
        <div>
            <div className="cart appear-block">
                <div className="cart-header">
                    <h1>Your Cart</h1>
                </div>
                <div className="flex-end cart-box">
                    <p>Mucho empty </p>
                </div>
            </div>
        </div>
    )
    }
}

export {Cart}