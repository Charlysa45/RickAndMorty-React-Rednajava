import React from "react";
import CardCharacter from "./components/cardCharacter/CardCharacter";

import "./Home.css";

function Home(props) {
  return (
    <section id="Home">
      <div id="cards-box">
        {props.listCharacters.map((character) => {
          const data = {
            id: character.id,
            name: character.name,
            status: character.status,
            image: character.image,
            location: character.location.name,
          };
          return <CardCharacter key={character.id} data={data} />;
        })}
      </div>
    </section>
  );
}

export default Home;
