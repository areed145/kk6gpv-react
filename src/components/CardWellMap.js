import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  //   Button,
  //   Modal,
  //   ModalHeader,
  //   ModalBody,
  //   CardImg,
} from "reactstrap";
import MapOil from "./MapOil";

class CardWellMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      modal: false,
      fade: true,
      title: this.props.title,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      mapstyle: this.props.mapstyle,
      zoom: this.props.zoom,
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      fade: !this.state.fade,
    });
  }

  render() {
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>
              <h5 align="center">{this.state.title}</h5>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div className="waiting">
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
          <Card>
            <CardHeader>
              <CardTitle>
                <h5>{this.state.title}</h5>
              </CardTitle>
            </CardHeader>
            <CardBody style={{ minHeight: "500px", height: "0px" }}>
              <MapOil
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                zoom={this.state.zoom}
                mapstyle={this.state.mapstyle}
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

export default CardWellMap;
