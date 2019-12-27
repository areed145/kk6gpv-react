import React from 'react';
import { CardDeck } from 'reactstrap';

import CardBasic from '../components/CardBasic'

const IoT = () => {
    return (
        <div>
            <CardDeck className="carddeck">
                <CardBasic />
            </CardDeck>
            <div className="margin" />
        </div>
        // <div class="col-md-12">
        //     <div class="card-deck mt-4">
        //         <div class="card border-0 shadow">
        //             <div class="card-header border-0">
        //                 <h5 class="card-title" align="center">Sensor</h5>
        //             </div>
        //             <div class="card-body">
        //                 <select multiple class="form-control" id='sensor_iot'>
        //                     <option value="sensor.load_1m">Load 1m</option>
        //                     <option value="sensor.load_5m">Load 5m</option>
        //                     <option value="sensor.load_15m">Load 15m</option>
        //                     <option value="sensor.memory_free">Memory Free</option>
        //                     <option value="sensor.cpu_speed">CPU Speed</option>
        //                     <option value="sensor.processor_use">Processor Use</option>
        //                     <option value="sensor.disk_use_percent_home">Disk Use %</option>
        //                     <option value="sensor.speedtest_download">Speedtest Download</option>
        //                     <option value="sensor.speedtest_ping">Speedtest Ping</option>
        //                     <option value="sensor.speedtest_upload">Speedtest Upload</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.plug_01_current">Plug 01 Current</option>
        //                     <option value="sensor.plug_01_power">Plug 01 Power</option>
        //                     <option value="sensor.plug_01_total_daily_energy">Plug 01 Total Daily Energy</option>
        //                     <option value="sensor.plug_01_voltage">Plug 01 Voltage</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.plug_02_current">Plug 02 Current</option>
        //                     <option value="sensor.plug_02_power">Plug 02 Power</option>
        //                     <option value="sensor.plug_02_total_daily_energy">Plug 02 Total Daily Energy</option>
        //                     <option value="sensor.plug_02_voltage">Plug 02 Voltage</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.plug_03_current">Plug 03 Current</option>
        //                     <option value="sensor.plug_03_power">Plug 03 Power</option>
        //                     <option value="sensor.plug_03_total_daily_energy">Plug 03 Total Daily Energy</option>
        //                     <option value="sensor.plug_03_voltage">Plug 03 Voltage</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.floor2_temperature">Floor 2 Temperature</option>
        //                     <option value="sensor.floor2_humidity">Floor 2 Humidity</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.mobile_temperature">Mobile Temperature</option>
        //                     <option value="sensor.mobile_humidity">Mobile Humidity</option>
        //                     <option disabled>──────────</option>
        //                     <option value="weather.dark_sky_forecast">Dark Sky Forecast</option>
        //                     <option value="sensor.dark_sky_icon">Dark Sky Icon</option>
        //                     <option value="sensor.dark_sky_icon_1h">Dark Sky Icon 1h</option>
        //                     <option value="sensor.dark_sky_icon_6h">Dark Sky Icon 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_apparent_temperature">Apparent Temperature</option>
        //                     <option value="sensor.dark_sky_apparent_temperature_1h">Apparent Temperature 1h</option>
        //                     <option value="sensor.dark_sky_apparent_temperature_6h">Apparent Temperature 6h</option>
        //                     <option value="sensor.dark_sky_temperature">Temperature</option>
        //                     <option value="sensor.dark_sky_temperature_1h">Temperature 1h</option>
        //                     <option value="sensor.dark_sky_temperature_6h">Temperature 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_cloud_coverage">Cloud Coverage</option>
        //                     <option value="sensor.dark_sky_cloud_coverage_1h">Cloud Coverage 1h</option>
        //                     <option value="sensor.dark_sky_cloud_coverage_6h">Cloud Coverage 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_dew_point">Dewpoint</option>
        //                     <option value="sensor.dark_sky_dew_point_1h">Dewpoint 1h</option>
        //                     <option value="sensor.dark_sky_dew_point_6h">Dewpoint 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_humidity">Humidity</option>
        //                     <option value="sensor.dark_sky_humidity_1h">Humidity 1h</option>
        //                     <option value="sensor.dark_sky_humidity_6h">Humidity 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_nearest_storm_bearing">Nearest Storm Bearing</option>
        //                     <option value="sensor.dark_sky_nearest_storm_distance">Nearest Storm Distance</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_ozone">Ozone</option>
        //                     <option value="sensor.dark_sky_ozone_1h">Ozone 1h</option>
        //                     <option value="sensor.dark_sky_ozone_6h">Ozone 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_precip">Precip</option>
        //                     <option value="sensor.dark_sky_precip_1h">Precip 1h</option>
        //                     <option value="sensor.dark_sky_precip_6h">Precip 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_precip_accumulation">Precip Accumulation</option>
        //                     <option value="sensor.dark_sky_precip_accumulation_1h">Precip Accumulation 1h</option>
        //                     <option value="sensor.dark_sky_precip_accumulation_6h">Precip Accumulation 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_precip_intensity">Precip Intensity</option>
        //                     <option value="sensor.dark_sky_precip_intensity_1h">Precip Intensity 1h</option>
        //                     <option value="sensor.dark_sky_precip_intensity_6h">Precip Intensity 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_precip_probability">Precip Probability</option>
        //                     <option value="sensor.dark_sky_precip_probability_1h">Precip Probability 1h</option>
        //                     <option value="sensor.dark_sky_precip_probability_6h">Precip Probability 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_pressure">Pressure</option>
        //                     <option value="sensor.dark_sky_pressure_1h">Pressure 1h</option>
        //                     <option value="sensor.dark_sky_pressure_6h">Pressure 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_uv_index">UV Index</option>
        //                     <option value="sensor.dark_sky_uv_index_1h">UV Index 1h</option>
        //                     <option value="sensor.dark_sky_uv_index_6h">UV Index 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_visibility">Visibility</option>
        //                     <option value="sensor.dark_sky_visibility_1h">Visibility 1h</option>
        //                     <option value="sensor.dark_sky_visibility_6h">Visibility 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_wind_bearing">Wind Bearing</option>
        //                     <option value="sensor.dark_sky_wind_bearing_1h">Wind Bearing 1h</option>
        //                     <option value="sensor.dark_sky_wind_bearing_6h">Wind Bearing 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_wind_speed">Wind Speed</option>
        //                     <option value="sensor.dark_sky_wind_speed_1h">Wind Speed 1h</option>
        //                     <option value="sensor.dark_sky_wind_speed_6h">Wind Speed 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.dark_sky_wind_gust">Wind Gust</option>
        //                     <option value="sensor.dark_sky_wind_gust_1h">Wind Gust 1h</option>
        //                     <option value="sensor.dark_sky_wind_gust_6h">Wind Gust 6h</option>
        //                     <option disabled>──────────</option>
        //                     <option value="sensor.moon">Moon</option>
        //                     <option value="sun.sun">Sun</option>
        //                 </select>
        //             </div>
        //         </div>
        //         <div class="card border-0 shadow">
        //             <div class="card-header border-0">
        //                 <h5 class="card-title" align="center">Time</h5>
        //             </div>
        //             <div class="card-body">
        //                 <select class="form-control" id='time_int'>
        //                 </select>
        //             </div>
        //         </div>
        //     </div>
        //     <div class="card-deck mt-4">
        //         <div class="card border-0 shadow">
        //             <div class="card-body">
        //                 <div class="chart" id="graph_iot">
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default IoT;