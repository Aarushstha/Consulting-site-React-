import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import DraftsIcon from "@material-ui/icons/Drafts";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import "./Contactus.css";

function Contactus() {
  return (
    <div>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>contact us</h1>
        <hr
          style={{
            border: " 3px solid #b50f5a",
            width: "30px",
            borderRadius: "5px",
            marginLeft: "0",
          }}
        />
      </Container>

      <Container>
        <div style={{ display: "flex" }}>
          <div style={{ width: "70%" }}>
            <p
              style={{
                color: "#777777",
                fontSize: "17px",
                marginTop: "3%",
                fontWeight: "bold",
              }}
            >
              Please let us know if you have a question, want to leave a
              comment, or would like further information about VSIC.
            </p>
            <br />
            <Row>
              <Col>
                <h5 style={{ fontWeight: "bold" }}>client inquiries</h5>
                <hr
                  style={{
                    border: " 1px solid #600629",
                    borderRadius: "5px",
                    marginLeft: "0",
                  }}
                />
                <div className="address">
                  <RoomTwoToneIcon
                    style={{ color: "black", fontSize: "30px" }}
                  />
                  <div className="location">
                    <span
                      style={{
                        fontWeight: "bold",
                        marginTop: "5%",
                        fontSize: "14px",
                      }}
                    >
                      Gongabu
                    </span>
                    <span
                      style={{
                        fontWeight: "bold",
                        marginTop: "5%",
                        fontSize: "14px",
                      }}
                    >
                      Kathmandu, Nepal{" "}
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "5%",
                    fontSize: "14px",
                  }}
                >
                  <PhoneInTalkIcon style={{ marginRight: "8%" }} />
                  0149470970
                </p>
                <DraftsIcon style={{ fontSize: "30px" }} />
                <span
                  style={{ marginLeft: "5%", fontSize: "14px" }}
                  className="e-mail"
                >
                  info@vsic.com.np
                </span>
                <br />
                <br />

                <FacebookIcon
                  style={{ fontSize: "30px", marginRight: "5%", color: "grey" }}
                />
                <InstagramIcon
                  style={{ fontSize: "30px", marginRight: "5%", color: "grey" }}
                />
                <YouTubeIcon
                  style={{ fontSize: "30px", marginRight: "5%", color: "grey" }}
                />
                <WhatsAppIcon
                  style={{ fontSize: "30px", marginRight: "5%", color: "grey" }}
                />
              </Col>

              <Col>
                <h5 style={{ fontWeight: "bold" }}>recruiting inquiries</h5>
                <hr
                  style={{
                    border: " 1px solid #600629",
                    borderRadius: "5px",
                    marginLeft: "0",
                  }}
                />
                <p style={{ marginTop: "1%", fontSize: "14px" }}>
                  For more information regarding current career opportunities,
                  please contact:
                </p>

                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "5%",
                    fontSize: "14px",
                  }}
                >
                  <PhoneIphoneIcon style={{ marginRight: "5%" }} />
                  (+977)9843681599
                </p>
                <DraftsIcon style={{ fontSize: "30px" }} />
                <span
                  style={{ marginLeft: "5%", fontSize: "14px" }}
                  className="e-mail"
                >
                  hr@vsic.com.np
                </span>
              </Col>

              <Col>
                <h5 style={{ fontWeight: "bold" }}>press inquiries</h5>
                <hr
                  style={{
                    border: " 1px solid #600629",
                    borderRadius: "5px",
                    marginLeft: "0",
                  }}
                />
                <p style={{ marginTop: "1%", fontSize: "14px" }}>
                  If you are a member of the press and would like to speak with
                  someone at Consulting, please contact:
                </p>

                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "5%",
                    fontSize: "14px",
                  }}
                >
                  <PhoneIphoneIcon style={{ marginRight: "5%" }} />
                  (+977)9843681599
                </p>
                <DraftsIcon style={{ fontSize: "30px" }} />
                <span
                  style={{ marginLeft: "5%", fontSize: "14px" }}
                  className="e-mail"
                >
                  hr@vsic.com.np
                </span>
              </Col>
            </Row>
          </div>

          <div
            className="Form"
            style={{ width: "20%", marginLeft: "5%", marginTop: "5" }}
          >
            <h4 style={{ fontFamily: "Raleway", fontWeight: "bold" }}>
              {" "}
              feedback form
            </h4>
            <hr
              style={{
                border: " 3px solid #b50f5a",
                width: "30px",
                borderRadius: "5px",
                marginLeft: "0",
              }}
            />

            <Form.Control
              style={{ marginTop: "5%", width: "300px" }}
              placeholder="Name*"
            />
            <Form.Control
              style={{ marginTop: "5%", width: "300px" }}
              placeholder="Email*"
            />
            <Form.Control
              style={{ marginTop: "5%", width: "300px" }}
              placeholder="Contact No*"
            />
            <Form.Control
              style={{ marginTop: "5%", width: "300px" }}
              placeholder="Organization Name*"
            />
            <Form.Group controlId="exampleForm.ControlTextarea1"></Form.Group>
            <Form.Control
              style={{ width: "300px", marginTop: "5%" }}
              placeholder="Your Message*"
              as="textarea"
              rows={3}
            />
            <Button
              type="submit"
              style={{ marginTop: "5%", background: "#347a2a", width: "125px" }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Container>

      <div className="map" style={{ marginTop: "5%", height: "500px" }}>
        <div style={{ padding: "2%" }}>
          <Button
            variant="outline-primary"
            href="https://www.google.com/maps/search/vine+software+innovation+company/@27.6756201,85.2569192,12.46z"
            target="_blank"
            rel="noopener norefer"
            style={{
              textDecoration: "none",
              paddingtop: "2%",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            View Google Map
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
