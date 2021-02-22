import React from "react";
import { Container } from "react-bootstrap";

function Graphicsdesign() {
  return (
    <div>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>graphics design</h1>
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
            To build better branding, one need better and eye catching design,
            we aspires and work closely to make the design so presentable that
            speaks the brands out of it.
          </p>

          <h5 style={{ fontWeight: "bold" }}>Services:</h5>
          <p>
            Logo Design, Brochure/Flyers Design, ID Card Design, Visiting Card
            Design, Banner Design, Social Media Posture and Post Image Design,
            Book Cover Design and any design that can be done with the computer.
          </p>

          <h5 style={{ fontWeight: "bold" }}>Technology We Use:</h5>
          <p>
            Adobe Photoshop. Adobe XD, Adobe Illustrator, Adobe InDesign, Corel
            Draw, PicsArt, DesignBold
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Graphicsdesign;
