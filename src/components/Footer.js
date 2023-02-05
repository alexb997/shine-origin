import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container id="footer-zone">
      <Row className="justify-content-start p-2">
        <Col sm="12" md="4">
          <Row className="justify-content-center p-3">
            <a
              className="a-footer"
              href="https://www.clickdimensions.com/links/TestPDFfile.pdf"
              target="_blank"
              title="Read PDF"
            >
              Clauze speciale
            </a>
          </Row>
          <Row className="justify-content-center p-3">Textul 2</Row>
          <Row className="justify-content-center p-3">Textul 3</Row>
        </Col>
        {/* <Col sm="12" md="4"></Col>
        <Col sm="12" md="4"></Col> */}
      </Row>
    </Container>
  );
};

export default Footer;
