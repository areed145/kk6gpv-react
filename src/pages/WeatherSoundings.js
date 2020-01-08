import React, { Component } from "react";
import CardCell from "../components/CardCell";
import GaugeWindDir from "../components/GaugeWindDir";
import GaugeWindSpeed from "../components/GaugeWindSpeed";
import { CardDeck } from "reactstrap";
// import Footer from "../components/Footer";

class WeatherSoundings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      wx: [],
      prop_awc: "flight_category",
      lat: 29.78088,
      lon: -95.42041,
      zoom: 6,
      satellite: 0,
      visible: 0,
      radar: 1,
      analysis: 0,
      lightning: 1,
      precip: 0,
      watchwarn: 0,
      temp: 0,
      radar_map: []
    };
  }

  componentDidMount() {
    fetch("https://api.kk6gpv.net/station/live/data")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            // isLoaded: true,
            wx: result
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
    fetch(
      `https://api.kk6gpv.net/weather/aviation/map?prop_awc=${encodeURIComponent(
        this.state.prop_awc
      )}&lat=${encodeURIComponent(this.state.lat)}&lon=${encodeURIComponent(
        this.state.lon
      )}&zoom=${encodeURIComponent(
        this.state.zoom
      )}&satellite=${encodeURIComponent(
        this.state.satellite
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
            radar_map: result
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
    console.log(this.state);
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
            <div className="margin" />
          </div>
          {/* <Footer /> */}
        </div>
      );
    } else {
      return (
        <div>
          <div className="main">
            <CardDeck className="carddeck">
              <CardCell
                title="Temp"
                gauge={{
                  level: this.state.wx.temp_f,
                  gmin: 0,
                  gmax: 110,
                  hw: 200,
                  cmap: [
                    "#f44298",
                    "#f44741",
                    "#f48541",
                    "#f4af41",
                    "#edde42",
                    "#d6ed42",
                    "#78ed42",
                    "#42edae",
                    "#42d0ed",
                    "#4283ed",
                    "#424ded"
                  ]
                }}
              />
              <CardCell
                title="Dewpoint"
                gauge={{
                  level: this.state.wx.dewpoint_f,
                  gmin: 0,
                  gmax: 110,
                  hw: 200,
                  cmap: [
                    "#f44298",
                    "#f44741",
                    "#f48541",
                    "#f4af41",
                    "#edde42",
                    "#d6ed42",
                    "#78ed42",
                    "#42edae",
                    "#42d0ed",
                    "#4283ed",
                    "#424ded"
                  ]
                }}
              />
              <CardCell
                title="Humidity"
                gauge={{
                  level: this.state.wx.relative_humidity,
                  gmin: 0,
                  gmax: 100,
                  hw: 200,
                  cmap: ["#4286f4", "#41b8f4", "#41f1f4", "#41f455", "#a9f441"]
                }}
              />
              <CardCell
                title="Pressure"
                gauge={{
                  level: this.state.wx.pressure_in,
                  gmin: 29.3,
                  gmax: 30.5,
                  hw: 200,
                  cmap: ["#78ed42", "#d6ed42", "#edde42", "#f4af41", "#f48541"]
                }}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <GaugeWindDir
                title="Wind Direction"
                level={this.state.wx.wind_degrees}
                gmin={0}
                gmax={110}
                hw={160}
              />
              <GaugeWindSpeed
                title="Wind Speed / Gust"
                level={this.state.wx.wind_mph}
                level2={this.state.wx.wind_gust_mph}
                gmin={0}
                gmax={15}
                hw={160}
              />
              <CardCell
                title="Daily Rain"
                gauge={{
                  level: this.state.wx.precip_today_in,
                  gmin: 0,
                  gmax: 1,
                  hw: 160,
                  cmap: ["#4286f4", "#6399f2", "#41b8f4", "#41f1f4", "#bcf6ff"]
                }}
              />
              <CardCell
                title="Solar"
                gauge={{
                  level: this.state.wx.solar_radiation,
                  gmin: 0,
                  gmax: 1000,
                  hw: 160,
                  cmap: ["#ff9900", "#ffb444", "#ffd944", "#fce58a", "#fffcbc"]
                }}
              />
              <CardCell
                title="UV"
                gauge={{
                  level: this.state.wx.UV,
                  gmin: 0,
                  gmax: 8,
                  hw: 160,
                  cmap: ["#ff9990", "#fcbbb5", "#fcd1b5", "#efd5c4", "#f2e7e1"]
                }}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                title="Station Radar"
                plot={[this.state.radar_map]}
                static={true}
              />
            </CardDeck>
            <div className="margin" />
          </div>
          {/* <Footer /> */}
        </div>
      );
    }
  }
}

export default WeatherSoundings;
