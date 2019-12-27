import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardText } from 'reactstrap';

class CardCell extends Component {
    render() {
        return (
            <Card className="card">
                <CardBody className="cardbody">
                    <CardImg src={this.props.img} />
                    <figcaption className="figure-caption">{this.props.caption}</figcaption>
                    <CardText>
                        <p>{this.props.text}</p>
                        <p>{this.props.text1}</p>
                        <p>{this.props.text2}</p>
                    </CardText>
                </CardBody>
            </Card >
        );
    }
}

export default CardCell