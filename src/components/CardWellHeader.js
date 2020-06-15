import React, { Component } from "react";
import { Card, CardBody, CardHeader, CardTitle, Table } from "reactstrap";

class CardWellHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      api: this.props.api,
      header: this.props.header,
    };
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
              <h5 align="center">Well Details</h5>
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
        </Card>
      );
    } else {
      try {
        return (
          <Card className="card">
            <CardHeader className="cardheader">
              <CardTitle>
                <h5>Well Details</h5>
              </CardTitle>
            </CardHeader>
            <CardBody className="cardbody">
              <Table borderless responsive size="sm" style={{ border: 0 }}>
                <thead style={{ backgroundColor: "#f1f1f1" }}>
                  <tr>
                    <th>
                      <h6>API</h6>
                    </th>
                    <th>
                      <h6>Operator</h6>
                    </th>
                    <th>
                      <h6>Field</h6>
                    </th>
                    <th>
                      <h6>Lease</h6>
                    </th>
                    <th>
                      <h6>Well</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.header.api}</td>
                    <td>{this.state.header.operator}</td>
                    <td>{this.state.header.field}</td>
                    <td>{this.state.header.lease}</td>
                    <td>{this.state.header.well}</td>
                  </tr>
                </tbody>
              </Table>
              <Table borderless responsive size="sm" style={{ border: 0 }}>
                <thead style={{ backgroundColor: "#f1f1f1" }}>
                  <tr>
                    <th>
                      <h6>Area</h6>
                    </th>
                    <th>
                      <h6>District</h6>
                    </th>
                    <th>
                      <h6>County</h6>
                    </th>
                    <th>
                      <h6>Section</h6>
                    </th>
                    <th>
                      <h6>Township</h6>
                    </th>
                    <th>
                      <h6>Range</h6>
                    </th>
                    <th>
                      <h6>BM</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.header.area}</td>
                    <td>{this.state.header.district}</td>
                    <td>{this.state.header.county}</td>
                    <td>{this.state.header.section}</td>
                    <td>{this.state.header.township}</td>
                    <td>{this.state.header.rnge}</td>
                    <td>{this.state.header.bm}</td>
                  </tr>
                </tbody>
              </Table>
              <Table borderless responsive size="sm" style={{ border: 0 }}>
                <thead style={{ backgroundColor: "#f1f1f1" }}>
                  <tr>
                    <th>
                      <h6>Spud Date</h6>
                    </th>
                    <th>
                      <h6>PWT</h6>
                    </th>
                    <th>
                      <h6>Well Status</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.header.spuddate}</td>
                    <td>{this.state.header.pwt}</td>
                    <td>{this.state.header.wellstatus}</td>
                  </tr>
                </tbody>
              </Table>
              <Table borderless responsive size="sm" style={{ border: 0 }}>
                <thead style={{ backgroundColor: "#f1f1f1" }}>
                  <tr>
                    <th>
                      <h6>Latitude</h6>
                    </th>
                    <th>
                      <h6>Longitude</h6>
                    </th>
                    <th>
                      <h6>Elevation</h6>
                    </th>
                    <th>
                      <h6>GIS Source</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.header.latitude}</td>
                    <td>{this.state.header.longitude}</td>
                    <td>{this.state.header.elev}</td>
                    <td>{this.state.header.gissrc}</td>
                  </tr>
                </tbody>
              </Table>
              <Table borderless responsive size="sm" style={{ border: 0 }}>
                <thead style={{ backgroundColor: "#f1f1f1" }}>
                  <tr>
                    <th>
                      <h6>Oil Cum</h6>
                    </th>
                    <th>
                      <h6>Water Cum</h6>
                    </th>
                    <th>
                      <h6>Gas Cum</h6>
                    </th>
                    <th>
                      <h6>Water/Steam Cum</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.header.oil_cum}</td>
                    <td>{this.state.header.water_cum}</td>
                    <td>{this.state.header.gas_cum}</td>
                    <td>{this.state.header.wtrstm_cum}</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        );
      } catch {
        return "";
      }
    }
  }
}

export default CardWellHeader;
