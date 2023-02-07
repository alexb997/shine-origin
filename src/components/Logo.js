import { Container, Row, Col } from "react-bootstrap";
import logo from "./logo.png";
import Title from "./Title";

const Logo = () => {
  return (
    <Container id="logo-zone">
      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="7" lg="5" xl="5" xxl="5">
          <Row className="justify-content-center">
            <img src={logo} alt="logo" />
          </Row>
        </Col>
      </Row>
      <Title />
    </Container>
  );
};

export default Logo;
