import React from 'react';
import '../styles/arrowBtn.css';

const ArrowBtn = ({ setTabToggle, setData, tabToggle, style }) => {
    const arrowBtn = () => {
        setTabToggle(!tabToggle);
        setData('')
    };

    return <div id='arrowBtn' className='ArrowBtnCon'>
        <button style={style} onClick={arrowBtn} className='button center'>
            <span className="material-icons arrow">
                arrow_right_alt
            </span>
        </button>
    </div>
};

export {ArrowBtn}