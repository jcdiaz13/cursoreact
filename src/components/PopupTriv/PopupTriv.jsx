import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Overlay } from '../../app/styles';

const PopupTrivial = ({ visible }) => (
  
    <Popup trigger={<button>Desplegar</button>} position="right center">
      <Overlay>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis quia quam, temporibus hic inventore, commodi at labore voluptatibus ducimus fugit et! Cum laborum ex commodi recusandae ipsam unde at!</div>
      </Overlay>
    </Popup>
  );


export default PopupTrivial;
