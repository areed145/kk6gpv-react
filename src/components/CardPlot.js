import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap';
import Plot from 'react-plotly.js';

class CardPlot extends Component {
    render() {
        // console.log(this.props.def);
        if (this.props.def) {
            return (
                <Plot
                    data={this.props.def.data}
                    layout={this.props.def.layout}
                    useResizeHandler
                    style={{ width: '100%' }}
                    config={{ displayModeBar: false }}
                />
            );

        } else {
            return (
                <div>
                    <h6 align="center">None Available</h6>
                </div>
            );
        }
    }
}

export default CardPlot