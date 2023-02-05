import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container id="contact-zone">
      <h3>
        Contacta<b>ț</b>i-ne!
      </h3>
      <Row className="p-3">
        <Col>
          <Card border="0" bg="transparent">
            <Card.Body>
              <Card.Title>Persoană fizică:</Card.Title>
              <Card.Text>
                Pentru comenzi și alte informații, contactați numărul{" "}
                <a href="tel:0758988722">0758-988.722</a>
              </Card.Text>
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
                  Sambata - Duminica: Închis
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="0" bg="transparent">
            <Card.Body>
              <Card.Title>Adresă de e-mail:</Card.Title>
              <Card.Text>
                <a
                  className="a-white"
                  href="mailto:dragos_dragos33@yahoo.com?subject=Mail from our Website"
                >
                  dragos_dragos33@yahoo.com
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="0" bg="transparent">
            <Card.Body>
              <Card.Title>Pagină Facebook:</Card.Title>
              <Card.Text>
                <a className="a-white" href="https://www.facebook.com/">
                  www.facebook.com
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" md="12" className="form-box">
          <Card border="0" bg="transparent">
            <Card.Body>
              <Card.Title>Persoană juridica:</Card.Title>
              <Card.Text>
                Pentru o ofertă referitoare business-ului tău vă rugăm
                contactați numărul <a href="tel:0758988722">0758-988.722</a>,
                sau completați formularul de mai jos:
              </Card.Text>
            </Card.Body>
          </Card>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Denumire societate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduceti numele companiei"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCUI/CIF">
              <Form.Label>CUI / CIF:</Form.Label>
              <Form.Control type="text" placeholder="Introduceti CUI / CIF" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Număr de contact:</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Introduceti nr. de telefon"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Mesaj:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Introduceti detalii"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Trimiteți
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="google-map-column">
          <iframe
            title="address-google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.201210008126!2d27.71000211508464!3d47.13432392847661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f84354b87b5f8e9%3A0xb358e0d42cff03cc!2sShine%20Origin%20-%20Spalatorie%20de%20perdele%20si%20draperii!5e0!3m2!1sro!2sro!4v1674528068684!5m2!1sro!2sro"
            width="100%"
            height="100%"
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
