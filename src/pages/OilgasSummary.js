import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import CardSummary from "../components/CardSummary";

class OilgasSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tag: this.props.match.params.tag
    };
  }

  render() {
    return (
      <div>
        <div className="mainframe">
          <CardDeck className="carddeck">
            <CardSummary tag={this.state.tag} />
          </CardDeck>
          <div className="margin" />
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default OilgasSummary;
