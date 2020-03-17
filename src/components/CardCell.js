import React, { Component } from "react";
import Plot from "react-plotly.js";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardHeader,
  CardTitle
} from "reactstrap";

class CardCell extends Component {
  render() {
    let bodystyle;
    bodystyle = { backgroundColor: this.props.bgcolor };

    let title;
    if (this.props.title) {
      title = (
        <CardHeader className="cardheader">
          <CardTitle>
            <h5 align="center">{this.props.title}</h5>
          </CardTitle>
        </CardHeader>
      );
    }

    let icon;
    if (this.props.icon) {
      icon = (
        <a href={this.props.link}>
          <CardImg style={{ width: "100%" }} src={this.props.icon} />
        </a>
      );
    }

    let img;
    if (this.props.img) {
      img = <CardImg src={this.props.img} />;
    }

    let loading;
    if (this.props.loading) {
      loading = (
        <div className="center">
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    let plot = [];
    if (this.props.plot) {
      if (this.props.plot[0]) {
        if (this.props.plot[0].data) {
          for (const [, value] of this.props.plot.entries()) {
            plot.push(
              <Plot
                data={value.data}
                layout={value.layout}
                revision={value.revision}
                useResizeHandler
                style={{ width: "100%" }}
                config={{
                  displayModeBar: false,
                  staticPlot: this.props.static
                }}
              />
            );
          }
        }
      } else {
        plot = (
          <div>
            <h6 align="center">None Available</h6>
          </div>
        );
      }
    }

    let video;
    if (this.props.videosrc) {
      video = (
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            title={this.props.videotitle}
            src={this.props.videosrc}
            allowFullScreen
          ></iframe>
        </div>
      );
    }

    let phototitle;
    if (this.props.phototitle) {
      phototitle = <CardText align="center">{this.props.phototitle}</CardText>;
    }

    let caption;
    if (this.props.caption) {
      caption = (
        <figcaption className="figure-caption">{this.props.caption}</figcaption>
      );
    }

    let text = [];
    if (this.props.text) {
      for (const [, value] of this.props.text.entries()) {
        text.push(<p>{value}</p>);
      }
    }

    return (
      <Card className="card">
        {title}
        <CardBody className="cardbody" style={bodystyle}>
          {loading}
          {icon}
          {img}
          {plot}
          {video}
          {phototitle}
          {caption}
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default CardCell;
