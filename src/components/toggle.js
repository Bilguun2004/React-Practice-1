import React from 'react';
import '../styles/index.css';
import '../styles/toggle.css';

const Toggle = ({ show, setShow }) => {
    const toggler = () => {
      setShow(!show);
    };

    return <div>
        <button className='toggleBtn' onClick={toggler}>
        <div className='toggleCon center'>
          <div className='toggle center'>
            <div className='systemCabin'>
              <div className='backWord'>SYSTEM</div>
              <div className='backWord'>CABIN</div>
            </div>
          </div>
          <div className={show ? 'whiteToggle center' : 'whiteToggleLeft center'}>{show ? 'SYSTEMS' : 'CABIN'}</div>
        </div>
        </button>
    </div>
}

export { Toggle };