import '../App.css';
import React from 'react';

function InfoCardFunction(props) {
    return(
        <div className='title-card-container'>
            <div className='title-card-item'>
                <img className="card-image" src={props.image} />
                <h1>{props.name}</h1>
                <p>{props.coordinates}</p>
            </div>
        </div>
    );
}

export default InfoCardFunction;