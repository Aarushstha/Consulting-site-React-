import React from "react";
import Foot from "./Images/foot.png";
import "../src/Footer.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col>
          <img
            src={Foot}
            alt="footer"
            style={{ height: "75px", width: "105px" }}
          />
          {/* <p>
            Vine Software Innovation Company is the technology firm under DL &
            Son’s that specializes and works on making people link with
            technology by providing various services and software as well as
            hardware solutions in an effective way.
          </p> */}
          <p>Gongabu,Kathmandu</p>
          <p>info@vsic.com.np</p>
          <p style={{ fontWeight: "bolder" }}>(+977)9843681599</p>
          <Link to="/home">www.vsic.com.np</Link>
        </Col>

        <Col style={{ marginTop: "2%", textAlign: "center" }}>
          <h5> Recent News</h5>
        </Col>

        <Col
          className="foot"
          style={{ marginTop: "2%", textAlign: "center", lineHeight: "2.5" }}
        >
          <h5>Quick Links</h5>
          <a href="/portfolio">Portfolio</a>
          <br />
          <a href="/whychooseus">Why Choose Us</a>
          <br />
          <a href="/career">Career</a>
          <br />
          <a href="/aboutus">About Us</a>
          <br />
          <a href="/contactus">Contact Us</a>
          <br />
        </Col>

        <Col
          className="foots"
          style={{ marginTop: "2%", textAlign: "center", lineHeight: "2.5" }}
        >
          <h5>Platforms</h5>
          <a href="https://saralnotes.com/" target="_blank" rel="noreferrer">
            Saral Notes
          </a>
          <br />
          <a
            href="https://www.sajilobyapar.com/"
            target="_blank"
            rel="noreferrer"
          >
            Sajilo Byapar
          </a>
          <br />
          <a
            href="http://roomsfindernepal.com"
            target="_blank"
            rel="noreferrer"
          >
            Rooms Finder
          </a>
          <br />
          <a href="http://khajakhau.com" target="_blank" rel="noreferrer">
            Khaja Khau
          </a>
          <br />
          <a
            href="https://theincrediblenepal.com"
            target="_blank"
            rel="noreferrer"
          >
            Incredible Nepal
          </a>
          <br />
          <a href="http://nayakantipur.com" target="_blank" rel="noreferrer">
            Naya kantipur
          </a>
          <br />
          <p>Ticket Sewa(proposed)</p>
        </Col>

        <Col style={{ marginTop: "2%", textAlign: "center", lineHeight: "2" }}>
          <h5> Support</h5>

          <p>Privacy</p>
          <p>Sitemap</p>
          <p>Disclaimer</p>
          <p>Terms & Condition</p>
        </Col>
      </Row>
      <hr
        style={{
          border: " 1px solid white",
          marginTop: "4%",
          marginRight: "4%",
        }}
      />
      <div className="icons">
        <p> ©2021 VSIC. All Rights Reserved.</p>
        <span className="ic">
          <a
            href="https://www.facebook.com/vinesic"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/company/vsic/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://www.instagram.com/vinesoftware/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
