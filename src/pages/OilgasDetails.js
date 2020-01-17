import React, { Component } from "react";
import {
  CardDeck,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table
} from "reactstrap";
import ReactTags from "react-tag-autocomplete";
import MapOil from "../components/MapOil";
import CardCell from "../components/CardCell";
// import Footer from "../components/Footer";
class DetailsOilgas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      api: this.props.match.params.api,
      header: [],
      graph_oilgas: [],
      graph_offset_oil: [],
      graph_offset_stm: [],
      graph_offset_wtr: [],
      graph_offset_oil_ci: [],
      graph_offset_stm_ci: [],
      graph_offset_wtr_ci: [],
      graph_cyclic_jobs: [],
      tags: [],
      suggestions: [
        { id: 1, name: "Slider" },
        { id: 2, name: "Gainer" },
        { id: 3, name: "Ramping Up" },
        { id: 4, name: "Declining" },
        { id: 5, name: "IPC" },
        { id: 6, name: "PIC" },
        { id: 7, name: "Active" },
        { id: 8, name: "Shut-In" },
        { id: 9, name: "Bad Data" },
        { id: 10, name: "Lease Line" },
        { id: 11, name: "Low Performer" },
        { id: 12, name: "High Performer" },
        { id: 13, name: "Stripper" },
        { id: 14, name: "Oversized" },
        { id: 15, name: "PIC" },
        { id: 16, name: "Damaged" },
        { id: 17, name: "Lease Line" },
        { id: 18, name: "Steam Breakthrough" },
        { id: 19, name: "Steam Block" },
        { id: 20, name: "High Depletion" },
        { id: 20, name: "Stalled Depletion" },
        { id: 21, name: "Under Injected" },
        { id: 22, name: "Over Injected" },
        { id: 23, name: "C" },
        { id: 24, name: "C1" },
        { id: 25, name: "K" },
        { id: 26, name: "K1" },
        { id: 27, name: "K2" },
        { id: 28, name: "R" },
        { id: 29, name: "R1" },
        { id: 30, name: "R2" },
        { id: 31, name: "No Production Data" },
        { id: 32, name: "Curtailment Candidate" }
      ]
    };
  }

  onDelete(i) {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags: tags });
    var tags_string = "";
    for (var ti = 0; ti < tags.length; ti++) {
      tags_string = tags_string + "tags=" + tags[ti].name + "&";
    }
    try {
      fetch(
        `https://api.kk6gpv.net/oilgas/tags/set?${tags_string}api=${encodeURIComponent(
          this.state.api
        )}`,
        {
          method: "PUT"
        }
      );
      //   if (!response.ok) {
      //     throw Error(response.statusText);
      //   }
    } catch (error) {
      this.setState({
        isLoaded: true
        // error
      });
    }
  }

  onAddition(tag) {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags: tags });
    var tags_string = "";
    for (var ti = 0; ti < tags.length; ti++) {
      tags_string = tags_string + "tags=" + tags[ti].name + "&";
    }
    try {
      fetch(
        `https://api.kk6gpv.net/oilgas/tags/set?${tags_string}api=${encodeURIComponent(
          this.state.api
        )}`,
        {
          method: "PUT"
        }
      );
      //   if (!response.ok) {
      //     throw Error(response.statusText);
      //   }
    } catch (error) {
      this.setState({
        isLoaded: true
        // error
      });
    }
  }

  async componentDidMount() {
    const api = encodeURIComponent(this.state.api);
    try {
      const response = await fetch(
        `https://api.kk6gpv.net/oilgas/header/details?api=${api}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        header: res.header
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
    try {
      const response = await fetch(
        `https://api.kk6gpv.net/oilgas/tags/get?api=${api}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        tags: res.tags
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        tags: [],
      });
    }
    try {
      const response = await fetch(
        `https://api.kk6gpv.net/oilgas/prodinj/graph?api=${api}&axis=log`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        graph_oilgas: res.graph_oilgas
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
    try {
      const response = await fetch(
        `https://api.kk6gpv.net/oilgas/offset/graphs?api=${api}&axis=log`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        graph_offset_oil: res.graph_offset_oil,
        graph_offset_stm: res.graph_offset_stm,
        graph_offset_wtr: res.graph_offset_wtr,
        graph_offset_oil_ci: res.graph_offset_oil_ci,
        graph_offset_stm_ci: res.graph_offset_stm_ci,
        graph_offset_wtr_ci: res.graph_offset_wtr_ci
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
    try {
      const response = await fetch(
        `https://api.kk6gpv.net/oilgas/cyclic/graph?api=${api}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        graph_cyclic_jobs: res.graph_cyclic_jobs
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
    try {
      const response = await fetch(
        `https://api.kk6gpv.net/oilgas/crm/graph?api=${api}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        graph_crm: res.graph_crm
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
  }

  render() {
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <div className="main">
            <div className="center">
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div className="margin" />
          {/* <Footer /> */}
        </div>
      );
    } else {
      return (
        <div>
          <div className="main">
            <CardDeck className="carddeck">
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
              <Card className="card">
                <CardHeader className="cardheader">
                  <CardTitle>
                    <h5>Well Location</h5>
                  </CardTitle>
                </CardHeader>
                <CardBody className="cardbody">
                  <MapOil
                    latitude={this.state.header.latitude}
                    longitude={this.state.header.longitude}
                    zoom={16}
                    mapstyle={"mapbox://styles/areed145/ck5ipvzcq0tos1ipc69h4vn7v"}
                  />
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                title="Production Detail"
                plot={[this.state.graph_oilgas]}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <Card className="card">
                <CardHeader className="cardheader">
                  <CardTitle>
                    <h5 align="center">Tags</h5>
                  </CardTitle>
                </CardHeader>
                <CardBody className="cardbody">
                  <ReactTags
                    tags={this.state.tags}
                    suggestions={this.state.suggestions}
                    onDelete={this.onDelete.bind(this)}
                    onAddition={this.onAddition.bind(this)}
                    allowBackspace={false}
                  />
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                title="Offset Performance"
                plot={[
                  this.state.graph_offset_oil,
                  this.state.graph_offset_stm,
                  this.state.graph_offset_wtr
                ]}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                title="Offset Confidence Intervals"
                plot={[
                  this.state.graph_offset_oil_ci,
                  this.state.graph_offset_stm_ci,
                  this.state.graph_offset_wtr_ci
                ]}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                title="Cyclic Job Performance"
                plot={[this.state.graph_cyclic_jobs]}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                title="CRM Model Results"
                plot={[this.state.graph_crm]}
              />
              <Card className="card">
                <CardHeader className="cardheader">
                  <CardTitle>
                    <h5>CRM Map</h5>
                  </CardTitle>
                </CardHeader>
                <CardBody className="cardbody">
                  <MapOil
                    latitude={this.state.header.latitude}
                    longitude={this.state.header.longitude}
                    zoom={16}
                    mapstyle={"mapbox://styles/areed145/ck2jlfnp03oiv1cpepd4js9k6"}
                  />
                </CardBody>
              </Card>
            </CardDeck>
            <div className="margin" />
            {/* <Footer /> */}
          </div>
        </div>
      );
    }
  }
}

export default DetailsOilgas;
