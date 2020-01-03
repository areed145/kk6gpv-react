import React from "react";
import { CardDeck } from "reactstrap";
import CardCell from "../components/CardCell";
// import Footer from "../components/Footer";

import owens from "../assets/images/owens.jpg";
import kings from "../assets/images/kings.jpg";

const Fishing = () => {
  return (
    <div>
      <div className="main">
        <CardDeck className="carddeck">
          <CardCell
            img={owens}
            caption="Owens River, near Mammoth Lakes, CA"
            text={[
              "I try to go fishing often… Of course I never go as often as I’d like to. To be honest I wasn’t expecting it to be something I could keep up after moving to the Central Valley, but fly fishing around the Kernville / Lake Isabella area and trips to Kings River and Owens River has been a real treat."
            ]}
          />
          <CardCell
            img={kings}
            caption="Kings River, near Reedley, CA"
            text={[
              "The fish aren’t typically large and can be a chore to catch, but they are very rewarding and fun to catch. If nothing else, the scenery and hiking involved to reach cooler streams is worth all the effort."
            ]}
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            img="https://www.dreamflows.com/graphs/day.681.png"
            caption="Kern River flows above Fairview Dam"
          />
          <CardCell
            img="https://www.dreamflows.com/graphs/day.682.png"
            caption="Kern River flows below Fairview Dam"
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            img="https://www.dreamflows.com/graphs/day.104.png"
            caption="Kern River flows at Kernville"
          />
          <CardCell
            img="https://www.dreamflows.com/graphs/day.473.png"
            caption="Kern River flows above Borel Powerhouse"
          />
        </CardDeck>
        <CardDeck className="carddeck">
          <CardCell
            img="https://www.dreamflows.com/graphs/day.475.png"
            caption="Kern River flows below Democrat"
          />
          <CardCell
            img="https://www.dreamflows.com/graphs/day.667.png"
            caption="Kern River flows below Kern Canyon PH Div"
          />
        </CardDeck>
        <div className="margin" />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Fishing;
