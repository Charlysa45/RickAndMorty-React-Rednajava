import React from 'react'
import { Link } from 'react-router-dom';

import "./CardCharacter.css"

function CardCharacter(props) {
  return (
    <article className="CardCharacter">
      <Link to={`character/${props.id}`}>
        <img src={props.image} alt={`${props.name}-img`} className='CardCharacter-img'/>
      </Link>
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
