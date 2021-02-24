import React from "react";
import { Container } from "react-bootstrap";

function Platforms() {
  return (
    <div style={{ marginBottom: "5%" }}>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>platforms</h1>
        <hr
          style={{
            border: " 3px solid #b50f5a",
            width: "30px",
            borderRadius: "5px",
            marginLeft: "0",
          }}
        />
      </Container>

      <Container>
        <p style={{ textAlign: "justify" }}>
          Apart from the services and software, the VSIC also technically
          supports the various platforms which are part of the mission to the
          network with the people to create an impact in the people's pfe with
          the technology. To understand the platform better: they are the
          individual trademarks (later as a separate company) of the founder
          Dipendra which are technically supported by th VSIC. It means even
          after the company is separately established,all the IT related works
          and other technical parts are handled by VSIC on a regular basis and
          revenue is generated in the company.
        </p>

        <h5 style={{ fontWeight: "bold" }}>Current Platforms of VSIC</h5>
        <hr
          style={{
            border: " 1px solid #600629",
            width: "1110px",
            borderRadius: "5px",
            marginLeft: "0",
          }}
        />

        <div>
          <p>1. Saral Notes(Educational Platform)</p>
          <div style={{ marginLeft: "3%" }}>
            <li>Saral Entrance</li>
            <li>Saral Talks</li>
            <li>Saral Empowerment</li>
            <li>Saral Councelpng</li>
          </div>
          <br />
          <p>2. Sajilo Byapar(Business/E-commerce Platform)</p>
          <p>3. Rooms Finder Nepal(Real Estate Platform)</p>
          <p>4. Incredible Nepal(Tourism Platform</p>
          <p>5. Khaja Khau(Food Ordering Platform</p>
          <p>6. Naya kantipur(Online News Portal)</p>
          <p>7. Saral Media(Media Platform)</p>
          <p>8. Ticket Sewa(Ticket Platform) *Proposed</p>
        </div>
      </Container>
    </div>
  );
}

export default Platforms;
