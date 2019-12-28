import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardTitle} from 'reactstrap';
import Plot from 'react-plotly.js';

class Gauge extends Component {

    state = {
        title: this.props.title,
        level: this.props.level,
        gmin: this.props.gmin,
        gmax: this.props.gmax,
        hw: this.props.hw,
        data: [],
        layout: [],
    }

    render() {

        var ws = 70;
        var ls = 25;
        // var gs = 360 - ws - (2 * ls);
        // var rot = 90;
        var hw = this.state.hw;
        var sz = 25;

        var level = this.state.level;
        var gmin = this.state.gmin;
        var gmax = this.state.gmax;
        var leveldisp = level;

        if (level > gmax) {
            leveldisp = gmax;
        }
        if (level < gmin) {
            leveldisp = gmin;
        }

        var degrees = 360 + 90 - ((leveldisp - gmin) / (gmax - gmin) * 360),
            radius = 0.75;
        var radians = degrees * Math.PI / 180;
        var x = radius * Math.cos(radians);
        var y = radius * Math.sin(radians);
        var mainPath = 'M -.0 -0.075 L .0 0.075 L ',
            mainPath2 = 'M -0.075 -0 L .075 0 L ',
            pathX = String(x),
            space = ' ',
            pathY = String(y),
            pathEnd = ' Z';
        var path = mainPath.concat(pathX, space, pathY, pathEnd);
        var path2 = mainPath2.concat(pathX, space, pathY, pathEnd);

        var data = [{
                type: 'scatter',
                x: [0],
                y: [0],
                marker: {
                    size: sz,
                    color: '#000000'
                },
                showlegend: false,
                hoverinfo: 'none'
            },
            {
                values: [22.5, 22.5, 22.5, 22.5, 22.5, 22.5, 22.5, 22.5, 22.5, 22.5, 22.5, 22.5, 22.5, 22.5, 22.5, 22.5],
                hoverinfo: 'none',
                rotation: -11.25,
                sort: false,
                text: ['N', 'NNW', 'NW', 'WNW', 'W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE'],
                textinfo: 'text',
                textposition: 'inside',
                marker: {
                    colors: [
                        '#f45f42',
                        '#f7856f',
                        '#e2aba1',
                        '#d8bdb8',
                        '#BCBCBC',
                        '#bac8e0',
                        '#aeccfc',
                        '#77aaf9',
                        '#4186f4',
                        '#77aaf9',
                        '#aeccfc',
                        '#bac8e0',
                        '#BCBCBC',
                        '#d8bdb8',
                        '#e2aba1',
                        '#f7856f'
                    ]
                },
                hole: 0.5,
                type: 'pie',
                showlegend: false
            }
        ];

        var layout = {
            shapes: [{
                    type: 'path',
                    path: path,
                    fillcolor: '#000000',
                    line: {
                        color: '#000000'
                    }
                },
                {
                    type: 'path',
                    path: path2,
                    fillcolor: '#000000',
                    line: {
                        color: '#000000'
                    }
                }
            ],
            height: hw,
            width: hw,
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0,
                pad: 0
            },
            xaxis: {
                zeroline: false,
                showticklabels: false,
                showgrid: false,
                range: [-1, 1],
                fixedrange: true
            },
            yaxis: {
                zeroline: false,
                showticklabels: false,
                showgrid: false,
                range: [-1, 1],
                fixedrange: true
            }
        };

        return (
            <Card className="card">
                <CardHeader className="cardheader">
                    <CardTitle>
                        <h5>{this.state.title}</h5>
                    </CardTitle>
                </CardHeader>
                <CardBody className="cardbody" style={{ margin: "auto"}}>
                <Plot
                    data={data}
                    layout={layout}
                    revision={this.props.revision}
                    useResizeHandler
                    config={{ displayModeBar: false }}
                        />
                </CardBody>
            </Card >
        );
    }
}

export default Gauge