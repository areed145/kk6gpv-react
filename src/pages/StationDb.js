import React, { Component } from "react";
import CardCell from "../components/CardCell";
import { CardDeck } from "reactstrap";
// import Footer from "../components/Footer";

class StationLive extends Component {
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
      stations: 1,
      infrared: 0,
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

  async intervalUpdate(event) {
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/station/live/data`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        wx: res.wx
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
          this.state.prop_awc
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
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        radar_map: res.map
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
  }

  async componentWillUnmount() {
    clearInterval(this.interval);
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/station/live/data`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        wx: res.wx
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/weather/aviation/map?prop_awc=${encodeURIComponent(
          this.state.prop_awc
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
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        radar_map: res.map
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
    this.interval = setInterval(() => this.intervalUpdate(), 60000);
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
              <CardCell
                title="Wind Direction"
                gauge_winddir={{
                  level: this.state.wx.wind_degrees,
                  gmin: 0,
                  gmax: 359,
                  hw: 160
                }}
              />
              <CardCell
                title="Wind Speed / Gust"
                gauge_windspd={{
                  level: this.state.wx.wind_mph,
                  level2: this.state.wx.wind_gust_mph,
                  gmin: 0,
                  gmax: 15,
                  hw: 160
                }}
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

export default StationLive;
