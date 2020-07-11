import React, { Component } from "react";
import CardCell from "../components/CardCell";
import { CardDeck } from "reactstrap";
import RenderLoader from "../components/RenderLoader";

class Galleries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      rows: [],
      revision: 0,
    };
  }

  componentDidMount() {
    fetch(`https://kk6gpv-api.herokuapp.com/photos/galleries`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            rows: result.rows,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded } = this.state;

    const cards = this.state.rows.map((row, ridx) => {
      return (
        <CardDeck className="carddeck" key={ridx}>
          {row.map((gal, gidx) => {
            return (
              <CardCell
                key={gidx}
                phototitle={gal.caption}
                icon={gal.thumb}
                link={gal.kk6gpv_link}
              />
            );
          })}
        </CardDeck>
      );
    });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <RenderLoader location="page" />;
    } else {
      return (
        <div>
          <div className="mainframe">
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
