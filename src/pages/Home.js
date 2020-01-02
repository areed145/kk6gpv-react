import React from "react";
import { CardDeck } from "reactstrap";

import Footer from "../components/Footer";
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
            link="/station/history"
            icon={station_history}
            bgcolor="rgb(255, 145, 172)"
          />
          <CardCell
            title="Aviation Weather"
            link="/weather/aviation"
            icon={weather_aviation}
            bgcolor="rgb(255, 151, 133)"
          />
          <CardCell
            title="IoT"
            link="/iot"
            icon={iot}
            bgcolor="rgb(255, 208, 147)"
          />
          <CardCell
            title="APRS"
            link="/aprs/kk6gpv"
            icon={aprs}
            bgcolor="rgb(255, 236, 149)"
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            title="Flying"
            link="/aircraft"
            icon={aircraft}
            bgcolor="rgb(253, 255, 153)"
          />
          <CardCell
            title="Photos"
            link="/photos"
            icon={photos}
            bgcolor="rgb(205, 255, 172)"
          />
          <CardCell
            title="Travel"
            link="/travel"
            icon={travel}
            bgcolor="rgb(152, 255, 216)"
          />
          <CardCell
            title="Scuba"
            link="/scuba"
            icon={scuba}
            bgcolor="rgb(159, 225, 255)"
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            title="Fishing"
            link="/fishing"
            icon={fishing}
            bgcolor="rgb(159, 189, 255)"
          />
          <CardCell
            title="Oil & Gas"
            link="/oilgas/map"
            icon={oilgas}
            bgcolor="rgb(166, 159, 255)"
          />
          <CardCell
            title="Blog"
            link="/blog"
            icon={blog}
            bgcolor="rgb(226, 152, 255)"
          />
          <CardCell
            title="About"
            link="/about"
            icon={about}
            bgcolor="rgb(255, 152, 250)"
          />
        </CardDeck>
        <div className="margin" />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
