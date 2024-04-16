import axios from "axios";

export const instance = axios.create({ baseURL: 'https://api.chucknorris.io' });


export const getCategories = async () => {

   const response = await axios(
    ("https://api.chucknorris.io/jokes/categories")     
   ); 
        return response.data.results;
}



export const getJokeFromCategory = async () => {

   const response = await axios(
    ("https://api.chucknorris.io/jokes/categories")     
   ); 
        return response.data.results;
}