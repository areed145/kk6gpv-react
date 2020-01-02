import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap';
import Plot from 'react-plotly.js';

class CardDropdown extends Component {
    render() {
        return (
            <Card className="card">
                <CardHeader className="cardheader">
                    <CardTitle>
                        <h5>Time</h5>
                    </CardTitle>
                </CardHeader>
                <CardBody className="cardbody">
                    <div width="100vw">
                        <Select
                            name='time_int'
                            value={this.state.selected}
                            defaultInputValue=""
                            options={options}
                            placeholder={this.state.label}
                            searchable={false}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                </CardBody>
            </Card >
        );
    }
}

export default CardDropdown