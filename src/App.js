import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "./components/Menu";
import RenderLoader from "./components/Menu";

const Home = React.lazy(() => import("./pages/Home"));
const StationDb = React.lazy(() => import("./pages/StationDb"));
const StationSocket = React.lazy(() => import("./pages/StationSocket"));
const StationHistory = React.lazy(() => import("./pages/StationHistory"));
const StationInfo = React.lazy(() => import("./pages/StationInfo"));
const WeatherAviation = React.lazy(() => import("./pages/WeatherAviation"));
const WeatherBlips = React.lazy(() => import("./pages/WeatherBlips"));
const WeatherSoundings = React.lazy(() => import("./pages/WeatherSoundings"));
const IoT = React.lazy(() => import("./pages/IoT"));
const IoTAnomaly = React.lazy(() => import("./pages/IoTAnomaly"));
const AprsLocation = React.lazy(() => import("./pages/AprsLocation"));
const AprsIgate = React.lazy(() => import("./pages/AprsIgate"));
const AprsHouston = React.lazy(() => import("./pages/AprsHouston"));
const AprsInfo = React.lazy(() => import("./pages/AprsInfo"));
const Aircraft = React.lazy(() => import("./pages/Aircraft"));
const Paragliding = React.lazy(() => import("./pages/Paragliding"));
const Soaring = React.lazy(() => import("./pages/Soaring"));
const N5777V = React.lazy(() => import("./pages/N5777V"));
const Galleries = React.lazy(() => import("./pages/Galleries"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Photo = React.lazy(() => import("./pages/Photo"));
const Travel = React.lazy(() => import("./pages/Travel"));
const Scuba = React.lazy(() => import("./pages/Scuba"));
const Fishing = React.lazy(() => import("./pages/Fishing"));
const OilgasSummary = React.lazy(() => import("./pages/OilgasSummary"));
const OilgasMap = React.lazy(() => import("./pages/OilgasMap"));
const OilgasDetails = React.lazy(() => import("./pages/OilgasDetails"));
const Blog = React.lazy(() => import("./pages/Blog"));
// const About = React.lazy(() => import('./pages/About'));
const Resume = React.lazy(() => import("./pages/Resume"));
const Login = React.lazy(() => import("./pages/Login"));
const TestMap = React.lazy(() => import("./pages/TestMap"));
const CardBoard = React.lazy(() => import("./pages/CardBoard"));
const API = React.lazy(() => import("./pages/API"));

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <React.Suspense fallback={RenderLoader}>
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
              <Route path="/about" component={Resume} />
              {/* <Route path="/resume" component={Resume} /> */}
              <Route path="/login" component={Login} />
              <Route path="/test/map" component={TestMap} />
              <Route path="/api" component={API} />
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
        </React.Suspense>
      </div>
    );
  }
}

export default App;
