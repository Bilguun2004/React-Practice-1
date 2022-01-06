import React, { useEffect } from 'react';
import '../styles/index.css';
import '../styles/result.css';
import { Circles, Loading, ArrowBtn } from './index';


const Result = ({ data, zodiac, day, setLoading, setTabToggle, TabToggle , setData }) => {
    const axios = require("axios").default;
  
    useEffect(() => {
        let options = {
          method: 'POST',
          url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
          params: {sign: zodiac, day: day},
          headers: {
            'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
            'x-rapidapi-key': '4a64a0c8b6mshd8bd1e3b8e0bee1p112795jsna80f11e3e076'
          }
        };
        axios.request(options)
          .then((response) => {
            setData(response.data);
            setLoading(true);
          }).catch((error) => {
            console.error(error);
          });
    }, []);
    if (!data) {
        return <Loading />;
    }
    return <div className='result center'>
        <div className='result1'>
            <div className='bigHoroscopeTitle1 center'>HOROSCOPE</div>
            <Circles data={data}/>
            <div className='description center'>{data.description}</div>
        </div>
        <ArrowBtn setData={setData} TabToggle={TabToggle} setTabToggle={setTabToggle} style={{transform: 'rotate(180deg)'}} />
    </div>
};

export { Result };