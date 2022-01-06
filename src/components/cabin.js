import React from 'react';
import '../styles/index.css';
import Puujin from '../assets/Space_X_Dragon.png';

const Cabin = ({ className }) => {
    return <div>
        <img className={className} src={Puujin} />
    </div>
}

export { Cabin };