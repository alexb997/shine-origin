import { Container, Col } from "react-bootstrap";
import "./App.css";
import Home from "./components/Home";
import WorkMethod from "./components/WorkMethod";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import "./fonts/Louis-George-Cafe-Light.ttf";
import "./fonts/Louis-George-Cafe.ttf";

function App() {
  return (
    <Container className="App">
      <Col>
        <Logo />
        <Navigation />
        <hr />
        <Home />
        <hr />
        <WorkMethod />
        <hr />
        <Contact />
      </Col>
    </Container>
  );
}

export default App;
