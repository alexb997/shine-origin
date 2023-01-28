import { useState } from "react";
import { Container, Col, Navbar, Row } from "react-bootstrap";
import { Link } from "react-scroll";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      id="nav-zone"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Container className="justify-content-center">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Row className="navbar-links-zone">
            <Col lg="6" md="12">
              <Row className="justify-content-around">
                <Col lg="4" md="12" className="link-button">
                  <Link
                    onClick={() => setExpanded(false)}
                    to="home-zone"
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    ignoreCancelEvents={true}
                  >
                    ACASA
                  </Link>
                </Col>
                <Col Col lg="4" md="12" className="link-button">
                  <Link
                    onClick={() => setExpanded(false)}
                    to="work-zone"
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    ignoreCancelEvents={true}
                  >
                    MOD DE LUCRU
                  </Link>
                </Col>
                <Col Col lg="4" md="12" className="link-button">
                  <Link
                    onClick={() => setExpanded(false)}
                    to="contact-zone"
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    ignoreCancelEvents={true}
                  >
                    CONTACT
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col lg="3">
              <Row className="navbar-icons-zone ">
                <Col md="12" lg="6" className="navbar-icon">
                  <a href="tel:0746323352">
                    <img
                      width="50px"
                      height="50px"
                      alt="phone-icon"
                      src={require("../icons/phone.png")}
                    />
                  </a>
                </Col>
                <Col md="12" lg="6" className="navbar-icon">
                  <a href="https://www.facebook.com/dragos.babulea">
                    <img
                      width="50px"
                      height="50px"
                      alt="facebook-icon"
                      src={require("../icons/facebook.png")}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
