import React, { Component } from "react";
import ReactTags from "react-tag-autocomplete";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle
} from "reactstrap";

class CardTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      api: this.props.api,
      tags: [],
      suggestions: [
        { id: 1, name: "Slider" },
        { id: 2, name: "Gainer" },
        { id: 3, name: "Ramping Up" },
        { id: 4, name: "Declining" },
        { id: 5, name: "IPC" },
        { id: 6, name: "PIC" },
        { id: 7, name: "Active" },
        { id: 8, name: "Shut-In" },
        { id: 9, name: "Bad Data" },
        { id: 10, name: "Lease Line" },
        { id: 11, name: "Low Performer" },
        { id: 12, name: "High Performer" },
        { id: 13, name: "Stripper" },
        { id: 14, name: "Oversized" },
        { id: 15, name: "PIC" },
        { id: 16, name: "Damaged" },
        { id: 17, name: "Lease Line" },
        { id: 18, name: "Steam Breakthrough" },
        { id: 19, name: "Steam Block" },
        { id: 20, name: "High Depletion" },
        { id: 20, name: "Stalled Depletion" },
        { id: 21, name: "Under Injected" },
        { id: 22, name: "Over Injected" },
        { id: 23, name: "C" },
        { id: 24, name: "C1" },
        { id: 25, name: "K" },
        { id: 26, name: "K1" },
        { id: 27, name: "K2" },
        { id: 28, name: "R" },
        { id: 29, name: "R1" },
        { id: 30, name: "R2" },
        { id: 31, name: "No Production Data" },
        { id: 32, name: "Curtailment Candidate" }
      ]
    };
  }

  onDelete(i) {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags: tags });
    var tags_string = "";
    for (var ti = 0; ti < tags.length; ti++) {
      tags_string = tags_string + "tags=" + tags[ti].name + "&";
    }
    try {
      fetch(
        `https://kk6gpv-api.herokuapp.com/oilgas/tags/set?${tags_string}api=${encodeURIComponent(
          this.state.api
        )}`,
        {
          method: "PUT"
        }
      );
      //   if (!response.ok) {
      //     throw Error(response.statusText);
      //   }
    } catch (error) {
      this.setState({
        isLoaded: true
        // error
      });
    }
  }

  onAddition(tag) {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags: tags });
    var tags_string = "";
    for (var ti = 0; ti < tags.length; ti++) {
      tags_string = tags_string + "tags=" + tags[ti].name + "&";
    }
    try {
      fetch(
        `https://kk6gpv-api.herokuapp.com/oilgas/tags/set?${tags_string}api=${encodeURIComponent(
          this.state.api
        )}`,
        {
          method: "PUT"
        }
      );
      //   if (!response.ok) {
      //     throw Error(response.statusText);
      //   }
    } catch (error) {
      this.setState({
        isLoaded: true
        // error
      });
    }
  }

  async componentDidMount() {
    const api = encodeURIComponent(this.state.api);
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/oilgas/tags/get?api=${api}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        tags: res.tags
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        tags: []
      });
    }
  }

  render() {
    let bodystyle = { backgroundColor: this.props.bgcolor };
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <Card className="card">
          <CardHeader className="cardheader">
            <CardTitle>
              <h5 align="center">Tags</h5>
            </CardTitle>
          </CardHeader>
          <CardBody className="cardbody" style={bodystyle}>
            <div style={{ minHeight: "50px" }}>
              <div className="center">
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      );
    } else {
      try {
        return (
            <Card className="card">
            <CardHeader className="cardheader">
              <CardTitle>
                <h5 align="center">Tags</h5>
              </CardTitle>
            </CardHeader>
            <CardBody className="cardbody">
              <ReactTags
                tags={this.state.tags}
                suggestions={this.state.suggestions}
                onDelete={this.onDelete.bind(this)}
                onAddition={this.onAddition.bind(this)}
                allowBackspace={false}
              />
            </CardBody>
          </Card>
        );
      } catch {
        return "";
      }
    }
  }
}

export default CardTags;
