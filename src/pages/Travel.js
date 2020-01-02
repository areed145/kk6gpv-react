import React from "react";
import { CardDeck } from "reactstrap";

import CardCell from "../components/CardCell";
import Footer from "../components/Footer";

import first_solo from "../assets/images/first_solo.jpg";
import kernville from "../assets/images/kernville.jpg";
import private_pilot from "../assets/images/private_pilot.jpg";

const Travel = () => {
  return (
    <div>
      <div className="main">
        <CardDeck className="carddeck">
          <CardCell
            img={first_solo}
            caption="First solo"
            text={["After a lifetime of interest in aviation, I started flying in 2011 after moving to Bakersfield."]}
          />
          <CardCell
            img={kernville}
            caption="Departing Kernville"
            text={["Southern California's great flying weather, many fantastic destinations from the coast, central valley, high desert, and mountains, and the close-knit aviation community have made it a great hobby for the last few years."]}
          />
          <CardCell
            img={private_pilot}
            caption="Newly minted private pilot"
            text={["The majority of my training has been at Meadows Field (BFL), with some at Mojave Air and Space Port (MHV), Tehachapi Municipal (TSP), and Shafter Municipal (EHF)."]}
          />
        </CardDeck>
        <div className="margin" />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Travel;
