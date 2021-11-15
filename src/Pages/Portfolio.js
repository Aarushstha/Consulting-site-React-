import { React, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Image from "../Images/foot.jpg";
import PortfolioCard from "./components/leadership/Portfoliocard";

function Portfolio() {
  let originalData = [
    {
      image: Image,
      name: "NSTRC",
      about: "Science Blog",
      category: "Web",
    },
    {
      image: Image,
      name: "Recent Nepal",
      about: "Web Portal",
      category: "Web",
      link: "/home",
    },
    {
      image: Image,
      name: " Troopers Tours and Travel",
      about: "News Portal",
      category: "Web",
    },
    {
      image: Image,
      name: "Aryama Consultancy ",
      about: "Educational Consultancy",
      category: "Web",
    },
    {
      image: Image,
      name: "Skill Best ",
      about: "Consultancy Website",
      category: "Web",
    },
    {
      image: Image,
      name: "Naya Kantipur ",
      about: "News Portal",
      category: "Web",
    },
    {
      image: Image,
      name: "Rooms Finder Nepal  ",
      about: "Real Estate ",
      category: "Web",
    },
    {
      image: Image,
      name: "Saral Notes ",
      about: "Education",
      category: "Web",
    },

    {
      image: Image,
      name: "Divya Mobile Shop  ",
      about: "Mobile Shop",
      category: "Web",
    },
    {
      image: Image,
      name: "Mount Treks Nepal ",
      about: "Travel and Tour ",
      category: "Web",
    },
    {
      image: Image,
      name: "Western Crystal Academy",
      about: "School",
      category: "Web",
    },
    {
      image: Image,
      name: "GR Design ",
      about: "Construction Company ",
      category: "Web",
    },

    {
      image: Image,
      name: "Shree Janata Academy",
      about: "School",
      category: "Web",
    },
    {
      image: Image,
      name: "New Modern School ",
      about: "School",
      category: "Web",
    },
    {
      image: Image,
      name: "Holyland Academy ",
      about: "School",
      category: "Web",
    },
    {
      image: Image,
      name: "Khaja Khau",
      about: "Food Website",
      category: "Web",
    },
    {
      image: Image,
      name: "School Management App ",
      about: "School Management",
      category: "mobile",
    },
    {
      image: Image,
      name: " Invoicing Software",
      about: "Invoice Software",
      category: "Web",
    },
    {
      image: Image,
      name: "Incredible Nepal",
      about: "Travel and Tours",
      category: "Web",
    },
    {
      image: Image,
      name: "Hamropustak",
      about: "eCommerce Book",
      category: "Web",
    },
    {
      image: Image,
      name: "Sajilo Byapar",
      about: "eCommerce Busniess",
      category: "Web",
    },
    {
      image: Image,
      name: "NCM Clean Nepal",
      about: "",
      category: "Marketing",
    },
    {
      image: Image,
      name: "Golden Cleaning Nepal",
      about: "",
      category: "Marketing",
    },
    {
      image: Image,
      name: "Smart Cleaning House",
      about: "",
      category: "Marketing",
    },
    {
      image: Image,
      name: "Coin Market",
      about: "",
      category: "Mobile",
    },
    {
      image: Image,
      name: "Rohi International ",
      about: "Furniture",
      category: "Mobile",
    },
    {
      image: Image,
      name: "Educateme-AI",
      about: "AI based News Portal ",
      category: "Web",
    },
    {
      image: Image,
      name: "Covid-19 Tracker",
      about: "Covid Data",
      category: "Web",
    },
  ];

  const [filteredData, setFilteredData] = useState(originalData);

  function ourFilter(category) {
    if (category === "all") {
      setFilteredData(originalData);
    } else {
      let filtered = originalData.filter((project) => {
        return project.category === category;
      });
      setFilteredData(filtered);
    }
  }

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

      <div
        style={{
          paddingLeft: "13%",
          paddingRight: "13%",
        }}
      >
        <Button
          onClick={() => ourFilter("all")}
          variant="outline-danger"
          style={{ marginRight: "10%" }}
        >
          All
        </Button>
        <Button
          onClick={() => ourFilter("Web")}
          variant="outline-danger"
          style={{ marginRight: "10%" }}
        >
          Web
        </Button>
        <Button
          onClick={() => ourFilter("Mobile")}
          variant="outline-danger"
          style={{ marginRight: "10%" }}
        >
          Mobile Applications
        </Button>

        <Button
          onClick={() => ourFilter("Graphics")}
          variant="outline-danger"
          style={{ marginRight: "10%" }}
        >
          Graphics Design
        </Button>

        <Button onClick={() => ourFilter("Marketing")} variant="outline-danger">
          Digital Marketing
        </Button>
      </div>

      <Container>
        <div className="portfolio" style={{ margin: "2%" }}>
          <Row>
            {filteredData.map((data) => {
              return (
                <PortfolioCard
                  portImage={data.image}
                  portName={data.name}
                  portAbout={data.about}
                  portLink={data.link}
                />
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Portfolio;
