import React from 'react';
import { useState, useEffect } from 'react';

//Data
import { RazorData } from '../data/RazorData';
import { FreegoData } from '../data/FreegoData';

//Icons
import { IoIosTrash } from "react-icons/io";



const CartItem = (props) => {
    //State of quantity
    const [amount, setAmount] = useState(props.quantity)
    //Rerender componenet after updating an items quantity
    useEffect(() => {
        document.getElementsByClassName("update-amount").value = "";
    }, [amount])
    console.log(props.type)
    //import correct image
    let image = '';
    if (props.type === "Freego"){
        image = FreegoData[0].image;
    } else
    if (props.type === "Razor"){
        image = RazorData[0].image;
    }
    //makes modal pop up
    const hideCart = () => {
        let x = document.querySelector('.cart');
        x.classList.remove('appear-block');
        let y = document.querySelector('.modal');
        y.classList.add('appear-flex');
    }
    //update funtion
    const update = () => {
        //set quantity in cart item
        let newQuantity = parseInt(document.getElementById("update-amount-" + props.index).value);
        setAmount(newQuantity);
        //set total in whole cart componenet using state
        props.changeTotal(newQuantity*props.price);
        //Set quantity in local storage
        //1. get array of cart from localstorage
        const itemCart = JSON.parse(localStorage.getItem('cart'));
        //2. change the local storage array
        for( var i = 0; i < itemCart.length; i++){ 
            if ( itemCart[i].id === props.id ) { 
                itemCart.splice(i, 1); 
            }
        }
        let cart = { 'item': props.name, 
            'price': props.price, 
            'quantity' : newQuantity,
            'type' : props.type,
            'id' : props.id
        }
        itemCart.push(cart)
        localStorage.setItem('cart', JSON.stringify(itemCart));
    }

    const deleteThis = () => {
        
    }
    return(
        <div className="border-top">
            <div className="flex">
                <div className="flex-start cart-item">
                    <div className="image-container">
                        <div className="item-background">
                            <img className="cart-img" src={image} alt="no img"/>
                        </div>
                    </div>
                    <div className="item-name">
                        {props.name}
                    </div>
                    <div className="item-price">
                        ${props.price}
                    </div>
                    <div className="update">
                        <div className="align">
                            <p>x</p>
                            <input placeholder={amount} id={'update-amount-' + props.index} className='update-amount' />
                            <button onClick={update}>update</button>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="item-price">
                        = ${props.price*amount}
                    </div>
                    <div className="trash-container">
                        <IoIosTrash className="trash" onClick={hideCart}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;