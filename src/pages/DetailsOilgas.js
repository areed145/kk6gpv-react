import React, { Component } from 'react'
import CardCell from '../components/CardCell'
import { CardDeck } from 'reactstrap';

class DetailsOilgas extends Component {
    render() {
        return (
            <CardDeck className="carddeck">
                <CardCell text={this.props.match.params.api} />
            </CardDeck>
        );
    }
}

export default DetailsOilgas;