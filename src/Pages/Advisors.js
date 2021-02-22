import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import Dipendra from "../Images/dipen.jpg";

function Advisors() {
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
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default Advisors;
