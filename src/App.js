import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import Home from './pages/Home'
import IoT from './pages/IoT'
import StationHistory from './pages/StationHistory'
import StationLive from './pages/StationLive'
import Aircraft from './pages/Aircraft'
import N5777V from './pages/N5777V'
import MapOilgas from './pages/MapOilgas'
import MapTest from './pages/MapTest'
import DetailsOilgas from './pages/DetailsOilgas'

import Menu from './components/Menu'

class App extends Component {
    render() {
        return (
            <div className="main">
                <Menu />
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/iot" component={IoT} />
                        <Route path="/station/history" component={StationHistory} />
                        <Route path="/station/live" component={StationLive} />
                        <Route path="/aircraft" component={Aircraft} />
                        <Route path="/n5777v" component={N5777V} />
                        <Route path="/oilgas/map" component={MapOilgas} />
                        <Route path="/maptest" component={MapTest} />
                        <Route path="/oilgas/details/:api" component={DetailsOilgas}/>
                        <Route component={Error} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;