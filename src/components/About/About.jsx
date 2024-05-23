import Container from "react-bootstrap/Container";
import Button from "../UI/Button/Button";
import StyledHeading from "../UI/Typography/StyledHeading";
import "./About.css";

function About() {
  return (
    <div className="about">
      <StyledHeading titleText={"OUR JOURNEY OF TRAVEL"} />
      <p className="mt-3 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        delectus incidunt quam molestias necessitatibus deleniti quod labore
        sunt atque accusa tium. Temporibus pariatur consectetur aspernatur
        dolore consequuntur nemo distinctio quas iste.
      </p>

      <div className="about-para-container position-relative">
        <div className="d-flex flex-column bg-white flex-lg-row py-4 px-3 px-lg-4">
          <p>
            {`Lorem ipsum is simple dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.`}
          </p>

          <img
            src="/src/assets/images/plane-img.png"
            alt="an aeroplane graphic"
            className="my-2"
          ></img>
        </div>
      </div>

      <Container className="text-center">
        <Button
          text={"Read More"}
          btnColor={"#ee590e"}
          onClick={() => {
            window.location.href = "/#";
          }}
          textColor={"#fff"}
          rounded={true}
        />
      </Container>
    </div>
  );
}

export default About;
