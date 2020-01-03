import React from "react";
import { CardDeck } from "reactstrap";
import CardCell from "../components/CardCell";
// import Footer from "../components/Footer";

import wxstation from "../assets/images/wxstation.jpg";

const StationInfo = () => {
  return (
    <div>
      <div className="main">
        <CardDeck className="carddeck">
          <CardCell
            title="Coconut Barometer"
            text={[
              "The Coconut Barometer station is a Ambient Weather WS-1400-IP connected to the ObserverIP, which communicates observation data exclusively to Weather Underground.",
              "Observation data is then retrieved from Weather Underground and stored in MongoDB. Plots and graphs are created with plotly for this Python / Flask site all running on a cloud Kubernetes cluster. This site is an update of the previous PHP/MySQL cloud LEMP stack, which was an update to the earliest plots created by a headless Raspberry Pi 3 running wx_scraper Python software I wrote for this purpose."
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            img={wxstation}
            title="Station Image"
          />
        </CardDeck>
        <div className="margin" />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default StationInfo;
