import React, { Component } from 'react';
import './App.css';
import MainHeader from './Header/MainHeader';
import Menu from './MenuPage/Menu';
import Information from './InformationPage/Information';
import Order from './OrderPage/Order';
import Top from './TopPage/Top';
import Search from './SearchPage/Search';

class App extends Component {
    state = {
        currentPageName: 'menu',
        cart: {},
        cartSize: 0,
        show: false,
        query: ""
    };
    
    slideHandler = () => {
        if (this.state.show) {
            this.setState({ 
                show:false
            });
        }
        else {
            this.setState({ 
                show: true
            });
        }
    }

    pageSwitcher = (pageName) => {
        this.setState({currentPageName:pageName});
    }
    searchPage = (pageName, queryWord) => {
        this.setState({
            currentPageName:pageName,
            query: queryWord
        });
    }
    changeCartSize = (sign) => {
        if (sign === 1) {
            this.setState(prevState => {
                return {cartSize: prevState.cartSize + 1};
            })
        }
        else {
            this.setState(prevState => {
                return {cartSize: prevState.cartSize - 1};
            })
        }
    }
    addToCart = (itemP, itemN, itemPr) => {
        let itemInfo = { 
            itemName: itemN,
            itemPic: itemP,
            itemPrice: itemPr,
            itemQuan: 1
        }
        alert("Added "+ itemN + " to cart!");
        this.setState(prevState => {
            let cart = Object.assign({}, prevState.cart);
            if (itemInfo.itemName in cart) {
                cart[itemInfo.itemName].itemQuan += 1;
            }
            else {
                cart[itemInfo.itemName] = itemInfo;
            }
            return {cart};
        });
        this.setState(prevState => {
            return {cartSize: prevState.cartSize + 1};
        })
    };

    subFromCart = (itemP, itemN, itemPr) => {
        this.setState(prevState => {
            let cart = Object.assign({}, prevState.cart);
            cart[itemN].itemQuan -= 1;
            return {cart};
        });
        this.setState(prevState => {
            return {cartSize: prevState.cartSize - 1};
        })
    };

    removeFromCart = (itemName, itemQuan) => {
        if (this.state.cartSize !== 1) {
            this.setState(prevState => {
                let cart = Object.assign({}, prevState.cart);
                delete cart[itemName];
                return {cart};
            });
            this.setState(prevState =>{
                return {cartSize: prevState.cartSize - itemQuan}
            });
        }
        else {
            this.setState({
                cart: {},
                cartSize: 0
            })
        }
    }

    render() {
        let currentPage;
        var prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            var currentScrollPos = window.pageYOffset;
            if (this.state.currentPageName === "menu") {
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("MainHeaderNav").style.top = "0";
                    document.getElementById("MenuNav").style.top = "65px";
                    document.getElementById("MenuSelect").style.top = "52px";
                } else {
                document.getElementById("MainHeaderNav").style.top = "-80px";
                document.getElementById("MenuNav").style.top = "-80px";
                document.getElementById("MenuSelect").style.top = "-80px";
                }
                prevScrollpos = currentScrollPos;
            }
        }
        if (this.state.currentPageName === 'menu') {currentPage = <Menu show={this.state.show} addToCart ={this.addToCart}/>}
        else if (this.state.currentPageName === 'information') {currentPage = <Information/>}
        else if (this.state.currentPageName === 'search') {currentPage = <Search addToCart ={this.addToCart} queryWord={this.state.query}/>}
        else if (this.state.currentPageName === 'top') {currentPage = <Top addToCart ={this.addToCart}/>}
        else if (this.state.currentPageName === 'order') {currentPage = <Order subFromCart={this.subFromCart} addToCart ={this.addToCart} changeCartSize={this.changeCartSize} removeFromCart={this.removeFromCart} cart={this.state.cart} total={this.state.cartSize}/>}
        return (
            <div className="App">
                <MainHeader show={this.state.show} slideHandler={this.slideHandler} searchPage={this.searchPage} pageSwitcher={this.pageSwitcher} cartSize={this.state.cartSize}/>
                {currentPage}
            </div>
        );
    }
  }
  
  export default App;