import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import Image from "../Images/foot.jpg";

function Portfolio() {
  return (
    <div style={{ paddingBottom: "4%" }}>
      <Container>
        <h1 style={{ fontWeight: "bold", marginTop: "2%" }}>portfolio</h1>
        <hr
          style={{
            border: " 3px solid #b50f5a",
            width: "30px",
            borderRadius: "5px",
            marginLeft: "0",
          }}
        />
      </Container>

      <div>
        <Button variant="outline-danger" style={{ marginLeft: "10%" }}>
          All
        </Button>
        <Button variant="outline-danger" style={{ marginLeft: "10%" }}>
          Web Design
        </Button>

        <Button variant="outline-danger" style={{ marginLeft: "10%" }}>
          Mobile App
        </Button>

        <Button variant="outline-danger" style={{ marginLeft: "10%" }}>
          Graphics Design
        </Button>

        <Button variant="outline-danger" style={{ marginLeft: "10%" }}>
          Digital Marketing
        </Button>
      </div>

      <div className="portfolio" style={{ margin: "2%" }}>
        <Row>
          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>North Sky Society</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>
                Nepal Science & Technology Research Center(NSTRC)
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Troopers Tours And Travel pvt.ltd</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>
                Department of Water Induces & Disaster Management
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Recent Nepal</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Nepali Public</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Aryama Consultancy</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Skill Best Training & Consultancy</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Mount Trek & Tours</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Holyland Academy</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Western Crystal Academy</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Gopal Jewellery</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Dibya Mobile Shop</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>New Modern School</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>GR Design & Builders</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Mahakaleshowr</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Recent Nepal</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", marginTop: "2%" }}>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title style={{ color: "#347a2a" }}>
                Saral Entrance Applications
              </Card.Title>
              <Card.Text>Recent Nepal</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
}

export default Portfolio;
