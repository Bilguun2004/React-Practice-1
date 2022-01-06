import React, { useState } from 'react';
import { CheckIcon } from './index';
import '../styles/checkText.css';

const CheckText = ({ iconColor, bigText }) => {
    const [color, setColor ] = useState(iconColor);
    const [ defaultSmallText, setDefaultSmallText ] = useState('Normal');
    const changeColor = () => {
        if (color === '#40C110') {
            setColor('#EA7B15');
            setDefaultSmallText('Awaiting');
        }
        if (color === iconColor) {
            setColor('#40C110');
            setDefaultSmallText('Applied');
        }
        if (color === '#EA7B15') {
            setColor(iconColor);
            setDefaultSmallText('Normal');
        }
    }
    const colorWhite = {
        color: 'white'
    }
    return <div onClick={changeColor} className='checkTextCon'>
        <div className='checkIcon'>
            <CheckIcon color={color} />
        </div>
        <div className='textCon'>
            <div className='bigText'>{bigText}</div>
            <div className='smallText' style={defaultSmallText === 'Applied' || defaultSmallText === 'Awaiting' ? colorWhite : {color: 'rgba(148, 153, 195, 0.5)'}}>{defaultSmallText}</div>
        </div>
    </div>
};

export { CheckText };