import { React } from "react";
import { Card } from "react-bootstrap";

function Portfoliocard(props) {
  return (
    <div class="pb-5 pr-1">
      <a href={props.portLink}>
        <Card
          style={{
            width: "20rem",
            height: "320px",
            margin: "20px",
            textAlign: "center",
          }}
        >
          <Card.Img
            variant="top"
            src={props.portImage}
            style={{ height: "230px" }}
          />
          <Card.Body style={{ lineHeight: "0" }}>
            <Card.Title style={{ color: "#347a2a" }}>
              {props.portName}
            </Card.Title>
            <Card.Text style={{ fontFamily: "Raleway", color: "#777777" }}>
              {props.portAbout}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default Portfoliocard;
