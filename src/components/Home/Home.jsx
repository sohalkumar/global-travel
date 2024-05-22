import Container from "react-bootstrap/Container";
import Button from "../UI/Button/Button";
import "./Home.css";

function Home() {
  return (
    <div className="home" id="#home">
      {/* Heading */}
      <Container className="dark-overlay z-n1 d-flex justify-content-center text-center">
        <p className="travel-heading z-1 text-white">
          <span>TRAVEL</span> <br /> WITH US
        </p>
      </Container>

      {/* Read more button */}
      <Container className="d-flex justify-content-center">
        <Button
          className="position-relative z-1"
          text="Read More"
          href="#"
          btnColor="#ee590e"
          textColor="#ffffff"
          rounded={true}
        />
      </Container>

      {/* Form */}
      <Container className="position-relative z-1 mx-0 px-0">
        <Container
          className="form-title mt-3 fs-5 px-0"
          style={{ maxWidth: "fit-content", margin: "0 14rem" }}
        >
          <p
            className="bg-white"
            style={{
              color: "#0b4669",
              padding: "0.5rem 2.5rem",
            }}
          >
            Find Your Tour
          </p>
        </Container>
        {/* <Form></Form> */}
        {/* <Grid> */}

        {/* </Grid> */}
      </Container>
    </div>
  );
}

export default Home;
