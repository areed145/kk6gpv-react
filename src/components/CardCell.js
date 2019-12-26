import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardText } from 'reactstrap';

class CardCell extends Component {
    render() {
        return (
            <Card className="card">
                <CardBody className="cardbody">
                    <CardImg src={this.props.img} />
                    <figcaption className="figure-caption">{this.props.caption}</figcaption>
                    <CardText>{this.props.text}</CardText>
                    <CardText>{this.props.text1}</CardText>
                    <CardText>{this.props.text2}</CardText>
                </CardBody>
            </Card >
        );
    }
}

export default CardCell