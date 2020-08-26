import React, { Component } from "react";
import './Order.css'
import CartItem from './OrderList/OrderList';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm/CheckoutForm'
import Aux from '../hoc/Aux';
import OrderModal from '../Modal/Modal';

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHER_KEY);
class Order extends Component {
    constructor(props) {
        super(props);
        let item; 
        Object.values(props.cart).forEach((element, i) => {
            this.state.total += element.itemPrice * element.itemQuan;
            item = (
                <CartItem 
                    key={element.itemPic + element.itemPrice} 
                    index={i} 
                    name={element.itemName} 
                    MinusPlusHandler={this.MinusPlusHandler} 
                    pic={element.itemPic} 
                    price={element.itemPrice}
                    quantity={element.itemQuan} 
                    removeItem={this.removeItem}
                    addToCart={props.addToCart}
                    subFromCart={props.subFromCart}
                />
            );
            this.state.cart.push(item);
        });
        this.state.tax = this.state.total * 0.083;
    }

    state = {
        cart: [],
        total : 0,
        tax: 0,
        checkingout: false
    };
    
    MinusPlusHandler = (sign, price) => {
        if (sign === 1) {
            this.setState(prevState =>{
                let newTotal = prevState.total + price; 
                return {total: newTotal, tax: newTotal * 0.083}
            });
        }
        else {
            this.setState(prevState =>{
                let newTotal = prevState.total - price;
                return {total: newTotal, tax: newTotal * 0.083}
            });
        }
    }

    removeItem = (index, price, itemName, itemQuan) => {
        if (this.state.cart.length > 1) {
            let newCart = this.state.cart.map(element => Object.assign({}, element));
            newCart.splice(index, 1);
            this.setState({
                cart: newCart
            });
            this.setState(prevState =>{
                let newTotal = prevState.total - (price * itemQuan); 
                return {total: newTotal, tax: newTotal * 0.083}
            });
        }
        else {
            this.setState({
                cart: [],
                total: 0,
                tax: 0
            })
        }
        this.props.removeFromCart(itemName, itemQuan);
    }
    purchaseHandler = () => {
        this.setState({checkingout: true});
    }
    purchaseCancelHandler = () => {
        this.setState({checkingout: false});
    }
    
    render () {
        const ELEMENTS_OPTIONS = {
            fonts: [
                {
                cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
              },
            ],
        };
        return (
            <Aux>
                <h1 className="PageTitle"> Cart </h1>
                <h3 className="Food-Type">  </h3>
                {this.state.cart}
                <OrderModal sty={"OrderBackdrop"} cssName={"orderModal"} show={this.state.checkingout} modalClosed={this.purchaseCancelHandler}>
                    <Elements stripe={promise} options={ELEMENTS_OPTIONS}>
                        <CheckoutForm checkingout={this.state.checkingout} cart={this.props.cart} grandTotal={Math.round((this.state.total + this.state.tax) * 1e2) / 1e2}></CheckoutForm>
                    </Elements>
                </OrderModal>
                <table className="OrderTable">
                    <tbody>
                        <tr>
                            <td className="left"> Items total: </td>
                            <td className="right"> ${Math.round((this.state.total) * 1e2) / 1e2} </td>
                        </tr>
                        <tr>
                            <td className="left"> Est. Tax (8.3%):</td>
                            <td className="right"> ${Math.round((this.state.tax) * 1e2) / 1e2} </td>
                        </tr>
                        <tr>
                            <td className="left"> Grand Total:</td>
                            <td className="right"> ${Math.round((this.state.total + this.state.tax) * 1e2) / 1e2} </td>
                        </tr>
                    </tbody>

                </table>
                <button onClick={this.purchaseHandler} className="paybutt"> Pay ${ Math.round((this.state.total + this.state.tax) * 1e2) / 1e2} </button>
            </Aux>
        );
    } 
}

export default Order;