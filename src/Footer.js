import React from "react";
import Foot from "./Images/foot.png";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div
      style={{
        color: "white",
        paddingLeft: "5%",
        fontFamily: "raleway",
        paddingRight: "2%",
        paddingTop: "2%",
        height: "390px",
        background: "#44051f",
      }}
    >
      <Row>
        <Col>
          <img
            src={Foot}
            alt="footer"
            style={{ height: "75px", width: "105px" }}
          />
          <p>Gongabu,Kathmandu</p>
          <p>info@vsic.com.np</p>
          <p style={{ fontWeight: "bolder" }}>(+977)9843681599</p>
          <Link to="/home">www.vsic.com.np</Link>
        </Col>

        <Col style={{ marginTop: "2%" }}>
          <h5> Recent News</h5>
        </Col>

        <Col style={{ marginTop: "2%" }}>
          <h5 style={{ textAlign: "center" }}>Quick Links</h5>
          <Row>
            <Col style={{ fontSize: "15px", textAlign: "center" }}>
              <p>Sajilo Byapar </p>
              <p>Saral Notes </p>
              <p>Saral Talks</p>
              <p>Khaja Khau</p>
            </Col>
            <Col style={{ fontSize: "15px", textAlign: "center" }}>
              <p>Portfolio</p>
              <p>Why Choose Us</p>
              <p>News Update</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </Col>
          </Row>
        </Col>

        <Col style={{ marginTop: "2%", textAlign: "center" }}>
          <h5> Support</h5>
          <p>Forum Support</p>
          <p>Help & FAQ</p>
          <p>Contact Us</p>
        </Col>
      </Row>
      <hr
        style={{
          border: " 1px solid white",
          marginTop: "4%",
          marginRight: "4%",
        }}
      />
      <p> ©2021 VSIC. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
