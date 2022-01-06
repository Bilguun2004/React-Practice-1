import React from 'react';
import '../styles/index.css';
import '../styles/circle.css';

const Circle = ({ data, title, className, style }) => {
    return <div className='squareCon center'>
        <div className='circleCon center'>
            <div className='keyTitle'>{title}</div>
            <div style={style} className={className}>{data}</div>
        </div>
    </div>
};

export { Circle };