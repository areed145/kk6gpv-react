import React, { Component } from "react";
import Div100vh from "react-div-100vh";
import Plot from "react-plotly.js";
import Select from "react-select";
import {
  Card,
  CardBody,
  ButtonGroup,
  DropdownToggle,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
// import Footer from "../components/Footer";
class WeatherAviation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      error: null,
      isLoaded: false,
      prop: "flight_category",
      prop_label: "Flight Category",
      lat: 38,
      lon: -95,
      zoom: 3,
      stations: 1,
      infrared: 0,
      visible: 0,
      radar: 1,
      analysis: 1,
      lightning: 0,
      precip: 0,
      watchwarn: 0,
      temp: 0,
      radar_map: [],
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onChangeProp(event) {
    this.setState(
      {
        prop: event.value,
        prop_label: event.label
      },
      function() {
        fetch(
          `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
            this.state.prop
          )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
            this.state.lon
          )}&zoom=${encodeURIComponent(
            this.state.zoom
          )}&stations=${encodeURIComponent(
            this.state.stations
          )}&infrared=${encodeURIComponent(
            this.state.infrared
          )}&visible=${encodeURIComponent(
            this.state.visible
          )}&radar=${encodeURIComponent(
            this.state.radar
          )}&analysis=${encodeURIComponent(
            this.state.analysis
          )}&lightning=${encodeURIComponent(
            this.state.lightning
          )}&precip=${encodeURIComponent(
            this.state.precip
          )}&watchwarn=${encodeURIComponent(
            this.state.watchwarn
          )}&temp=${encodeURIComponent(this.state.temp)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var radar_map = { ...this.state.radar_map };
              radar_map.data = result.map.data;
              this.setState({ radar_map });
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
    );
  }

  onClickTemp(event) {
    var temp = -this.state.temp + 1;
    this.setState(
      {
        temp: temp
      },
      function() {
        fetch(
          `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
            this.state.prop
          )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
            this.state.lon
          )}&zoom=${encodeURIComponent(
            this.state.zoom
          )}&stations=${encodeURIComponent(
            this.state.stations
          )}&infrared=${encodeURIComponent(
            this.state.infrared
          )}&visible=${encodeURIComponent(
            this.state.visible
          )}&radar=${encodeURIComponent(
            this.state.radar
          )}&analysis=${encodeURIComponent(
            this.state.analysis
          )}&lightning=${encodeURIComponent(
            this.state.lightning
          )}&precip=${encodeURIComponent(
            this.state.precip
          )}&watchwarn=${encodeURIComponent(
            this.state.watchwarn
          )}&temp=${encodeURIComponent(this.state.temp)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var radar_map = { ...this.state.radar_map };
              radar_map.data = result.map.data;
              radar_map.layout.mapbox.layers = result.map.layout.mapbox.layers;
              this.setState({ radar_map: radar_map });
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
    );
  }

  onClickInfrared(event) {
    var infrared = -this.state.infrared + 1;
    this.setState(
      {
        infrared: infrared
      },
      function() {
        fetch(
          `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
            this.state.prop
          )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
            this.state.lon
          )}&zoom=${encodeURIComponent(
            this.state.zoom
          )}&stations=${encodeURIComponent(
            this.state.stations
          )}&infrared=${encodeURIComponent(
            this.state.infrared
          )}&visible=${encodeURIComponent(
            this.state.visible
          )}&radar=${encodeURIComponent(
            this.state.radar
          )}&analysis=${encodeURIComponent(
            this.state.analysis
          )}&lightning=${encodeURIComponent(
            this.state.lightning
          )}&precip=${encodeURIComponent(
            this.state.precip
          )}&watchwarn=${encodeURIComponent(
            this.state.watchwarn
          )}&temp=${encodeURIComponent(this.state.temp)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var radar_map = { ...this.state.radar_map };
              radar_map.data = result.map.data;
              radar_map.layout.mapbox.layers = result.map.layout.mapbox.layers;
              this.setState({ radar_map: radar_map });
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
    );
  }

  onClickVisible(event) {
    var visible = -this.state.visible + 1;
    this.setState(
      {
        visible: visible
      },
      function() {
        fetch(
          `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
            this.state.prop
          )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
            this.state.lon
          )}&zoom=${encodeURIComponent(
            this.state.zoom
          )}&stations=${encodeURIComponent(
            this.state.stations
          )}&infrared=${encodeURIComponent(
            this.state.infrared
          )}&visible=${encodeURIComponent(
            this.state.visible
          )}&radar=${encodeURIComponent(
            this.state.radar
          )}&analysis=${encodeURIComponent(
            this.state.analysis
          )}&lightning=${encodeURIComponent(
            this.state.lightning
          )}&precip=${encodeURIComponent(
            this.state.precip
          )}&watchwarn=${encodeURIComponent(
            this.state.watchwarn
          )}&temp=${encodeURIComponent(this.state.temp)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var radar_map = { ...this.state.radar_map };
              radar_map.data = result.map.data;
              radar_map.layout.mapbox.layers = result.map.layout.mapbox.layers;
              this.setState({ radar_map: radar_map });
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
    );
  }

  onClickFronts(event) {
    var analysis = -this.state.analysis + 1;
    this.setState(
      {
        analysis: analysis
      },
      function() {
        fetch(
          `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
            this.state.prop
          )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
            this.state.lon
          )}&zoom=${encodeURIComponent(
            this.state.zoom
          )}&stations=${encodeURIComponent(
            this.state.stations
          )}&infrared=${encodeURIComponent(
            this.state.infrared
          )}&visible=${encodeURIComponent(
            this.state.visible
          )}&radar=${encodeURIComponent(
            this.state.radar
          )}&analysis=${encodeURIComponent(
            this.state.analysis
          )}&lightning=${encodeURIComponent(
            this.state.lightning
          )}&precip=${encodeURIComponent(
            this.state.precip
          )}&watchwarn=${encodeURIComponent(
            this.state.watchwarn
          )}&temp=${encodeURIComponent(this.state.temp)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var radar_map = { ...this.state.radar_map };
              radar_map.data = result.map.data;
              radar_map.layout.mapbox.layers = result.map.layout.mapbox.layers;
              this.setState({ radar_map: radar_map });
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
    );
  }

  onClickLightning(event) {
    var lightning = -this.state.lightning + 1;
    this.setState(
      {
        lightning: lightning
      },
      function() {
        fetch(
          `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
            this.state.prop
          )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
            this.state.lon
          )}&zoom=${encodeURIComponent(
            this.state.zoom
          )}&stations=${encodeURIComponent(
            this.state.stations
          )}&infrared=${encodeURIComponent(
            this.state.infrared
          )}&visible=${encodeURIComponent(
            this.state.visible
          )}&radar=${encodeURIComponent(
            this.state.radar
          )}&analysis=${encodeURIComponent(
            this.state.analysis
          )}&lightning=${encodeURIComponent(
            this.state.lightning
          )}&precip=${encodeURIComponent(
            this.state.precip
          )}&watchwarn=${encodeURIComponent(
            this.state.watchwarn
          )}&temp=${encodeURIComponent(this.state.temp)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var radar_map = { ...this.state.radar_map };
              radar_map.data = result.map.data;
              radar_map.layout.mapbox.layers = result.map.layout.mapbox.layers;
              this.setState({ radar_map: radar_map });
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
    );
  }

  onClickPrecip(event) {
    var precip = -this.state.precip + 1;
    this.setState(
      {
        precip: precip
      },
      function() {
        fetch(
          `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
            this.state.prop
          )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
            this.state.lon
          )}&zoom=${encodeURIComponent(
            this.state.zoom
          )}&stations=${encodeURIComponent(
            this.state.stations
          )}&infrared=${encodeURIComponent(
            this.state.infrared
          )}&visible=${encodeURIComponent(
            this.state.visible
          )}&radar=${encodeURIComponent(
            this.state.radar
          )}&analysis=${encodeURIComponent(
            this.state.analysis
          )}&lightning=${encodeURIComponent(
            this.state.lightning
          )}&precip=${encodeURIComponent(
            this.state.precip
          )}&watchwarn=${encodeURIComponent(
            this.state.watchwarn
          )}&temp=${encodeURIComponent(this.state.temp)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var radar_map = { ...this.state.radar_map };
              radar_map.data = result.map.data;
              radar_map.layout.mapbox.layers = result.map.layout.mapbox.layers;
              this.setState({ radar_map: radar_map });
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
    );
  }

  onClickRadar(event) {
    var radar = -this.state.radar + 1;
    this.setState(
      {
        radar: radar
      },
      function() {
        fetch(
          `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
            this.state.prop
          )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
            this.state.lon
          )}&zoom=${encodeURIComponent(
            this.state.zoom
          )}&stations=${encodeURIComponent(
            this.state.stations
          )}&infrared=${encodeURIComponent(
            this.state.infrared
          )}&visible=${encodeURIComponent(
            this.state.visible
          )}&radar=${encodeURIComponent(
            this.state.radar
          )}&analysis=${encodeURIComponent(
            this.state.analysis
          )}&lightning=${encodeURIComponent(
            this.state.lightning
          )}&precip=${encodeURIComponent(
            this.state.precip
          )}&watchwarn=${encodeURIComponent(
            this.state.watchwarn
          )}&temp=${encodeURIComponent(this.state.temp)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var radar_map = { ...this.state.radar_map };
              radar_map.data = result.map.data;
              radar_map.layout.mapbox.layers = result.map.layout.mapbox.layers;
              this.setState({ radar_map: radar_map });
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
    );
  }

  onClickAlerts(event) {
    var watchwarn = -this.state.watchwarn + 1;
    this.setState(
      {
        watchwarn: watchwarn
      },
      function() {
        fetch(
          `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
            this.state.prop
          )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
            this.state.lon
          )}&zoom=${encodeURIComponent(
            this.state.zoom
          )}&stations=${encodeURIComponent(
            this.state.stations
          )}&infrared=${encodeURIComponent(
            this.state.infrared
          )}&visible=${encodeURIComponent(
            this.state.visible
          )}&radar=${encodeURIComponent(
            this.state.radar
          )}&analysis=${encodeURIComponent(
            this.state.analysis
          )}&lightning=${encodeURIComponent(
            this.state.lightning
          )}&precip=${encodeURIComponent(
            this.state.precip
          )}&watchwarn=${encodeURIComponent(
            this.state.watchwarn
          )}&temp=${encodeURIComponent(this.state.temp)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var radar_map = { ...this.state.radar_map };
              radar_map.data = result.map.data;
              radar_map.layout.mapbox.layers = result.map.layout.mapbox.layers;
              this.setState({ radar_map: radar_map });
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
    );
  }

  onClickStations(event) {
    var stations = -this.state.stations + 1;
    this.setState(
      {
        stations: stations
      },
      function() {
        fetch(
          `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
            this.state.prop
          )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
            this.state.lon
          )}&zoom=${encodeURIComponent(
            this.state.zoom
          )}&stations=${encodeURIComponent(
            this.state.stations
          )}&infrared=${encodeURIComponent(
            this.state.infrared
          )}&visible=${encodeURIComponent(
            this.state.visible
          )}&radar=${encodeURIComponent(
            this.state.radar
          )}&analysis=${encodeURIComponent(
            this.state.analysis
          )}&lightning=${encodeURIComponent(
            this.state.lightning
          )}&precip=${encodeURIComponent(
            this.state.precip
          )}&watchwarn=${encodeURIComponent(
            this.state.watchwarn
          )}&temp=${encodeURIComponent(this.state.temp)}`
        )
          .then(res => res.json())
          .then(
            result => {
              var radar_map = { ...this.state.radar_map };
              radar_map.data = result.map.data;
              radar_map.layout.mapbox.layers = result.map.layout.mapbox.layers;
              this.setState({ radar_map: radar_map });
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
    );
  }

  componentDidMount() {
    fetch(
      `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
        this.state.prop
      )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
        this.state.lon
      )}&zoom=${encodeURIComponent(
        this.state.zoom
      )}&stations=${encodeURIComponent(
        this.state.stations
      )}&infrared=${encodeURIComponent(
        this.state.infrared
      )}&visible=${encodeURIComponent(
        this.state.visible
      )}&radar=${encodeURIComponent(
        this.state.radar
      )}&analysis=${encodeURIComponent(
        this.state.analysis
      )}&lightning=${encodeURIComponent(
        this.state.lightning
      )}&precip=${encodeURIComponent(
        this.state.precip
      )}&watchwarn=${encodeURIComponent(
        this.state.watchwarn
      )}&temp=${encodeURIComponent(this.state.temp)}`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            radar_map: result.map
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

    var options_prop = [
      { value: "flight_category", label: "Flight Category" },
      { value: "temp_c", label: "Temperature" },
      { value: "temp_c_var", label: "Temperature StDev" },
      { value: "temp_c_delta", label: "Temperature Delta" },
      { value: "dewpoint_c", label: "Dewpoint" },
      { value: "dewpoint_c_delta", label: "Dewpoint Delta" },
      { value: "temp_dewpoint_spread", label: "Temp-Dewpoint Spread" },
      { value: "altim_in_hg", label: "Altimeter" },
      { value: "altim_in_hg_var", label: "Altimeter StDev" },
      { value: "altim_in_hg_delta", label: "Altimeter Delta" },
      { value: "wind_dir_degrees", label: "Wind Direction" },
      { value: "wind_speed_kt", label: "Wind Speed" },
      { value: "wind_speed_kt_delta", label: "Wind Speed Delta" },
      { value: "wind_gust_kt", label: "Wind Gust" },
      { value: "wind_gust_kt_delta", label: "Wind Gust Delta" },
      { value: "visibility_statute_mi", label: "Visibility" },
      { value: "cloud_base_ft_agl_0", label: "Cloud Base AGL" },
      { value: "cloud_base_ft_agl_0_delta", label: "Cloud Base AGL Delta" },
      { value: "sky_cover_0", label: "Sky Cover" },
      { value: "precip_in", label: "Precip" },
      { value: "elevation_m", label: "Elevation" },
      { value: "age", label: "Age" }
    ];

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <div className="mainframe">
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
          <div className="mainframe">
            <Div100vh style={{ height: "calc(100rvh - 65px)" }}>
              <Plot
                data={this.state.radar_map.data}
                layout={this.state.radar_map.layout}
                useResizeHandler
                style={{ height: "100%", width: "100%" }}
                config={{ displayModeBar: false }}
              />
            </Div100vh>
            <Card
              className="card"
              style={{
                position: "fixed",
                // width: "250px",
                // height: "210px",
                top: "140px",
                left: "15px"
              }}
            >
              <CardBody className="cardbodynopad">
                <div style={{ margin: "-5px 0px -5px 0px" }}>
                <ButtonGroup vertical>
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                    direction="down"
                  >
                    <DropdownToggle
                      caret
                      direction="right"
                      style={{
                        color: "#ffffff",
                        backgroundColor: "#e8093a",
                        border: "0px"
                      }}
                    >
                      Layers
                    </DropdownToggle>
                    <DropdownMenu
                      className="dropdownmenu"
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "100px"
                      }}
                    >
                      <DropdownItem
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#eb3461",
                          border: "0px"
                        }}
                        onClick={this.onClickStations.bind(this)}
                      >
                        Stations
                      </DropdownItem>
                      <DropdownItem
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#c53093",
                          border: "0px"
                        }}
                        onClick={this.onClickTemp.bind(this)}
                      >
                        Temp
                      </DropdownItem>
                      <DropdownItem
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#8a30c5",
                          border: "0px"
                        }}
                        onClick={this.onClickInfrared.bind(this)}
                      >
                        Infrared
                      </DropdownItem>
                      <DropdownItem
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#3330c5",
                          border: "0px"
                        }}
                        onClick={this.onClickVisible.bind(this)}
                      >
                        Visible
                      </DropdownItem>
                      <DropdownItem
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#2EA4F4",
                          border: "0px"
                        }}
                        onClick={this.onClickFronts.bind(this)}
                      >
                        Fronts
                      </DropdownItem>
                      <DropdownItem
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#30c5a5",
                          border: "0px"
                        }}
                        onClick={this.onClickPrecip.bind(this)}
                      >
                        Precip
                      </DropdownItem>
                      <DropdownItem
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#a6d84b",
                          border: "0px"
                        }}
                        onClick={this.onClickRadar.bind(this)}
                      >
                        Radar
                      </DropdownItem>
                      <DropdownItem
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#F4C12E",
                          border: "0px"
                        }}
                        onClick={this.onClickLightning.bind(this)}
                      >
                        Lightning
                      </DropdownItem>
                      <DropdownItem
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#F46A2E",
                          border: "0px"
                        }}
                        onClick={this.onClickAlerts.bind(this)}
                      >
                        Alerts
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
              </div>
              </CardBody>
            </Card>
            <Card
              className="card"
              style={{
                position: "fixed",
                width: "240px",
                top: "85px",
                left: "15px"
              }}
            >
              <CardBody className="cardbodynopad">
                <div width="100vw">
                  <Select
                    name="time_int"
                    value={this.state.prop}
                    defaultInputValue=""
                    options={options_prop}
                    placeholder={this.state.prop_label}
                    searchable={false}
                    onChange={this.onChangeProp.bind(this)}
                  />
                </div>
              </CardBody>
            </Card>
          </div>
          {/* <Footer /> */}
        </div>
      );
    }
  }
}

export default WeatherAviation;
