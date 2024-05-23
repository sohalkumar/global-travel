import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
import StyledHeading from "../UI/Typography/StyledHeading";

function Blog() {
  return (
    <>
      <div className="travel-container">
        <StyledHeading titleText={"OUR BLOG"} />
        <p className="text-center py-3 fw-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
          magni.
        </p>

        <div className="d-flex flex-column justify-content-center align-items-center flex-lg-row gap-5 mt-5">
          <Card border="white">
            <Card.Img
              variant="top"
              src="/src/assets/images/blog-image0.jpg"
            ></Card.Img>
            <Card.ImgOverlay
              style={{
                color: "white",
                margin: "0",
                padding: "0.5rem 1.5rem",
                backgroundColor: "#032738",
                maxWidth: "fit-content",
                maxHeight: "fit-content",
                borderRadius: 0,
              }}
            >
              <p>16 July 2019</p>
            </Card.ImgOverlay>
            <Card.Body className="px-0">
              <div className="d-flex justify-content-between py-1">
                <Card.Text style={{ color: "#0bdef9" }}>
                  Post by: Nisha Sharma
                </Card.Text>
                <Card.Text style={{ color: "#0bdef9" }}>
                  05 <span className="text-secondary">Likes</span> 06{" "}
                  <span className="text-secondary">Comments</span>
                </Card.Text>
              </div>
              <Card.Title className="py-2">
                <h3>More places to explore</h3>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                consequuntur eligendi at dignissimos nemo veniam facere optio
                molestiae dolor nesciunt? Accusantium aliquid eaque qui
                dignissimos voluptas? Non dolorem molestiae voluptatum illo
                maxime enim provident, libero doloribus possimus numquam
                recusandae iure officiis odio iusto minima omnis eius unde
                repellat fugiat. Officia?
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="white">
            <Card.Img
              variant="top"
              src="/src/assets/images/blog-image.jpg"
            ></Card.Img>
            <Card.ImgOverlay
              style={{
                color: "white",
                margin: "0",
                padding: "0.5rem 1.5rem",
                backgroundColor: "#032738",
                maxWidth: "fit-content",
                maxHeight: "fit-content",
                borderRadius: 0,
              }}
            >
              <p>21 Aug 2019</p>
            </Card.ImgOverlay>
            <Card.Body className="px-0">
              <div className="d-flex justify-content-between py-1">
                <Card.Text style={{ color: "#0bdef9" }}>
                  Post by: Nidhi Sharma
                </Card.Text>
                <Card.Text style={{ color: "#0bdef9" }}>
                  05 <span className="text-secondary">Likes</span> 06{" "}
                  <span className="text-secondary">Comments</span>
                </Card.Text>
              </div>
              <Card.Title className="py-2">
                <h3>More places to explore</h3>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                consequuntur eligendi at dignissimos nemo veniam facere optio
                molestiae dolor nesciunt? Accusantium aliquid eaque qui
                dignissimos voluptas? Non dolorem molestiae voluptatum illo
                maxime enim provident, libero doloribus possimus numquam
                recusandae iure officiis odio iusto minima omnis eius unde
                repellat fugiat. Officia?
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Blog;
