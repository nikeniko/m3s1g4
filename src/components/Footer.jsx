import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <footer className="bg-light text-center text-lg-start">
        <Container className="p-4">
          <Row>
            <Col lg={6} md={12} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">MyBooks</h5>
              <p>
                This is a simple footer component created using React and
                Bootstrap.
              </p>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-dark">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Browse
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-dark">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Phone
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 MyBooks
        </div>
      </footer>
    );
  }
}

export default MyFooter;
