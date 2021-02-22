import React from "react";
import { Container } from "react-bootstrap";

function Domainhosting() {
  return (
    <div>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>web & domain</h1>
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
            All the contents needs to be hosted on the website to make them
            public and hence use the easy to remember name i.e., domain, we do
            both the stuffs for our customers with relevant support.
          </p>

          <h5 style={{ fontWeight: "bold" }}>Technology We Use:</h5>
          <p>Shared Hosting, VPS Hosting, Dedicated Hosting</p>
        </div>
      </Container>
    </div>
  );
}

export default Domainhosting;
