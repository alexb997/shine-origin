import { Container, Col } from "react-bootstrap";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Home from "../components/Home";
import WorkMethod from "../components/WorkMethod";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

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
            <AboutUs />
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
