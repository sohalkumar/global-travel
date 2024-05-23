import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ContactBar from "./ContactBar";
import "./NavigationBar.css";
import logo from "/src/assets/images/logo-2.png";
import top_arrow from "/src/assets/images/top_arrow.png";

function NavigationBar() {
  return (
    <div className="top-bar">
      <div className="contact-bar">
        <img
          // src="/src/assets/images/top_arrow.png"
          src={top_arrow}
          className="d-none d-lg-block"
          style={{ background: "inherit" }}
        />
        <ContactBar className="" />
      </div>

      <div className="nav-bar">
        <Navbar expand="lg" className="navbar-dark p-0">
          <Container className="p-0 align-self-start">
            <Navbar.Brand href="/" className="p-0">
              <img
                // src="/src/assets/images/logo-2.png"
                src={logo}
              />
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
    </div>
  );
}

export default NavigationBar;
