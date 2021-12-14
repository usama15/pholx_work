import React from 'react';
import { useLocation } from 'react-router-dom';


const Description = () => {
    const location = useLocation();
    return (
        <>
            <div  style={{ marginTop: '40px', width: '100%', padding: '50px 300px'}}>
                <h3 style={{color: 'black', fontWeight: 'bold', lineHeight: '80px'}}>Description</h3>
                <p  style={{color: 'grey', fontSize: '18px', fontWeight: 'normal'}}>{location.state.detail.description}</p>
            </div>
        </>
    );
}


export default Description;