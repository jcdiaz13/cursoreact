import {instance} from '../api/apipokemon';
export const getJokes = async () => {

   const response = await instance.get(`/`);
   return response.data.results;
}

export default getJokes;