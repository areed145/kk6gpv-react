import React, { Component } from "react";
import {
  Card,
  CardBody,
  ButtonGroup,
  DropdownToggle,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import MapOil from "../components/MapOil";


class MapOilGas extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      error: null,
      isLoaded: false,
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <div className="mainframe">
          <MapOil
            latitude={35.45}
            longitude={-118.99}
            zoom={12}
            mapstyle={"mapbox://styles/areed145/ck6h5ywqd0aig1ioqwdynu6sb"}
            fill={"page"}
            circle={false}
          />
          <Card
            style={{
              position: "fixed",
              top: "75px",
              left: "10px"
            }}
          >
            <CardBody className="cardbodynopad">
              <div style={{ margin: "-5px 0px -5px 0px" }}>
                <ButtonGroup vertical>
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                    direction="down"
                  >
                    <DropdownToggle
                      caret
                      direction="right"
                      style={{
                        color: "#ffffff",
                        backgroundColor: "#3330c5",
                        border: "0px"
                      }}
                    >
                      Tag Explorer
                    </DropdownToggle>
                    <DropdownMenu
                      className="dropdownmenu"
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "140px"
                      }}
                    >
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/Low%20Performer" target="_blank" >Low Performer</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/Slider" target="_blank" >Slider</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/Declining" target="_blank" >Declining</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/Gainer" target="_blank" >Gainer</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/Ramping%20Up" target="_blank" >Ramping Up</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/High%20Performer" target="_blank" >High Performer</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/IPC" target="_blank" >IPC</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/PIC" target="_blank" >PIC</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/Active" target="_blank" >Active</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/Shut-In" target="_blank" >Shut-In</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/Bad%20Data" target="_blank" >Bad Data</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/Damaged" target="_blank" >Damaged</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/Steam%20Breathrough" target="_blank" >Steam Breakthrough</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/Steam%20Block" target="_blank" >Steam Block</DropdownItem>
                      <DropdownItem style={{ color: "#ffffff", backgroundColor: "#2EA4F4", border: "0px" }} href="/analytics/heavyoil/summary/High%20Depletion" target="_blank" >High Depletion</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default MapOilGas;
