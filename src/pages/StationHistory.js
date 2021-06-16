import React, { Component } from "react";
import CardCell from "../components/CardCell";
import Select from "react-select";
import { CardDeck, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import RenderLoader from "../components/RenderLoader";
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
      fig_lt: [],
      time: "d_1",
      time_label: "1 day",
      revision: 0,
    };
  }

  async onChange(event) {
    this.setState(
      {
        time: event.value,
        time_label: event.label,
      },
      async function() {
        try {
          const response = await fetch(
            `https://kk6gpv-api.herokuapp.com/station/history/graphs?time_int=${encodeURIComponent(
              this.state.time
            )}`
          );
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const res = await response.json();
          this.setState({
            isLoaded: true,
            fig_td: res.fig_td,
            fig_pr: res.fig_pr,
            fig_pc: res.fig_pc,
            fig_wd: res.fig_wd,
            fig_su: res.fig_su,
            fig_cb: res.fig_cb,
            fig_wr: res.fig_wr,
            fig_thp: res.fig_thp,
            fig_lt: res.fig_lt,
            revision: this.state.revision + 1,
          });
        } catch (error) {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      }
    );
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://kk6gpv-api.herokuapp.com/station/history/graphs?time_int=${encodeURIComponent(
          this.state.time
        )}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.json();
      this.setState({
        isLoaded: true,
        fig_td: res.fig_td,
        fig_pr: res.fig_pr,
        fig_pc: res.fig_pc,
        fig_wd: res.fig_wd,
        fig_su: res.fig_su,
        fig_cb: res.fig_cb,
        fig_wr: res.fig_wr,
        fig_thp: res.fig_thp,
        fig_lt: res.fig_lt,
        revision: this.state.revision + 1,
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
      });
    }
  }

  render() {
    const { error, isLoaded } = this.state;

    var options = [
      { value: "h_1", label: "1 hour" },
      { value: "h_6", label: "6 hours" },
      { value: "h_12", label: "12 hours" },
      { value: "d_1", label: "1 day" },
      { value: "d_2", label: "2 days" },
      { value: "d_7", label: "7 days" },
      { value: "d_30", label: "30 days" },
    ];

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <RenderLoader location="page" />;
    } else {
      return (
        <div>
          <div className="mainframe">
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
                      name="time_int"
                      value={this.state.time}
                      defaultInputValue=""
                      options={options}
                      placeholder={this.state.time_label}
                      searchable={false}
                      onChange={this.onChange.bind(this)}
                    />
                  </div>
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.fig_td]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.fig_pr]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.fig_pc]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.fig_wd]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.fig_su]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.fig_cb]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.fig_lt]}
                revision={this.state.revision}
              />
            </CardDeck>
            <CardDeck className="carddeck">
              <CardCell
                plot={[this.state.fig_wr]}
                revision={this.state.revision}
              />
              <CardCell
                plot={[this.state.fig_thp]}
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
