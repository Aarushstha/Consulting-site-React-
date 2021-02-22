import React from "react";
import { Container } from "react-bootstrap";

function Creativewriting() {
  return (
    <div>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>Content writing</h1>
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
            Creative Writing is essential to make your voice heard by the
            potential customers so that they will reach to you in refined
            manner. The content writing is normally used to create an impactful
            presence of company to their potential customers about their
            mission, vision and other services they provide. Our content are not
            plagiarized from any sources but the pure creation
          </p>

          <h5 style={{ fontWeight: "bold" }}>Services:</h5>
          <p>
            Content Writing, Creative Writing for Website, Quote and tagline
            creation, Social Media Contents.
          </p>

          <h5 style={{ fontWeight: "bold" }}>Technology We Use:</h5>
          <p>Word, Docs, etc.</p>
        </div>
      </Container>
    </div>
  );
}

export default Creativewriting;
