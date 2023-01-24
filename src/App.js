import { Container, Col } from "react-bootstrap";
import "./App.css";
import Home from "./components/Home";
import WorkMethod from "./components/WorkMethod";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="App">
      <Col>
        <Logo />
        <Navigation />
        <hr />
        <div className="dotted-background">
          <Home />
          <hr />
          <WorkMethod />
          <hr />
          <Contact />
        </div>
      </Col>
    </Container>
  );
}

export default App;
