import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import Dipendra from "../Images/dipen.jpg";
import Susan from "../Images/Susan.jpg";
import Suchan from "../Images/suchan.jpg";
import Sushan from "../Images/sushan.jpg";
import Kushal from "../Images/Kushal.jpg";
import Ashmita from "../Images/ashmita.jpg";
import Paras from "../Images/paras.jpg";

function Leadership() {
  let originalData = [
    {
      name: "Dipendra",
      position: "management",
    },
    {
      name: "Susan",
      position: "creativeminds",
    },
  ];

  // const [filteredData, setFilteredData] = useState([]);

  // function ourFilter(position) {
  //   let filtered = originalData.filter((person) => {
  //     return person.position == position;
  //   });

  //   setFilteredData(filtered);
  // }

  // let filteredCards = filteredData.forEach(person=>{
  //   return()
  // })
  return (
    <div style={{ paddingBottom: "4%" }}>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>leadership</h1>
        <hr
          style={{
            border: " 3px solid #b50f5a",
            width: "30px",
            borderRadius: "5px",
            marginLeft: "0",
          }}
        />
      </Container>

      <div style={{ marginTop: "4%", marginLeft: "14%" }}>
        <Button variant="outline-danger" style={{ marginLeft: "10%" }}>
          Advisors
        </Button>
        <Button variant="outline-danger" style={{ marginLeft: "10%" }}>
          C-level
        </Button>

        <Button variant="outline-danger" style={{ marginLeft: "10%" }}>
          Management
        </Button>

        <Button variant="outline-danger" style={{ marginLeft: "10%" }}>
          Creative Minds
        </Button>
      </div>

      <Container>
        <div className="portfolio" style={{ margin: "2%" }}>
          <Row>
            <Card
              style={{
                width: "15rem",
                height: "320px",
                marginTop: "2%",
                textAlign: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={Dipendra}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#347a2a" }}>
                  Dipendra Bahadur Chand Thakuri
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway", color: "#777777" }}>
                  CEO
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "15rem",
                height: "320px",
                marginTop: "2%",
                textAlign: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={Dipendra}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#347a2a" }}>
                  Dipendra Bahadur Chand Thakuri
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway", color: "#777777" }}>
                  CEO
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "15rem",
                height: "320px",
                marginTop: "2%",
                textAlign: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={Dipendra}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#347a2a" }}>
                  Dipendra Bahadur Chand Thakuri
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway", color: "#777777" }}>
                  CEO
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "15rem",
                height: "320px",
                marginTop: "2%",
                textAlign: "center",
              }}
              data-position=""
            >
              <Card.Img
                variant="top"
                src={Dipendra}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#347a2a" }}>
                  Dipendra Bahadur Chand Thakuri
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway", color: "#777777" }}>
                  CEO
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Leadership;
