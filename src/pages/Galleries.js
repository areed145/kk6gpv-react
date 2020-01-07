import React, { Component } from "react";
import CardCell from "../components/CardCell";
import { CardDeck } from "reactstrap";
// import Footer from "../components/Footer";

class Galleries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      rows: [],
      revision: 0
    };
  }

  componentDidMount() {
    fetch(`https://kk6gpv-api.herokuapp.com/photos/galleries`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            rows: result.rows
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded } = this.state;

    const cards = this.state.rows.map((row, index) => {
      return (
        <CardDeck className="carddeck">
          {row.map((gal, i) => {
            console.log(gal);
            return (
              <CardCell phototitle={gal.caption} icon={gal.thumb} link={gal.kk6gpv_link} />
            );
          })}
        </CardDeck>
      );
    });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <div className="main">
            <div className="center">
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div className="margin" />
          {/* <Footer /> */}
        </div>
      );
    } else {
      return (
        <div>
          <div className="main">
            {cards}
            <div className="margin" />
            {/* <Footer /> */}
          </div>
        </div>
      );
    }
  }
}

export default Galleries;
