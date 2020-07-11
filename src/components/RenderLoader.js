import React, { Component } from "react";

class RenderLoader extends Component {
  render() {
    if (this.props.location === "card") {
      return (
        <div>
          <div style={{ minHeight: "50px" }}>
            <div className="center">
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.location === "map") {
      return (
        <div>
          <div className="waiting">
            <div className="center">
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <div className="margin" />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="mainframe">
            <div className="center">
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <div className="margin" />
          </div>
        </div>
      );
    }
  }
}

export default RenderLoader;
