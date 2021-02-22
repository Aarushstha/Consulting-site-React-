import React from "react";
import { Container } from "react-bootstrap";

function Webdesign() {
  return (
    <div>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>web design</h1>
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
            In today’s world, the website design has been the necessity to build
            brands and make identity in the market. We, at VSIC design and
            develop the website based on the requirements of the client and
            handover the website by proper documentation and trainings. We have
            various level of the website services based on what the client
            chooses from.
          </p>

          <h5 style={{ fontWeight: "bold" }}>Technology We Use:</h5>
          <p>
            MERN Stack (Mongo DB, Express.js, React.js, and Node.js).
            <br />
            MEAN Stack (Mongo DB, Angular.js, React.js, and Node.js).
            <br />
            MEVN Stack (Mongo DB, Vue.js, React.js, and Node.js).
            <br />
            HTML5, CSS3, Bootstrap, JavaScript, Sass, PHP, Laravel, <br />
            Code Ignitor, WordPress, Python Django, Flask, .Net, Java, MySQL,
            Firebase,
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Webdesign;
