import React from 'react'
import CardCharacter from './components/cardCharacter/CardCharacter'

import "./Home.css"

function Home(props) {

    console.log(props.listCharacters)

  return (
    <section className="Home">
        {
            props.listCharacters.map((props) => {
                return <CardCharacter 
                    key={props.name} 
                    name={props.name} 
                    status={props.status} 
                    image={props.image}
                    location={props.location.name}
                />
            })
        }
    </section>

  );
}

export default Home;
