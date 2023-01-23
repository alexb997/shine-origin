import { Container, Row, Col } from "react-bootstrap";
import logo from "../logo.png";

const Logo = () => {
  return (
    <Container id="logo-zone">
      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="6" lg="4" xl="4" xxl="4">
          <Row className="justify-content-center">
            <img className="logo" src={logo} alt="logo" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Logo;
