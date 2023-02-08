import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container id="footer-zone">
      <Row className="justify-content-start p-2">
        <Col sm="12" md="4">
          <Row className="justify-content-center p-3">
            <a
              className="a-footer"
              href="https://drive.google.com/file/d/1rgHk85naXZjXopZtoK1f3buHqQiZ7l28/view?usp=share_link"
              target="_blank"
              title="Read PDF"
            >
              Clauze speciale
            </a>
          </Row>
          <Row className="justify-content-center p-3">
            <a className="a-footer" href="https://anpc.ro/" target="_blank">
              ANPC
            </a>
          </Row>
        </Col>
        <Col sm="12" md="4"></Col>
        <Col sm="12" md="4">
          <Row className="justify-content-center p-3">
            <a
              className="a-footer"
              href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
              target="_blank"
            >
              SOL
            </a>
          </Row>
          <Row className="justify-content-center p-3">
            <a
              className="a-footer"
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
            >
              ANPC - SAL
            </a>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
