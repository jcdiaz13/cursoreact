import { useState } from "react";
import originalQuestions from "./assets/data/questions";
import { Container, Question, Row } from "./app/styles";
import 'reactjs-popup/dist/index.css';
import PopupTrivial from "./components/PopupTriv";
import { shuffleArray } from "./app/trivialutils";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const unorderedQuestions = shuffleArray(originalQuestions);
  const q = unorderedQuestions[currentQuestionIndex];

  const [hasWon, setHasWon] = useState(false);

  const checkWinCondition = () => {
    return currentQuestionIndex === unorderedQuestions.length - 1;
  }

  return (
    <Container>
      {q && (
        <>
          <Question>{q.question}</Question>
          <Row>
            <div>
              {q.answers.map(a => (
                <p key={a.txt}>
                  <button
                    onClick={() => {
                      if (a.isRight) {
                        setCurrentQuestionIndex(prevIndex =>
                          prevIndex + 1 < unorderedQuestions.length
                            ? prevIndex + 1
                            : prevIndex
                        );
                        if (checkWinCondition()) {
                          setHasWon(true);
                        }
                      } else {
                        setCurrentQuestionIndex(prevIndex =>
                          prevIndex > 0 ? prevIndex - 1 : 0
                        );
                      }
                    }}
                  >
                    X
                  </button>{" "}
                  {a.txt}
                </p>
              ))}
            </div>
            <img src={q.img} alt="Question" />
          </Row>
        </>
      )}
      {hasWon && <PopupTrivial visible={true} />}
    </Container>
  );
};

export default App;

