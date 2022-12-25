import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FieXlhYiIsImEiOiJjbGMyanRtbTkyMG42M3ZtcTZ3NXF0cWZyIn0.RhQybrlwN_wQKR1jmHzHuA'
if(!navigator.geolocation){
 alert(' Tu navegador no tiene opci{on de geolocalización');
 throw new Error('Tu navegador no tiene opci{on de geolocalización')
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);


