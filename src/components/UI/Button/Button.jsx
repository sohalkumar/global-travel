/* eslint-disable react/prop-types */
import "./Button.css";

function Button({ className, text, href, btnColor, textColor, rounded }) {
  return (
    <>
      <button
        className={`${className} button ${rounded === true ? "round " : ""}`}
        style={{ color: textColor, background: btnColor }}
        onClick={() => {
          window.location.href = `/${href}`;
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
