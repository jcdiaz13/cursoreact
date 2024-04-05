import { useState } from "react";
import Popup from "./components/Componenteconestilo.jsx";
// import { Box, MyStyledComponent } from "./components/styleofcomponents.js";

const App = () => {

    // const [color, setColor] = useState("")
    const [visible, setVisible] = useState(false)

    // const setColor = () => {
    //     // MyStyledComponent.componentStyle.backgroundColor = "red"
    // }


    return (
        <div>
            {/* <Box color="blue" m={20}> Hola <span>que</span> tal</Box>

            <button onClick={() => setColor('red')}>Cambiar color</button>
            <MyStyledComponent color={color} /> */}

            <button onClick={() => setVisible(true)}>Mostrar popup</button>
            <Popup visible={visible} setVisible={setVisible} />
        </div>

    )
}
export default App;