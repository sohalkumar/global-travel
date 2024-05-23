import "./Footer.css";
import facebook_icon from "/src/assets/icon/facebook.png";
import instagram_icon from "/src/assets/icon/instagram.png";
import linkedin_icon from "/src/assets/icon/linkedin.png";
import twitter_icon from "/src/assets/icon/Twitter.png";

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
        <div className="row gap-3">
          <div className="col-12 col-lg-3">
            <h3 className="py-3">CONTACT US</h3>
            <p className="px-0 pe-lg-4">
              123 Second Street Fifth Avenue, Manhattan, <br /> New York <br />{" "}
              +9876543210
            </p>
          </div>
          <div className="col-12 col-lg-4 px-2 px-lg-0">
            <h3 className="py-3">ADDITIONAL LINKS</h3>
            <a href="">About us</a>
            <a href="">Terms and conditions</a>
            <a href="">Privacy policy</a>
            <a href="">News</a>
            <a href="">Contact us</a>
          </div>
          <div className="col-12 col-lg-5 px-2 px-lg-0">
            <h3 className="py-3">CONTACT</h3>
            <div className="row">
              <input type="text" placeholder="Name" className="col px-2" />
              <input type="text" placeholder="Email" className="col px-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
