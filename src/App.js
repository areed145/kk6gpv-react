import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import StationDb from "./pages/StationDb";
import StationSocket from "./pages/StationSocket";
import StationHistory from "./pages/StationHistory";
import StationInfo from "./pages/StationInfo";
import WeatherAviation from "./pages/WeatherAviation";
import WeatherBlips from "./pages/WeatherBlips";
import WeatherSoundings from "./pages/WeatherSoundings";
import IoT from "./pages/IoT";
import IoTAnomaly from "./pages/IoTAnomaly";
import AprsLocation from "./pages/AprsLocation";
import AprsIgate from "./pages/AprsIgate";
import AprsHouston from "./pages/AprsHouston";
import AprsInfo from "./pages/AprsInfo";
import Aircraft from "./pages/Aircraft";
import Paragliding from "./pages/Paragliding";
import Soaring from "./pages/Soaring";
import N5777V from "./pages/N5777V";
import Galleries from "./pages/Galleries";
import Gallery from "./pages/Gallery";
import Photo from "./pages/Photo";
import Travel from "./pages/Travel";
import Scuba from "./pages/Scuba";
import Fishing from "./pages/Fishing";
import OilgasSummary from "./pages/OilgasSummary";
import OilgasMap from "./pages/OilgasMap";
import OilgasDetails from "./pages/OilgasDetails";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Login from "./pages/Login";
import TestMap from "./pages/TestMap";
import CardBoard from "./pages/CardBoard";
import API from "./pages/API";

import Menu from "./components/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/station/live" component={StationSocket} />
            <Route path="/station/db" component={StationDb} />
            <Route path="/station/history" component={StationHistory} />
            <Route path="/station/info" component={StationInfo} />
            <Route path="/weather/aviation" component={WeatherAviation} />
            <Route path="/weather/blips" component={WeatherBlips} />
            <Route path="/weather/soundings" component={WeatherSoundings} />
            <Route path="/iot/graph" component={IoT} />
            <Route path="/iot/anomaly" component={IoTAnomaly} />
            <Route path="/aprs/location" component={AprsLocation} />
            <Route path="/aprs/igate" component={AprsIgate} />
            <Route path="/aprs/houston" component={AprsHouston} />
            <Route path="/aprs/info" component={AprsInfo} />
            <Route path="/aircraft" component={Aircraft} />
            <Route path="/paragliding" component={Paragliding} />
            <Route path="/soaring" component={Soaring} />
            <Route path="/n5777v" component={N5777V} />
            <Route exact path="/galleries" component={Galleries} />
            <Route exact path="/gallery/:id" component={Gallery} />
            <Route exact path="/photo/:id" component={Photo} />
            <Route path="/travel" component={Travel} />
            <Route path="/scuba" component={Scuba} />
            <Route path="/fishing" component={Fishing} />
            <Route path="/oilgas/summary/:tag" component={OilgasSummary} />
            <Route path="/oilgas/map" component={OilgasMap} />
            <Route path="/oilgas/details/:api" component={OilgasDetails} />
            <Route path="/oilgas/tasks" component={CardBoard} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/login" component={Login} />
            <Route path="/test/map" component={TestMap} />
            <Route path="/api" component={API} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
