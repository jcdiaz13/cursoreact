import {instance} from '../api/apipokemon'

// export const getNinjaCats = async () => {
//   const response = await fetch(
//     "https://catfact.ninja/facts"
//   );
//   const data = await response.json();      FORMA SIN AXIOS
//   console.log(2222222,data)
//   return data.data;
// }

// export const getPokemons = async () => {
//    const response = await axios(
//     ("https://pokeapi.co/api/v2/pokemon/")     FORMA CON AXIOS PERO SIN UTILIZAR UNA INSTANCIA
//    ); 
//         return response.data.results;
// }

export const getPokemons = async () => {

   const response = await instance.get(`/`);
   return response.data.results;
}

export default getPokemons;