import React from "react";
import { CardDeck } from "reactstrap";
// import Footer from "../components/Footer";
import CardCell from "../components/CardCell";

import station_history from "../assets/icons/temperature.svg";
import weather_aviation from "../assets/icons/satellite.svg";
import iot from "../assets/icons/rfid.svg";
import aprs from "../assets/icons/aprs_color.svg";

import aircraft from "../assets/icons/paragliding.svg";
import photos from "../assets/icons/camera2.svg";
import travel from "../assets/icons/rv.svg";
import scuba from "../assets/icons/scuba.svg";

import fishing from "../assets/icons/fishing.svg";
import oilgas from "../assets/icons/pumpjack.svg";
import blog from "../assets/icons/blog.svg";
import about from "../assets/icons/id.svg";

const Home = () => {
  return (
    <div>
      <div className="main">
        <CardDeck className="carddeck">
          <CardCell
            title="Station Weather"
            link="/station/live"
            icon={station_history}
            bgcolor="rgb(15,184,234)"
          />
          <CardCell
            title="Aviation Weather"
            link="/weather/aviation"
            icon={weather_aviation}
            bgcolor="rgb(15,184,234)"
          />
          <CardCell
            title="IoT"
            link="/iot/graph"
            icon={iot}
            bgcolor="rgb(15,184,234)"
          />
          <CardCell
            title="APRS"
            link="/aprs/location"
            icon={aprs}
            bgcolor="rgb(15,184,234)"
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            title="Flying"
            link="/aircraft"
            icon={aircraft}
            bgcolor="rgb(15,184,234)"
          />
          <CardCell
            title="Photos"
            link="/galleries"
            icon={photos}
            bgcolor="rgb(15,184,234)"
          />
          <CardCell
            title="Travel"
            link="/travel"
            icon={travel}
            bgcolor="rgb(15,184,234)"
          />
          <CardCell
            title="Scuba"
            link="/scuba"
            icon={scuba}
            bgcolor="rgb(15,184,234)"
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            title="Fishing"
            link="/fishing"
            icon={fishing}
            bgcolor="rgb(15,184,234)"
          />
          <CardCell
            title="Oil & Gas"
            link="/oilgas/map"
            icon={oilgas}
            bgcolor="rgb(15,184,234)"
          />
          <CardCell
            title="Blog"
            link="/blog"
            icon={blog}
            bgcolor="rgb(15,184,234)"
          />
          <CardCell
            title="About"
            link="/about"
            icon={about}
            bgcolor="rgb(15,184,234)"
          />
        </CardDeck>
        <div className="margin" />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
