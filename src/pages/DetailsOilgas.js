import React, { Component } from 'react'
import CardCell from '../components/CardCell'
import { CardDeck } from 'reactstrap';

class DetailsOilgas extends Component {
    render() {
        return (
            <div>
                <CardDeck className="carddeck">
                    <CardCell text={this.props.match.params.api} />
                </CardDeck>
                <div className="margin" />
            </div>
        );
    }
}

export default DetailsOilgas;