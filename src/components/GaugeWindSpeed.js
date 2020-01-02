import React, { Component } from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import Plot from "react-plotly.js";

class Gauge extends Component {
  state = {
    title: this.props.title,
    level: this.props.level,
    level2: this.props.level2,
    gmin: this.props.gmin,
    gmax: this.props.gmax,
    cmap: this.props.cmap,
    hw: this.props.hw,
    data: [],
    layout: []
  };

  render() {
    var ws = 70;
    var ls = 25;
    var gs = 360 - ws - 2 * ls;
    var rot = 90;
    var hw = this.state.hw;
    var sz = 25;

    var level = this.state.level;
    var level2 = this.state.level2;
    var gmin = this.state.gmin;
    var gmax = this.state.gmax;
    var leveldisp = level;
    var leveldisp2 = level2;

    if (level > gmax) {
      leveldisp = gmax;
    }
    if (level < gmin) {
      leveldisp = gmin;
    }
    if (level2 > gmax) {
      leveldisp2 = gmax;
    }
    if (level2 < gmin) {
      leveldisp2 = gmin;
    }
    var degrees = 360 - rot - ((leveldisp - gmin) / (gmax - gmin)) * gs,
      radius = 0.75;
    var radians = (degrees * Math.PI) / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
    var mainPath = "M -.0 -0.075 L .0 0.075 L ",
      mainPath2 = "M -0.075 -0 L .075 0 L ",
      pathX = String(x),
      space = " ",
      pathY = String(y),
      pathEnd = " Z";
    var path = mainPath.concat(pathX, space, pathY, pathEnd);
    var path2 = mainPath2.concat(pathX, space, pathY, pathEnd);

    var degrees2 = 360 - rot - ((leveldisp2 - gmin) / (gmax - gmin)) * gs,
      radius2 = 0.75;
    var radians2 = (degrees2 * Math.PI) / 180;
    var x2 = radius2 * Math.cos(radians2);
    var y2 = radius2 * Math.sin(radians2);
    var main2Path = "M -.0 -0.075 L .0 0.075 L ",
      main2Path2 = "M -0.075 -0 L .075 0 L ",
      pathX2 = String(x2),
      space2 = " ",
      pathY2 = String(y2),
      pathEnd2 = " Z";
    var path3 = main2Path.concat(pathX2, space2, pathY2, pathEnd2);
    var path4 = main2Path2.concat(pathX2, space2, pathY2, pathEnd2);

    var data = [
      {
        type: "scatter",
        x: [0],
        y: [0],
        marker: {
          size: sz,
          color: "#000000"
        },
        showlegend: false,
        hoverinfo: "none"
      },
      {
        values: [ls, 80, 80, 48, 16, 12, 4, ls, ws],
        hoverinfo: "none",
        rotation: rot - 30,
        sort: false,
        text: [gmax.toString(), "", "", "", "", "", "", gmin.toString(), ""],
        textinfo: "text",
        textposition: "inside",
        marker: {
          colors: [
            "rgba(110, 154, 22, 0)",
            "#ffff00",
            "#ffcc00",
            "#bfff00",
            "#00cc00",
            "#009999",
            "#3366ff",
            "rgba(110, 154, 22, 0)",
            "rgba(110, 154, 22, 0)"
          ]
        },
        hole: 0.5,
        type: "pie",
        showlegend: false
      }
    ];

    var layout = {
      shapes: [
        {
          type: "path",
          path: path,
          fillcolor: "#000000",
          line: {
            color: "#000000"
          }
        },
        {
          type: "path",
          path: path2,
          fillcolor: "#000000",
          line: {
            color: "#000000"
          }
        },
        {
          type: "path",
          path: path3,
          fillcolor: "#000000",
          line: {
            color: "#000000"
          }
        },
        {
          type: "path",
          path: path4,
          fillcolor: "#000000",
          line: {
            color: "#000000"
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
        <CardBody className="cardbody" style={{ margin: "auto" }}>
          <Plot
            data={data}
            layout={layout}
            revision={this.props.revision}
            useResizeHandler
            config={{ displayModeBar: false }}
          />
        </CardBody>
      </Card>
    );
  }
}

export default Gauge;
