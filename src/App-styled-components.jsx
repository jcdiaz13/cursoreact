import { useState } from "react";
import { Box, MyStyledComponent } from "./components/styleofcomponents.js";
import Popup from "./components/componenteconestilo.jsx";

const App = () => {

    const [color, setColor] = useState("")

    const [visible, setVisible] = useState("")

    // const setColor = () => {

    //     // MyStyledComponent.componentStyle.backgroundColor = "red"

    // }


    return (
        < div >
            <Box color="blue" m={20}> Hola <span>que</span> tal</Box>

            <button onClick={() => setColor('red')}>Cambiar color</button>
            <MyStyledComponent color={color} />

            <button onClick={() => setVisible(!visible)}>Mostrar popup</button>
            <Popup visible={visible} />
        </div >

    )
}

export default App;