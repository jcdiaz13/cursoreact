import { useState } from "react";
import workouts from "./assets/data/workouts";
import {
  Container,
  ColRight,
  ColLeft,
  Row,
  Menu,
  BtnLeft,
  BtnRight,
  Img,
} from "./components/Workout/Workout.styles";

const App = () => {
  const [currentWorkout, setCurrentWorkout] = useState(0);
  const [currentEx, setCurrentEx] = useState(0);

  const w = workouts[currentWorkout];

  return (
    <Container>
      <Menu>
        <BtnLeft
          onClick={() =>
            setCurrentWorkout((prevWorkout) =>
              prevWorkout > 0 ? prevWorkout - 1 : 0
            )
          }
        ></BtnLeft>
        <h1>{w.title}</h1>
        <BtnRight
          onClick={() =>
            setCurrentWorkout((prevWorkout) =>
              prevWorkout < workouts.length - 1 ? prevWorkout + 1 : prevWorkout
            )
          }
        ></BtnRight>
      </Menu>
      <Row>
        <ColLeft>
          <img src={w.exercises[currentEx].img} />
        </ColLeft>

        <ColRight>
          {w.exercises.map((exercise, i) => (
            <Img
              active={i === currentEx}
              key={exercise}
              src={exercise.img}
              onClick={() => setCurrentEx(i)}
            />
          ))}
        </ColRight>
      </Row>
    </Container>
  );
};

export default App;
