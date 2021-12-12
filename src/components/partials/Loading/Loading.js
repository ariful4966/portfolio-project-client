import React from 'react';
import load from '../../../assets/images/buffer.gif';

const Loading = () => {
    return (
        <div style={{textAlign:'center', width: '100%'}}>
            <img src={load} alt="Loading.." />
        </div>
    );
};

export default Loading;