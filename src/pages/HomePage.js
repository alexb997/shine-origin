import { Container, Col } from "react-bootstrap";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Home from "../components/Home";
import WorkMethod from "../components/WorkMethod";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};

export default HomePage;
