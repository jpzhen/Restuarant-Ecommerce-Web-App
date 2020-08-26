import React, { useState } from "react";

const OrderList = (props) => {
    const [quantityState, setQuantityState] = useState({
        quantity : props.quantity
    })
    
    let img = "";
    try {
        img = (<img src={require('../../assets/' + props.pic + '.jpeg')} alt={props.name}/>)
    }
    catch (err) {
        img = (<img src={require('../../assets/placeholder.jpeg')} alt={props.name}/>)
    }

    const plus = (sign) => {
        if (quantityState.quantity === 1 && sign === 0) {
            props.removeItem(props.index, props.price, props.quantity);
            setQuantityState({
                quantity: quantityState.quantity
            });
        }
        else if (quantityState.quantity > 0 && sign === 0) {
            setQuantityState({
                quantity: quantityState.quantity - 1
            });
            props.MinusPlusHandler(sign, props.price);
            props.subFromCart(props.pic, props.name, props.price);
        }
        else {
            setQuantityState({
                quantity: quantityState.quantity + 1
            });
            props.MinusPlusHandler(sign, props.price);
            props.addToCart(props.pic, props.name, props.price);
        }
    }

    return (
        <div className='item'>
            <div className='imagine'> 
                {img}
            </div>
            <div className='description'>
                <p> {props.name} </p>
            </div>
            <div className='price'>
                ${props.price}
            </div>
            <input className="plusminus" type="button" onClick={plus.bind(this, 0)} value="-"></input>
            <div className='quantity'>
                Qty: {quantityState.quantity}
            </div>
            <input className="plusminus" type="button" onClick={plus.bind(this, 1)} value="+"></input>
            <button 
                className="delete" 
                onClick={props.removeItem.bind(
                    this, props.index, props.price, props.name, quantityState.quantity
                )
            }><i className="fa fa-trash-o"> </i> </button>
        </div>
    )
};

export default OrderList;