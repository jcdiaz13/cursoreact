// - Crear un componente funcional que cargue dos styled components
// - Debemos usar herencia de styled components
// - Uno de los styled components tendrá que cargar una fuente
// - Debemos crear un global style para maquetar el body
// - Debemos tener un efecto hover en nuestros styled components
// - Uno de los componentes debe cambiar de color en función de una prop
// - Debemos usar media queries

const App = () => {
  const [color, setColor] = useState("")
  
  return (

    <button onClick={() => setColor('red')}>Cambiar color</button>


  )
}