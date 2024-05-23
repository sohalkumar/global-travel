/* eslint-disable react/prop-types */
function StyledHeading({ titleText }) {
  return (
    <div className="styled-heading d-flex justify-content-center align-items-center text-center">
      <div
        className=""
        style={{
          border: "1px solid #afe3e0",
          width: "10%",
        }}
      ></div>
      <div className="px-0 text-center">
        <h1 className="fw-bold mx-0 px-3" style={{ minWidth: "fit-content" }}>
          {titleText}
        </h1>
      </div>
      <div
        className=""
        style={{
          border: "1px solid #afe3e0",
          height: "1px",
          width: "10%",
        }}
      ></div>
    </div>
  );
}

export default StyledHeading;
