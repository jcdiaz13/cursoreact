import {useState} from 'react';

const MyCounter = () =>{
  const [contador, setContador] = useState(0); 
 
  const incrementarContador = () => setContador(contador + 1)
 
  return <button onClick={incrementarContador}>{contador}</button>
}

export default MyCounter;