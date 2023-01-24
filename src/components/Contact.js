import { Container, Row, Col, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <Container id="contact-zone">
      <h3>Contactatine!</h3>
      <Row>
        <Col>
          <Card border="0" bg="transparent">
            <Card.Body>
              <Card.Title>Nr. de telefon:</Card.Title>
              <Card.Text>
                <a className="a-white" href="tel:0746323352">
                  {" "}
                  0746323352{" "}
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="0" bg="transparent">
            <Card.Body>
              <Card.Title>Adresa:</Card.Title>
              <Card.Text>Strada Antreprenorului 13</Card.Text>
            </Card.Body>
          </Card>
          <Card border="0" bg="transparent">
            <Card.Body>
              <Card.Title>Program:</Card.Title>
              <Card.Text>
                <Row className="justify-content-center">
                  Luni - Vineri: 9:00 - 17:00
                </Row>
                <Row className="justify-content-center">
                  Sambata - Duminica: Inchis
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="8" md="12" className="google-map-column">
          <iframe
            title="address-google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.201210008126!2d27.71000211508464!3d47.13432392847661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f84354b87b5f8e9%3A0xb358e0d42cff03cc!2sShine%20Origin%20-%20Spalatorie%20de%20perdele%20si%20draperii!5e0!3m2!1sro!2sro!4v1674528068684!5m2!1sro!2sro"
            width="100%"
            height="90%"
            style={{ border: "0" }}
            loading="lazy"
            className="google-map"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
