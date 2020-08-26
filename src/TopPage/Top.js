import React, { useState, useEffect } from "react";
import axios from "axios";
import TopList from './TopList';
import { Container, MainBlock } from '../utils/HomeStyle';
import Spinner from '../Spinner/Spinner';

const Top = (props) => {
    const [itemState, setItemState] = useState({
        topList: [],
        loading: false
    })
    useEffect(() => {
        let item; 
        let itemList = [];
        axios.get(process.env.REACT_APP_GETPOPULAR_URL)
        .then(res => {
            res.data.forEach(element => {
                let pic = element.name.split("(")[0].trim().replace(/ /g, "_");
                item = (<TopList key={pic+element.price} name={element.name} pic={pic} price={Number(element.price)} addToCart={props.addToCart}> </TopList>)
                itemList.push(item);
            })
            setItemState({
                topList:itemList,
                loading: true
            })
        })
        .catch(err => {
            console.log(err);
        });
    }, [props.addToCart]);

    return (
        <div>
            <h1 className="PageTitle"> Most Popular </h1>
            <h3 className="Food-Type"> {props.FoodBlockName} </h3>
            <MainBlock>
                <Container>
                    {itemState.loading ? itemState.topList: <Spinner/>}
                </Container>
            </MainBlock>
        </div>
    )
};

export default Top;