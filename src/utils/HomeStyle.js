import styled from "styled-components";
import px2vw from './px2vw';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: ${px2vw(32)};
    max-width: 100%;

`;

export const Box = styled.div`
    height: 300px;
    width: 330px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    margin: 5px;
    border-radius: 12px;
    width: ${px2vw(320, 320)};
    min-height: ${px2vw(320, 320)};
    padding: ${px2vw(20)};
    margin: ${px2vw(20)};
    height: 100%;

    @media (max-width: 768px) {
        width: 170px;
        min-height: ${px2vw(200, 768)};
        height: 100%;
    }

    @media (max-width: 1024px) {
        width: ${px2vw(250)};
        min-height: ${px2vw(300)};
        height: 100%;
    }
`;

export const BoxImg = styled.img`
    height: 300px;
    width: 300px;
    flex: 1; 
    @media (max-width: 768px) {
        font-size: 16px;
        height: 150px;
        width: 150px;
    }
`

export const BoxText = styled.p`
    margin: 0px;
    font-size: 16px;
    text-align: center;
    @media (max-width: 1024px) {
        font-size: 16px;
    }
`;

export const BoxTitle = styled.h4`
    text-align: center;
    font-size: 20px;
    margin: 5px;
    font-weight: normal;
    @media (max-width: 1024px) {
        font-size: 16px;
    }
`;

export const BoxButton = styled.button`
    font-size: 12px;
    height: 25px;
    width: 50px;
    border-radius:2em;
    color:#FFFFFF;
    background-color:salmon;
    text-align:center;
    margin: 5px;
`;

export const TextBox = styled.div`
    height: 300px;
    width: 330px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    margin: 5px;
    border-radius: 12px;
    width: ${px2vw(320, 320)};
    min-height: ${px2vw(320, 320)};
    padding: ${px2vw(20)};
    margin: ${px2vw(20)};
    height: 100%;

`;

export const TextBoxImg = styled.img`
    height: 300px;
    width: 300px;
    flex: 1; 
`

export const NavLinks = styled.nav`
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 30%;
    color: #9f0e31;
    font-weight: bold;
    font-size: 24px;;
    cursor: pointer;

    @media (max-width: 3000px) {
        width: 40%;
    }
    @media (max-width: 1100px) {
        width: 50%;
    }
    @media (max-width: 1024px) {
        display:none
    }
`

export const MenuNav = styled.ul`
    list-style: none;
    display: flex;
    position: ${props => props.show === "text" ? "sticky" : "null"};
    transition: all .65s ease-in-out;
    background-color:white;
    max-width: 1300px;
    margin: 0 auto;
    top:0px;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 10px;
    @media (max-width: 1024px) {
        display: none;
    }
`

export const MenuSelect = styled.select`
    display: none;
    
    @media (max-width: 1024px) {
        position: ${props => props.show ? "null" : "sticky"} ;
        position: -webkit-sticky;
        transition: all .65s ease-in-out;
        top:52px;
        width: 100%;
        color: #60666d;
        font-family: 'Lora', serif;
        display: inline-block;
        font-size: 16px;
        padding: 5px;
    }
`
export const InfoDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
    padding-left: 150px;
    padding-right: 150px;

    @media (max-width: 1024px) {
        display: inline-block;
        font-size: 16px;
        padding-top: 20px;
        padding-left: 0px;
        padding-right: 0px;
    }
`

export const MainBlock = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`
export const NavLinks2 = styled.div`
    height: 100%;
    width: ${props => props.show ? "250px" : "0px"};
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: maroon;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;

    li {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: white;
        display: block;
        transition: 0.3s;
    }

    .li:hover {
        color: #f1f1f1;
    }

    .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
`
export const TextTable = styled.table`
    width: 90%;
    margin: auto;
    margin-bottom: 25px;
    table-layout:fixed;
    border-collapse: collapse;
    td span{
        background-color:#fff;
    }
    
    td:first-child {
        text-align: left;
        width:80%;
    }
    
    td:first-child span{
        padding-right:.25em;
    }
    
    td:last-child {
        text-align:right;
    }
    
    td:last-child span{
        padding-left:.25em;
    }
`
