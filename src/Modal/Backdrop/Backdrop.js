import React from 'react';

import './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={props.sty} onClick={props.clicked}></div> : null
);

export default backdrop;