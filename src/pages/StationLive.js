import React, { Component } from 'react'
import Gauge from '../components/Gauge'
import GaugeWindDir from '../components/GaugeWindDir'
import GaugeWindSpeed from '../components/GaugeWindSpeed'
import { CardDeck } from 'reactstrap';
import Footer from '../components/Footer'

class StationLive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            wx: [],
        };
    }

    componentDidMount() {
        fetch("https://www.kk6gpv.net/station/live")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        wx: result,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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
                            <Gauge
                                title='Temp'
                                level={this.state.wx.temp_f}
                                gmin={0}
                                gmax={110}
                                hw={200}
                                cmap={
                                    ['#f44298', '#f44741', '#f48541',
                                        '#f4af41', '#edde42', '#d6ed42',
                                        '#78ed42', '#42edae', '#42d0ed',
                                        '#4283ed', '#424ded']
                                }
                            />
                            <Gauge
                                title='Dewpoint'
                                level={this.state.wx.dewpoint_f}
                                gmin={0}
                                gmax={110}
                                hw={200}
                                cmap={
                                    ['#f44298', '#f44741', '#f48541',
                                        '#f4af41', '#edde42', '#d6ed42',
                                        '#78ed42', '#42edae', '#42d0ed',
                                        '#4283ed', '#424ded']
                                }
                            />
                            <Gauge
                                title='Humidity'
                                level={this.state.wx.relative_humidity}
                                gmin={0}
                                gmax={100}
                                hw={200}
                                cmap={
                                    ['#4286f4', '#41b8f4', '#41f1f4',
                                        '#41f455', '#a9f441']
                                }
                            />
                            <Gauge
                                title='Pressure'
                                level={this.state.wx.pressure_in}
                                gmin={29.3}
                                gmax={30.5}
                                hw={200}
                                cmap={
                                    ['#78ed42', '#d6ed42', '#edde42',
                                        '#f4af41', '#f48541',]
                                }
                            />
                        </CardDeck>
                        <CardDeck className="carddeck">
                            <GaugeWindDir
                                title='Wind Direction'
                                level={this.state.wx.wind_degrees}
                                gmin={0}
                                gmax={110}
                                hw={160}
                            />
                            <GaugeWindSpeed
                                title='Wind Speed / Gust'
                                level={this.state.wx.wind_mph}
                                level2={this.state.wx.wind_gust_mph}
                                gmin={0}
                                gmax={15}
                                hw={160}
                            />
                            <Gauge
                                title='Daily Rain'
                                level={this.state.wx.precip_today_in}
                                gmin={0}
                                gmax={1}
                                hw={160}
                                cmap={
                                    ['#4286f4', '#6399f2', '#41b8f4',
                                        '#41f1f4', '#bcf6ff']
                                }
                            />
                            <Gauge
                                title='Solar'
                                level={this.state.wx.solar_radiation}
                                gmin={0}
                                gmax={1000}
                                hw={160}
                                cmap={
                                    ['#ff9900', '#ffb444', '#ffd944',
                                        '#fce58a', '#fffcbc',]
                                }
                            />
                            <Gauge
                                title='UV'
                                level={this.state.wx.UV}
                                gmin={0}
                                gmax={8}
                                hw={160}
                                cmap={
                                    ['#ff9990', '#fcbbb5', '#fcd1b5',
                                        '#efd5c4', '#f2e7e1',]
                                }
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