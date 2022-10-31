import axios from "axios"

const apiUrl = 'https://rickandmortyapi.com/api';

const CharactersService = async() => {
    const request = axios
    return request
    .get(`${apiUrl}/character`)
    .then(response => response.data)
}

const CharInfoService = async(charId) => {
    const request = axios
    return request
    .get(`${apiUrl}/character/${charId}`)
    .then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {CharactersService, CharInfoService}