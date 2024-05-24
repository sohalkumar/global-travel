import Button from "../UI/Button/Button";
import "./Footer.css";
import twitter_icon from "/src/assets/icon/Twitter.png";
import facebook_icon from "/src/assets/icon/facebook.png";
import instagram_icon from "/src/assets/icon/instagram.png";
import linkedin_icon from "/src/assets/icon/linkedin.png";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="d-flex gap-4 py-3">
          <img
            // src="/src/assets/icon/facebook.png"
            src={facebook_icon}
          />
          <img
            // src="/src/assets/icon/twitter.png"
            src={twitter_icon}
          />
          <img
            // src="/src/assets/icon/linkedin.png"
            src={linkedin_icon}
          />
          <img
            // src="/src/assets/icon/instagram.png"
            src={instagram_icon}
          />
        </div>
        <div className="d-flex flex-column justify-content-between flex-lg-row">
          <div>
            <h3 className="py-3">CONTACT US</h3>
            <p>
              123 Second Street Fifth <br /> Avenue,
              <br /> Manhattan, New York <br /> +9876543210
            </p>
          </div>

          <div>
            <h3 className="py-3">ADDITIONAL LINKS</h3>
            <a href="">About us</a>
            <a href="">Terms and conditions</a>
            <a href="">Privacy policy</a>
            <a href="">News</a>
            <a href="">Contact us</a>
          </div>

          <div>
            <h3 className="py-3">CONTACT</h3>
            <div>
              <div className="d-flex flex-column flex-lg-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-2"
                  style={{ width: "100%", minWidth: "unset" }}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="px-2"
                  style={{ width: "100%", minWidth: "unset" }}
                />
              </div>
            </div>
            <div className="mt-3">
              <textarea
                type="text"
                placeholder="Comment"
                className="px-2"
                style={{ width: "100%", minWidth: "unset" }}
              />
            </div>
            <div className="text-center text-lg-end">
              <Button
                text={"Submit"}
                btnColor={"#000"}
                onClick={() => {
                  window.location.href = "/#";
                }}
                textColor={"#fff"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
