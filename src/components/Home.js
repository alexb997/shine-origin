import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container id="home-zone">
      <Row className="justify-content-center">
        <Col lg="6" md="12" className="p-3">
          <Card className="card-home">
            <Card.Body>
              <Card.Title>
                <h3>Spalatorie de perdele si draperii</h3>
              </Card.Title>
              <Card.Text>
                Te-ai saturat de perdelele murdare si pline de praf? Iti doresti
                sa le poti spala cu un simplu apel telefonic? De acum acest
                lucru este posibil! Stim cu totii cat de obositor este sa faci
                curatenie. Ai foarte multe lucruri de facut si fiecare dintre
                ele nesesita mult timp. Noi iti venim in ajutor! Prima
                spalatorie ecologica de perdele si draperii din Craiova si zona
                Olteniei care ofera servicii complete!
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
