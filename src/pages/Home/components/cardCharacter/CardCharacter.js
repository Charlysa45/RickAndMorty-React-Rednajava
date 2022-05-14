import React from 'react'

import "./CardCharacter.css"

function CardCharacter(props) {
  return (
    <div className="CardCharacter">
        <img src={props.image} />
      {props.name} - {props.status}
    </div>
  );
}

export default CardCharacter;
