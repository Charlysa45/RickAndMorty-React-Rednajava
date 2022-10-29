import axios from "axios";

const apiUrl = "https://rickandmortyapi.com/api";

export const getCharacters = async () => {
  const request = await axios
    .get(`${apiUrl}/character`)
    .then((response) => response.data);

  return request;
};

export const getCharactersInfo = async (charId) => {
  const request = await axios
    .get(`${apiUrl}/character/${charId}`)
    .then((response) => response.data);

  return request;
};

// eslint-disable-next-line import/no-anonymous-default-export
