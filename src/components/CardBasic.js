import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap';
import Test from './MapTest'

class CardBasic extends Component {
    render() {
        return (
            <Card className="card">
                <CardBody className="cardbody">
                    <Test />
                </CardBody>
            </Card >
        );
    }
}

export default CardBasic