import { Back } from "./styleofcomponents"

const Popup = ({ visible, setVisible }) => {
    <Back visible = {visible}> 
    <div>
        <p>hola</p>
    <button onClick={ () => setVisible(!setVisible)}>Close</button>
    </div>
    </Back>
}

export default Popup;