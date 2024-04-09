import { ParagraphStyle } from './app/styles';
import frases from './data/frases-teatro.json';
import { useState } from 'react';

const App = () => {
    const [currentParagraph, setCurrentParagraph] = useState(0);

    return (
        <>
            <div>
                <button onClick={() => setCurrentParagraph(currentParagraph == 0 ? 0 : currentParagraph - 1)}>Anterior</button>
                <button onClick={() => setCurrentParagraph(currentParagraph === frases.length - 1 ? currentParagraph : currentParagraph + 1)}>Siguiente</button>
            </div>
            <div>
                {frases.map((frase, index) => (
                    <ParagraphStyle lighting={index === currentParagraph} key={index}>
                        <p>{frase}</p>
                    </ParagraphStyle>
                ))}
            </div>
        </>
    )
}

export default App;
