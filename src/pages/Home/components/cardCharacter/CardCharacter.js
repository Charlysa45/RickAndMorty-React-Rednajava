import React from 'react'

import "./CardCharacter.css"

function CardCharacter(props) {
  return (
    <article className="CardCharacter">
        <img src={props.image} alt={`${props.name}-img`} className='CardCharacter-img'/>
        <div className="CardCharacter-content">
          <span className={`CardCharacter-status ${props.status}`}>{props.status}</span>
          <div>
            <p>Name: </p>
            <p className="CardCharacter-content-value">{props.name}</p>
          </div>
          <div>
            <p>Location:</p>
            <p className="CardCharacter-content-value">{props.location}</p>
          </div>
        </div>
    </article>
  );
}

export default CardCharacter;
