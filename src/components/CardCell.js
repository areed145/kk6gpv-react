import React, { Component } from "react";
import Plot from "react-plotly.js";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardHeader,
  CardTitle
} from "reactstrap";

class CardCell extends Component {
  render() {
    let ws;
    let ls;
    let gs;
    let rot;
    let hw;
    let sz;
    let level;
    let gmin;
    let gmax;
    let leveldisp;
    let degrees;
    let radius;
    let radians;
    let x;
    let y;
    let mainPath;
    let mainPath2;
    let pathX;
    let space;
    let pathY;
    let pathEnd;
    let path;
    let path2;
    let cmap;
    let len;
    let values;
    let colors;
    let gtext;
    let i;
    let data;
    let layout;
    let level2;
    let leveldisp2;
    let degrees2;
    let radius2;
    let radians2;
    let x2;
    let y2;
    let main2Path;
    let main2Path2;
    let pathX2;
    let space2;
    let pathY2;
    let pathEnd2;
    let path3;
    let path4;

    let bodystyle;
    bodystyle = { backgroundColor: this.props.bgcolor };

    let title;
    if (this.props.title) {
      title = (
        <CardHeader className="cardheader">
          <CardTitle>
            <h5 align="center">{this.props.title}</h5>
          </CardTitle>
        </CardHeader>
      );
    }

    let icon;
    if (this.props.icon) {
      icon = (
        <a href={this.props.link}>
          <CardImg style={{ width: "100%" }} src={this.props.icon} />
        </a>
      );
    }

    let img;
    if (this.props.img) {
      img = <CardImg src={this.props.img} />;
    }

    let plot = [];
    if (this.props.plot) {
      if (this.props.plot[0]) {
        if (this.props.plot[0].data) {
          for (const [, value] of this.props.plot.entries()) {
            plot.push(
              <Plot
                data={value.data}
                layout={value.layout}
                revision={value.revision}
                useResizeHandler
                style={{ width: "100%" }}
                config={{
                  displayModeBar: false,
                  staticPlot: this.props.static
                }}
              />
            );
          }
        }
      } else {
        plot = (
          <div>
            <h6 align="center">None Available</h6>
          </div>
        );
      }
    }

    let video;
    if (this.props.videosrc) {
      video = (
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            title={this.props.videotitle}
            src={this.props.videosrc}
            allowFullScreen
          ></iframe>
        </div>
      );
    }

    let phototitle;
    if (this.props.phototitle) {
      phototitle = <CardText align="center">{this.props.phototitle}</CardText>;
    }

    let caption;
    if (this.props.caption) {
      caption = (
        <figcaption className="figure-caption">{this.props.caption}</figcaption>
      );
    }

    let text = [];
    if (this.props.text) {
      for (const [, value] of this.props.text.entries()) {
        text.push(<p>{value}</p>);
      }
    }

    let gauge;
    if (this.props.gauge) {
      ws = 70;
      ls = 25;
      gs = 360 - ws - 2 * ls;
      rot = 90;
      hw = this.props.gauge.hw;
      sz = hw / 8;

      level = this.props.gauge.level;
      gmin = this.props.gauge.gmin;
      gmax = this.props.gauge.gmax;
      leveldisp = level;

      if (level > gmax) {
        leveldisp = gmax;
      }
      if (level < gmin) {
        leveldisp = gmin;
      }
      degrees = 360 - rot - ((leveldisp - gmin) / (gmax - gmin)) * gs;
      radius = 0.75;
      radians = (degrees * Math.PI) / 180;
      x = radius * Math.cos(radians);
      y = radius * Math.sin(radians);
      mainPath = "M -.0 -0.075 L .0 0.075 L ";
      mainPath2 = "M -0.075 -0 L .075 0 L ";
      pathX = String(x);
      space = " ";
      pathY = String(y);
      pathEnd = " Z";
      path = mainPath.concat(pathX, space, pathY, pathEnd);
      path2 = mainPath2.concat(pathX, space, pathY, pathEnd);

      cmap = this.props.gauge.cmap;

      len = cmap.length;
      values = [ls];
      colors = ["rgba(110, 154, 22, 0)"];
      gtext = [gmax.toString()];
      for (i = 0; i < len; i++) {
        values.push(gs / len);
        colors.push(cmap[i]);
        gtext.push("");
      }
      values.push(ls, ws);
      gtext.push(gmin.toString(), leveldisp.toString());
      colors.push("rgba(110, 154, 22, 0)", "rgba(110, 154, 22, 0)");

      data = [
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
          values: values,
          hoverinfo: "none",
          rotation: rot - 30,
          sort: false,
          text: gtext,
          textinfo: "text",
          textposition: "inside",
          marker: {
            colors: colors
          },
          hole: 0.5,
          type: "pie",
          showlegend: false
        }
      ];

      layout = {
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

      gauge = (
        <Plot
          data={data}
          layout={layout}
          useResizeHandler
          style={{ width: "100%" }}
          config={{ displayModeBar: false }}
        />
      );

      bodystyle = { backgroundColor: this.props.bgcolor, margin: "auto" };
    }

    let gauge_winddir;
    if (this.props.gauge_winddir) {
      ws = 70;
      ls = 25;
      gs = 360 - ws - 2 * ls;
      rot = 90;
      hw = this.props.gauge_winddir.hw;
      sz = 25;

      level = this.props.gauge_winddir.level;
      gmin = this.props.gauge_winddir.gmin;
      gmax = this.props.gauge_winddir.gmax;
      leveldisp = level;

      if (level > gmax) {
        leveldisp = gmax;
      }
      if (level < gmin) {
        leveldisp = gmin;
      }

      degrees = 360 + 90 - ((leveldisp - gmin) / (gmax - gmin)) * 360;
      radius = 0.75;
      radians = (degrees * Math.PI) / 180;
      x = radius * Math.cos(radians);
      y = radius * Math.sin(radians);
      mainPath = "M -.0 -0.075 L .0 0.075 L ";
      mainPath2 = "M -0.075 -0 L .075 0 L ";
      pathX = String(x);
      space = " ";
      pathY = String(y);
      pathEnd = " Z";
      path = mainPath.concat(pathX, space, pathY, pathEnd);
      path2 = mainPath2.concat(pathX, space, pathY, pathEnd);

      data = [
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
          values: [
            22.5,
            22.5,
            22.5,
            22.5,
            22.5,
            22.5,
            22.5,
            22.5,
            22.5,
            22.5,
            22.5,
            22.5,
            22.5,
            22.5,
            22.5,
            22.5
          ],
          hoverinfo: "none",
          rotation: -11.25,
          sort: false,
          text: [
            "N",
            "NNW",
            "NW",
            "WNW",
            "W",
            "WSW",
            "SW",
            "SSW",
            "S",
            "SSE",
            "SE",
            "ESE",
            "E",
            "ENE",
            "NE",
            "NNE"
          ],
          textinfo: "text",
          textposition: "inside",
          marker: {
            colors: [
              "#f45f42",
              "#f7856f",
              "#e2aba1",
              "#d8bdb8",
              "#BCBCBC",
              "#bac8e0",
              "#aeccfc",
              "#77aaf9",
              "#4186f4",
              "#77aaf9",
              "#aeccfc",
              "#bac8e0",
              "#BCBCBC",
              "#d8bdb8",
              "#e2aba1",
              "#f7856f"
            ]
          },
          hole: 0.5,
          type: "pie",
          showlegend: false
        }
      ];

      layout = {
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

      gauge_winddir = (
        <Plot
          data={data}
          layout={layout}
          useResizeHandler
          style={{ width: "100%" }}
          config={{ displayModeBar: false }}
        />
      );

      bodystyle = { backgroundColor: this.props.bgcolor, margin: "auto" };
    }

    let gauge_windspd;
    if (this.props.gauge_windspd) {
      ws = 70;
      ls = 25;
      gs = 360 - ws - 2 * ls;
      rot = 90;
      hw = this.props.gauge_windspd.hw;
      sz = 25;

      level = this.props.gauge_windspd.level;
      level2 = this.props.gauge_windspd.level2;
      gmin = this.props.gauge_windspd.gmin;
      gmax = this.props.gauge_windspd.gmax;
      leveldisp = level;
      leveldisp2 = level2;

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
      degrees = 360 - rot - ((leveldisp - gmin) / (gmax - gmin)) * gs;
      radius = 0.75;
      radians = (degrees * Math.PI) / 180;
      x = radius * Math.cos(radians);
      y = radius * Math.sin(radians);
      mainPath = "M -.0 -0.075 L .0 0.075 L ";
      mainPath2 = "M -0.075 -0 L .075 0 L ";
      pathX = String(x);
      space = " ";
      pathY = String(y);
      pathEnd = " Z";
      path = mainPath.concat(pathX, space, pathY, pathEnd);
      path2 = mainPath2.concat(pathX, space, pathY, pathEnd);
      degrees2 = 360 - rot - ((leveldisp2 - gmin) / (gmax - gmin)) * gs;
      radius2 = 0.75;
      radians2 = (degrees2 * Math.PI) / 180;
      x2 = radius2 * Math.cos(radians2);
      y2 = radius2 * Math.sin(radians2);
      main2Path = "M -.0 -0.075 L .0 0.075 L ";
      main2Path2 = "M -0.075 -0 L .075 0 L ";
      pathX2 = String(x2);
      space2 = " ";
      pathY2 = String(y2);
      pathEnd2 = " Z";
      path3 = main2Path.concat(pathX2, space2, pathY2, pathEnd2);
      path4 = main2Path2.concat(pathX2, space2, pathY2, pathEnd2);

      data = [
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

      layout = {
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

      gauge_windspd = (
        <Plot
          data={data}
          layout={layout}
          useResizeHandler
          style={{ width: "100%" }}
          config={{ displayModeBar: false }}
        />
      );

      bodystyle = { backgroundColor: this.props.bgcolor, margin: "auto" };
    }

    return (
      <Card className="card">
        {title}
        <CardBody className="cardbody" style={bodystyle}>
          {icon}
          {img}
          {plot}
          {gauge}
          {gauge_winddir}
          {gauge_windspd}
          {video}
          {phototitle}
          {caption}
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default CardCell;
