import React, { useEffect, useState } from 'react'

import CardCharacter from './components/cardCharacter/CardCharacter'

import "./Home.css"

console.info(listCharacters)

function Home() {
    const [ listCharacters, setListCharacters ] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => setListCharacters(data.results))
        .catch((err) => console.info(err))
    }, [])

    console.info(listCharacters)

  return (
    <div className="Home">
        {
            listCharacters.map((props) => {
                return <CardCharacter 
                    key={props.name} 
                    name={props.name} 
                    status={props.status} 
                    image={props}
                />
            })
        }
    </div>
  );
}

export default Home;
