import { React, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";

import LeadershipCard from "./components/leadership/LeadershipCard";
import Dipendra from "../Images/dipen.jpg";
import Susan from "../Images/Susan.jpg";
import Suchan from "../Images/suchan.jpg";
import Sushan from "../Images/sushan.jpg";
import Ashmita from "../Images/ashmita.jpg";
import Paras from "../Images/paras.jpg";

function Leadership() {
  let originalData = [
    {
      image: Dipendra,
      name: "Dipendra Bahadur Chand Thakuri",
      position: "CEO",
      level: "C-level",
    },
    {
      image: Susan,
      name: "Susan Shrestha",
      position: "Web Developer",
      level: "Creativeminds",
    },
    {
      image: Sushan,
      name: "Sushan Manandhar",
      position: "Advisor",
      level: "Advisor",
    },
    {
      image: Ashmita,
      name: "Ashmita Shrestha",
      position: "COO",
      level: "C-level",
    },
    {
      image: Paras,
      name: "Paras Dura",
      position: "Graphics Designer",
      level: "Creativeminds",
    },
    {
      image: Suchan,
      name: "Suchan Khadka",
      position: "Manager",
      level: "Management",
    },
  ];

  const [filteredData, setFilteredData] = useState(originalData);

  function ourFilter(level) {
    if (level === "all") {
      setFilteredData(originalData);
    } else {
      let filtered = originalData.filter((person) => {
        return person.level === level;
      });
      setFilteredData(filtered);
    }
  }

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

      <div>
        <Button
          onClick={() => ourFilter("all")}
          variant="outline-danger"
          style={{ marginLeft: "12%" }}
        >
          All
        </Button>
        <Button
          onClick={() => ourFilter("Advisor")}
          variant="outline-danger"
          style={{ marginLeft: "10%" }}
        >
          Advisors
        </Button>
        <Button
          onClick={() => ourFilter("C-level")}
          variant="outline-danger"
          style={{ marginLeft: "10%" }}
        >
          C-level
        </Button>

        <Button
          onClick={() => ourFilter("Management")}
          variant="outline-danger"
          style={{ marginLeft: "10%" }}
        >
          Management
        </Button>

        <Button
          onClick={() => ourFilter("Creativeminds")}
          variant="outline-danger"
          style={{ marginLeft: "10%" }}
        >
          Creative Minds
        </Button>
      </div>

      <Container>
        <div className="leadership" style={{ margin: "2%" }}>
          <Row>
            {filteredData.map((data) => {
              return (
                <LeadershipCard
                  teamImage={data.image}
                  teamName={data.name}
                  teamPosition={data.position}
                />
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Leadership;
