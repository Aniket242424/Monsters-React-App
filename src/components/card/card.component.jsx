import React from 'react';
import './card.style.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" height='180' width='180' src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
        <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
    </div>
)