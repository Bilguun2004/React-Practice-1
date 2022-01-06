import React from 'react';
import '../styles/loading.css';

const Loading = () => {
    return <div id='loading' className='loadingCon'>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
};

export { Loading };