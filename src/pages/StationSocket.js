import React, { Component } from "react";
import CardGauge from "../components/CardGauge";
import CardCell from "../components/CardCell";
import RenderLoader from "../components/RenderLoader";
import { CardDeck } from "reactstrap";
// import Footer from "../components/Footer";
import mqtt from "mqtt";

class StationSocket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      client: mqtt.connect("mqtt://broker.mqttdashboard.com:8000/mqtt"),
      air: false,
      sky: false,
      rad: false,
      isLoaded: false,
      wx: [],
      wx_hist: {
        temp_f: [],
        dewpoint_f: [],
        relative_humidity: [],
        pressure_in: [],
        wind_degrees: [],
        wind_mph: [],
        precip_today_in: [],
        solar_radiation: [],
        uv: [],
      },
      hist_len: 25,
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
      radar_map: [],
    };
    this.state.client.on("connect", function() {
      //   console.log("mqtt connected");
      this.subscribe("kk6gpv_bus/wx/#", function(err) {
        if (!err) {
          //   console.log("subscribed");
        }
      });
    });
    this.printer = this.printer.bind(this);
    this.state.client.on("message", this.printer);
  }

  printer(topic, message) {
    message = JSON.parse(message);
    if (message.type === "wx_wind") {
      try {
        var wx_wind = { ...this.state.wx };
        wx_wind.wind_degrees = message.wind_degrees;
        wx_wind.wind_mph = message.wind_mph;
        this.setState({ wx: wx_wind });

        var wx_hist_wind = { ...this.state.wx_hist };
        wx_hist_wind.wind_degrees.push(message.wind_degrees);
        if (wx_hist_wind.wind_degrees.length > this.state.hist_len) {
          wx_hist_wind.wind_degrees.shift();
        }
        wx_hist_wind.wind_mph.push(message.wind_mph);
        if (wx_hist_wind.wind_mph.length > this.state.hist_len) {
          wx_hist_wind.wind_mph.shift();
        }
        this.setState({ wx_hist: wx_hist_wind });

        this.setState({ sky: true });
      } catch {}
    }
    if (message.type === "wx_air") {
      try {
        var wx_air = { ...this.state.wx };
        wx_air.temp_f = message.temp_f;
        wx_air.dewpoint_f = message.dewpoint_f;
        wx_air.relative_humidity = message.relative_humidity;
        wx_air.pressure_in = message.pressure_in;
        wx_air.feels_like = message.feels_like;
        wx_air.heat_index = message.heat_index;
        wx_air.wind_chill = message.wind_chill;
        wx_air.pressure_trend = message.pressure_trend;
        wx_air.strike_count_3h = message.strike_count_3h;
        wx_air.strike_last_dist = message.strike_last_dist;
        wx_air.strike_last_epoch = message.strike_last_epoch;
        this.setState({ wx: wx_air });

        var wx_hist_air = { ...this.state.wx_hist };
        wx_hist_air.temp_f.push(message.temp_f);
        if (wx_hist_air.temp_f.length > this.state.hist_len) {
          wx_hist_air.temp_f.shift();
        }
        wx_hist_air.dewpoint_f.push(message.dewpoint_f);
        if (wx_hist_air.dewpoint_f.length > this.state.hist_len) {
          wx_hist_air.dewpoint_f.shift();
        }
        wx_hist_air.relative_humidity.push(message.relative_humidity);
        if (wx_hist_air.relative_humidity.length > this.state.hist_len) {
          wx_hist_air.relative_humidity.shift();
        }
        wx_hist_air.pressure_in.push(message.pressure_in);
        if (wx_hist_air.pressure_in.length > this.state.hist_len) {
          wx_hist_air.pressure_in.shift();
        }
        this.setState({ wx_hist: wx_hist_air });

        this.setState({ air: true });
      } catch {}
    }
    if (message.type === "wx_sky") {
      try {
        var wx_sky = { ...this.state.wx };
        wx_sky.wind_degrees = message.wind_degrees;
        wx_sky.wind_mph = message.wind_mph;
        wx_sky.wind_gust_mph = message.wind_gust_mph;
        wx_sky.precip_today_in = message.precip_today_in;
        wx_sky.solar_radiation = message.solar_radiation;
        wx_sky.uv = message.uv;
        this.setState({ wx: wx_sky });

        var wx_hist_sky = { ...this.state.wx_hist };
        wx_hist_sky.wind_degrees.push(message.wind_degrees);
        if (wx_hist_sky.wind_degrees.length > this.state.hist_len) {
          wx_hist_sky.wind_degrees.shift();
        }
        wx_hist_sky.wind_mph.push(message.wind_mph);
        if (wx_hist_sky.wind_mph.length > this.state.hist_len) {
          wx_hist_sky.wind_mph.shift();
        }
        wx_hist_sky.precip_today_in.push(message.precip_today_in);
        if (wx_hist_sky.precip_today_in.length > this.state.hist_len) {
          wx_hist_sky.precip_today_in.shift();
        }
        wx_hist_sky.solar_radiation.push(message.solar_radiation);
        if (wx_hist_sky.solar_radiation.length > this.state.hist_len) {
          wx_hist_sky.solar_radiation.shift();
        }
        wx_hist_sky.uv.push(message.uv);
        if (wx_hist_sky.uv.length > this.state.hist_len) {
          wx_hist_sky.uv.shift();
        }
        this.setState({ wx_hist: wx_hist_sky });

        this.setState({ sky: true });
      } catch {}
    }
    if (this.state.air === true) {
      if (this.state.sky === true) {
        if (this.state.rad === true) {
          this.setState({ isLoaded: true });
        }
      }
    }
  }

  componentDidMount() {
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
      .then((response) => response.json())
      .then(
        (res) => {
          this.setState({
            rad: true,
            radar_map: res.map,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <RenderLoader />;
    } else {
      return (
        <div>
          <div className="mainframe">
            <CardDeck className="carddeck">
              <CardGauge
                title="Temp"
                gauge={{
                  level: this.state.wx.temp_f,
                  level_inset: this.state.wx.temp_f,
                  history: this.state.wx_hist.temp_f,
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
                    "#424ded",
                  ],
                }}
              />
              <CardGauge
                title="Dewpoint"
                gauge={{
                  level: this.state.wx.dewpoint_f,
                  level_inset: this.state.wx.dewpoint_f,
                  history: this.state.wx_hist.dewpoint_f,
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
                    "#424ded",
                  ],
                }}
              />
              <CardGauge
                title="Humidity"
                gauge={{
                  level: this.state.wx.relative_humidity,
                  level_inset: this.state.wx.relative_humidity,
                  history: this.state.wx_hist.relative_humidity,
                  gmin: 0,
                  gmax: 100,
                  hw: 200,
                  cmap: ["#4286f4", "#41b8f4", "#41f1f4", "#41f455", "#a9f441"],
                }}
              />
              <CardGauge
                title="Pressure"
                gauge={{
                  level: this.state.wx.pressure_in,
                  level_inset: this.state.wx.pressure_in,
                  level_inset2: this.state.wx.pressure_trend,
                  history: this.state.wx_hist.pressure_in,
                  gmin: 29.3,
                  gmax: 30.5,
                  hw: 200,
                  cmap: ["#78ed42", "#d6ed42", "#edde42", "#f4af41", "#f48541"],
                }}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardGauge
                title="Wind Direction"
                gauge_winddir={{
                  level: this.state.wx.wind_degrees,
                  history: this.state.wx_hist.wind_degrees,
                  gmin: 0,
                  gmax: 359,
                  hw: 160,
                }}
              />
              <CardGauge
                title="Wind Speed / Gust"
                gauge_windspd={{
                  level: this.state.wx.wind_mph,
                  level2: this.state.wx.wind_gust_mph,
                  level_inset: this.state.wx.wind_mph,
                  level_inset2: this.state.wx.wind_gust_mph,
                  history: this.state.wx_hist.wind_mph,
                  gmin: 0,
                  gmax: 15,
                  hw: 160,
                }}
              />
              <CardGauge
                title="Daily Rain"
                gauge={{
                  level: this.state.wx.precip_today_in,
                  level_inset: this.state.wx.precip_today_in,
                  history: this.state.wx_hist.precip_today_in,
                  gmin: 0,
                  gmax: 1,
                  hw: 160,
                  cmap: ["#4286f4", "#6399f2", "#41b8f4", "#41f1f4", "#bcf6ff"],
                }}
              />
              <CardGauge
                title="Solar"
                gauge={{
                  level: this.state.wx.solar_radiation,
                  level_inset: this.state.wx.solar_radiation,
                  history: this.state.wx_hist.solar_radiation,
                  gmin: 0,
                  gmax: 1000,
                  hw: 160,
                  cmap: ["#ff9900", "#ffb444", "#ffd944", "#fce58a", "#fffcbc"],
                }}
              />
              <CardGauge
                title="UV"
                gauge={{
                  level: this.state.wx.uv,
                  level_inset: this.state.wx.uv,
                  history: this.state.wx_hist.uv,
                  gmin: 0,
                  gmax: 8,
                  hw: 160,
                  cmap: ["#ff9990", "#fcbbb5", "#fcd1b5", "#efd5c4", "#f2e7e1"],
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
