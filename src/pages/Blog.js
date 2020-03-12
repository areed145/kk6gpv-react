import React from "react";
import { CardDeck } from "reactstrap";
import CardCarousel from "../components/CardCarousel";
// import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div>
      <div className="mainframe">
        <CardDeck className="carddeck">
          <CardCarousel name="Plunger Lift Optimization" roles={["a", "b"]} />
        </CardDeck>
        <div className="margin" />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Blog;
