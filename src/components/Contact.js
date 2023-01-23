import { Container, Row, Col, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <Container id="contact-zone">
      <h3>Contactaține!</h3>
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
              <Card.Text>Taramul de nicaieri, nr. 21</Card.Text>
            </Card.Body>
          </Card>
          <Card border="0" bg="transparent">
            <Card.Body>
              <Card.Title>Program:</Card.Title>
              <Card.Text>
                <Row className="justify-content-center">
                  Luni - Vineri: 9:00 - 18:00
                </Row>
                <Row className="justify-content-center">
                  Sambata: 12:00 - 16:00
                </Row>
                <Row className="justify-content-center">Duminica: Inchis</Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" md="12">
          <div className="google-map-wrapper">
            <iframe
              title="address-google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
              width="100%"
              height="70%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              className="google-map"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
