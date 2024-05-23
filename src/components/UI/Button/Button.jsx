/* eslint-disable react/prop-types */
import "./Button.css";

function Button({
  className,
  text,
  btnColor,
  textColor,
  rounded,
  style,
  type,
  onClick,
}) {
  return (
    <>
      <button
        className={`${className} button ${
          rounded === true ? "rounded-pill" : ""
        }`}
        style={{ color: textColor, background: btnColor, ...style }}
        onClick={onClick}
        type={type || "button"}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
