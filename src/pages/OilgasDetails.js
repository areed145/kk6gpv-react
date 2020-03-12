import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import CardWellHeader from "../components/CardWellHeader";
import CardTags from "../components/CardTags";
import CardWellMap from "../components/CardWellMap";
import CardOffset from "../components/CardOffset";
import CardProdInj from "../components/CardProdInj";
import CardDecline from "../components/CardDecline";
import CardCRM from "../components/CardCRM";
import CardCyclic from "../components/CardCyclic";
// import Footer from "../components/Footer";
class DetailsOilgas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      api: this.props.match.params.api
    };
  }

  render() {
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <div className="mainframe" />
          <div className="margin" />
          {/* <Footer /> */}
        </div>
      );
    } else {
      return (
        <div>
          <div className="mainframe">
            <CardDeck className="carddeck">
              <CardWellHeader api={this.state.api} />
              <CardWellMap
                api={this.state.api}
                title="Well Location"
                mapstyle="mapbox://styles/areed145/ck6h5ywqd0aig1ioqwdynu6sb"
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardProdInj api={this.state.api} />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardTags api={this.state.api} />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardDecline api={this.state.api} />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardOffset api={this.state.api} />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCyclic api={this.state.api} />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCRM api={this.state.api} />
              <CardWellMap
                api={this.state.api}
                title="CRM Map"
                mapstyle="mapbox://styles/areed145/ck6h8yefz0dc11ir1qkwv4uy3"
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardWellMap
                api={this.state.api}
                title="IP Map"
                mapstyle="mapbox://styles/areed145/ck6h8m4th0cwp1imhqwofy2eq"
              />
              <CardWellMap
                api={this.state.api}
                title="Decline Map"
                mapstyle="mapbox://styles/areed145/ck5n8jaq92f1y1ilpmeruwstl"
              />
            </CardDeck>
            <div className="margin" />
            {/* <Footer /> */}
          </div>
        </div>
      );
    }
  }
}

export default DetailsOilgas;
