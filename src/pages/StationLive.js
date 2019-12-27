import React, { Component } from 'react'
import GaugeTemp from '../components/GaugeTemp'
import GaugeHum from '../components/GaugeHum'
import { CardDeck } from 'reactstrap';

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
                        wx: result.wx,
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

        // var layout = { font: { family: "Ubuntu"}}

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="center">
                    <div className="spinner-border text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <CardDeck className="carddeck">
                        <GaugeTemp value={this.state.wx.temp_f} />
                        <GaugeHum value={this.state.wx.dewpt_f} />
                    </CardDeck>
                    <div className="margin" />
                </div>
            );
        }
    }
}

export default StationLive;