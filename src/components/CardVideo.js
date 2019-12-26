import React, { Component } from 'react'
import { Card, CardBody, CardText } from 'reactstrap';

class CardVideo extends Component {
    render() {
        return (
            <Card className="card">
                <CardBody className="cardbody">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" title={this.props.title} src={this.props.src} allowFullScreen></iframe>
                    </div>
                    <figcaption className="figure-caption">{this.props.caption}</figcaption>
                    <CardText>{this.props.text}</CardText>
                </CardBody>
            </Card >
        );
    }
}

export default CardVideo