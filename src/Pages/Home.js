import React from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import Network from "../Images/networking.jpg";
import Program from "../Images/program.jpg";
import Marketing from "../Images/marketing.jpg";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import DraftsIcon from "@material-ui/icons/Drafts";
import Head from "../Images/head.svg";
import Chip from "../Images/chip.svg";
import Horse from "../Images/ghoda.svg";

function Home() {
  return (
    <div className="main" style={{ width: "100%" }}>
      <Carousel style={{ height: "100%" }}>
        <Carousel.Item interval={1000}>
          <img
            src={Network}
            alt="first slide"
            style={{ height: "500px", width: "100%" }}
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Networking</h3>
            <p style={{ color: "black" }}>We provide networking servies.</p>
            <Button>learnmore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            src={Program}
            alt="second slide"
            style={{ height: "500px", width: "100%" }}
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Coding</h3>
            <p style={{ color: "black" }}>
              Web Design & Development,Mobile Applications.
            </p>
            <Button>learnmore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Marketing}
            alt="Third slide"
            style={{ height: "500px", width: "100%" }}
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Marketing</h3>
            <p style={{ color: "black" }}> Social Advertising</p>
            <Button>learnmores</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/*Our essence*/}

      <div
        style={{
          background: "white",
          height: "450px",
        }}
      >
        <Container>
          <h2
            style={{
              textAlign: "center",
              fontSize: "36px",
              lineHeight: "38px",
              paddingTop: "3%",
            }}
          >
            our essence
          </h2>
          <hr
            style={{
              border: "3px solid #b50f5a",
              width: "50px",
              borderRadius: "5px",
            }}
          />
          <Row style={{ marginRight: "0", marginTop: "5%" }}>
            <Col>
              <img
                src={Head}
                alt="head"
                style={{ height: "18%", paddingLeft: "36%" }}
              />

              <p style={{ textAlign: "center" }}>Value Driven</p>

              <p
                class="px-4"
                style={{
                  textAlign: "justify",
                  fontSize: "13px",
                  color: "#777777",
                }}
              >
                We value every penny spent by the client and always try to give
                the best products to the client. Not only we provide the
                software with proper documentation but also the support after
                the sales of each service or product.
              </p>
            </Col>

            <Col>
              <img
                src={Horse}
                alt="horse"
                style={{ height: "18%", paddingLeft: "36%" }}
              />
              <p style={{ textAlign: "center" }}>Strategy & Operations</p>
              <p
                class="px-4"
                style={{
                  textAlign: "justify",
                  fontSize: "13px",
                  color: "#777777",
                }}
              >
                With the right strategy, anyone can take their business to a new
                height, We discuss the complexity of the business, ideas and
                make sure the right strategy is implemented solving and
                discussing the problem
              </p>
            </Col>

            <Col>
              <img
                src={Chip}
                alt="chip"
                style={{ height: "18%", paddingLeft: "37%" }}
              />
              <p style={{ textAlign: "center" }}>Technology</p>
              <p
                class="px-4"
                style={{
                  textAlign: "justify",
                  fontSize: "13px",
                  color: "#777777",
                }}
              >
                We always research, try and implement new technology to make the
                products and software best with the need of clients. The new
                technologies are discussed and used with the consent of the
                client to make it more efficient.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Our Cases*/}
      {/* <div
        style={{
          background: "white",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <Row style={{ marginRight: "0" }}>
          <Col>
            <Card style={{ width: "13rem", marginTop: "2%" }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Text>
                  Why education should be accessible to all?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "13rem", marginTop: "2%" }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Text>
                  How digital marketing helps you to generate leads?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "13rem", marginTop: "2%" }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Text>Needs of Management in the IT industry?</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "13rem", marginTop: "2%" }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Text>Entrepreneurship and its inside story?</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
 

      {/* Cards*/}
      {/* <Container>
        <div className="py-5">
          <h5 class="text-center text-white">INDUSTRIES WE SERVE</h5>
          <h1 style={{ textAlign: "center", color: "white" }}>
            Services We Deliver
            <br />
            we provide truly prominent IT solutions.
          </h1>
        </div>

        <Row class="mt-5">{serviceCards}</Row>
      </Container> */}

      {/* Banner*/}

      <div class="d-flex align-items-center justify-content-center mt-5 mb-5">
        <h3
          class="ml-5 mr-5"
          style={{
            color: "white",
          }}
        >
          Want to get yourself a call from us for doing great things <br /> with
          you anywhere in the world.
        </h3>
        <Button
          href="/contactus"
          variant="outline-light"
          style={{ fontSize: "20px" }}
        >
          Request Quote
        </Button>
      </div>

      {/* Testimonials */}
      <div className="Testimonials" style={{ background: "white" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            lineHeight: "38px",
            paddingTop: "3%",
          }}
        >
          client testimonials
        </h2>
        <hr
          style={{
            border: "3px solid #b50f5a",
            width: "50px",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Blogs */}

      <div className="blogs">
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            lineHeight: "38px",
            paddingTop: "3%",
            color: "white",
          }}
        >
          {" "}
          latest blogs
        </h2>
        <hr
          style={{
            border: "3px solid #b50f5a",
            width: "50px",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Appointment*/}

      <div className="Appointment pb-5 bg-white">
        <Container>
          <div>
            <h2
              style={{
                textAlign: "center",
                fontSize: "36px",
                lineHeight: "38px",
                paddingTop: "3%",
              }}
            >
              Request a call back.
            </h2>
            <hr
              style={{
                border: "3px solid #b50f5a",
                width: "50px",
                borderRadius: "5px",
              }}
            />
            <Row style={{ marginRight: "0" }}>
              <Col xs="12" md="6">
                <h2
                  style={{
                    fontSize: "20px",
                    marginLeft: "5%",
                    marginTop: "40%",
                  }}
                >
                  Do you have questions about how VSIC can help your company?
                  Send us an email and we’ll get in touch shortly, or phone
                  between 8:00 and 18:00 Monday to Friday — we would be
                  delighted to speak.
                </h2>
                <Row>
                  <PhoneInTalkIcon
                    style={{
                      color: "#600629",
                      marginLeft: "8%",
                      fontSize: "30px",
                    }}
                  />
                  <h5
                    style={{
                      color: "black",
                      fontWeight: "bolder",
                      marginLeft: "2%",
                    }}
                  >
                    (+977)9843681599
                  </h5>
                  <DraftsIcon
                    style={{
                      color: "#600629",
                      marginLeft: "4%",
                      fontSize: "30px",
                    }}
                  />
                  <h5
                    style={{
                      color: "black",
                      fontWeight: "bolder",
                      marginLeft: "2%",
                    }}
                  >
                    info@vsic.com.np
                  </h5>
                </Row>
              </Col>

              <Col xs="12" md="6">
                <div
                  style={{
                    border: "solid #e3dede",
                    height: "450px",
                    background: "white",
                    marginLeft: "20%",
                    marginTop: "8%",
                    borderRadius: "5%",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Raleway",
                      textAlign: "center",
                      paddingTop: "5%",
                    }}
                  >
                    {" "}
                    It's our Pleasure to have a chance to cooperate
                  </h4>
                  <Container>
                    <Form.Control
                      style={{ marginTop: "5%" }}
                      placeholder="Name*"
                    />
                    <Form.Control
                      style={{ marginTop: "5%" }}
                      placeholder="Email*"
                    />
                    <Form.Control
                      style={{ marginTop: "5%" }}
                      placeholder="Contact No*"
                    />
                    <Form.Control
                      style={{ marginTop: "5%" }}
                      placeholder="Organization Name*"
                    />
                    <Button
                      type="submit"
                      style={{
                        marginTop: "5%",
                        marginLeft: "32%",
                        background: "#b50f5a",
                        width: "125px",
                        border: "none",
                      }}
                    >
                      Submit
                    </Button>
                    <h5
                      style={{
                        textAlign: "center",
                        fontSize: "13px",
                        marginTop: "5%",
                      }}
                    >
                      Your details are kept strictly confidential as per our
                      Privacy Policy.
                    </h5>
                  </Container>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* Quotes */}

      {/* Form */}
    </div>
  );
}

export default Home;
