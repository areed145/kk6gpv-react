import React, { Component } from "react";
import Plot from "react-plotly.js";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ButtonGroup,
  Button,
  CardFooter,
} from "reactstrap";
import RenderLoader from "../components/RenderLoader";

class CardProdInj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      api: this.props.api,
      prodinj: [],
    };
  }

  onClickLog(event) {
    var prodinj = { ...this.state.prodinj };
    prodinj.layout.yaxis.type = "log";
    this.setState({
      prodinj,
    });
  }

  onClickLinear(event) {
    var prodinj = { ...this.state.prodinj };
    prodinj.layout.yaxis.type = "linear";
    this.setState({
      prodinj,
    });
  }

  async componentDidMount() {
    const api = encodeURIComponent(this.state.api);
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/oilgas/prodinj/graph?api=${api}&axis=log`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        prodinj: res.graph_oilgas,
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
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
              <h5 align="center">Production History</h5>
            </CardTitle>
          </CardHeader>
          <CardBody className="cardbody" style={bodystyle}>
            <RenderLoader location="card" />
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
                <h5 align="center">Production History</h5>
              </CardTitle>
            </CardHeader>
            <CardBody className="cardbody" style={bodystyle}>
              <Plot
                data={this.state.prodinj.data}
                layout={this.state.prodinj.layout}
                revision={this.state.prodinj.revision}
                useResizeHandler
                style={{ width: "100%" }}
                config={{
                  displayModeBar: false,
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

export default CardProdInj;
