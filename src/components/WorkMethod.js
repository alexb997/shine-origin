import { Container, Row, Col, Card } from "react-bootstrap";

const WorkMethod = () => {
  return (
    <Container id="work-zone">
      <Col>
        <Row className="justify-content-center">
          <h3>Cum lucram?</h3>
        </Row>
        <Row className="justify-content-center">
          <Col md="8" lg="2">
            <Card border="0" bg="transparent">
              <Card.Img
                variant="top"
                src="https://www.iconpacks.net/icons/1/free-phone-icon-14-thumb.png"
              />
              <Card.Body>
                <Card.Text>
                  1. Programati telefonic o intalnire:
                  <a className="a-white" href="tel:0754865695">
                    {" "}
                    0754865695{" "}
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg="2">
            <Card border="0" bg="transparent">
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/31/31520.png"
              />
              <Card.Body>
                <Card.Text>
                  2. Venim, demontam si preluam articolele dorite
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg="2">
            <Card border="0" bg="transparent">
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/3238/3238630.png"
              />
              <Card.Body>
                <Card.Text>3. Spalam si uscam eco perdelele</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg="2">
            <Card border="0" bg="transparent">
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/81/81840.png"
              />
              <Card.Body>
                <Card.Text>4. Calcam perdelele cu mare atentie</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg="2" className="justify-content-between">
            <Card border="0" bg="transparent">
              <Card.Img
                variant="top"
                src="https://static.thenounproject.com/png/38110-200.png"
              />
              <Card.Body>
                <Card.Text>5. Livram si montam articolele dvs.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default WorkMethod;
