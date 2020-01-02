import React, { Component } from "react";
import CardCell from "../components/CardCell";
import Select from "react-select";
import { CardDeck, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import Footer from "../components/Footer";

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

  onChangeTime(event) {
    // console.log(event.value);
    this.setState(
      {
        time: event.value,
        time_label: event.label
      },
      function() {
        console.log(this.state);
        fetch(
          `https://www.kk6gpv.net/aprs/map?type_aprs=radius&prop_aprs=${encodeURIComponent(
            this.state.prop
          )}&time_int=${encodeURIComponent(this.state.time)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var map_aprs = { ...this.state.map_aprs };
              map_aprs.data = result.map_aprs.data;
              this.setState({ map_aprs });
              var plot_speed = { ...this.state.plot_speed };
              plot_speed.data = result.plot_speed.data;
              this.setState({ plot_speed });
              var plot_alt = { ...this.state.plot_alt };
              plot_alt.data = result.plot_alt.data;
              this.setState({ plot_alt });
              var plot_course = { ...this.state.plot_course };
              plot_course.data = result.plot_course.data;
              this.setState({ plot_course });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
        console.log(this.state);
      }
    );
  }

  onChangeProp(event) {
    // console.log(event.value);
    this.setState(
      {
        prop: event.value,
        prop_label: event.label
      },
      function() {
        console.log(this.state);
        fetch(
          `https://www.kk6gpv.net/aprs/map?type_aprs=radius&prop_aprs=${encodeURIComponent(
            this.state.prop
          )}&time_int=${encodeURIComponent(this.state.time)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var map_aprs = { ...this.state.map_aprs };
              map_aprs.data = result.map_aprs.data;
              this.setState({ map_aprs });
              var plot_speed = { ...this.state.plot_speed };
              plot_speed.data = result.plot_speed.data;
              this.setState({ plot_speed });
              var plot_alt = { ...this.state.plot_alt };
              plot_alt.data = result.plot_alt.data;
              this.setState({ plot_alt });
              var plot_course = { ...this.state.plot_course };
              plot_course.data = result.plot_course.data;
              this.setState({ plot_course });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
        console.log(this.state);
      }
    );
  }

  componentDidMount() {
    fetch(
      `https://www.kk6gpv.net/aprs/map?type_aprs=radius&prop_aprs=${encodeURIComponent(
        this.state.prop
      )}&time_int=${encodeURIComponent(this.state.time)}`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            map_aprs: result.map_aprs,
            plot_speed: result.plot_speed,
            plot_alt: result.plot_alt,
            plot_course: result.plot_course,
            rows: result.rows
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
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
