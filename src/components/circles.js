import React from 'react';
import { Circle } from './index';
import '../styles/index.css';
import '../styles/circle.css';

const Circles = ({ data }) => {
    return <div className='circlesCon'>
        <Circle style={{color: data.color}} className='dataColor' title='COLOR' data={data.color} />
        <Circle className='luckyTime dataColor' title='LUCKY TIME' data={data.lucky_time} />
        <Circle className='luckyNumber dataColor' title='LUCKY NUMBER' data={data.lucky_number} />
        <Circle className='mood dataColor' title='MOOD' data={data.mood} />
        <Circle className='compatibility dataColor' title='COMPATIBILITY' data={data.compatibility} />
    </div>
};

export { Circles };