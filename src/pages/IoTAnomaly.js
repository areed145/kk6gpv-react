import React, { Component } from "react";
import CardCell from "../components/CardCell";
import Select from "react-select";
import { CardDeck, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
// import Footer from "../components/Footer";

class IotAnomaly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      plot_iot: [],
      plot_anomaly: [],
      plot_spectro: [],
      time: {
        value: "h_6",
        label: "6 hours"
      },
      sensor: {
        value: "sensor.load_1m",
        label: "Load 1m"
      },
      revision: 0
    };
  }

  async intervalUpdate(event) {
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/iot/anomaly?sensor_iot=${encodeURIComponent(
          this.state.sensor.value
        )}&time_int=${encodeURIComponent(this.state.time.value)}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      var plot_iot = { ...this.state.plot_iot };
      var plot_anomaly = { ...this.state.plot_anomaly };
      var plot_spectro = { ...this.state.plot_spectro };
      plot_iot.data = res.graph.data;
      plot_anomaly.data = res.anomaly.data;
      plot_spectro.data = res.spectro.data;
      this.setState({ plot_iot });
      this.setState({ plot_anomaly });
      this.setState({ plot_spectro });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
  }

  async onChangeTime(event) {
    this.setState(
      {
        time: event
      },
      async function() {
        try {
          const response = await fetch(
            `https://kk6gpv-api.herokuapp.com/iot/anomaly?sensor_iot=${encodeURIComponent(
              this.state.sensor.value
            )}&time_int=${encodeURIComponent(this.state.time.value)}`
          );
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const res = await response.json();
          this.setState({
            isLoaded: true,
            plot_iot: res.graph,
            plot_anomaly: res.anomaly,
            plot_spectro: res.spectro
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

  async onChangeSensor(event) {
    this.setState(
      {
        sensor: event
      },
      async function() {
        try {
          const response = await fetch(
            `https://kk6gpv-api.herokuapp.com/iot/anomaly?sensor_iot=${encodeURIComponent(
              this.state.sensor.value
            )}&time_int=${encodeURIComponent(this.state.time.value)}`
          );
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const res = await response.json();
          var plot_iot = { ...this.state.plot_iot };
          var plot_anomaly = { ...this.state.plot_anomaly };
          plot_iot.data = res.graph.data;
          plot_anomaly.data = res.anomaly.data;
          this.setState({ plot_iot });
          this.setState({ plot_anomaly });
        } catch (error) {
          this.setState({
            isLoaded: true,
            error
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
        `https://kk6gpv-api.herokuapp.com/iot/anomaly?sensor_iot=${encodeURIComponent(
          this.state.sensor.value
        )}&time_int=${encodeURIComponent(this.state.time.value)}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        plot_iot: res.graph,
        plot_anomaly: res.anomaly,
        plot_spectro: res.spectro
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
    this.interval = setInterval(() => this.intervalUpdate(), 10000);
  }

  render() {
    console.log(this.state);

    const { error, isLoaded } = this.state;

    var time_options = [
      { value: "m_5", label: "5 minutes" },
      { value: "m_30", label: "30 minutes" },
      { value: "h_1", label: "1 hours" },
      { value: "h_2", label: "2 hours" },
      { value: "h_6", label: "6 hours" },
      { value: "d_1", label: "1 day" },
      { value: "d_2", label: "2 days" },
      { value: "d_7", label: "7 days" }
    ];

    var sensor_options = [
      {
        label: "NUC Monitor",
        options: [
          { value: "sensor.load_1m", label: "Load 1m" },
          { value: "sensor.load_5m", label: "Load 5m" },
          { value: "sensor.load_15m", label: "Load 15m" },
          { value: "sensor.memory_free", label: "Memory Free" },
          { value: "sensor.cpu_speed", label: "CPU Speed" },
          { value: "sensor.processor_use", label: "Processor Use" },
          { value: "sensor.disk_use_percent_home", label: "Disk Use %" },
          { value: "sensor.speedtest_download", label: "Speedtest Download" },
          { value: "sensor.speedtest_upload", label: "Speedtest Upload" },
          { value: "sensor.speedtest_ping", label: "Speedtest Ping" }
        ]
      },
      {
        label: "Plug 1",
        options: [
          { value: "sensor.plug_01_current", label: "Plug 01 Current" },
          { value: "sensor.plug_01_power", label: "Plug 01 Power" },
          {
            value: "sensor.plug_01_total_daily_energy",
            label: "Plug 01 Total Daily Energy"
          },
          { value: "sensor.plug_01_voltage", label: "Plug 01 Voltage" }
        ]
      },
      {
        label: "Plug 2",
        options: [
          { value: "sensor.plug_02_current", label: "Plug 02 Current" },
          { value: "sensor.plug_02_power", label: "Plug 02 Power" },
          {
            value: "sensor.plug_02_total_daily_energy",
            label: "Plug 02 Total Daily Energy"
          },
          { value: "sensor.plug_02_voltage", label: "Plug 02 Voltage" }
        ]
      },
      {
        label: "Plug 3",
        options: [
          { value: "sensor.plug_03_current", label: "Plug 03 Current" },
          { value: "sensor.plug_03_power", label: "Plug 03 Power" },
          {
            value: "sensor.plug_03_total_daily_energy",
            label: "Plug 03 Total Daily Energy"
          },
          { value: "sensor.plug_03_voltage", label: "Plug 03 Voltage" }
        ]
      },
      {
        label: "Floor 2",
        options: [
          { value: "sensor.floor2_temperature", label: "Floor 2 Temperature" },
          { value: "sensor.floor2_humidity", label: "Floor 2 Humidity" }
        ]
      },
      {
        label: "Mobile",
        options: [
          { value: "sensor.mobile_temperature", label: "Mobile Temperature" },
          { value: "sensor.mobile_humidity", label: "Mobile Humidity" }
        ]
      },
      {
        label: "Forecast",
        options: [
          { value: "weather.dark_sky_forecast", label: "Dark Sky Forecast" },
          { value: "sensor.dark_sky_icon", label: "Dark Sky Icon" },
          { value: "sensor.dark_sky_icon_1h", label: "Dark Sky Icon 1h" },
          { value: "sensor.dark_sky_icon_6h", label: "Dark Sky Icon 6h" }
        ]
      },
      {
        label: "Temperature",
        options: [
          {
            value: "sensor.dark_sky_apparent_temperature",
            label: "Apparent Temperature"
          },
          {
            value: "sensor.dark_sky_apparent_temperature_1h",
            label: "Apparent Temperature 1h"
          },
          {
            value: "sensor.dark_sky_apparent_temperature_6h",
            label: "Apparent Temperature 6h"
          },
          { value: "sensor.dark_sky_temperature", label: "Temperature" },
          { value: "sensor.dark_sky_temperature_1h", label: "Temperature 1h" },
          { value: "sensor.dark_sky_temperature_6h", label: "Temperature 6h" }
        ]
      },
      {
        label: "Cloud Coverage",
        options: [
          { value: "sensor.dark_sky_cloud_coverage", label: "Cloud Coverage" },
          {
            value: "sensor.dark_sky_cloud_coverage_1h",
            label: "Cloud Coverage 1h"
          },
          {
            value: "sensor.dark_sky_cloud_coverage_6h",
            label: "Cloud Coverage 6h"
          }
        ]
      },
      {
        label: "Dewpoint",
        options: [
          { value: "sensor.dark_sky_dew_point", label: "Dewpoint" },
          {
            value: "sensor.dark_sky_dew_point_1h",
            label: "Dewpoint 1h"
          },
          {
            value: "sensor.dark_sky_dew_point_6h",
            label: "Dewpoint 6h"
          }
        ]
      },
      {
        label: "Humidity",
        options: [
          { value: "sensor.dark_sky_humidity", label: "Humidity" },
          {
            value: "sensor.dark_sky_humidity_1h",
            label: "Humidity 1h"
          },
          {
            value: "sensor.dark_sky_humidity_6h",
            label: "Humidity 6h"
          }
        ]
      },
      {
        label: "Storms",
        options: [
          {
            value: "sensor.dark_sky_nearest_storm_bearing",
            label: "Nearest Storm Bearing"
          },
          {
            value: "sensor.dark_sky_nearest_storm_distance",
            label: "Nearest Storm Distance"
          }
        ]
      },
      {
        label: "Ozone",
        options: [
          { value: "sensor.dark_sky_ozone", label: "Ozone" },
          {
            value: "sensor.dark_sky_ozone_1h",
            label: "Ozone 1h"
          },
          {
            value: "sensor.dark_sky_ozone_6h",
            label: "Ozone 6h"
          }
        ]
      },
      {
        label: "Precip",
        options: [
          { value: "sensor.dark_sky_precip", label: "Precip" },
          {
            value: "sensor.dark_sky_precip_1h",
            label: "Precip 1h"
          },
          {
            value: "sensor.dark_sky_precip_6h",
            label: "Precip 6h"
          }
        ]
      },
      {
        label: "Precip Accumulation",
        options: [
          {
            value: "sensor.dark_sky_precip_accumulation",
            label: "Precip Accumulation"
          },
          {
            value: "sensor.dark_sky_precip_accumulation_1h",
            label: "Precip Accumulation 1h"
          },
          {
            value: "sensor.dark_sky_precip_accumulation_6h",
            label: "Precip Accumulation 6h"
          }
        ]
      },
      {
        label: "Precip Intensity",
        options: [
          {
            value: "sensor.dark_sky_precip_intensity",
            label: "Precip Intensity"
          },
          {
            value: "sensor.dark_sky_precip_intensity_1h",
            label: "Precip Intensity 1h"
          },
          {
            value: "sensor.dark_sky_precip_intensity_6h",
            label: "Precip Intensity 6h"
          }
        ]
      },
      {
        label: "Precip Probability",
        options: [
          {
            value: "sensor.dark_sky_precip_probability",
            label: "Precip Probability"
          },
          {
            value: "sensor.dark_sky_precip_probability_1h",
            label: "Precip Probability 1h"
          },
          {
            value: "sensor.dark_sky_precip_probability_6h",
            label: "Precip Probability 6h"
          }
        ]
      },
      {
        label: "Pressure",
        options: [
          {
            value: "sensor.dark_sky_pressure",
            label: "Pressure"
          },
          {
            value: "sensor.dark_sky_pressure_1h",
            label: "Pressure 1h"
          },
          {
            value: "sensor.dark_sky_pressure_6h",
            label: "Pressure 6h"
          }
        ]
      },
      {
        label: "UV Index",
        options: [
          {
            value: "sensor.dark_sky_uv_index",
            label: "UV Index"
          },
          {
            value: "sensor.dark_sky_uv_index_1h",
            label: "UV Index 1h"
          },
          {
            value: "sensor.dark_sky_uv_index_6h",
            label: "UV Index 6h"
          }
        ]
      },
      {
        label: "Visibility",
        options: [
          {
            value: "sensor.dark_sky_visibility",
            label: "Visibility"
          },
          {
            value: "sensor.dark_sky_visibility_1h",
            label: "Visibility 1h"
          },
          {
            value: "sensor.dark_sky_visibility_6h",
            label: "Visibility 6h"
          }
        ]
      },
      {
        label: "Wind Bearing",
        options: [
          {
            value: "sensor.dark_sky_wind_bearing",
            label: "Wind Bearing"
          },
          {
            value: "sensor.dark_sky_wind_bearing_1h",
            label: "Wind Bearing 1h"
          },
          {
            value: "sensor.dark_sky_wind_bearing_6h",
            label: "Wind Bearing 6h"
          }
        ]
      },
      {
        label: "Wind Speed",
        options: [
          {
            value: "sensor.dark_sky_wind_speed",
            label: "Wind Speed"
          },
          {
            value: "sensor.dark_sky_wind_speed_1h",
            label: "Wind Speed 1h"
          },
          {
            value: "sensor.dark_sky_wind_speed_6h",
            label: "Wind Speed 6h"
          }
        ]
      },
      {
        label: "Wind Gust",
        options: [
          {
            value: "sensor.dark_sky_wind_gust",
            label: "Wind Gust"
          },
          {
            value: "sensor.dark_sky_wind_gust_1h",
            label: "Wind Gust 1h"
          },
          {
            value: "sensor.dark_sky_wind_gust_6h",
            label: "Wind Gust 6h"
          }
        ]
      },
      {
        label: "Sun / Moon",
        options: [
          {
            value: "sun.sun",
            label: "Sun"
          },
          {
            value: "sensor.moon",
            label: "Moon"
          }
        ]
      }
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
                      name="sensor"
                      value={this.state.sensor}
                      defaultInputValue=""
                      options={sensor_options}
                      //   isMulti
                      searchable={false}
                      onChange={this.onChangeSensor.bind(this)}
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
                      searchable={false}
                      onChange={this.onChangeTime.bind(this)}
                    />
                  </div>
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                title="Sensor Values"
                plot={[this.state.plot_iot]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                title="Anomaly Level"
                plot={[this.state.plot_anomaly]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                title="Spectrogram Input"
                plot={[this.state.plot_spectro]}
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

export default IotAnomaly;
