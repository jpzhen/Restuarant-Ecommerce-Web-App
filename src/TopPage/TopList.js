import React from 'react';
import {Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../utils/HomeStyle';
const OrderList = (props) => {
    let img = "";
    try {
        img = (<BoxImg src={require('../assets/' + props.pic + '.jpeg')} alt={props.name}/>)
    }
    catch (err) {
        img = (<BoxImg src={require('../assets/placeholder.jpeg')} alt={props.name}/>)
    }
    return (
        <Box>
                <BoxTitle> {props.name} </BoxTitle>
                {img}
                <BoxText> ${props.price} </BoxText>
                <BoxButton onClick={props.addToCart.bind("",props.pic, props.name, props.price)}> add </BoxButton>
        </Box>
    )
};

export default OrderList;