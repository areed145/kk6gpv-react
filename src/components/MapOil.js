import { Component } from 'react';
import React from 'react'
import ReactMapGL, { GeolocateControl, Popup, FullscreenControl } from "react-map-gl";
import WellInfo from './WellInfo';
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN = 'pk.eyJ1IjoiYXJlZWQxNDUiLCJhIjoiY2phdzNsN2ZoMGh0bjMybzF3cTkycWYyciJ9.4aS7z-guI2VDlP3duMg2FA';

class MapOil extends Component {
    state = {
        viewport: {
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8,
            showPopup: true
        },
        popup: null
    }

    onViewportChange = viewport => {
        const { width, height, ...etc } = viewport
        this.setState({ viewport: etc })
        // console.log(this.state);
    }

    onMapClick(event) {
        const feature = event.features.find(f => f.layer.id === 'wells');

        if (feature) {
            // look up cluster expansion zoom
            var coordinates = feature.geometry.coordinates.slice();
            var field = feature.properties.field;
            var lease = feature.properties.lease;
            var well = feature.properties.well;
            var operator = feature.properties.operator;
            var api = feature.properties.api;
            // var text = "<strong>" + lease + " " + well + "</strong><br>";
            // text += "<a href=\"/oilgas/details/" + api + "\" target=\"_blank\" title=\"Opens in a new window\">" + api + "</a><br>";
            // text += operator + "<br>";
            // text += field + "<br>";
            const popup = {
                latitude: coordinates[1],
                longitude: coordinates[0],
                field: field,
                lease: lease,
                well: well,
                operator: operator,
                api: api,
            };
            this.setState({ popup: popup });
        }
    }

    renderPopup() {
        const { popup } = this.state;

        return (
            popup && (
                <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={popup.longitude}
                    latitude={popup.latitude}
                    closeOnClick={false}
                    onClose={() => this.setState({ popup: null })}
                >
                    <WellInfo info={popup}/>
                </Popup>
            )
        );
    }

    render() {
        const { viewport} = this.state

        const fullscreenControlStyle = {
            position: 'absolute',
            top: 10,
            left: 10,
            padding: '0px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)'
        };

        const geolocateStyle = {
            position: 'absolute',
            right: 10,
            top: 10,
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)'
        }

        return (
            <div className="map">
            <ReactMapGL
                {...viewport}
                width="100%"
                height="100%"
                mapboxApiAccessToken={TOKEN}
                mapStyle='mapbox://styles/areed145/ck2jlfnp03oiv1cpepd4js9k6'
                onViewportChange={viewport => this.onViewportChange(viewport)}
                onClick={popup => this.onMapClick(popup)}>
                {this.renderPopup()}
                <div className="geolocate">
                    <GeolocateControl style={geolocateStyle}
                        positionOptions={{ enableHighAccuracy: true }}
                        trackUserLocation={true}
                        onViewportChange={this._updateViewport}
                    />
                </div>
                <div className="fullscreen" style={fullscreenControlStyle}>
                    <FullscreenControl />
                </div>
            </ReactMapGL>
            </div>
        );
    }
}

export default MapOil

