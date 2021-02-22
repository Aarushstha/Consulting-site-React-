import React from "react";
import { Container } from "react-bootstrap";

function SeoDigital() {
  return (
    <div>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>
          seo & digital marketing
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
            With the ever increasing competition in the market, we generally use
            the more quality contents and use effective keywords while the
            customer searches besides that we also need to market in various
            platforms where there are lots of customers. In such Search Engine
            Optimization (SEO), and various approaches of digital marketing
            works out.
          </p>

          <h5 style={{ fontWeight: "bold" }}>Services:</h5>
          <p>
            Search Engine Optimization (SEO), Social Media Management Facebook/
            Instagram Boosting, Google AdWords, On Page and Off Page SEO, Image
            and Content Optimization, Email Marketing, Customer Segmentation.
          </p>

          <h5 style={{ fontWeight: "bold" }}>Technology We Use:</h5>
          <p>Various Google Tools, Mail Chimp, Coding, Back Link Sites, etc.</p>
        </div>
      </Container>
    </div>
  );
}

export default SeoDigital;
