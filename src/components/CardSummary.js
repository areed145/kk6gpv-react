import DataTable from "react-data-table-component";
import React, { Component } from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import RenderLoader from "../components/RenderLoader";

const customStyles = {
  headRow: {
    style: {
      fontSize: "1em",
    },
  },
  headCells: {
    style: {
      fontSize: "1em",
    },
  },
};
const columns = [
  {
    name: "API",
    selector: "api",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
    ignoreRowClick: true,
    cell: (row) => (
      <a
        href={"/oilgas/details/" + row.api}
        target="_blank"
        rel="noopener noreferrer"
      >
        {row.api}
      </a>
    ),
  },
  {
    name: "Field",
    selector: "field",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "Lease",
    selector: "lease",
    sortable: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "Well",
    selector: "well",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "County",
    selector: "county",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "Operator",
    selector: "operator",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "Well Status",
    selector: "wellstatus",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "Oil Cum",
    selector: "oil_cum",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
    conditionalCellStyles: [
      {
        when: (row) => row.oil_cum < 20000,
        style: {
          backgroundColor: "#d6ed42",
        },
      },
      {
        when: (row) => row.oil_cum >= 20000 && row.oil_cum < 40000,
        style: {
          backgroundColor: "#78ed42",
        },
      },
      {
        when: (row) => row.oil_cum >= 40000,
        style: {
          backgroundColor: "#50bf37",
        },
      },
    ],
  },
  {
    name: "Water Cum",
    selector: "water_cum",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
    conditionalCellStyles: [
      {
        when: (row) => row.water_cum < 40000,
        style: {
          backgroundColor: "#caf0f7",
        },
      },
      {
        when: (row) => row.water_cum >= 40000 && row.water_cum < 80000,
        style: {
          backgroundColor: "#64d6ea",
        },
      },
      {
        when: (row) => row.water_cum >= 80000,
        style: {
          backgroundColor: "#4286f4",
        },
      },
    ],
  },
  {
    name: "Steam Cum",
    selector: "wtrstm_cum",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
    conditionalCellStyles: [
      {
        when: (row) => row.wtrstm_cum < 800000,
        style: {
          backgroundColor: "#edb6d7",
        },
      },
      {
        when: (row) => row.wtrstm_cum >= 800000 && row.wtrstm_cum < 1600000,
        style: {
          backgroundColor: "#ed87c4",
        },
      },
      {
        when: (row) => row.wtrstm_cum >= 1600000,
        style: {
          backgroundColor: "#e22f9b",
        },
      },
    ],
  },
];

class CardSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tag: this.props.tag,
      entries: [],
    };
  }

  async componentDidMount() {
    const tag = encodeURIComponent(this.state.tag);
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/oilgas/header/tags?tags=${tag}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        entries: res.headers,
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
              <h5 align="center">{this.state.tag}</h5>
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
                <h5>{this.state.tag}</h5>
              </CardTitle>
            </CardHeader>
            <CardBody className="cardbody">
              <DataTable
                noHeader
                columns={columns}
                data={this.state.entries}
                customStyles={customStyles}
                highlightOnHover
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

export default CardSummary;
