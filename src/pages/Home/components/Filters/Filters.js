import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import ApiService from '../../../../services/ApiService'
import Home from '../../Home'
import './Filters.css'

const Filters = () => {

    const [listCharacters, setListCharacters] = useState([])
    
    const [locChoosed, setLocChoosed] = useState('All')
    const [statusChoosed, setStatusChoosed] = useState('All')
    const [genderChoosed, setGenderChoosed] = useState('All')

    const [maleCount, setMaleCount] = useState('')
    const [femaleCount, setFemaleCount] = useState('')
    
    const [listCharFiltered, setListCharFiltered] = useState([])

    useEffect(() => {
        ApiService.CharactersService()
        .then((props) => {
            setListCharacters(props.results)
        })
    }, [])

    useEffect(() => {
        if (locChoosed === 'All') {
            setListCharFiltered(listCharacters)
        }else{
            setListCharFiltered([...listCharacters.filter(res => res.location.name === locChoosed)])
        }
    }, [listCharacters, locChoosed])

    useEffect(() => {
        if (statusChoosed === 'All') {
            setListCharFiltered(listCharacters)
        }else{
            setListCharFiltered([...listCharacters.filter(res => res.status === statusChoosed)])
        }
    }, [listCharacters, statusChoosed])

    useEffect(() => {
        if (genderChoosed === 'All') {
            setListCharFiltered(listCharacters)
        }else{
            setListCharFiltered([...listCharacters.filter(res => res.gender === genderChoosed)])
        }
    }, [listCharacters, genderChoosed])

    useEffect(() => {
      setMaleCount(listCharFiltered.filter(res => res.gender === 'Male'))
      setFemaleCount(listCharFiltered.filter(res => res.gender === 'Female'))
    }, [listCharFiltered])
    
    
  return (
    <>
    <section className='filters'>
        <div className="filters-selects">
            <select onChange={(e) => setLocChoosed(e.target.value)} name="locations" id="filters-selects-locations">
                <option value="All">All</option>
                <option value="Citadel of Ricks">Citadel of Ricks</option>
                <option value="Earth (Replacement Dimension)">Earth (Replacement Dimension)</option>
                <option value="Abadango">Abadango</option>
                <option value="Testicle Monster Dimension">Testicle Monster Dimension</option>
                <option value="Worldender's lair">Worldender's lair</option>
                <option value="Anatomy Park">Anatomy Park</option>
                <option value="unknown">unknown</option>
                
            </select>
            <select onChange={(e) => setStatusChoosed(e.target.value)} name="status" id="filters-selects-status">
                <option value="All">All</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <select onChange={(e) => setGenderChoosed(e.target.value)} name="genders" id="filters-selects-genders">
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>

        <div className="counters">
            <div className="counters-male">
                <h1 className='counters-icon blue-light'><FontAwesomeIcon icon={faMars}/></h1>
                <h1 className='blue-light'>Male: {maleCount.length}</h1>
            </div>
            <div className="counters-female">
                <h1 className='counters-icon pink'><FontAwesomeIcon icon={faVenus} /></h1>
                <h1 className='pink'>Female: {femaleCount.length}</h1>
            </div>
        </div>

    </section>

    <hr />
    <Home listCharacters={listCharFiltered}/>
    </>
  )
}

export default Filters