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
      <div className="mainframe">
        <CardDeck className="carddeck">
          <CardCell
            title="Station Weather"
            link="/station/live"
            icon={station_history}
            bgcolor="#f2f2f2"
          />
          <CardCell
            title="Aviation Weather"
            link="/weather/aviation"
            icon={weather_aviation}
            bgcolor="#f2f2f2"
          />
          <CardCell
            title="IoT"
            link="/iot/graph"
            icon={iot}
            bgcolor="#f2f2f2"
          />
          <CardCell
            title="APRS"
            link="/aprs/location"
            icon={aprs}
            bgcolor="#f2f2f2"
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            title="Flying"
            link="/aircraft"
            icon={aircraft}
            bgcolor="#f2f2f2"
          />
          <CardCell
            title="Photos"
            link="/galleries"
            icon={photos}
            bgcolor="#f2f2f2"
          />
          <CardCell
            title="Travel"
            link="/travel"
            icon={travel}
            bgcolor="#f2f2f2"
          />
          <CardCell
            title="Scuba"
            link="/scuba"
            icon={scuba}
            bgcolor="#f2f2f2"
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            title="Fishing"
            link="/fishing"
            icon={fishing}
            bgcolor="#f2f2f2"
          />
          <CardCell
            title="Oil & Gas"
            link="/oilgas/map"
            icon={oilgas}
            bgcolor="#f2f2f2"
          />
          <CardCell title="Blog" link="/blog" icon={blog} bgcolor="#f2f2f2" />
          <CardCell
            title="About"
            link="/about"
            icon={about}
            bgcolor="#f2f2f2"
          />
        </CardDeck>
        <div className="margin" />
      </div>
    </div>
  );
};

export default Home;
