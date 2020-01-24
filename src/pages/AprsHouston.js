import React, { Component } from "react";
import CardCell from "../components/CardCell";
import Select from "react-select";
import { CardDeck, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
// import Footer from "../components/Footer";

class AprsHouston extends Component {
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
      time: "m_5",
      time_label: "5 minutes",
      prop: "speed",
      prop_label: "Speed",
      revision: 0
    };
  }

  async onChangeTime(event) {
    this.setState(
      {
        time: event.value,
        time_label: event.label
      },
      async function() {
        try {
          const response = await fetch(
            `https://kk6gpv-api.herokuapp.com/aprs/map?type_aprs=radius&prop_aprs=${encodeURIComponent(
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
            plot_course: res.plot_course
          });
        } catch (error) {
          this.setState({
            isLoaded: true,
            error
          });
        }
      }
    );
  }

  async onChangeProp(event) {
    this.setState(
      {
        prop: event.value,
        prop_label: event.label
      },
      async function() {
        try {
          const response = await fetch(
            `https://kk6gpv-api.herokuapp.com/aprs/map?type_aprs=radius&prop_aprs=${encodeURIComponent(
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
            error
          });
        }
      }
    );
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/aprs/map?type_aprs=radius&prop_aprs=${encodeURIComponent(
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
        rows: res.rows
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

    var time_options = [
      { value: "m_5", label: "5 minutes" },
      { value: "h_1", label: "1 hour" },
      { value: "h_6", label: "6 hours" },
      { value: "d_1", label: "1 day" }
    ];

    var prop_options = [
      { value: "speed", label: "Speed" },
      { value: "altitude", label: "Altitude" },
      { value: "course", label: "Course" }
    ];

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
            <div className="margin" />
            {/* <Footer /> */}
          </div>
        </div>
      );
    }
  }
}

export default AprsHouston;
