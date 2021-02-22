import React from "react";
import { Container } from "react-bootstrap";

function Softwaresoln() {
  return (
    <div>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>
          software solutions
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
            Simple Innovation leads to the complex solutions. With the simple
            yet powerful software we built with our team, we are constantly
            working in any means to create a sustainable solutions that helps
            people to help grow their analytical and decision making skills. We
            are constantly working in fields of cloud based software, desktop
            (standalone) technology and other customized tailored software.
          </p>

          <h5 style={{ fontWeight: "bold" }}>Technology We Use:</h5>
          <p>Java, .Net, Laravel, vue.js, Flutter, Frontend Technologies.</p>
        </div>
      </Container>
    </div>
  );
}

export default Softwaresoln;
