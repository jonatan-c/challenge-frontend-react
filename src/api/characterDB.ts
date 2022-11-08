import axios from 'axios';


const charactersDB = axios.create({
    baseURL: `https://rickandmortyapi.com/api`,
})

export default charactersDB;