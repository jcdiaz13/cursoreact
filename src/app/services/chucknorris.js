import {instance} from '../api/apichucknorris';

export const getCategories = async () => {
  const response = await instance.get("jokes/categories");
  return response.data; // Retorna directamente el array de categorías
};


export const getJokeFromCategory = async (category) => { // Obtener un chiste de una categoría específica
  const response = await instance.get("jokes/random", {
    params: { category } // Usa el parámetro de categoría para obtener un chiste específico
  });
  return response.data; // Retorna directamente el objeto de chiste
};

