import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "../UI/Button/Button";
import StyledHeading from "../UI/Typography/StyledHeading";
import "./Travel.css";

function Travel() {
  return (
    <>
      {/* "Offers for traveling section" */}
      <div className="travel-container">
        <StyledHeading titleText={"SELECT OFFERS FOR TRAVELING"} />
        <p className="text-center py-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="d-flex flex-column justify-content-center align-items-center flex-lg-row gap-5 mt-5">
          <Card
            border="white"
            className="text-center justify-content-center align-items-center"
          >
            <Card.Img
              className="w-75"
              variant="top"
              src="/src/assets/icon/travel-icon.png"
            ></Card.Img>
            <Card.Body className="px-0">
              <Card.Title>
                <h3>Different Countrys</h3>
              </Card.Title>
              <Card.Text>
                There are many variations of passages of lorem ipsum
              </Card.Text>
              <Button
                className="mt-4"
                text="Read More"
                textColor={"#fff"}
                btnColor="#ee590e"
                rounded={true}
                onClick={() => {
                  window.location = "/#";
                }}
              />
            </Card.Body>
          </Card>
          <Card
            border="white"
            className="text-center justify-content-center align-items-center"
          >
            <Card.Img
              className="w-75"
              variant="top"
              src="/src/assets/icon/travel-icon2.png"
            ></Card.Img>
            <Card.Body className="px-0">
              <Card.Title>
                <h3>Mountains Tours</h3>
              </Card.Title>
              <Card.Text>
                There are many variations of passages of lorem ipsum
              </Card.Text>
              <Button
                className="mt-4"
                text="Read More"
                textColor={"#fff"}
                btnColor="#ee590e"
                rounded={true}
                onClick={() => {
                  window.location = "/#";
                }}
              />
            </Card.Body>
          </Card>
          <Card
            border="white"
            className="text-center justify-content-center align-items-center"
          >
            <Card.Img
              className="w-75"
              variant="top"
              src="/src/assets/icon/travel-icon3.png"
            ></Card.Img>
            <Card.Body className="px-0">
              <Card.Title>
                <h3>Bus Tours</h3>
              </Card.Title>
              <Card.Text>
                There are many variations of passages of lorem ipsum
              </Card.Text>
              <Button
                className="mt-4"
                text="Read More"
                textColor={"#fff"}
                btnColor="#ee590e"
                rounded={true}
                onClick={() => {
                  window.location = "/#";
                }}
              />
            </Card.Body>
          </Card>
          <Card
            border="white"
            className="text-center justify-content-center align-items-center"
          >
            <Card.Img
              className="w-75"
              variant="top"
              src="/src/assets/icon/travel-icon4.png"
            ></Card.Img>
            <Card.Body className="px-0">
              <Card.Title>
                <h3>Summer Rest</h3>
              </Card.Title>
              <Card.Text>
                There are many variations of passages of lorem ipsum
              </Card.Text>
              <Button
                className="mt-4"
                text="Read More"
                textColor={"#fff"}
                btnColor="#ee590e"
                rounded={true}
                onClick={() => {
                  window.location = "/#";
                }}
              />
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* "Best things to do in london section" */}
      <div className="mb-5">
        <div className="london-container">
          <StyledHeading titleText={"BEST THINGS TO DO, LONDON"} />
          <p className="text-center py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur, consequuntur deserunt nisi quas distinctio tenetur eaque
            vitae praesentium nam tempore minus. Neque, perspiciatis officia
            odio quam ut doloremque placeat inventore.
          </p>
        </div>
        <img
          src="/src/assets/images/London.jpg"
          alt="graphic depicting London"
          width={"100%"}
        />
      </div>

      {/* "Best places around section" */}
      <div className="best-places-around-container">
        <StyledHeading titleText={"BEST PLACES AROUND"} />
        <p className="text-center py-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          consequuntur deserunt nisi quas distinctio tenetur eaque vitae
          praesentium nam tempore minus. Neque, perspiciatis officia odio quam
          ut doloremque placeat inventore.
        </p>

        <div className="d-flex flex-column justify-content-center align-items-center flex-lg-row gap-2 mt-5">
          <Card
            border="white"
            className="justify-content-center align-items-center"
          >
            <Card.Img variant="top" src="/src/assets/images/1.jpg"></Card.Img>
            <Card.Body>
              <Card.Title>
                <h3>Holiday Tour</h3>
              </Card.Title>
              <Card.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered altercation in soe suffk even
                slightly believable. If y be sure there
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            border="white"
            className="justify-content-center align-items-center"
          >
            <Card.Img variant="top" src="/src/assets/images/2.jpg"></Card.Img>
            <Card.Body>
              <Card.Title>
                <h3>New York</h3>
              </Card.Title>
              <Card.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered altercation in soe suffk even
                slightly believable. If y be sure there
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            border="white"
            className="justify-content-center align-items-center"
          >
            <Card.Img variant="top" src="/src/assets/images/3.jpg"></Card.Img>
            <Card.Body>
              <Card.Title>
                <h3>London</h3>
              </Card.Title>
              <Card.Text>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered altercation in soe suffk even
                slightly believable. If y be sure there
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* "Italy travel guide section" */}
      <div className="italy-travel-guide">
        <div className="bg-black bg-opacity-50"></div>
        <div className="italy-travel-text text-white text-center">
          <h1 className="fw-bold">ITALY TRAVEL GUIDE</h1>
          <p className="py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, odio harum, laudantium repudiandae commodi obcaecati officia fugiat omnis nisi enim rerum cupiditate accusantium aliquam et, cum veritatis qui libero nihil saepe a. Ipsum, laboriosam explicabo animi, modi dolorem quae nesciunt quos ex culpa beatae esse!</p>
        </div>

        <Container className="d-flex justify-content-center gap-4 pb-5">
          <Button
            text="Book Now"
            href="#"
            btnColor="#ee590e"
            textColor="#ffffff"
            rounded={true}
            onClick={() => {
              window.location.href = "/#";
            }}
          />
          <Button
            text="Get More"
            href="#"
            btnColor="#ee590e"
            textColor="#ffffff"
            rounded={true}
            onClick={() => {
              window.location.href = "/#";
            }}
          />
        </Container>
      </div>
    </>
  );
}

export default Travel;
