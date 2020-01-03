import React from "react";
import { CardDeck } from "reactstrap";
import CardCell from "../components/CardCell";
// import Footer from "../components/Footer";

import ant_hill_track from "../assets/images/ant_hill_track.png";
import comanche_track from "../assets/images/comanche_track.jpg";
import sand_city from "../assets/images/sand_city.jpg";
import wing from "../assets/images/wing.jpg";
import harness from "../assets/images/harness.jpg";
import reserve from "../assets/images/reserve.jpg";
import gofly from "../assets/images/gofly.jpg";
import helmet from "../assets/images/helmet.jpg";

const Paragliding = () => {
  return (
    <div>
      <div className="main">
        <CardDeck className="carddeck">
          <CardCell
            img={ant_hill_track}
            caption="GPS track of typical Ant Hill flight (side, top)"
            text={[
              "Paragliding is flying with a controllable air-filled wing. Wings are typically made of tent-like polyester and are composed of many cells. The wing is controlled by weight-shifting in your harness and by brake lines running to the trailing edge of the wing.",
              "Bakersfield has a couple great nearby paragliding spots. Ant Hill (sometimes known as Hang-glider Hill) is east of Hart Park, just a few miles out of town. With a 350ft profile the hill is not large, but 10-12 mph from the NNW produces some lovely flights. Especially considering its an easy after work destination."
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            img={comanche_track}
            caption="GPS track of typical Comanche Peak sled run"
            text={[
              "Also near town is Comanche Peak, southeast of Arvin, CA. Launch at 2800ft is about 700ft over LZ, and sled rides are common with thermals out over the flat spots. Caution must be paid to a barbed-wire fences near the LZ and alongside the road."
            ]}
          />
          <CardCell
            img={sand_city}
            caption="Me flying at Sand City near Monterey, CA"
            text={[
              "Great sites within a few hours include Dunlap, Santa Barbara (Elings Park and Coal Oil Pt), Marshall, Sand City, and Torrey Pines."
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            img={wing}
            caption="Ozone Buzz Z4"
            text={[
              "ML ENB wing. Nice performance, for the rating. Shaped leading edge and plenty of control authority"
            ]}
          />
          <CardCell
            img={harness}
            caption="Ozone Oxygen2"
            text={[
              "Harness. Eventually would like to get a less bulky one, but like the padding for now."
            ]}
          />
          <CardCell
            img={reserve}
            caption="Ozone Angel"
            text={["Reserve chute. Never used, thankfully!"]}
          />
          <CardCell
            img={gofly}
            caption="GoFly Project v4"
            text={[
              "Great variometer for soaring and paragliding. Bluetooth model connects to MySkyHy for instant uploading to LEONARDO!"
            ]}
          />
          <CardCell
            img={helmet}
            caption="Wills Wing Charly Insider"
            text={[
              "Fantastic full-face helmet. Lightweight with great airflow"
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            videosrc="https://www.youtube.com/embed/lod9Xuo2zxw?rel=0&amp;controls=0&amp;showinfo=0"
            caption="Video of paragliding at Ant Hill, Bakersfield"
          />
          <CardCell
            videosrc="https://www.youtube.com/embed/VD-7Tkmp7JU?rel=0&amp;controls=0&amp;showinfo=0"
            caption="Second video of paragliding at Ant Hill, Bakersfield"
          />
        </CardDeck>
        <div className="margin" />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Paragliding;
