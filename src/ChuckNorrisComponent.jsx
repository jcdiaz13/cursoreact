import { useEffect, useState } from "react";
import { getCategories, getJokeFromCategory } from "./app/services/chucknorris";

function App() {
  const [categories, setCategories] = useState([]);
  const [currentJoke, setCurrentJoke] = useState("");

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleJokeFetch = (category) => {
    getJokeFromCategory(category).then((joke) => {
      setCurrentJoke(joke.value);
    });
  };

  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      {categories.length > 0 && (
        <>
          <h2>Select a category to get a joke:</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                {/* Renderizar cada categoría como un enlace y llamar a handleJokeFetch con la categoría como parámetro */}
                <a href="#" onClick={() => handleJokeFetch(category)}>
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      {currentJoke && <p>{currentJoke}</p>}
    </div>
  );
}

export default App;
