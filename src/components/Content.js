import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-scroll";

const Content = () => {
  return (
    <Container id="Content-zone">
      <Row className="justify-content-center">
        <Col lg="4" md="12">
          <Card bg="whitesmoke">
            <Card.Body>
              <Card.Title>- Serviciu Complet -</Card.Title>
              <Card.Subtitle>Unic în Iași</Card.Subtitle>
              <Card.Text>
                Te-ai săturat de perdele murdare și prăfuite? Îți dorești să le
                poți spăla, dar să rămână timp și pentru tine?
              </Card.Text>
              <Card.Text>
                Noi te putem ajuta! E nevoie de un simplu apel telefonic.
              </Card.Text>
              <Link
                to="contact-zone"
                spy={true}
                smooth={true}
                className="link-button"
              >
                <Button variant="primary">CONTACTAȚINE!</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
