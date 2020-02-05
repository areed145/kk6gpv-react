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

class CardDecline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      api: this.props.api,
      decline_date: [],
      decline_cum: [],
      decline: []
    };
  }

  onClickLog(event) {
    var decline = { ...this.state.decline_date };
    decline.layout.yaxis.type = "log";
    this.setState({
      decline
    });
  }

  onClickLinear(event) {
    var decline = { ...this.state.decline_date };
    decline.layout.yaxis.type = "linear";
    this.setState({
      decline
    });
  }

  onClickLogCum(event) {
    var decline = { ...this.state.decline_cum };
    decline.layout.yaxis.type = "log";
    this.setState({
      decline
    });
  }

  onClickLinearCum(event) {
    var decline = { ...this.state.decline_cum };
    decline.layout.yaxis.type = "linear";
    this.setState({
      decline
    });
  }

  async onClickAutoDecline(event) {
    const api = encodeURIComponent(this.state.api);
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/oilgas/decline/solve?api=${api}`,
        {
          method: "PUT"
        }
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      if (res === "success") {
        try {
          const response = await fetch(
            `https://kk6gpv-api.herokuapp.com/oilgas/decline/graph?api=${api}&axis=log`
          );
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const res = await response.json();
          this.setState({
            isLoaded: true,
            decline_date: res.graph_decline,
            decline_cum: res.graph_decline_cum,
            decline: res.graph_decline
          });
        } catch (error) {
          this.setState({
            isLoaded: true,
            error
          });
        }
      }
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
  }

  async componentDidMount() {
    const api = encodeURIComponent(this.state.api);
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/oilgas/decline/graph?api=${api}&axis=log`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        decline_date: res.graph_decline,
        decline_cum: res.graph_decline_cum,
        decline: res.graph_decline
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
              <h5 align="center">Decline Curve Analysis</h5>
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
                <h5 align="center">Decline Curve Analysis</h5>
              </CardTitle>
            </CardHeader>
            <CardBody className="cardbody" style={bodystyle}>
              <Plot
                data={this.state.decline.data}
                layout={this.state.decline.layout}
                revision={this.state.decline.revision}
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
                  onClick={this.onClickLogCum.bind(this)}
                >
                  Log Cum
                </Button>
                <Button
                  variant="secondary"
                  onClick={this.onClickLinearCum.bind(this)}
                >
                  Linear Cum
                </Button>
              </ButtonGroup>
              &nbsp;&nbsp;&nbsp;
              <ButtonGroup sz="sm">
                <Button
                  variant="secondary"
                  onClick={this.onClickAutoDecline.bind(this)}
                >
                  Auto Decline
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

export default CardDecline;
