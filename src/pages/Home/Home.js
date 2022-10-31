import React from "react";
import CardCharacter from "./components/cardCharacter/CardCharacter";

import "./Home.css";

function Home(props) {
  return (
    <section className="Home">
      {props.listCharacters.map((character) => {
        const data = {
          key: character.name,
          id: character.id,
          name: character.name,
          status: character.status,
          image: character.image,
          location: character.location.name,
        };
        return <CardCharacter data={data} />;
      })}
    </section>
  );
}

export default Home;
