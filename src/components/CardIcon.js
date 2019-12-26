import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardHeader, CardTitle } from 'reactstrap';

class CardIcon extends Component {
    render() {
        return (
            <Card className="card">
                <CardHeader className="cardheader">
                    <CardTitle>
                        <h5>{this.props.title}</h5>
                    </CardTitle>
                </CardHeader>
                <CardBody className="cardbody" style={{"backgroundColor": this.props.bgcolor}}>
                    <a href={this.props.link}><CardImg src={this.props.img} /></a>
                </CardBody>
            </Card >
        );
    }
}

export default CardIcon
