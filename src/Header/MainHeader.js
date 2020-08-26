import React, {useState} from 'react';
import Backdrop from '../Modal/Backdrop/Backdrop';
import './MainHeader.css';
import {NavLinks, NavLinks2} from '../utils/HomeStyle';
const MainHeader = (props) => {
    const [searchState, setSearchState] = useState({ 
        content: ''
    })
    return (
        <nav className="MainHeaderNav" id="MainHeaderNav">
            <Backdrop sty={"NavBackdrop"} show={props.show} clicked={props.slideHandler} />
            <div className="home">
                <p onClick={props.pageSwitcher.bind(this, 'menu')}> Shang Hai Restaurant </p>
            </div>
            <div className="search">
                <input placeholder="Search.." type="text" value={searchState.content} onChange={(event) => setSearchState({content: event.target.value})} />
                <button onClick={props.searchPage.bind(this, 'search', searchState.content)}><i className="fa fa-search"></i></button>
            </div>
            <div className="burger" onClick={props.slideHandler}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <NavLinks show={props.show}>
                <li onClick={props.pageSwitcher.bind(this, 'menu')}> Menu </li>
                <li onClick={props.pageSwitcher.bind(this, 'top')}> Popular Dishes </li>
                <li onClick={props.pageSwitcher.bind(this, 'information')}> Information </li>
                <li onClick={props.pageSwitcher.bind(this, 'order')}> Cart {props.cartSize} </li>
            </NavLinks>
            <NavLinks2 show={props.show}> 
                <li onClick={props.pageSwitcher.bind(this, 'menu')}> Menu </li>
                <li onClick={props.pageSwitcher.bind(this, 'top')}> Popular Dishes </li>
                <li onClick={props.pageSwitcher.bind(this, 'information')}> Information </li>
                <li onClick={props.pageSwitcher.bind(this, 'order')}> Cart {props.cartSize} </li>
            </NavLinks2>
        </nav>
    )
};


export default MainHeader;