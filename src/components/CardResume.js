import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
//   CardHeader,
//   CardTitle
} from "reactstrap";

class CardResume extends Component {
  render() {
    let bodystyle;
    bodystyle = {
      backgroundColor: this.props.bgcolor,
      display: "inline-block"
    };

    let img;
    if (this.props.img) {
      img = (
        <div
          style={{
            float: "left",
            height: "100px",
            width: "200px",
          }}
        >
          <CardImg
            style={{
              float: "left",
              height: "100%",
            }}
            src={this.props.img}
          />
        </div>
      );
    }

    let title;
    if (this.props.title) {
      title = (
        <CardText>
          <h5 align="left">{this.props.title}</h5>
        </CardText>
      );
    }

    let company;
    if (this.props.company) {
      company = (
        <CardText>
          <h6 align="left">{this.props.company}</h6>
        </CardText>
      );
    }

    let dates;
    if (this.props.dates) {
      dates = (
        <CardText>
          <h6 align="left">{this.props.dates}</h6>
        </CardText>
      );
    }

    let roles = [];
    if (this.props.roles) {
      for (const [, value] of this.props.roles.entries()) {
        roles.push(<li>{value}</li>);
      }
    }

    return (
      <Card className="card">
        <CardBody className="cardbody" style={bodystyle}>
          {img}
          {title}
          {company}
          {dates}
          <CardText>{roles}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default CardResume;