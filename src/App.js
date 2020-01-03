import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/index.css";

import Home from "./pages/Home";
import StationLive from "./pages/StationLive";
import StationHistory from "./pages/StationHistory";
import StationInfo from './pages/StationInfo'
import WeatherAviation from './pages/WeatherAviation'
// import WeatherBlips from './pages/WeatherBlips'
// import WeatherSoundings from './pages/WeatherSoundings'
import IoT from "./pages/IoT";
import AprsLocation from './pages/AprsLocation'
import AprsIgate from './pages/AprsIgate'
import AprsHouston from './pages/AprsHouston'
// import AprsInfo from './pages/AprsInfo'
import Aircraft from "./pages/Aircraft";
import Paragliding from './pages/Paragliding'
import Soaring from './pages/Soaring'
import N5777V from "./pages/N5777V";
// import Photos from './pages/Photos'
import Travel from './pages/Travel'
import Scuba from './pages/Scuba'
import Fishing from './pages/Fishing'
// import OilgasSummary from './pages/OilgasSummary'
import OilgasMap from "./pages/OilgasMap";
import OilgasDetails from "./pages/OilgasDetails";
import TestMap from "./pages/TestMap";

import Menu from "./components/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/station/live" component={StationLive} />
            <Route path="/station/history" component={StationHistory} />
            <Route path="/station/info" component={StationInfo} />
            <Route path="/weather/aviation" component={WeatherAviation} />
            {/* <Route path="/weather/blips" component={WeatherBlips} /> */}
            {/* <Route path="/weather/soundings" component={WeatherSoundings} /> */}
            <Route path="/iot" component={IoT} />
            <Route path="/aprs/location" component={AprsLocation} />
            <Route path="/aprs/igate" component={AprsIgate} />
            <Route path="/aprs/houston" component={AprsHouston} />
            {/* <Route path="/aprs/info" component={AprsInfo} /> */}
            <Route path="/aircraft" component={Aircraft} />
            <Route path="/paragliding" component={Paragliding} />
            <Route path="/soaring" component={Soaring} />
            <Route path="/n5777v" component={N5777V} />
            {/* <Route path="/photos" component={Photos} /> */}
            <Route path="/travel" component={Travel} />
            <Route path="/scuba" component={Scuba} />
            <Route path="/fishing" component={Fishing} />

            <Route path="/oilgas/map" component={OilgasMap} />
            <Route path="/test/map" component={TestMap} />
            <Route path="/oilgas/details/:api" component={OilgasDetails} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
