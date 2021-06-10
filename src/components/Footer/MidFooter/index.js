import React from "react";
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import DraftsIcon from '@material-ui/icons/Drafts';

import "./style.css";

function MidFooter() {
    return (
        <section className="mid-footer">
            <div className="mid-footer__logo">
                <img src="https://30n3af1kwb3g2rjh8513mr6o-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/MP-MedPro-Disposal-Website-Logo-Footer-2019-300x62.png"
                    alt="logo"
                />
                <p>
                    <strong>Current MedPro Disposal customer?</strong>
                </p>
                <p>
                    Find all the resources to help manage your account on our <br />
                    <a href="https://www.medprodisposal.com/login">Customer Portal</a> <br />
          or contact our dedicated customer advocate team directly: <br />
                    <a href="tel:8669249339">866-924-9339</a>.
        </p>
            </div>
            <div className="mid-footer__quick_links">
                <p>Quick Links</p>
                <ul>
                    <li>
                        <a href="https://www.medprodisposal.com/medical-waste-disposal/">Medical Waste Disposal</a>
                    </li>
                    <li>
                        <a href="https://www.medprodisposal.com/biohazard-waste-disposal/">Biohazard Waste Disposal</a>
                    </li>
                    <li>
                        <a href="https://www.medprodisposal.com/sharps-container-disposal/">Sharps Container Disposal</a>
                    </li>
                    <li>
                        <a href="#openPopup">&gt;&gt; <strong>Request Pricing</strong></a>
                    </li>
                </ul>
            </div>
            <div className="mid-footer__additional_links">
                <p>Additional links</p>
                <ul>
                    <li>
                        <a href="https://www.medprodisposal.com/">Home</a>
                    </li>
                    <li>
                        <a href="https://www.medprodisposal.com/services/">Services &amp; Features</a>
                    </li>
                    <li>
                        <a href="https://www.medprodisposal.com/locations/" aria-current="page">Locations</a>
                    </li>
                    <li>
                        <a href="https://www.medprodisposal.com/blog/">Blog</a>
                    </li>
                </ul>
            </div>
            <div className="mid-footer__contact_info">
                <p>Contact Info</p>
                <ul>
                    <li>
                        <span>
                            <PinDropIcon color="secondary"/>
                        </span>
                        <span>
                            1751 W Diehl Rd #400, Naperville, IL <br /> 60563, United States
                        </span>
                    </li>
                    <li>
                        <span>
                            <PhoneForwardedIcon />
                        </span>
                        <span>
                        888-641-6131
                        </span>
                    </li>
                    <li>
                        <span>
                            <DraftsIcon />
                        </span>
                        <span>
                        sales@medprodisposal.com
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default MidFooter;
