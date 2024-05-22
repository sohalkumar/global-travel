import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ContactBar from "./ContactBar";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="top-bar">
      <ContactBar className="contact-bar" />

      <Navbar expand="lg" className="navbar-dark p-0">
        <Container className="p-0 align-self-start">
          <Navbar.Brand href="/" className="p-0">
            <h3 className="fw-bold text-white p-0">Global Travel</h3>
          </Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
        </Container>
        <Container className="p-0 justify-content-between align-self-end">
          <Navbar.Collapse>
            <Container className="d-flex flex-column flex-md-row justify-content-around align-items-md-end gap-3 gap-md-0 p-0 py-md-3 pt-md-4 px-md-3">
              <a href="#home" className="text-white">
                Home
              </a>
              <a href="#about" className="text-white">
                About
              </a>
              <a href="#travel" className="text-white">
                Travel
              </a>
              <a href="#blog" className="text-white">
                Blog
              </a>
              <a href="#contact" className="text-white">
                Contact Us
              </a>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;