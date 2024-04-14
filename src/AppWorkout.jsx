import workouts from "./assets/data/workouts"; // Importa la estructura de datos de workouts
import {
  Container,
  ColRight,
  ColLeft,
  Row,
  Menu,
  BtnLeft,
  BtnRight,
} from "./components/Workout/Workout.styles";

const App = () => {
  const w = workouts[0];

  return (
    <Container>
      <Menu>
        <BtnLeft />
        <h1>{w.title}</h1>
        <BtnRight />
      </Menu>
      <Row>
        <ColLeft></ColLeft>
        <ColRight>
          {w.exercises.map((e) => (
            <img key={e.img} src={e.img}></img>
          ))}
        </ColRight>
      </Row>
    </Container>
  );
};

export default App;
