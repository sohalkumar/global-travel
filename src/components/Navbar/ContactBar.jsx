/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function ContactBar({ className }) {
  return (
    <Container
      className={`${className} bg-white d-none d-lg-flex text-secondary py-3`}
    >
      <Container className="d-flex align-items-center gap-1">
        <Image src="/src/assets/images/1.png" />
        <p>145.street road new york</p>
      </Container>
      <Container className="d-flex align-items-center gap-1">
        <Image src="/src/assets/images/2.png" />
        <p>+71 5678954378</p>
      </Container>
      <Container className="d-flex align-items-center gap-1">
        <Image src="/src/assets/images/3.png" />
        <p>Demo@hmail.com</p>
      </Container>
    </Container>
  );
}

export default ContactBar;
