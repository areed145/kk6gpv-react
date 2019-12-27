import React, { Component } from 'react'
// import CardCell from '../components/CardCell'
import { CardDeck, Card, CardBody } from 'reactstrap';
import Plot from 'react-plotly.js';

class StationHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            fig_td: [],
            fig_pr: [],
            fig_pc: [],
            fig_wd: [],
            fig_su: [],
            fig_cb: [],
            fig_wr: [],
            fig_thp: [],
        };
    }

    componentDidMount() {
        fetch("https://www.kk6gpv.net/wx/graph?time_int=d_2")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        fig_td: result.fig_td,
                        fig_pr: result.fig_pr,
                        fig_pc: result.fig_pc,
                        fig_wd: result.fig_wd,
                        fig_su: result.fig_su,
                        fig_cb: result.fig_cb,
                        fig_wr: result.fig_wr,
                        fig_thp: result.fig_thp,
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
                        <Card className="card">
                            <CardBody className="cardbody">
                                <div width="100vw">
                                    <Plot
                                        data={this.state.fig_td.data}
                                        layout={this.state.fig_td.layout}
                                        revision={this.state.revision}
                                        graphDiv="fig_td"
                                        useResizeHandler
                                        style={{ height: '100%' }}
                                        config={{ displayModeBar: false }}
                                    />
                                </div>
                            </CardBody>
                        </Card >
                    </CardDeck>
                    <CardDeck className="carddeck">
                        <Card className="card">
                            <CardBody className="cardbody">
                                <div width="100vw">
                                    <Plot
                                        data={this.state.fig_pr.data}
                                        layout={this.state.fig_pr.layout}
                                        revision={this.state.revision}
                                        graphDiv="fig_td"
                                        useResizeHandler
                                        style={{ height: '100%' }}
                                        config={{ displayModeBar: false }}
                                    />
                                </div>
                            </CardBody>
                        </Card >
                    </CardDeck>
                    <CardDeck className="carddeck">
                        <Card className="card">
                            <CardBody className="cardbody">
                                <div width="100vw">
                                    <Plot
                                        data={this.state.fig_pc.data}
                                        layout={this.state.fig_pc.layout}
                                        revision={this.state.revision}
                                        graphDiv="fig_td"
                                        useResizeHandler
                                        style={{ height: '100%' }}
                                        config={{ displayModeBar: false }}
                                    />
                                </div>
                            </CardBody>
                        </Card >
                    </CardDeck>
                    <CardDeck className="carddeck">
                        <Card className="card">
                            <CardBody className="cardbody">
                                <div width="100vw">
                                    <Plot
                                        data={this.state.fig_wd.data}
                                        layout={this.state.fig_wd.layout}
                                        revision={this.state.revision}
                                        graphDiv="fig_td"
                                        useResizeHandler
                                        style={{ height: '100%' }}
                                        config={{ displayModeBar: false }}
                                    />
                                </div>
                            </CardBody>
                        </Card >
                    </CardDeck>
                    <CardDeck className="carddeck">
                        <Card className="card">
                            <CardBody className="cardbody">
                                <div width="100vw">
                                    <Plot
                                        data={this.state.fig_su.data}
                                        layout={this.state.fig_su.layout}
                                        revision={this.state.revision}
                                        graphDiv="fig_td"
                                        useResizeHandler
                                        style={{ height: '100%' }}
                                        config={{ displayModeBar: false }}
                                    />
                                </div>
                            </CardBody>
                        </Card >
                    </CardDeck>
                    <CardDeck className="carddeck">
                        <Card className="card">
                            <CardBody className="cardbody">
                                <div width="100vw">
                                    <Plot
                                        data={this.state.fig_cb.data}
                                        layout={this.state.fig_cb.layout}
                                        revision={this.state.revision}
                                        graphDiv="fig_td"
                                        useResizeHandler
                                        style={{ height: '100%' }}
                                        config={{ displayModeBar: false }}
                                    />
                                </div>
                            </CardBody>
                        </Card >
                    </CardDeck>
                    <CardDeck className="carddeck">
                        <Card className="card">
                            <CardBody className="cardbody">
                                <div width="100vw">
                                    <Plot
                                        data={this.state.fig_wr.data}
                                        layout={this.state.fig_wr.layout}
                                        revision={this.state.revision}
                                        graphDiv="fig_td"
                                        useResizeHandler
                                        style={{ height: '100%' }}
                                        config={{ displayModeBar: false }}
                                    />
                                </div>
                            </CardBody>
                        </Card >
                        <Card className="card">
                            <CardBody className="cardbody">
                                <div width="100vw">
                                    <Plot
                                        data={this.state.fig_thp.data}
                                        layout={this.state.fig_thp.layout}
                                        revision={this.state.revision}
                                        graphDiv="fig_td"
                                        useResizeHandler
                                        style={{ height: '100%' }}
                                        config={{ displayModeBar: false }}
                                    />
                                </div>
                            </CardBody>
                        </Card >
                    </CardDeck>
                </div>
            );
        }
    }
}

export default StationHistory;