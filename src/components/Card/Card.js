import React from 'react';
import '../styles/card.css';
import pendrive from '../Images/pendrive.png';

export const Card = () => {
    return (
        <div className="card">
            <img src={ pendrive } alt="Avatar"/>
            <div className="card-container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    )
}
