import React, { useState} from 'react';
import './Menu.css';
import Appetizers from './Items/Appetizers'
import Eggs from './Items/Eggs'
import Rices from './Items/Rices'
import Noodles from './Items/Noodles'
import Vegetables from './Items/Vegetables'
import SweetandSours from './Items/SweetandSours'
import Chickens from './Items/Chickens'
import Beefs from './Items/Beefs'
import Seafoods from './Items/Seafoods'
import Porks from './Items/Porks'
import TextMode from './Items/TextMode'
import {MenuNav, MenuSelect,MainBlock} from '../utils/HomeStyle';

const FoodBlock = (props) => {
    const [MenuState, SetMenuState] = useState ({name: "Appetizers"});
    const [ModeState, SetModeState] = useState ({currentMode: "photo"});
    const [ImgState, SetImgState] = useState({show: false});

    const MenuSwitcher = (foodType) => {
        SetMenuState({
            name: foodType
        })
        if(ModeState.currentMode === "text"){
            ScrollToView(foodType);
        }
    };

    const showPicture = () => {
        SetImgState({show: true});
    }
    const noShowPicture = () => {
        SetImgState({show: false});
    }

    const SelectMenuSwitcher = (event) => {
        SetMenuState({
            name: event.target.value
        })
        if(ModeState.currentMode === "text"){
            ScrollToView(event.target.value);
        }
    };

    const ModeSwitcher = (mode) => {
        SetModeState({
            currentMode: mode
        })
        
    }

    const ScrollToView = (foodType) => {
        const anchor = document.querySelector('#' +foodType.toLowerCase());
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    // cartItem is a 3 element array that stores the picture, price, and name.

    let modeButton = null;
    let h2 = "";
    let food = <Appetizers showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>;
    if (ModeState.currentMode === 'photo') {
        h2 = (<h2 className="Subtitle"> {MenuState.name} </h2>);
        modeButton = (<p className="textMode" onClick={ModeSwitcher.bind(this, "text")}> text mode </p>)
        if (MenuState.name === "Appetizers") { food = <Appetizers showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>; }
        else if (MenuState.name === "Eggs") { food = <Eggs showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>; }
        else if (MenuState.name === "Rices") { food = <Rices showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>; }
        else if (MenuState.name === "Noodles") { food = <Noodles showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>; }
        else if (MenuState.name === "Vegetables") { food = <Vegetables showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>; }
        else if (MenuState.name === "Sweet and Sour") { food = <SweetandSours showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>; }
        else if (MenuState.name === "Chickens") { food = <Chickens showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>; }
        else if (MenuState.name === "Beefs") { food = <Beefs showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>; }
        else if (MenuState.name === "Seafoods") { food = <Seafoods showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>; }
        else if (MenuState.name === "Porks") { food = <Porks showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>; }
    } 
    else {
        modeButton = (<p className="textMode" onClick={ModeSwitcher.bind(this, "photo")}> photo mode </p>)
        h2 = "";
        food = <TextMode showPicture={showPicture} noShowPicture={noShowPicture} show={ImgState.show} addToCart={props.addToCart}/>;
    }
    
    return (
        <div className="Menu">
            <h1 className="PageTitle"> Main Menu </h1>
            <h3 className="Food-Type"> {props.FoodBlockName} </h3>
            <MenuNav show={ModeState.currentMode} id="MenuNav">
                <li className="Nav-bar" onClick={MenuSwitcher.bind(this, "Appetizers")}> Appetizers </li>
                <li className="Nav-bar" onClick={MenuSwitcher.bind(this, "Noodles")}> Noodles </li>
                <li className="Nav-bar" onClick={MenuSwitcher.bind(this, "Rices")}> Rices </li>
                <li className="Nav-bar" onClick={MenuSwitcher.bind(this, "Chickens")}> Chickens </li>
                <li className="Nav-bar" onClick={MenuSwitcher.bind(this, "Beefs")}> Beefs </li>
                <li className="Nav-bar" onClick={MenuSwitcher.bind(this, "Seafoods")}> Seafoods </li>
                <li className="Nav-bar" onClick={MenuSwitcher.bind(this, "Porks")}> Porks </li>
                <li className="Nav-bar" onClick={MenuSwitcher.bind(this, "Sweet and Sour")}> Sweet & Sour </li>
                <li className="Nav-bar" onClick={MenuSwitcher.bind(this, "Vegetables")}> Vegetables </li>
                <li className="Nav-bar-Last" onClick={MenuSwitcher.bind(this, "Eggs")}> Eggs </li>
            </MenuNav>
            <MenuSelect show={props.show} id="MenuSelect" onChange={SelectMenuSwitcher}>
                <option value="Appetizers"> Appetizers </option>
                <option value="Noodles"> Noodles </option>
                <option value="Rices"> Rice </option>
                <option value="Chickens"> Chicken </option>
                <option value="Beefs"> Beef </option>
                <option value="Seafoods"> Seafood </option>
                <option value="Porks"> Pork </option>
                <option value="Sweet and Sour"> Sweet & Sour </option>
                <option value="Vegetables"> Vegetables </option>
                <option value="Eggs"> Eggs </option>
            </MenuSelect>
            {modeButton}
            <MainBlock>
                {h2}
                {food}
            </MainBlock>
        </div>
    )
};


export default FoodBlock;