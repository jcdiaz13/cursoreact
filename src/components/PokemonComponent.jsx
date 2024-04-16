import { useState, useEffect } from "react";
import getPokemons from "../app/services/pokemons";

const PokemonComponent = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons().then((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  return (
    <div>
      {pokemons.map((pokemon, i) => (
        <div key={(pokemon, i)}>
          <h2>{pokemon.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default PokemonComponent;
