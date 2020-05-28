import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';

const About = () => {

  const mapRef = React.useRef(null);
  
  React.useEffect(() => {
    mapRef.current = L.map("map", {
      center: [40.7008739, -73.9897028],
      zoom: 5,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  // add layer
  const layerRef = React.useRef(null);
  React.useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  return (
    <div id="map" />
  )
};

export default About;