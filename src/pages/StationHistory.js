import React, { Component } from 'react'
import CardPlot from '../components/CardPlot'
import Select from 'react-select'
import { CardDeck, Card, CardHeader, CardTitle, CardBody } from 'reactstrap';
import Footer from '../components/Footer'
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
            selected: 'd_1',
            label: '1 day',
        };
    }

    onChange(event) {
        // console.log(event.value);
        this.setState(
            {
                selected: event.value,
                label: event.label
            },
            function () {
                console.log(this.state);
                fetch(`https://www.kk6gpv.net/station/history/graphs?time_int=${encodeURIComponent(this.state.selected)}`)
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
                    );
                console.log(this.state);
            }
        );
    }

    componentDidMount() {
        const encodedValue = encodeURIComponent(this.state.selected);
        fetch(`https://www.kk6gpv.net/station/history/graphs?time_int=${encodedValue}`)
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
            );
    }

    render() {
        const { error, isLoaded } = this.state;

        var options = [
            { value: 'h_1', label: '1 hour' },
            { value: 'h_6', label: '6 hours' },
            { value: 'd_1', label: '1 day' },
            { value: 'd_2', label: '2 days' },
            { value: 'd_7', label: '7 days' },
            { value: 'd_30', label: '30 days' },
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
                                        <h5>Time</h5>
                                    </CardTitle>
                                </CardHeader>
                                <CardBody className="cardbody">
                                    <div width="100vw">
                                        <Select
                                            name='time_int'
                                            value={this.state.selected}
                                            defaultInputValue=""
                                            options={options}
                                            placeholder={this.state.label}
                                            searchable={false}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </CardBody>
                            </Card >
                        </CardDeck>
                        <CardDeck className="carddeck">
                            <CardPlot
                                data={this.state.fig_td.data}
                                layout={this.state.fig_td.layout}
                                revision={this.state.revision}
                            />
                        </CardDeck>
                        <CardDeck className="carddeck">
                            <CardPlot
                                data={this.state.fig_pr.data}
                                layout={this.state.fig_pr.layout}
                                revision={this.state.revision}
                            />
                        </CardDeck>
                        <CardDeck className="carddeck">
                            <CardPlot
                                data={this.state.fig_pc.data}
                                layout={this.state.fig_pc.layout}
                                revision={this.state.revision}
                            />
                        </CardDeck>
                        <CardDeck className="carddeck">
                            <CardPlot
                                data={this.state.fig_wd.data}
                                layout={this.state.fig_wd.layout}
                                revision={this.state.revision}
                            />
                        </CardDeck>
                        <CardDeck className="carddeck">
                            <CardPlot
                                data={this.state.fig_su.data}
                                layout={this.state.fig_su.layout}
                                revision={this.state.revision}
                            />
                        </CardDeck>
                        <CardDeck className="carddeck">
                            <CardPlot
                                data={this.state.fig_cb.data}
                                layout={this.state.fig_cb.layout}
                                revision={this.state.revision}
                            />
                        </CardDeck>
                        <CardDeck className="carddeck">
                            <CardPlot
                                data={this.state.fig_wr.data}
                                layout={this.state.fig_wr.layout}
                                revision={this.state.revision}
                            />
                            <CardPlot
                                data={this.state.fig_thp.data}
                                layout={this.state.fig_thp.layout}
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

export default StationHistory;