import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { CardDeck, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

// import { CardDeck } from "reactstrap";
// import CardCell from "../components/CardCell";
// import Footer from "../components/Footer";

const customStyles = {
  headRow: {
    style: {
      fontSize: "1em"
    }
  },
  headCells: {
    style: {
      fontSize: "1em"
    }
  }
};
const columns = [
  {
    name: "API",
    selector: "api",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em"
    }
  },
  {
    name: "Field",
    selector: "field",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em"
    }
  },
  {
    name: "Lease",
    selector: "lease",
    sortable: true,
    style: {
      fontSize: "1.1em"
    }
  },
  {
    name: "Well",
    selector: "well",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em"
    }
  },
  {
    name: "County",
    selector: "county",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em"
    }
  },
  {
    name: "Operator",
    selector: "operator",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em"
    }
  },
  {
    name: "Well Status",
    selector: "wellstatus",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em"
    }
  },
  {
    name: "Oil Cum",
    selector: "oil_cum",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em"
    },
    conditionalCellStyles: [
      {
        when: row => row.oil_cum < 20000,
        style: {
          backgroundColor: "#d6ed42"
        }
      },
      {
        when: row => row.oil_cum >= 20000 && row.oil_cum < 40000,
        style: {
          backgroundColor: "#78ed42"
        }
      },
      {
        when: row => row.oil_cum >= 40000,
        style: {
          backgroundColor: "#50bf37"
        }
      }
    ]
  },
  {
    name: "Water Cum",
    selector: "water_cum",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em"
    },
    conditionalCellStyles: [
      {
        when: row => row.water_cum < 40000,
        style: {
          backgroundColor: "#caf0f7"
        }
      },
      {
        when: row => row.water_cum >= 40000 && row.water_cum < 80000,
        style: {
          backgroundColor: "#64d6ea"
        }
      },
      {
        when: row => row.water_cum >= 80000,
        style: {
          backgroundColor: "#4286f4"
        }
      }
    ]
  },
  {
    name: "Steam Cum",
    selector: "wtrstm_cum",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em"
    },
    conditionalCellStyles: [
      {
        when: row => row.wtrstm_cum < 800000,
        style: {
          backgroundColor: "#edb6d7"
        }
      },
      {
        when: row => row.wtrstm_cum >= 800000 && row.wtrstm_cum < 1600000,
        style: {
          backgroundColor: "#ed87c4"
        }
      },
      {
        when: row => row.wtrstm_cum >= 1600000,
        style: {
          backgroundColor: "#e22f9b"
        }
      }
    ]
  }
];

class OilgasSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ipcs: [],
      pics: [],
      highperf: [],
      shutin: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.kk6gpv.net/oilgas/header/tags?tags=High%20Performer`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        highperf: res.headers
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
    try {
      const response = await fetch(
        `https://api.kk6gpv.net/oilgas/header/tags?tags=IPC`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        ipcs: res.headers
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
    try {
      const response = await fetch(
        `https://api.kk6gpv.net/oilgas/header/tags?tags=PIC`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        pics: res.headers
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
    try {
        const response = await fetch(
          `https://api.kk6gpv.net/oilgas/header/tags?tags=Shut-In`
        );
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const res = await response.json();
        this.setState({
          isLoaded: true,
          pics: res.headers
        });
      } catch (error) {
        this.setState({
          isLoaded: true,
          error
        });
      }
  }

  render() {
    return (
      <div>
        <div className="main">
          <CardDeck className="carddeck">
            <Card className="card">
              <CardHeader className="cardheader">
                <CardTitle>
                  <h5>Shut-In</h5>
                </CardTitle>
              </CardHeader>
              <CardBody className="cardbody">
                <DataTable
                  noHeader
                  columns={columns}
                  data={this.state.shutin}
                  customStyles={customStyles}
                  highlightOnHover
                />
              </CardBody>
            </Card>
          </CardDeck>
          <CardDeck className="carddeck">
            <Card className="card">
              <CardHeader className="cardheader">
                <CardTitle>
                  <h5>High Performer</h5>
                </CardTitle>
              </CardHeader>
              <CardBody className="cardbody">
                <DataTable
                  noHeader
                  columns={columns}
                  data={this.state.highperf}
                  customStyles={customStyles}
                  highlightOnHover
                />
              </CardBody>
            </Card>
          </CardDeck>
          <CardDeck className="carddeck">
            <Card className="card">
              <CardHeader className="cardheader">
                <CardTitle>
                  <h5>IPC</h5>
                </CardTitle>
              </CardHeader>
              <CardBody className="cardbody">
                <DataTable
                  noHeader
                  columns={columns}
                  data={this.state.ipcs}
                  customStyles={customStyles}
                  highlightOnHover
                />
              </CardBody>
            </Card>
          </CardDeck>
          <CardDeck className="carddeck">
            <Card className="card">
              <CardHeader className="cardheader">
                <CardTitle>
                  <h5>PIC</h5>
                </CardTitle>
              </CardHeader>
              <CardBody className="cardbody">
                <DataTable
                  noHeader
                  columns={columns}
                  data={this.state.pics}
                  customStyles={customStyles}
                  highlightOnHover
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

export default OilgasSummary;
