import { Container, Row, Col } from "react-bootstrap";
import logo from "../media/cut-logo2.png";

const Logo = () => {
  return (
    <Container id="logo-zone">
      <Row className="justify-content-center">
        <Col xs="10" sm="10" md="6" lg="5" xl="5" xxl="5">
          <Row className="justify-content-center">
            <img src={logo} alt="logo" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Logo;
