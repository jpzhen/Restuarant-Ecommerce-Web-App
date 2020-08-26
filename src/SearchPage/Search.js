import React, { useState, useEffect } from "react";
import axios from "axios";
import TopList from '../TopPage/TopList';
import { Container, MainBlock } from '../utils/HomeStyle';
import Spinner from '../Spinner/Spinner';

const Search = (props) => {
    const [resultState, setResultState] = useState({
        result: [],
        categoryList: ["appetizers", "noodles", "rice", "chickens", "beefs", "seafoods", "porks", "sweet and sour", "vegetables", "eggs"],
        loading: false
    })

    useEffect(() => {
        let item; 
        let itemList = [];
        if ( resultState.categoryList.includes(props.queryWord.toLowerCase()) ) {
            axios.get(process.env.REACT_APP_BYTYPE_URL + props.queryWord.toLowerCase())
            .then(res => {
                res.data.forEach(element => {
                        let pic = element.name.split("(")[0].trim().replace(/ /g, "_");
                        item = (<TopList key={pic+element.price} name={element.name} pic={pic} price={Number(element.price)} addToCart={props.addToCart}> </TopList>)
                        itemList.push(item);
                })
                setResultState({
                    result:itemList,
                    loading: true
                })
            })
            .catch(err => {
                console.log(err);
            });
        }
        else {
            axios.get(process.env.REACT_APP_BYNAME_URL + props.queryWord.toLowerCase())
            .then(res => {
                res.data.forEach(element => {
                    let pic = element.name.split("(")[0].trim().replace(/ /g, "_");
                    item = (<TopList key={pic+element.price} name={element.name} pic={pic} price={Number(element.price)} addToCart={props.addToCart}> </TopList>)
                    itemList.push(item);
                })
                setResultState({
                    result:itemList,
                    loading: true
                })
            })
            .catch(err => {
                console.log(err);
            });
        }
    }, [props.queryWord]);

    return (
        <div>
            <h1 className="PageTitle"> Search Result </h1>
            <h3 className="Food-Type"> {props.FoodBlockName} </h3>
            <MainBlock>
                <Container>
                    {resultState.loading ? resultState.result : <Spinner/> }
                </Container>
            </MainBlock>
        </div>
    )
};

export default Search;