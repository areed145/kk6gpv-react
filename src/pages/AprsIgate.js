import React, { Component } from "react";
import CardCell from "../components/CardCell";
import Select from "react-select";
import DataTable from "react-data-table-component";
import { CardDeck, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
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
    name: "Timestamp",
    selector: "timestamp_",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "From",
    selector: "from",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "To",
    selector: "to",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "Via",
    selector: "via",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "Speed",
    selector: "speed",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "Altitude",
    selector: "altitude",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "Course",
    selector: "course",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
  {
    name: "Comment",
    selector: "comment",
    sortable: true,
    right: true,
    style: {
      fontSize: "1.1em",
    },
  },
];
class AprsIgate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      map_aprs: [],
      plot_speed: [],
      plot_alt: [],
      plot_course: [],
      rows: [],
      time: "d_7",
      time_label: "7 days",
      prop: "speed",
      prop_label: "Speed",
      revision: 0,
    };
  }

  async intervalUpdate(event) {
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/aprs/map?type_aprs=entry&prop_aprs=${encodeURIComponent(
          this.state.prop
        )}&time_int=${encodeURIComponent(this.state.time)}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      var map_aprs = { ...this.state.map_aprs };
      map_aprs.data = res.map_aprs.data;
      this.setState({ map_aprs });
      this.setState({
        plot_speed: res.plot_speed,
        plot_alt: res.plot_alt,
        plot_course: res.plot_course,
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
      });
    }
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/aprs/igate_range?time_int=${encodeURIComponent(
          this.state.time
        )}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        range_aprs: res.range_aprs,
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
      });
    }
  }

  async onChangeTime(event) {
    this.setState(
      {
        time: event.value,
        time_label: event.label,
      },
      async function() {
        try {
          const response = await fetch(
            `https://kk6gpv-api.herokuapp.com/aprs/map?type_aprs=entry&prop_aprs=${encodeURIComponent(
              this.state.prop
            )}&time_int=${encodeURIComponent(this.state.time)}`
          );
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const res = await response.json();
          var map_aprs = { ...this.state.map_aprs };
          map_aprs.data = res.map_aprs.data;
          this.setState({ map_aprs });
          this.setState({
            plot_speed: res.plot_speed,
            plot_alt: res.plot_alt,
            plot_course: res.plot_course,
          });
        } catch (error) {
          this.setState({
            isLoaded: true,
            error,
          });
        }
        try {
          const response = await fetch(
            `https://kk6gpv-api.herokuapp.com/aprs/igate_range?time_int=${encodeURIComponent(
              this.state.time
            )}`
          );
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const res = await response.json();
          this.setState({
            range_aprs: res.range_aprs,
          });
        } catch (error) {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      }
    );
  }

  async onChangeProp(event) {
    this.setState(
      {
        prop: event.value,
        prop_label: event.label,
      },
      async function() {
        try {
          const response = await fetch(
            `https://kk6gpv-api.herokuapp.com/aprs/map?type_aprs=entry&prop_aprs=${encodeURIComponent(
              this.state.prop
            )}&time_int=${encodeURIComponent(this.state.time)}`
          );
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const res = await response.json();
          var map_aprs = { ...this.state.map_aprs };
          map_aprs.data = res.map_aprs.data;
          this.setState({ map_aprs });
        } catch (error) {
          this.setState({
            isLoaded: true,
            error,
          });
        }
        try {
          const response = await fetch(
            `https://kk6gpv-api.herokuapp.com/aprs/igate_range?time_int=${encodeURIComponent(
              this.state.time
            )}`
          );
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const res = await response.json();
          this.setState({
            range_aprs: res.range_aprs,
          });
        } catch (error) {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      }
    );
  }

  async componentWillUnmount() {
    clearInterval(this.interval);
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/aprs/map?type_aprs=entry&prop_aprs=${encodeURIComponent(
          this.state.prop
        )}&time_int=${encodeURIComponent(this.state.time)}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        map_aprs: res.map_aprs,
        plot_speed: res.plot_speed,
        plot_alt: res.plot_alt,
        plot_course: res.plot_course,
        rows: res.rows,
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
      });
    }
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/aprs/igate_range?time_int=${encodeURIComponent(
          this.state.time
        )}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        range_aprs: res.range_aprs,
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
      });
    }
  }

  render() {
    const { error, isLoaded } = this.state;

    var time_options = [
      { value: "h_6", label: "6 hours" },
      { value: "d_1", label: "1 day" },
      { value: "d_2", label: "2 days" },
      { value: "d_7", label: "7 days" },
      { value: "d_30", label: "30 days" },
      { value: "d_60", label: "60 days" },
      { value: "d_180", label: "180 days" },
      { value: "d_360", label: "360 days" },
    ];

    var prop_options = [
      { value: "speed", label: "Speed" },
      { value: "altitude", label: "Altitude" },
      { value: "course", label: "Course" },
    ];

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <RenderLoader location="page" />;
    } else {
      return (
        <div>
          <div className="mainframe">
            <CardDeck className="carddeck">
              <Card className="card">
                <CardHeader className="cardheader">
                  <CardTitle>
                    <h5>Property</h5>
                  </CardTitle>
                </CardHeader>
                <CardBody className="cardbody">
                  <div width="100vw">
                    <Select
                      name="prop"
                      value={this.state.prop}
                      defaultInputValue=""
                      options={prop_options}
                      placeholder={this.state.prop_label}
                      searchable={false}
                      onChange={this.onChangeProp.bind(this)}
                    />
                  </div>
                </CardBody>
              </Card>
              <Card className="card">
                <CardHeader className="cardheader">
                  <CardTitle>
                    <h5>Time</h5>
                  </CardTitle>
                </CardHeader>
                <CardBody className="cardbody">
                  <div width="100vw">
                    <Select
                      name="time_int"
                      value={this.state.time}
                      defaultInputValue=""
                      options={time_options}
                      placeholder={this.state.time_label}
                      searchable={false}
                      onChange={this.onChangeTime.bind(this)}
                    />
                  </div>
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.map_aprs]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.plot_speed]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.plot_alt]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.plot_course]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.range_aprs]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <Card className="card">
                <CardHeader className="cardheader">
                  <CardTitle>
                    <h5>Packets</h5>
                  </CardTitle>
                </CardHeader>
                <CardBody className="cardbody">
                  <DataTable
                    noHeader
                    columns={columns}
                    data={this.state.rows}
                    customStyles={customStyles}
                    highlightOnHover
                    pagination
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

export default AprsIgate;
