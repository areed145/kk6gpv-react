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
      var ws = 70;
      var ls = 25;
      var gs = 360 - ws - 2 * ls;
      var rot = 90;
      var hw = this.props.gauge.hw;
      var sz = hw / 8;

      var level = this.props.gauge.level;
      var gmin = this.props.gauge.gmin;
      var gmax = this.props.gauge.gmax;
      var leveldisp = level;

      if (level > gmax) {
        leveldisp = gmax;
      }
      if (level < gmin) {
        leveldisp = gmin;
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

      var cmap = this.props.gauge.cmap;

      var len = cmap.length;
      var values = [ls];
      var colors = ["rgba(110, 154, 22, 0)"];
      var gtext = [gmax.toString()];
      for (var i = 0; i < len; i++) {
        values.push(gs / len);
        colors.push(cmap[i]);
        gtext.push("");
      }
      values.push(ls, ws);
      gtext.push(gmin.toString(), leveldisp.toString());
      colors.push("rgba(110, 154, 22, 0)", "rgba(110, 154, 22, 0)");

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

    return (
      <Card className="card">
        {title}
        <CardBody className="cardbody" style={bodystyle}>
          {icon}
          {img}
          {plot}
          {gauge}
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
