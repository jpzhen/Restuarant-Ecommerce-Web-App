import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from "./utils/GlobalStyle";

ReactDOM.render(
    <>
    <GlobalStyle/> 
    <App />
    </>
    , document.getElementById('root')
);

serviceWorker.unregister();
