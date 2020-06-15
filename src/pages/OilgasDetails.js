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
      isLoaded: false,
      api: this.props.match.params.api,
    };
  }

  async componentDidMount() {
    const api = encodeURIComponent(this.state.api);
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/oilgas/header/details?api=${api}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        header: res.header,
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
      });
    }
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
            <CardDeck>
              <CardWellHeader header={this.state.header} />
              <CardWellMap
                latitude={this.state.header.latitude}
                longitude={this.state.header.longitude}
                title="Well Location"
                mapstyle="mapbox://styles/areed145/ck6h5ywqd0aig1ioqwdynu6sb"
                zoom={16}
              />
            </CardDeck>
            <CardDeck>
              <CardProdInj api={this.state.api} />
            </CardDeck>
            <CardDeck>
              <CardTags api={this.state.api} />
            </CardDeck>
            <CardDeck>
              <CardDecline api={this.state.api} />
            </CardDeck>
            <CardDeck>
              <CardOffset api={this.state.api} />
            </CardDeck>
            <CardDeck>
              <CardCyclic api={this.state.api} />
            </CardDeck>
            <CardDeck>
              <CardCRM api={this.state.api} />
              <CardWellMap
                latitude={this.state.header.latitude}
                longitude={this.state.header.longitude}
                title="Well Location"
                mapstyle="mapbox://styles/areed145/ck6h8yefz0dc11ir1qkwv4uy3"
                zoom={16}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardWellMap
                latitude={this.state.header.latitude}
                longitude={this.state.header.longitude}
                title="Well Location"
                mapstyle="mapbox://styles/areed145/ck6h8m4th0cwp1imhqwofy2eq"
                zoom={16}
              />
              <CardWellMap
                latitude={this.state.header.latitude}
                longitude={this.state.header.longitude}
                title="Well Location"
                mapstyle="mapbox://styles/areed145/ck5n8jaq92f1y1ilpmeruwstl"
                zoom={16}
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
