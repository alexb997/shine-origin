import { Container, Row, Col, Card } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container id="aboutUs-zone">
      <Row className="justify-content-center">
        <Col lg="6" md="12" className="p-3">
          <Card className="card-aboutUs">
            <Card.Body>
              <Card.Title>
                <h3>Despre noi</h3>
              </Card.Title>
              <Card.Text>
                Shine Origin prestează servicii ecologice de spălătorie,
                curățătorie, călcătorie în domeniul perdelelor, draperiilor,
                însă ne dedicăm atenția și asupra fețelor de masă și huselor de
                scaun, în județul Iași, pentru persoanele fizice și juridice.
                Serviciile noastre includ demontarea și preluarea articolelor,
                spălarea/curățarea, călcarea, împachetarea, livrarea și montarea
                acestora.
              </Card.Text>
              <Card.Text>
                Activitatea noastră se desfășoară într-un cadru spațios,
                continuu igienizat, amenajat caracteristic, nedăunător mediului
                și dotat cu cele mai moderne aparate și produse profesionale, ce
                raspund exigențelor.
              </Card.Text>
              <Card.Text>
                Evită aglomerația până la spălătorie și beneficiază de serviciul
                nostru complet, unic în Iași, doar cu un simplu apel telefonic.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" md="12" className="p-3">
          <Card className="card-aboutUs">
            <Card.Body>
              <Card.Title>
                <h3>De ce noi?</h3>
              </Card.Title>
              <Card.Text>
                Oferim pachetul complet de servicii, garantat calitativ.
              </Card.Text>
              <Card.Text>
                Folosim detergenți, balsamuri și finisări premium, exclusiv
                ecologice, concepute pentru a atenua lărgirea sau strâmtorarea
                produsului textil, pentru detensionarea și împrospătarea
                țesăturii.
              </Card.Text>
              <Card.Text>
                Folosim aparate și produse profesionale potrivite sensibilității
                țesăturilor.
              </Card.Text>
              <Card.Text>
                După spălare și uscare, calcăm, împăturim și ambalăm cu grijă.
              </Card.Text>
              <Card.Text>Oferim un timp minim de execuție.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
