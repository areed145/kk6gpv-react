import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    // NavbarText
} from 'reactstrap';

import logo from '../assets/images/icon_transparent.png';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar light expand="md" sticky="top" className="navbar">
                <NavbarBrand href="/">
                    <img id="logo" alt="logo" src={logo} width="45" height="45" />
                    Coconut Barometer
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>Weather</DropdownToggle>
                            <DropdownMenu right className="menu">
                                <DropdownItem href="/station/live">Station Live</DropdownItem>
                                <DropdownItem href="/station/history">Station History</DropdownItem>
                                <DropdownItem href="/station/info">Station Info</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/weather/aviation">Aviation Weather</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/weather/blips">BLIP Maps</DropdownItem>
                                <DropdownItem href="/weather/soundings">Soundings</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/iot">IoT</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>APRS</DropdownToggle>
                            <DropdownMenu right className="menu">
                                <DropdownItem href="/aprs/kk6gpv">KK6GPV</DropdownItem>
                                <DropdownItem href="/aprs/kk6gpv10">KK6GPV-10</DropdownItem>
                                <DropdownItem href="/aprs/houston">Houston Area</DropdownItem>
                                <DropdownItem href="/aprs/info">APRS Info</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>Flying</DropdownToggle>
                            <DropdownMenu right className="menu">
                                <DropdownItem href="/aircraft">Aircraft</DropdownItem>
                                <DropdownItem href="/paragliding">Paraglding</DropdownItem>
                                <DropdownItem href="/soaring">Soaring</DropdownItem>
                                <DropdownItem href="/n5777v">N5777V</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>Hobbies</DropdownToggle>
                            <DropdownMenu right className="menu">
                                <DropdownItem href="/photos">Photos</DropdownItem>
                                <DropdownItem href="/travel">Travel</DropdownItem>
                                <DropdownItem href="/scuba">Scuba</DropdownItem>
                                <DropdownItem href="/fishing">Fishing</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>Oil & Gas</DropdownToggle>
                            <DropdownMenu right className="menu">
                                <DropdownItem href="/oilgas/summary">Summary</DropdownItem>
                                <DropdownItem href="/oilgas/map">Map</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Menu