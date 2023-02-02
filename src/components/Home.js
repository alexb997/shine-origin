import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container id="home-zone">
      <Row className="justify-content-center">
        <Col lg="6" md="12" className="p-3">
          <Card className="card-home">
            <Card.Body>
              <Card.Title>
                <h3>Despre noi</h3>
              </Card.Title>
              <Card.Text>
                Shine Origin prestează servicii ecologice de spălătorie,
                curățătorie, călcătorie în domeniul perdelelor, draperiilor și
                fețelor de masă, în județul Iași, pentru persoanele fizice și
                juridice. În sens larg, serviciile noastre includ demontarea și
                preluarea articolelor, spălarea/curățarea, călcarea,
                împachetarea, livrarea și montarea acestora.
              </Card.Text>
              <Card.Text>
                Activitatea noastră se desfășoară într-un cadru spațios,
                igienizat continuu, amenajat caracteristic, nedăunător mediului
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
          <Card className="card-home">
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
                țesăturii
              </Card.Text>
              <Card.Text>
                Folosim aparate și produse profesionale speciale pentru perdele,
                draperii și fețe de masă
              </Card.Text>
              <Card.Text>
                După spălare și uscare se calcă, se împăturesc și se ambalează
                cu grijă
              </Card.Text>
              <Card.Text>Avem un timp minim de execuție</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg="6" md="12" className="p-3">
          <Card className="card-home">
            <Card.Body>
              <Card.Title>
                <h3>De ce noi?</h3>
              </Card.Title>
              <Card.Text>
                Pentru ca suntem de gasca, spalam bine, puteti trimite copii sa
                lucreze aici sa învete sa spele si va rugam mult mult mult mult
                mult mult mult mult mult mult mult mult mult mult mult mult mult
                mult mult mult mult mult mult mult mult mult mult mult mult mult
                mult mult mult mult mult mult mult mult mult!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
