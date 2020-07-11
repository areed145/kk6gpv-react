import React, { Component } from "react";
import Plot from "react-plotly.js";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  //   ButtonGroup,
  //   Button,
  //   CardFooter
} from "reactstrap";
import RenderLoader from "../components/RenderLoader";

class CardCRM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      api: this.props.api,
      crm: [],
    };
  }

  async componentDidMount() {
    const api = encodeURIComponent(this.state.api);
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/oilgas/crm/graph?api=${api}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        crm: res.graph_crm,
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
              <h5 align="center">CRM Model Results</h5>
            </CardTitle>
          </CardHeader>
          <CardBody className="cardbody" style={bodystyle}>
            <RenderLoader location="card" />
          </CardBody>
        </Card>
      );
    } else {
      try {
        return (
          <Card className="card">
            <CardHeader className="cardheader">
              <CardTitle>
                <h5 align="center">CRM Model Results</h5>
              </CardTitle>
            </CardHeader>
            <CardBody className="cardbody" style={bodystyle}>
              <Plot
                data={this.state.crm.data}
                layout={this.state.crm.layout}
                revision={this.state.crm.revision}
                useResizeHandler
                style={{ width: "100%" }}
                config={{
                  displayModeBar: false,
                }}
              />
            </CardBody>
          </Card>
        );
      } catch {
        return "";
      }
    }
  }
}

export default CardCRM;
