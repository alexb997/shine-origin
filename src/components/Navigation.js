import { useState } from "react";
import { Container, Col, Navbar, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import { FaPhoneAlt } from "react-icons/fa";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded}>
      <Container className="justify-content-center">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Row className="navbar-links-zone">
            <Col lg="6" md="6">
              <Row className="justify-content-around">
                <Col lg="4" md="10">
                  <Link
                    onClick={() => setExpanded(false)}
                    to="home-zone"
                    spy={true}
                    smooth={true}
                    className="link-button"
                  >
                    ACASĂ
                  </Link>
                </Col>
                <Col Col lg="4" md="10">
                  <Link
                    onClick={() => setExpanded(false)}
                    to="work-zone"
                    spy={true}
                    smooth={true}
                    className="link-button"
                  >
                    MOD DE LUCRU
                  </Link>
                </Col>
                <Col Col lg="4" md="10">
                  <Link
                    onClick={() => setExpanded(false)}
                    to="contact-zone"
                    spy={true}
                    smooth={true}
                    className="link-button"
                  >
                    CONTACT
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col lg="3" md="6">
              <Row className="navbar-icons-zone ">
                <Col className="navbar-icon">
                  <a href="tel:0746323352">
                    <FaPhoneAlt size={"40"} />
                  </a>
                </Col>
                <Col className="navbar-icon">
                  <SocialIcon url="https://www.facebook.com/dragos.babulea" />
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
