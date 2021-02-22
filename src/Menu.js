import React from "react";
import "./Menu.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import DraftsIcon from "@material-ui/icons/Drafts";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import { Link } from "react-router-dom";
import { Row, Col, Nav, NavDropdown } from "react-bootstrap";
import Logo from "./Images/Logo.png";

import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <div className="menu  d-none d-sm-block">
      {/* top */}
      <div className="menu__top">
        <a
          href="https://vsic.com.np/webmail"
          target="_blank"
          rel="noopener norefer"
          style={{ paddingtop: "2%" }}
        >
          WebMail Access
        </a>
        <h4>
          <AccessTimeIcon />
          Sun - Sat 8.00 - 18.00, Saturday CLOSED
        </h4>
        <span>
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </span>
        <h5>
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </h5>
      </div>
      {/* middle */}
      <div className="menu__middle" style={{ paddingLeft: "2%" }}>
        <Link to="/home">
          <img
            src={Logo}
            alt="Abc-logo"
            style={{ height: "80px", width: "125px" }}
          />
        </Link>

        <div className="phone">
          <PhoneInTalkIcon />
          <div className="give-call">
            <span className="number">(+977)9843681599</span>
            <span className="text">Request call back</span>
          </div>
        </div>
        <div className="mail">
          <DraftsIcon />
          <div class="mail_us">
            <span className="text2">Write us</span>
            <span className="e-mail">info@vsic.com.np</span>
          </div>
        </div>
        <div className="address">
          <RoomTwoToneIcon />
          <div className="location">
            <span>Gongabu</span>
            <span>Kathmandu, Nepal </span>
          </div>
        </div>
      </div>
      {/* bottom */}

      {/*600629 */}
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#600629" }}
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="Company"
              class="ml-10"
              id="collasible-nav-dropdown"
              style={{ marginLeft: "35%" }}
            >
              <NavDropdown.Item href="/aboutus">Aboutus</NavDropdown.Item>
              <NavDropdown.Item href="/leadership">Leadership</NavDropdown.Item>
              <NavDropdown.Item href="/contactus">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="/whychooseus">
                Why Choose Us
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Solutions"
              id="collasible-nav-dropdown"
              style={{ marginLeft: "20%" }}
            >
              <Row style={{ width: "900px" }}>
                <Col>
                  <p style={{ marginLeft: "5%", fontWeight: "bold" }}>
                    Development
                  </p>
                  <NavDropdown.Item href="/mobileapp">
                    Mobile Application Design & Developement
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/webdesign">
                    Website Design & Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/softwaresolution">
                    PWA, Desktop and Software Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/domain&hosting">
                    Web Hosting and Domain Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/graphicsdesign">
                    Graphics Design and Brand Building
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/seo&digitalmarketing">
                    SEO and Digital Marketing ( Boosting){" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/creative&contentwriting">
                    Creative Writing and Content Marketing
                  </NavDropdown.Item>
                </Col>

                <Col>
                  <p style={{ marginLeft: "5%", fontWeight: "bold" }}>
                    Services & Support
                  </p>
                  <NavDropdown.Item href="/network&technical">
                    Networking and Technical Support{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/sales&support">
                    Computer, Laptop, and Accessories Sales and Support
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/hardware&accessoriessolitons">
                    Hardware and Accessories Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/support&consultation">
                    IT Support and Consultation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/digitalsolutions">
                    Digital Media Solutions
                  </NavDropdown.Item>
                </Col>
              </Row>
            </NavDropdown>

            <Nav.Link href="/portfolio" style={{ marginLeft: "20%" }}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="/blogs" style={{ marginLeft: "20%" }}>
              Blogs
            </Nav.Link>
            <Nav.Link href="/platforms" style={{ marginLeft: "20%" }}>
              Platforms
            </Nav.Link>
            <Nav.Link href="/career" style={{ marginLeft: "20%" }}>
              Career
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
