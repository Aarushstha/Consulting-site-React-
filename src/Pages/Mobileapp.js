import React from "react";
import { Container } from "react-bootstrap";

function Mobileapp() {
  return (
    <div>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>
          mobile application
        </h1>
        <hr
          style={{
            border: " 3px solid #b50f5a",
            width: "30px",
            borderRadius: "5px",
            marginLeft: "0%",
          }}
        />

        <div>
          <p>
            With the use of smart phone in every hands, it’s become more easy
            and efficient for the company to brand and help the customer to use
            their app to connect more easily with their potential customer. With
            proper requirements and discussion we design and develop the mobile
            apps for both android and iOS users
          </p>

          <h5 style={{ fontWeight: "bold" }}>Technology We Use:</h5>
          <p>Flutter, React Native, Java, Firebase</p>
        </div>
      </Container>
    </div>
  );
}

export default Mobileapp;
