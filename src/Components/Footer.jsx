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
                
          &#169; Copyright 2022-present.

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
        </div>
      </div>
    </>
  );
};

export default Footer;
