import { useState } from "react";
import questions from "./assets/data/questions";
import { Container, Question, Row } from "./app/styles";
import 'reactjs-popup/dist/index.css';
import PopupTrivial from "./components/PopupTriv/PopupTriv";


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const q = questions[currentQuestionIndex];
  return(
    <Container>
      <Question>
        {
          q.question
        }
      </Question>
      <Row>

        <div>
        {
          q.answers.map(a => <p key={q.answers}> <button onClick={
            () => {
              if (a.isRight) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
              } else {
                setCurrentQuestionIndex((currentQuestionIndex === 0 ? 0 : currentQuestionIndex - 1)
                );
              }
            }
          }>X</button> {a.txt} </p>)
        }
      </div>      
      <img src={q.img}/>
      <PopupTrivial visible = {true}></PopupTrivial>
      </Row>
    </Container>
  )
};

export default App;
