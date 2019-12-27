import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap';
import Plot from 'react-plotly.js';

class CardPlot extends Component {
    render() {
        return (
            <Card className="card">
                <CardBody className="cardbody">
                    <div width="100vw">
                        <Plot
                            data={this.props.data}
                            layout={this.props.layout}
                            revision={this.props.revision}
                            // graphDiv="fig_td"
                            useResizeHandler
                            style={{ height: '100%' }}
                            config={{ displayModeBar: false }}
                        />
                    </div>
                </CardBody>
            </Card >
        );
    }
}

export default CardPlot