import React from "react";
import './Card.css'

const Card = (props) => {
    const {name, email} = props;

    return (
        <div className="mainCard grow">
        <img  alt ='robot'src={`https://robohash.org/${name}`}/>
        <div>
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
        </div>
    );
}
export default Card;