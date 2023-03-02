import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container id="home-zone" className="washing_background">
      <Row className="justify-content-center ">
        <Container id="title-zone">
          <Row className="justify-content-center">
            <Col lg="12" md="12" className="ribbon p-3">
              <h2>SPĂLĂTORIE ȘI CURĂȚĂTORIE DE PERDELE ȘI DRAPERII IAȘI</h2>
              <h2>Venim noi la tine - Beneficiază de serviciul complet</h2>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Home;
