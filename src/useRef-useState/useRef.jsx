import { useRef } from "react";
const App = () => {
  const inputRef = useRef(null)

  const hacerCosas = () => {
    // Access the current property of inputRef to get the DOM node
    const inputElement = inputRef.current;

    // Now, you can directly access the style property of the DOM node
    inputElement.style.backgroundColor = 'red'

  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={hacerCosas}>Hacer cosas</button>
    </div>
  );
}

export default App
