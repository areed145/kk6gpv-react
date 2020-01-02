import React, { Component } from 'react';
import { CardDeck, Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import Plot from 'react-plotly.js';
import MapOil from '../components/MapOil';
import Footer from '../components/Footer';
class DetailsOilgas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            api: this.props.match.params.api,
            header: [],
            graph_oilgas: [],
            graph_offset_oil: [],
            graph_offset_stm: [],
            graph_offset_wtr: [],
            graph_offset_oil_ci: [],
            graph_offset_stm_ci: [],
            graph_offset_wtr_ci: [],
            graph_cyclic_jobs: [],
        };
    }

    componentDidMount() {
        const encodedValue = encodeURIComponent(this.state.api);
        fetch(`https://www.kk6gpv.net/oilgas/details/graphs?api=${encodedValue}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        header: result.header,
                        graph_oilgas: result.graph_oilgas,
                        graph_offset_oil: result.graph_offset_oil,
                        graph_offset_stm: result.graph_offset_stm,
                        graph_offset_wtr: result.graph_offset_wtr,
                        graph_offset_oil_ci: result.graph_offset_oil_ci,
                        graph_offset_stm_ci: result.graph_offset_stm_ci,
                        graph_offset_wtr_ci: result.graph_offset_wtr_ci,
                        graph_cyclic_jobs: result.graph_cyclic_jobs,
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
                                        <h5>Well Details: {this.state.header.api}</h5>
                                    </CardTitle>
                                </CardHeader>
                                <CardBody className="cardbody">
                                    <br></br>
                                    Field: {this.state.header.field}
                                    <br></br>
                                    Operator: {this.state.header.operator}
                                    <br></br>
                                    Wellname: {this.state.header.lease} {this.state.header.well}
                                    <br></br>
                                    County: {this.state.header.county}
                                    <br></br>
                                    Section: {this.state.header.section}
                                    <br></br>
                                    Township: {this.state.header.township}
                                    <br></br>
                                    Range: {this.state.header.rnge}
                                    <br></br>
                                    District: {this.state.header.district}
                                </CardBody>
                            </Card >
                            <Card className="card">
                                <CardHeader className="cardheader">
                                    <CardTitle>
                                        <h5>Well Location: {this.state.header.api}</h5>
                                    </CardTitle>
                                </CardHeader>
                                <CardBody className="cardbody">
                                    <MapOil
                                        latitude={this.state.header.latitude}
                                        longitude={this.state.header.longitude}
                                        zoom={16}
                                    />
                                </CardBody>
                            </Card >
                        </CardDeck>
                        <CardDeck className="carddeck">
                            <Card className="card">
                                <CardHeader className="cardheader">
                                    <CardTitle>
                                        <h5>Production Detail: {this.state.header.api}</h5>
                                    </CardTitle>
                                </CardHeader>
                                <CardBody className="cardbody">
                                    <div width="100vw">
                                        <Plot
                                            data={this.state.graph_oilgas.data}
                                            layout={this.state.graph_oilgas.layout}
                                            useResizeHandler
                                            style={{ width: '100%' }}
                                            config={{ displayModeBar: false }}
                                        />
                                    </div>
                                </CardBody>
                            </Card >
                        </CardDeck>
                        <CardDeck className="carddeck">
                            <Card className="card">
                                <CardHeader className="cardheader">
                                    <CardTitle>
                                        <h5>Offset Performance: {this.state.header.api}</h5>
                                    </CardTitle>
                                </CardHeader>
                                <CardBody className="cardbody">
                                    <div width="100vw">
                                        <Plot
                                            data={this.state.graph_offset_oil.data}
                                            layout={this.state.graph_offset_oil.layout}
                                            useResizeHandler
                                            style={{ width: '100%' }}
                                            config={{ displayModeBar: false }}
                                        />
                                        <Plot
                                            data={this.state.graph_offset_stm.data}
                                            layout={this.state.graph_offset_stm.layout}
                                            useResizeHandler
                                            style={{ width: '100%' }}
                                            config={{ displayModeBar: false }}
                                        />
                                        <Plot
                                            data={this.state.graph_offset_wtr.data}
                                            layout={this.state.graph_offset_wtr.layout}
                                            useResizeHandler
                                            style={{ width: '100%' }}
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
                                            data={this.state.graph_offset_oil_ci.data}
                                            layout={this.state.graph_offset_oil_ci.layout}
                                            useResizeHandler
                                            style={{ width: '100%' }}
                                            config={{ displayModeBar: false }}
                                        />
                                        <Plot
                                            data={this.state.graph_offset_stm_ci.data}
                                            layout={this.state.graph_offset_stm_ci.layout}
                                            useResizeHandler
                                            style={{ width: '100%' }}
                                            config={{ displayModeBar: false }}
                                        />
                                        <Plot
                                            data={this.state.graph_offset_wtr_ci.data}
                                            layout={this.state.graph_offset_wtr_ci.layout}
                                            useResizeHandler
                                            style={{ width: '100%' }}
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
                                            data={this.state.graph_cyclic_jobs.data}
                                            layout={this.state.graph_cyclic_jobs.layout}
                                            useResizeHandler
                                            style={{ width: '100%' }}
                                            config={{ displayModeBar: false }}
                                        />
                                    </div>
                                </CardBody>
                            </Card >
                        </CardDeck>
                        <div className="margin" />
                        {/* <Footer /> */}
                    </div>
                </div>
            );
        }
    }
}

export default DetailsOilgas;