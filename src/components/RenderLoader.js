import React, { Component } from "react";

import logo from "../assets/images/icon_transparent.png";

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
          <div className="full-page-loader">
            <img width="100" src={logo} alt="Coconut Barometer Logo" />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="full-page-loader">
            <img width="100" src={logo} alt="Coconut Barometer Logo" />
          </div>
        </div>
      );
    }
  }
}

export default RenderLoader;
