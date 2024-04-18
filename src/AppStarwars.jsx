import {
  getCharacters,
  getIdFromUrl,
  getCharacterById,
} from "./app/services/starwars";
import { useEffect, useState } from "react";

const AppStarwars = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <div>
      {characters.map((character, i) => {
        return (
          <div key={(character, i)}>

            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(
                character.url
              )}.jpg`}
              onClick={() =>a href= {"/"+getIdFromUrl(character.url)}}
            />

            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default AppStarwars;
