import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import Dipendra from "../Images/dipen.jpg";

function Clevel() {
  return (
    <div>
      <Container>
        <div className="portfolio" style={{ margin: "2%" }}>
          <Row>
            <Card
              style={{
                width: "15rem",
                height: "320px",
                marginTop: "2%",
                textAlign: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={Dipendra}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#347a2a" }}>
                  Dipendra Bahadur Chand Thakuri
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway", color: "#777777" }}>
                  CEO
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "15rem",
                height: "320px",
                marginTop: "2%",
                textAlign: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={Dipendra}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#347a2a" }}>
                  Binod Bhatta
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway", color: "#777777" }}>
                  CSO
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "15rem",
                height: "320px",
                marginTop: "2%",
                textAlign: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={Dipendra}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#347a2a" }}>
                  Ashmita Shrestha
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway", color: "#777777" }}>
                  COO
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "15rem",
                height: "320px",
                marginTop: "2%",
                textAlign: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={Dipendra}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#347a2a" }}>
                  Dipendra Bahadur Chand Thakuri
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway", color: "#777777" }}>
                  CNO
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Clevel;
