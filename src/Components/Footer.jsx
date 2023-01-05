import classes from "./Footer.module.css"
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
  return (
    <>
      <hr className="hr" />
      <div className={classes.container}>
        <div className={classes.newsLetter}>
          <div className="input-box">
            <label className={classes.label}>Newsletter</label>
            <input
              type="text"
              className={classes.field}
              required
              placeholder="Email Address"
            />
          </div>
            <button className={classes.subscribe}>Get Notified!</button>
        </div>
        <div className={classes.copyright}>
            <div className={classes.social}>
                <span className={classes.cap}>Follow Us</span>
            
           <div className={classes.icon}>
           <SocialIcon url="https://twitter.com" />
            <SocialIcon url="https://facebook.com" />
            <SocialIcon url="https://instagram.com" />
            <SocialIcon url="https://youtube.com" />
           </div>
           <span>
          &#169; Copyright 2022-present.

           </span>
            </div>

        </div>
        <div className="col-sm-3 margin-auto">
          <h3 className="f-s mb-m">Terms</h3>
          <p>Returns and Refunds</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
          <p>Shipping Policy</p>
          <p>Contact Us</p>
          <p>Cancellation Policy</p>
        </div>
        <div className="col-sm-3 margin-auto">
          <h3 className="f-s mb-m">Contact</h3>
          <p>Adress XXX/YYY/ZZZ</p>
          <p>+91X-XXX-XXX </p>
          <p>© 2022, Monika & Poornima</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
