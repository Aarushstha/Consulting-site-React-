import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./Menu";
import Footer from "./Footer";
import Home from "./Pages/Home";
import Portfolio from "../src/Pages/Portfolio";
import Platforms from "../src/Pages/Platforms";
import Blogs from "../src/Pages/Blogs";
import Career from "../src/Pages/Career";

/*Home Dropdown*/
import Aboutus from "./Pages/Aboutus";
import Leadership from "./Pages/Leadership";
import Contactus from "./Pages/Contactus";
import Whychooseus from "./Pages/Whychooseus";

/*megamenu Dropdown1*/
import Webdesign from "./Pages/Webdesign";
import Mobileapp from "./Pages/Mobileapp";
import Domainhosting from "./Pages/Domainhosting";
import Graphicsdesign from "./Pages/Graphicsdesign";
import Digitalmarketing from "./Pages/SeoDigital";
import Contentwriting from "./Pages/Creativewriting";

/*megamenu Dropdown2*/
import Softwaresoln from "./Pages/Softwaresoln";
import Networktech from "./Pages/Networktech";
import Salessupport from "./Pages/Salessupport";
import Hardwaresoln from "./Pages/Hardwaresoln";
import Supportconsult from "./Pages/Supportconsult";
import Digitalsolutions from "./Pages/digitalsoln";

function App() {
  return (
    <div className="app" style={{ width: "100%" }}>
      {/* Menu */}
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/platforms" exact component={Platforms} />
          <Route path="/career" exact component={Career} />
          <Route path="/blogs" exact component={Blogs} />

          {/* Home Dropdown*/}
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/leadership" exact component={Leadership} />
          <Route path="/contactus" exact component={Contactus} />
          <Route path="/whychooseus" exact component={Whychooseus} />

          {/* magamenu Developement*/}
          <Route path="/webdesign" exact component={Webdesign} />
          <Route path="/mobileapp" exact component={Mobileapp} />
          <Route path="/softwaresolution" exact component={Softwaresoln} />
          <Route path="/domain&hosting" exact component={Domainhosting} />
          <Route path="/graphicsdesign" exact component={Graphicsdesign} />
          <Route
            path="/seo&digitalmarketing"
            exact
            component={Digitalmarketing}
          />
          <Route
            path="/creative&contentwriting"
            exact
            component={Contentwriting}
          />

          {/* magamenu Services*/}
          <Route path="/network&technical" exact component={Networktech} />
          <Route path="/sales&support" exact component={Salessupport} />
          <Route
            path="/hardware&accessoriessolitons"
            exact
            component={Hardwaresoln}
          />
          <Route
            path="/support&consultation"
            exact
            component={Supportconsult}
          />
          <Route path="/digitalsolutions" exact component={Digitalsolutions} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
