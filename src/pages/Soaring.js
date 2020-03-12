import React from "react";
import { CardDeck } from "reactstrap";
import CardCell from "../components/CardCell";
// import Footer from "../components/Footer";

import soaring_tsp2 from "../assets/images/soaring_tsp2.jpg";
import sierra_wave2 from "../assets/images/sierra_wave2.jpg";
import soaring_tsp1 from "../assets/images/soaring_tsp1.jpg";

const Soaring = () => {
  return (
    <div>
      <div className="mainframe">
        <CardDeck className="carddeck">
          <CardCell
            img={soaring_tsp2}
            caption="Soaring in the Tehachapi convergence"
            text={[
              "Soaring is probably the most exciting form of flight. Instead of avoiding the sometimes extreme vertical movements of the atmosphere, soaring is about understanding them and harnessing their power.",
              "Incredible, hard-to-imagine feats are possible in gliders and the nearby Eastern Sierras are world-renowned for their soar ability."
            ]}
          />
          <CardCell
            img={sierra_wave2}
            caption="Sierra Mountain Wave, visible due to moisture"
            text={[
              "There are 4 main forms of lift in soaring: ridge lift where air is forced up by a slope (common form for paragliders), convergence where air masses meet (often terrain induced), thermals where blooms of air rise due to heat, and wave lift produced by downstream waves from disturbance by mountains (think of ripples downstream of rocks in a river).",
              "The Eastern Sierras are notorious for their mountain wave conditions. While transiting powered aircraft are often hit by intense turbulence, glider pilots seek out the upward moving air on the front edge of the wave to climb to spectacular airliner altitudes, all without an engine."
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            img={soaring_tsp1}
            caption="On ramp at L94"
            text={[
              "Just 45 minutes from Bakersfield, Tehachapi is known for Skylark North at Mountain Valley Airport (L94) and the fantastic flights it produces. Air from the Sierra Nevadas, Tehachapis, and Mojave Desert converge to form the Tehachapi convergence line, visible with enough moisture."
            ]}
          />
          <CardCell
            videosrc="https://www.youtube.com/embed/videoseries?list=PLZyZHBimaX8dI3KpzEu23irtrCmC04RLK&amp;showinfo=0"
            caption="Video of soaring at Mountain Valley Airport, Tehachapi, CA"
            text={[
              "Interestingly, nearly all NASA Space Shuttle pilots who came from the Air Force have received glider training at Mountain Valley Airport due to instruction they would have received with in Test Pilot School."
            ]}
          />
        </CardDeck>
        <div className="margin" />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Soaring;
