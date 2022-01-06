import React from 'react';
import '../styles/horoscope.css';
import '../styles/index.css';

const Horoscope = ({ zodiac, setZodiac, day, setDay }) => {
    const handler = (e) => {
        e.preventDefault();
        setZodiac(e.target.value);
    }

    const handler1 = (a) => {
        a.preventDefault();
        setDay(a.target.value);
    }
    return <div id='horoscope' className='horoscope'>
        <div className='bigHoroscopeTitle center'>HOROSCOPE</div>
        <div className='dropDownCon'>
            <div>
                <div className='signDate'>SIGN</div>
                <div className='selectStyle center'>
                    <select value={zodiac} onChange={handler} className='dropDown'>
                        <option>Aries</option>
                        <option>Taurus</option>
                        <option>Gemini</option>
                        <option>Cancer</option>
                        <option>Leo</option>
                        <option>Virgo</option>
                        <option>Libra</option>
                        <option>Scorpio</option>
                        <option>Sagittarius</option>
                        <option>Capricorn</option>
                        <option>Aquarius</option>
                        <option>Pisces</option>
                    </select>
                </div>
            </div>
            <div>
                <div className='signDate'>DATE</div>
                <div className='selectStyle center'>
                    <select value={day} onChange={handler1} className='dropDown'>
                        <option>Today</option>
                        <option>Yesterday</option>
                        <option>Tomorrow</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
}

export { Horoscope };