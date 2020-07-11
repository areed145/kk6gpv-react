import React, { Component } from "react";
import CardCell from "../components/CardCell";
import { CardDeck } from "reactstrap";
import RenderLoader from "../components/RenderLoader";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      id: this.props.match.params.id,
      rows: [],
      map: [],
      title: [],
      count_photos: [],
      count_views: [],
      revision: 0,
    };
  }

  componentDidMount() {
    fetch(
      `https://kk6gpv-api.herokuapp.com/photos/gallery?id=${encodeURIComponent(
        this.state.id
      )}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            rows: result.rows,
            map: result.map,
            title: result.title,
            count_photos: result.count_photos,
            count_views: result.count_views,
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

    const header =
      this.state.title +
      " - " +
      this.state.count_photos +
      " - " +
      this.state.count_views +
      " views";

    const cards = this.state.rows.map((row, ridx) => {
      return (
        <CardDeck className="carddeck" key={ridx}>
          {row.map((photo, pidx) => {
            return (
              <CardCell
                key={pidx}
                phototitle={photo.caption}
                icon={photo.thumb}
                link={photo.kk6gpv_link}
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
            <CardDeck className="carddeck">
              <CardCell title={header} plot={[this.state.map]} />
            </CardDeck>
            {cards}
            <div className="margin" />
            {/* <Footer /> */}
          </div>
        </div>
      );
    }
  }
}

export default Gallery;
