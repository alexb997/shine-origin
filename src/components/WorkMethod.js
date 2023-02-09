import { Container, Row, Col, Card } from "react-bootstrap";

const WorkMethod = () => {
  return (
    <Container id="work-zone">
      <Col>
        <Row className="justify-content-center">
          <Card border="0" bg="transparent">
            <Card.Body>
              <Card.Title>
                <h3>Cum lucrăm?</h3>
              </Card.Title>
              <Card.Text>
                <h4>
                  Acesta este procesul nostru de lucru, începând de la primirea
                  comenzii, până la livrarea și montarea produselor acasă la
                  tine.
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-center">
          <Col md="8" lg="2">
            <Card border="0" bg="transparent">
              <Card.Img variant="top" src={require("../icons/pas1.png")} />
              <Card.Body>
                <Card.Text>
                  1. Programați telefonic o intâlnire:
                  <a className="a-white" href="tel:0746323352">
                    {" "}
                    0746323352{" "}
                  </a>
                </Card.Text>
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
                <Card.Text>3. Spălăm și uscăm eco perdelele</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg="2">
            <Card border="0" bg="transparent">
              <Card.Img variant="top" src={require("../icons/pas4.png")} />
              <Card.Body>
                <Card.Text>4. Călcăm perdelele cu mare atenție</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg="2" className="justify-content-between">
            <Card border="0" bg="transparent">
              <Card.Img variant="top" src={require("../icons/pas5.png")} />
              <Card.Body>
                <Card.Text>5. Livrăm și montăm articolele dvs.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default WorkMethod;
