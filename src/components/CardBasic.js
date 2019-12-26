import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap';
import Test from '../components/Test'

class CardBasic extends Component {
    render() {
        return (
            <Card className="card">
                <CardBody className="cardbody">
                    <Test x='[1,2,3]' y='[1,2,3]'/>
                </CardBody>
            </Card >
        );
    }
}

export default CardBasic