import "./footer.scss";
import logo from "../../assets/images/Home-logo.png";

const Footer = () => {
  return (
    <div className="footerFullCont">
      <div className="footer-container">
        <div className="footer-up">
          <div className="first-list">
            <img src={logo} alt="" />
            <p>
              The biggest marketplace managed by Ideologist corp, which provides
              various kinds of daily needs and hobbies.
            </p>
          </div>
          <div className="footer-lists">
            <div className="second-list">
              <ul>
                <li>About Lenny</li>
                <li>Information</li>
                <li>Store Lactor</li>
                <li>Bulk Purchase</li>
                <li>Alteration Services</li>
                <li>Gift Delivery Service</li>
                <li>Live Station</li>
              </ul>
            </div>
            <div className="third-list">
              <ul>
                <li>About Policy</li>
                <li>FAQ</li>
                <li>Return Policy</li>
                <li>Privacy Policy</li>
                <li>Accessibillity</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="fourth-list">
              <ul>
                <li>Account</li>
                <li>Membership</li>
                <li>Address</li>
                <li>Cupons</li>
              </ul>
            </div>
            <div className="fifth-list">
              <ul>
                <li>Contact Us</li>
                <li>For Lenny Consumer<br />Complaint Services</li>
                <li>
                  (684) 555-0102 and <br /> curtis.weaver@example.com
                </li>
                <div className="borderFooter"></div>
                <li>Customers Complaint Service</li>
                <li>
                  Directorate Generate of the <br /> Republic of Indonesia
                </li>
                <li>(480) 555-0103</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <div className="copyright">
          <p>COPYRIGHT © LENNY CO., LTD. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="termsOfUse">
          <p>Terms of use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
