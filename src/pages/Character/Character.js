import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { getCharactersInfo } from "../../services/ApiService";
import { motion } from "framer-motion";

import "./Character.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Character = () => {
  const { characterId } = useParams();

  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    getCharactersInfo(characterId).then((res) => {
      setCharacterInfo([res]);
      console.log(res);
    });
  }, [characterId]);

  return (
    <>
      <section className="filters">
        <Link to="/" className="filters-backbtn">
          <FontAwesomeIcon icon={faCircleLeft} /> Regresar
        </Link>
      </section>

      <hr />

      <section id="character-info">
        {characterInfo.map((res) => (
          <motion.article
            initial={{ scale: 1.3 }}
            animate={{ scale: 1.0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="character-info-card"
          >
            <img
              src={res.image}
              alt="character-img"
              className="character-info-card-img"
            />
            <div className="character-info-card-content">
              <div className="character-info-card-content-top">
                <div>
                  <p className="character-info-card-content-key">Name: </p>
                  <p className="character-info-card-content-value">
                    {res.name}
                  </p>
                </div>
                <div>
                  <p className="character-info-card-content-key">Status: </p>
                  <span className={`CardCharacter-status ${res.status}`}>
                    {res.status}
                  </span>
                </div>
              </div>
              <div className="character-info-card-content-middle">
                <div>
                  <p className="character-info-card-content-key">Location: </p>
                  <p className="character-info-card-content-value">
                    {res.location.name}
                  </p>
                </div>
              </div>
              <div className="character-info-card-content-bottom">
                <div>
                  <p className="character-info-card-content-key">Specie: </p>
                  <p className="character-info-card-content-value">
                    {res.species}
                  </p>
                </div>
                <div>
                  <p className="character-info-card-content-key">Origin: </p>
                  <p className="character-info-card-content-value">
                    {res.origin.name}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </>
  );
};

export default Character;
