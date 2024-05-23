import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "../UI/Button/Button";
import "./Home.css";

function Home() {
  const [keywords, setKeywords] = useState("");
  const [category, setCategory] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [duration, setDuration] = useState(0.0);
  const [date, setDate] = useState("");
  const [maxPrice, setMaxPrice] = useState(0.0);

  const handleChange = (event, setState) => {
    setState(event.target.value);
  };

  const validateForm = (event) => {
    event.preventDefault();
    if (!keywords || !duration || !date) {
      alert(
        "Invalid form! Please fill - \n\
      Keywords, \n\
      Duration and \n\
      Date."
      );
    } else {
      alert(
        `Form submitted successfully with data - \n \
      Keywords - ${keywords}, \n\
      Category - ${category}, \n\
      Min Price - ${minPrice}, \n\
      Duration - ${duration}, \n\
      Date - ${date}, \n\
      Max Price - ${maxPrice},`
      );

      setKeywords("");
      setCategory("Any");
      setMinPrice(0.0);
      setDuration("");
      setDate("");
      setMaxPrice(0.0);
    }
  };

  return (
    <div className="home" id="#home">
      <div
        className="bg-black bg-opacity-50"
        style={{ padding: "3rem 0 6rem" }}
      >
        {/* Heading */}
        <Container className="travel-heading text-center pt-0 pb-4">
          <p className="text-white">
            <span>TRAVEL</span> <br /> WITH US
          </p>
        </Container>

        {/* Read more button */}
        <Container className="text-center">
          <Button
            text="Read More"
            href="#"
            btnColor="#ee590e"
            textColor="#ffffff"
            rounded={true}
            onClick={() => {
              window.location.href = "/#";
            }}
          />
        </Container>

        {/* Form */}
        <div className="form-container m-3 m-md-0">
          {/* Form title */}
          <div
            className="form-title fs-5 fw-bold"
            style={{ maxWidth: "fit-content" }}
          >
            <p className="bg-white px-4 py-2" style={{ color: "#0b4669" }}>
              Find Your Tour
            </p>
          </div>

          {/* Form */}
          <div className="bg-white bg-opacity-75 text-body-secondary p-3 p-lg-4">
            <form
              onSubmit={validateForm}
              className="d-flex flex-column align-items-center flex-lg-row gap-3 gap-lg-0 "
            >
              <div className="flex-grow-1">
                <Container className="row gap-2">
                  <Container className="d-flex flex-column col">
                    <label htmlFor="keywords"> Keywords</label>
                    <input
                      type="text"
                      id="keywords"
                      className="px-2"
                      value={keywords}
                      onChange={(event) => handleChange(event, setKeywords)}
                    />
                  </Container>

                  <Container className="d-flex flex-column col">
                    <label htmlFor="category">Category</label>
                    <select
                      id="category"
                      className="px-2"
                      onChange={(event) => handleChange(event, setCategory)}
                    >
                      <option value={"Any"}>Any</option>
                      <option value={"option1"}>Option 1</option>
                      <option value={"option2"}>Option 2</option>
                    </select>
                  </Container>
                  <Container className="d-flex flex-column col">
                    <label htmlFor="minPrice">Min Price</label>
                    <input
                      type="number"
                      min={0}
                      className="px-2"
                      placeholder="0.00"
                      onChange={(event) => handleChange(event, setMinPrice)}
                    />
                  </Container>
                </Container>

                <Container className="row gap-2 mt-3">
                  <Container className="col d-none d-lg-block"></Container>
                  <Container className="col min-w-100">
                    <select className="px-2 disable" disabled>
                      <option>Any</option>
                    </select>
                  </Container>
                  <Container className="col d-none d-lg-block"></Container>
                </Container>

                <Container className="row gap-2 mt-3">
                  <Container className="d-flex flex-column col">
                    <label htmlFor="duration">Duration</label>
                    <input
                      type="text"
                      id="duration"
                      className="px-2"
                      placeholder="Any"
                      onChange={(event) => handleChange(event, setDuration)}
                    />
                  </Container>

                  <Container className="d-flex flex-column col">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      id="date"
                      className="px-2"
                      onChange={(event) => handleChange(event, setDate)}
                    />
                  </Container>
                  <Container className="d-flex flex-column col">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input
                      type="number"
                      min={0}
                      className="px-2"
                      placeholder="0.00"
                      onChange={(event) => handleChange(event, setMaxPrice)}
                    />
                  </Container>
                </Container>
              </div>

              {/* Submit Button */}
              <Container style={{ maxWidth: "fit-content" }}>
                <Button
                  text="Search"
                  btnColor="#ee590e"
                  textColor="#ffffff"
                  style={{ padding: "0.75rem 5rem" }}
                  type="submit"
                />
              </Container>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
