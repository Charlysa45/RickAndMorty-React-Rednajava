import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import "./CardCharacter.css"

function CardCharacter(props) {
  return (
    <motion.article initial={{scale: 1.3}} animate={{scale: 1.0}} whileHover={{scale: 1.1}} whileTap={{scale: 1}} className="CardCharacter">

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
    </motion.article>
  );
}

export default CardCharacter;
