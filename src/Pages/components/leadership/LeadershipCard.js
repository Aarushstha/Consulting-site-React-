import { React } from "react";
import { Card } from "react-bootstrap";

function Leadership(props) {
  return (
    <div style={{ paddingBottom: "4%" }}>
      <Card
        style={{
          width: "15rem",
          height: "320px",
          margin: "15px",
          textAlign: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={props.teamImage}
          style={{ height: "220px" }}
        />
        <Card.Body style={{ lineHeight: "0" }}>
          <Card.Title style={{ color: "#347a2a" }}>{props.teamName}</Card.Title>
          <Card.Text style={{ fontFamily: "Raleway", color: "#777777" }}>
            {props.teamPosition}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Leadership;
