import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap';

class GaugeTemp extends Component {
    render() {
        return (
            <Card className="card">
                <CardBody className="cardbody">
                    {this.props.value}
                </CardBody>
            </Card >
        );
    }
}

export default GaugeTemp