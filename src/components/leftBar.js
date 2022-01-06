import React from 'react';
import { CheckText, Toggle, Cabin } from './index';
import '../styles/index.css';
import '../styles/leftBar.css';

const LeftBar = ({ show, setShow }) => {
    return <div className='leftBar'>
        <div className='leftBarCabin center'>
            <div className={show === true ? 'system' : 'system system1'}>
                <CheckText bigText='ALL SYSTEM CHECK'/>
                <CheckText bigText='RENDEZVOUS BURN SLOW'/>
                <CheckText bigText='PREPARE RENDEZVOUS BURN'/>
                <CheckText bigText='THERMAL SHIELD'/>
                <CheckText bigText='BURN GO/NO-GO'/>
                <CheckText bigText='POWER COMPLETION'/>
                <CheckText bigText='STATION DECK CHECK'/>
            </div>
            <Cabin className={show === false ? 'puujin' : 'puujin puujin1'}/>
        </div>
        <Toggle show={show} setShow={setShow} />
    </div>
}

export { LeftBar };