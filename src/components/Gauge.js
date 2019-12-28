import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import Plot from 'react-plotly.js';

class Gauge extends Component {

    state = {
        title: this.props.title,
        level: this.props.level,
        gmin: this.props.gmin,
        gmax: this.props.gmax,
        cmap: this.props.cmap,
        hw: this.props.hw,
        data: [],
        layout: [],
    }

    render() {

        var ws = 70;
        var ls = 25;
        var gs = 360 - ws - (2 * ls);
        var rot = 90;
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
        var degrees = 360 - rot - ((leveldisp - gmin) / (gmax - gmin) * gs),
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

        var cmap = this.state.cmap;

        var len = cmap.length;
        var values = [ls];
        var colors = ['rgba(110, 154, 22, 0)'];
        var text = [gmax.toString()];
        for (var i = 0; i < len; i++) {
            values.push(gs / len);
            colors.push(cmap[i])
            text.push('');
        }
        values.push(ls, ws);
        text.push(gmin.toString(), leveldisp.toString());
        colors.push('rgba(110, 154, 22, 0)', 'rgba(110, 154, 22, 0)');

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
            values: values,
            hoverinfo: 'none',
            rotation: rot - 30,
            sort: false,
            text: text,
            textinfo: 'text',
            textposition: 'inside',
            marker: {
                colors: colors
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
            // autosize: true,
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
                <CardBody className="cardbody" style={{ margin: "auto" }}>
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