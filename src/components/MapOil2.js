import {Component} from 'react';
import React from 'react'
import ReactMapGL, {GeolocateControl} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN = 'pk.eyJ1IjoiYXJlZWQxNDUiLCJhIjoiY2phdzNsN2ZoMGh0bjMybzF3cTkycWYyciJ9.4aS7z-guI2VDlP3duMg2FA';

class MapOil extends Component {

    render () {

        return (

            <div class="mapog" id='map'></div>
            <script>
                mapboxgl.accessToken =
                    'pk.eyJ1IjoiYXJlZWQxNDUiLCJhIjoiY2phdzNsN2ZoMGh0bjMybzF3cTkycWYyciJ9.4aS7z-guI2VDlP3duMg2FA';

                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/areed145/ck2jlfnp03oiv1cpepd4js9k6',
                    center: [-119, 36],
                    zoom: 6
                });

                map.addControl(new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true
                    },
                    trackUserLocation: true
                }));

                map.on('click', 'wells', function (e) {
                    var coordinates = e.features[0].geometry.coordinates.slice();
                    var field = e.features[0].properties.field;
                    var lease = e.features[0].properties.lease;
                    var well = e.features[0].properties.well;
                    var operator = e.features[0].properties.operator;
                    var api = e.features[0].properties.api;
                    var text = "<strong>" + lease + " " + well + "</strong><br>"
                    text += "<a href=\"/oilgas/details/" + api + "\" target=\"_blank\" title=\"Opens in a new window\">" +
                        api + "</a><br>"
                    text += operator + "<br>"
                    text += field + "<br>"

                    // Ensure that if the map is zoomed out such that multiple
                    // copies of the feature are visible, the popup appears
                    // over the copy being pointed to.
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }

                    new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(text)
                        .addTo(map);
                });
            </script>

        )
    }

}

export default MapOil

