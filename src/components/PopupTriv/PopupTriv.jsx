import { Overlay, PopupStyled } from './PopupTrivstyles';

const PopupTrivial = ({ visible, onClose }) => (
  <div>
    {visible && <Overlay onClick={onClose} />}
    <PopupStyled open={visible} className='11111'>
      <button onClick={onClose} className="close-button">X</button>
      <p>HAS GANADO!</p>
    </PopupStyled>
  </div>
);

export default PopupTrivial;
