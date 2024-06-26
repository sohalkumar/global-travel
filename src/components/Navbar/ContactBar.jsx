/* eslint-disable react/prop-types */
import Image from "react-bootstrap/Image";
import location from "/src/assets/images/1.png";
import telephone from "/src/assets/images/2.png";
import email from "/src/assets/images/3.png";

function ContactBar({ className }) {
  return (
    <div
      className={`${className} d-none d-lg-flex bg-white justify-content-end text-secondary py-0 gap-5`}
      style={{ paddingRight: "14rem" }}
    >
      <div
        className="d-flex align-items-center gap-1"
        style={{ minWidth: "fit-content" }}
      >
        <Image
          // src="/src/assets/images/1.png"
          src={location}
        />
        <p>145.street road new york</p>
      </div>
      <div
        className="d-flex align-items-center gap-1"
        style={{ minWidth: "fit-content" }}
      >
        <Image
          // src="/src/assets/images/2.png"
          src={telephone}
        />
        <p>+71 5678954378</p>
      </div>
      <div
        className="d-flex align-items-center gap-1"
        style={{ minWidth: "fit-content" }}
      >
        <Image
          // src="/src/assets/images/3.png"
          src={email}
        />
        <p>Demo@hmail.com</p>
      </div>
    </div>
  );
}

export default ContactBar;
