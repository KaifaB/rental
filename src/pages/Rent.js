import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';


const Rent = (props) => {
    const history = useHistory();
    //state
    const [value, onChange] = useState(new Date());
    let itemCart = [];

    const rentThis = () => {
        let cart = { 'item': props.info.title, 
            'price': props.info.price, 
            'quantity' : 1,
            'type' : props.info.type,
            'id' : props.info.id
        }
        //Get array of cart from localstorage
        if (JSON.parse(localStorage.getItem('cart')) !== null){
            itemCart = JSON.parse(localStorage.getItem('cart'));
        }
        let exists = 0;
        if (itemCart !== null ){
            for (let i = 0; i < itemCart.length; i++) {
                if (cart.id === itemCart[i].id){
                    exists += 1;
                }
            }
        }

        if (exists === 0){
            itemCart.push(cart);
        }

        localStorage.setItem('cart', JSON.stringify(itemCart));

        history.push('/cart');
    };

    return(
        <div className="flex">
            <div>
                {props.pictures}
            </div>
            <div className="description">
                <h1>{props.info.title}</h1>
                <p>{props.info.description}</p>
                <Calendar
                    selectRange
                    onChange={onChange}
                    value={value}
                    
                />
                {value.toString()}
                <div className="praction">
                    <button onClick={rentThis}>Rent Now</button>
                    <h2>For only ${props.info.rent}/Day</h2>
                </div>
            </div>
        </div>
    )
}

export default Rent;