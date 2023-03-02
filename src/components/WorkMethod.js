import { Container, Row, Col, Card } from "react-bootstrap";

const WorkMethod = () => {
  return (
    <Container id="work-zone">
      <Col>
        <Row className="justify-content-center">
          <Col md="8" lg="2">
            <Card border="0" bg="transparent">
              <Card.Img variant="top" src={require("../icons/pas1.png")} />
              <Card.Body>
                <Card.Text>1. Ne contactezi telefonic</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg="2">
            <Card border="0" bg="transparent">
              <Card.Img variant="top" src={require("../icons/pas2.png")} />
              <Card.Body>
                <Card.Text>
                  2. Venim, demontăm și preluăm articolele dorite
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg="2">
            <Card border="0" bg="transparent">
              <Card.Img variant="top" src={require("../icons/pas3.png")} />
              <Card.Body>
                <Card.Text>3. Spălăm și uscăm ecologic produsele</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg="2">
            <Card border="0" bg="transparent">
              <Card.Img variant="top" src={require("../icons/pas4.png")} />
              <Card.Body>
                <Card.Text>
                  4. Călcăm articolele cu deplină responsabilitate
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg="2" className="justify-content-between">
            <Card border="0" bg="transparent">
              <Card.Img variant="top" src={require("../icons/pas5.png")} />
              <Card.Body>
                <Card.Text>5. Livrăm și montăm articolele tale</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default WorkMethod;
