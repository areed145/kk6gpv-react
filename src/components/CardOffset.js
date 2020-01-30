import React, { Component } from "react";
import Plot from "react-plotly.js";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ButtonGroup,
  Button,
  CardFooter
} from "reactstrap";

class CardOffset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      api: this.props.api,
      oil: [],
      stm: [],
      wtr: [],
      oil_hm: [],
      stm_hm: [],
      wtr_hm: [],
      oil_ci: [],
      stm_ci: [],
      wtr_ci: []
    };
  }

  onClickLog(event) {
    var oil = { ...this.state.oil_ci };
    var wtr = { ...this.state.wtr_ci };
    var stm = { ...this.state.stm_ci };
    oil.layout.yaxis.type = "log";
    wtr.layout.yaxis.type = "log";
    stm.layout.yaxis.type = "log";
    this.setState({
      oil,
      wtr,
      stm
    });
  }

  onClickLinear(event) {
    var oil = { ...this.state.oil_ci };
    var wtr = { ...this.state.wtr_ci };
    var stm = { ...this.state.stm_ci };
    oil.layout.yaxis.type = "linear";
    wtr.layout.yaxis.type = "linear";
    stm.layout.yaxis.type = "linear";
    this.setState({
      oil,
      wtr,
      stm
    });
  }

  onClickHeatmap(event) {
    var oil = { ...this.state.oil_hm };
    var wtr = { ...this.state.wtr_hm };
    var stm = { ...this.state.stm_hm };
    this.setState({
      oil,
      wtr,
      stm
    });
  }

  async componentDidMount() {
    const api = encodeURIComponent(this.state.api);
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/oilgas/offset/graphs?api=${api}&axis=log`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        oil_hm: res.graph_offset_oil,
        stm_hm: res.graph_offset_stm,
        wtr_hm: res.graph_offset_wtr,
        oil_ci: res.graph_offset_oil_ci,
        stm_ci: res.graph_offset_stm_ci,
        wtr_ci: res.graph_offset_wtr_ci,
        oil: res.graph_offset_oil_ci,
        stm: res.graph_offset_stm_ci,
        wtr: res.graph_offset_wtr_ci
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
  }

  render() {
    let bodystyle = { backgroundColor: this.props.bgcolor };
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <Card className="card">
          <CardHeader className="cardheader">
            <CardTitle>
              <h5 align="center">Offset Performance</h5>
            </CardTitle>
          </CardHeader>
          <CardBody className="cardbody" style={bodystyle}>
            <div style={{ minHeight: "50px" }}>
              <div className="center">
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </CardBody>
          <CardFooter className="cardfooter">
            <ButtonGroup sz="sm">
              <Button variant="secondary" onClick={this.onClickLog.bind(this)}>
                Log
              </Button>
              <Button
                variant="secondary"
                onClick={this.onClickLinear.bind(this)}
              >
                Linear
              </Button>
              <Button
                variant="secondary"
                onClick={this.onClickHeatmap.bind(this)}
              >
                Heatmap
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      );
    } else {
      try {
        return (
          <Card className="card">
            <CardHeader className="cardheader">
              <CardTitle>
                <h5 align="center">Offset Performance</h5>
              </CardTitle>
            </CardHeader>
            <CardBody className="cardbody" style={bodystyle}>
              <Plot
                data={this.state.oil.data}
                layout={this.state.oil.layout}
                revision={this.state.oil.revision}
                useResizeHandler
                style={{ width: "100%" }}
                config={{
                  displayModeBar: false
                }}
              />
              <Plot
                data={this.state.wtr.data}
                layout={this.state.wtr.layout}
                revision={this.state.wtr.revision}
                useResizeHandler
                style={{ width: "100%" }}
                config={{
                  displayModeBar: false
                }}
              />
              <Plot
                data={this.state.stm.data}
                layout={this.state.stm.layout}
                revision={this.state.stm.revision}
                useResizeHandler
                style={{ width: "100%" }}
                config={{
                  displayModeBar: false
                }}
              />
            </CardBody>
            <CardFooter className="cardfooter">
              <ButtonGroup sz="sm">
                <Button
                  variant="secondary"
                  onClick={this.onClickLog.bind(this)}
                >
                  Log
                </Button>
                <Button
                  variant="secondary"
                  onClick={this.onClickLinear.bind(this)}
                >
                  Linear
                </Button>
                <Button
                  variant="secondary"
                  onClick={this.onClickHeatmap.bind(this)}
                >
                  Heatmap
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      } catch {
        return "";
      }
    }
  }
}

export default CardOffset;
