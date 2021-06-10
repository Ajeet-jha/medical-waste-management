import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./style.css";

function LowererFooter() {
  return (
    <section className="lowerer-footer">
      <div className="lowerer-footer__left">
        <div className="lowerer-footer__copy_right">
          © 2021 All Rights Reserved <strong>MED</strong>PRO Disposal, LLC
        </div>
        <div className="lowerer-footer__privacy_policy">
          <a href="https://www.medprodisposal.com/privacy-policy/">
            Privacy Policy
          </a>{" "}
          |
          <a href="https://www.medprodisposal.com/website-accessibility-statement-accessibility/">
            Website Accessibility
          </a>
        </div>
      </div>
      <div className="lower-footer_right">
        <div className="lowerer-footer__social">
          <span>
            <FacebookIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <LinkedInIcon />
          </span>
        </div>
      </div>
    </section>
  );
}

export default LowererFooter;
