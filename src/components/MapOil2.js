import { Component } from "react";
import React from "react";
import ReactMapGL, {
  GeolocateControl,
  Popup,
  Layer,
  Source
} from "react-map-gl";
import WellInfo from "./WellInfo";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN =
  "pk.eyJ1IjoiYXJlZWQxNDUiLCJhIjoiY2phdzNsN2ZoMGh0bjMybzF3cTkycWYyciJ9.4aS7z-guI2VDlP3duMg2FA";

const metersToPixelsAtMaxZoom = (meters, latitude) =>
  meters / 0.075 / Math.cos((latitude * Math.PI) / 180);

class MapOil extends Component {
  state = {
    viewport: {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      zoom: this.props.zoom,
      showPopup: true,
      radius: this.props.radius
    },
    fill: this.props.fill,
    popup: null
  };

  onViewportChange = viewport => {
    const { width, height, ...etc } = viewport;
    this.setState({ viewport: etc });
  };

  onMapClick(event) {
    const feature = event.features.find(f => f.layer.id === "wells");

    if (feature) {
      // look up cluster expansion zoom
      var coordinates = feature.geometry.coordinates.slice();
      var field = feature.properties.field;
      var lease = feature.properties.lease;
      var well = feature.properties.well;
      var operator = feature.properties.operator;
      var api = feature.properties.api;
      const popup = {
        latitude: coordinates[1],
        longitude: coordinates[0],
        field: field,
        lease: lease,
        well: well,
        operator: operator,
        api: api
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
          <WellInfo info={popup} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;

    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [this.props.longitude, this.props.latitude]
          }
        }
      ]
    };

    const geolocateStyle = {
      position: "absolute",
      right: 10,
      top: 10,
      padding: "0px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)"
    };

    if (this.state.fill === "page") {
      return (
          <ReactMapGL
            {...viewport}
            width="100%"
            height="calc(100vh - 66px)"
            mapboxApiAccessToken={TOKEN}
            mapStyle={this.props.mapstyle}
            onViewportChange={viewport => this.onViewportChange(viewport)}
            onClick={popup => this.onMapClick(popup)}
          >
            {this.renderPopup()}
            <Source id="my-data" type="geojson" data={geojson}>
              <Layer
                // id="point"
                type="circle"
                beforeId="wells"
                paint={{
                  "circle-radius": {
                    stops: [
                      [0, 0],
                      [20, metersToPixelsAtMaxZoom(100, this.props.latitude)]
                    ],
                    base: 2
                  },
                  "circle-color": "red",
                  "circle-opacity": 0.1,
                  "circle-stroke-width": 2,
                  "circle-stroke-color": "red"
                }}
              />
            </Source>
            <div className="geolocate">
              <GeolocateControl
                style={geolocateStyle}
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
                onViewportChange={this._updateViewport}
              />
            </div>
          </ReactMapGL>
      );
    } else {
      return (
          <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            minHeight="500px"
            mapboxApiAccessToken={TOKEN}
            mapStyle={this.props.mapstyle}
            onViewportChange={viewport => this.onViewportChange(viewport)}
            onClick={popup => this.onMapClick(popup)}
          >
            {this.renderPopup()}
            <Source id="my-data" type="geojson" data={geojson}>
              <Layer
                // id="point"
                type="circle"
                beforeId="wells"
                paint={{
                  "circle-radius": {
                    stops: [
                      [0, 0],
                      [20, metersToPixelsAtMaxZoom(100, 22)]
                    ],
                    base: 2
                  },
                  "circle-color": "red",
                  "circle-opacity": 0.1,
                  "circle-stroke-width": 2,
                  "circle-stroke-color": "red"
                }}
              />
            </Source>
            <div className="geolocate">
              <GeolocateControl
                style={geolocateStyle}
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
                onViewportChange={this._updateViewport}
              />
            </div>
          </ReactMapGL>
        </div>
      );
    }
  }
}

export default MapOil;
