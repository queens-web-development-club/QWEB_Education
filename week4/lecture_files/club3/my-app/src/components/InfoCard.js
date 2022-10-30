import "../App.css";
import React from "react";


// InfoCard is a React component which accepts a name, coordinates, and an image url (all strings)
function InfoCard(props) {
    return (
        <div className="title-card-container">
            <div className="title-card-item">
                <img className="card-image" src={props.image} />
                <h1>{props.name}</h1>
                <p>{props.coordinates}</p>
            </div>
        </div>
    );
}

export default InfoCard;