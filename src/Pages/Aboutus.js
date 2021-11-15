import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div style={{ paddingBottom: "4%" }}>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>about us</h1>
        <hr
          style={{
            border: " 3px solid #b50f5a",
            width: "30px",
            borderRadius: "5px",
            marginLeft: "0%",
          }}
        />
      </Container>

      <Container>
        <Row>
          <Col>
            <div>
              <p style={{ textAlign: "justify" }}>
                Vine Software innovation Company(VSIC) formally established on
                Feb 25,2016, is the technology subsidiary firm under the DL &
                Son's Group.Before formally establishing as the technology
                firm,the founder of VSIC Mr.Dipendra was involved as the
                freelancing web developer creating the web design to the clients
                as per their requirements.After the necessities and requirements
                and planning, the company was officially registered on the OCR,
                Tripureshwor ,Kathmandu.
              </p>
            </div>

            <h5 style={{ fontWeight: "bold", marginTop: "5%" }}>Our mission</h5>
            <p style={{ textAlign: "justify" }}>
              The mission of the company is to make people innovate and learn a
              lot of things from using the technology. Every person involved in
              the company can be able to innovate life and empower themselves to
              make their lifestyle better. To create networks in various fields
              that directly involve the majority of people like
              education,food,business,travel,etc.
            </p>

            <h5 style={{ fontWeight: "bold", marginTop: "5%" }}>Vision</h5>
            <p style={{ textAlign: "justify" }}>
              The vision of the VSIC is to help all kinds of small and medium
              level organizations to fullfill the mission statements of the
              company.
            </p>

            <h5 style={{ fontWeight: "bold", marginTop: "5%" }}>Location</h5>
            <p style={{ textAlign: "justify" }}>
              Visit our cozy office at Gongabu,Kathmandu. Let's have coffee,talk
              marketing,,branding,identity and various ideas with solutions to
              empower society.
            </p>
          </Col>
          <div style={{ width: "25%", marginLeft: "5%" }}>
            <Col>
              <Button variant="success" style={{ width: "250px" }}>
                {" "}
                Company Overview
              </Button>
              <Button
                href="/career"
                variant="success"
                style={{ width: "250px", marginTop: "1%" }}
              >
                {" "}
                Careers
              </Button>
              <Button
                variant="success"
                style={{ width: "250px", marginTop: "1%" }}
              >
                {" "}
                Company History{" "}
              </Button>
              <Button
                variant="success"
                style={{ width: "250px", marginTop: "1%" }}
              >
                Partners
              </Button>
              <Button
                href="/portfolio"
                variant="success"
                style={{ width: "250px", marginTop: "1%" }}
              >
                {" "}
                Portfolio
              </Button>
              <Button
                href="/leadership"
                variant="success"
                style={{ width: "250px", marginTop: "1%" }}
              >
                {" "}
                Leadership
              </Button>

              <div
                style={{
                  marginTop: "20%",
                  height: "240px",
                  border: "1px solid #b3c87a",
                  background: "#b3c87a",
                }}
              >
                <h5 style={{ marginTop: "10%", textAlign: "center" }}>
                  how can we help you?
                </h5>
                <p
                  style={{
                    marginTop: "5%",
                    marginLeft: "10%",
                    marginRight: "2%",
                  }}
                >
                  Contact us at the VSIC office nearest to you or submit a
                  business inquiry online.
                </p>
                <Button
                  variant="success"
                  style={{
                    marginTop: "5%",
                    height: "40px",
                    width: "150px",
                    textAlign: "center",
                    background: "white",
                    color: "black",
                    fontSize: "14px",
                    border: "none",
                    marginLeft: "20%",
                    fontWeight: "bold",
                  }}
                >
                  <PhoneInTalkIcon
                    style={{
                      background: "green",
                      marginRight: "10%",
                      borderRadius: "5px",
                      fontSize: "large",
                    }}
                  />
                  <a
                    href="/contactus"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    CONTACTS
                  </a>
                </Button>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutus;
