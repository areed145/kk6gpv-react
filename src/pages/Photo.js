import React, { Component } from "react";
import CardCell from "../components/CardCell";
import { CardDeck } from "reactstrap";
// import Footer from "../components/Footer";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      id: this.props.match.params.id,
      image: [],
      map: [],
      revision: 0
    };
  }

  componentDidMount() {
    fetch(
      `https://api.kk6gpv.net/photos/photo?id=${encodeURIComponent(
        this.state.id
      )}`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            image: result.image,
            map: result.map
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
            <CardDeck className="carddeck">
              <CardCell img={this.state.image.large} />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell plot={[this.state.map]} />
            </CardDeck>
            <div className="margin" />
            {/* <Footer /> */}
          </div>
        </div>
      );
    }
  }
}

export default Photo;
