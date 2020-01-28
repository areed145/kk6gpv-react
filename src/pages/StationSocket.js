import React, { Component } from "react";
import CardCell from "../components/CardCell";
import { CardDeck } from "reactstrap";
// import Footer from "../components/Footer";

class StationSocket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      air: false,
      sky: false,
      rad: false,
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

  ws = new WebSocket(
    "wss://ws.weatherflow.com/swd/data?api_key=20c70eae-e62f-4d3b-b3a4-8586e90f3ac8"
  );

  componentDidMount() {
    this.ws.onopen = () => {
      try {
        fetch(
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
        )
          .then(response => response.json())
          .then(res =>
            this.setState({
              rad: true,
              radar_map: res.map
            })
          )
          .then(
            this.ws.send(
              '{"type":"listen_start", "device_id":54051, "id": "2098388936"}'
            )
          )
          .then(
            this.ws.send(
              '{"type":"listen_start", "device_id":54053, "id": "2098388936"}'
            )
          );
      } catch {}
    };

    this.ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data);

      if (message.type === "obs_air") {
        try {
          var wx_air = { ...this.state.wx };
          wx_air.temp_f = Number((message.obs[0][2] * (9 / 5) + 32).toFixed(2));
          wx_air.dewpoint_f = Number(
            (
              (message.obs[0][2] - (100 - message.obs[0][3]) / 5) * (9 / 5) +
              32
            ).toFixed(2)
          );
          wx_air.relative_humidity = Number(message.obs[0][3].toFixed(2));
          wx_air.pressure_in = Number((message.obs[0][1] * 0.02953).toFixed(2));
          this.setState({ wx: wx_air });
          this.setState({ air: true });
        } catch {}
      }
      if (message.type === "obs_sky") {
        try {
          var wx_sky = { ...this.state.wx };
          wx_sky.wind_degrees = message.obs[0][7];
          wx_sky.wind_mph = message.obs[0][5];
          wx_sky.wind_gust_mph = message.obs[0][6];
          wx_sky.precip_today_in = Number(
            (message.obs[0][11] * 0.0393701).toFixed(2)
          );
          wx_sky.solar_radiation = message.obs[0][1];
          wx_sky.UV = message.obs[0][2];
          this.setState({ wx: wx_sky });
          this.setState({ sky: true });
        } catch {}
      }
      if (this.state.air === true) {
        if (this.state.sky === true) {
          this.setState({ isLoaded: true });
        }
      }
    };

    this.ws.onclose = () => {};
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

export default StationSocket;
