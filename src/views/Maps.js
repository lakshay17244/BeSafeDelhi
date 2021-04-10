



/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create google maps
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";


import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
// reactstrap components
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import axios from 'axios'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

// const MapWrapper = withScriptjs(
//   withGoogleMap((props) => (
//     <GoogleMap
//       defaultZoom={13}
//       defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
//       defaultOptions={{
//         scrollwheel: false,
//         styles: [
//           {
//             featureType: "water",
//             elementType: "geometry",
//             stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
//           },
//           {
//             featureType: "landscape",
//             elementType: "geometry",
//             stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
//           },
//           {
//             featureType: "road.highway",
//             elementType: "geometry.fill",
//             stylers: [{ color: "#ffffff" }, { lightness: 17 }],
//           },
//           {
//             featureType: "road.highway",
//             elementType: "geometry.stroke",
//             stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
//           },
//           {
//             featureType: "road.arterial",
//             elementType: "geometry",
//             stylers: [{ color: "#ffffff" }, { lightness: 18 }],
//           },
//           {
//             featureType: "road.local",
//             elementType: "geometry",
//             stylers: [{ color: "#ffffff" }, { lightness: 16 }],
//           },
//           {
//             featureType: "poi",
//             elementType: "geometry",
//             stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
//           },
//           {
//             featureType: "poi.park",
//             elementType: "geometry",
//             stylers: [{ color: "#dedede" }, { lightness: 21 }],
//           },
//           {
//             elementType: "labels.text.stroke",
//             stylers: [
//               { visibility: "on" },
//               { color: "#ffffff" },
//               { lightness: 16 },
//             ],
//           },
//           {
//             elementType: "labels.text.fill",
//             stylers: [
//               { saturation: 36 },
//               { color: "#333333" },
//               { lightness: 40 },
//             ],
//           },
//           { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
//           {
//             featureType: "transit",
//             elementType: "geometry",
//             stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
//           },
//           {
//             featureType: "administrative",
//             elementType: "geometry.fill",
//             stylers: [{ color: "#fefefe" }, { lightness: 20 }],
//           },
//           {
//             featureType: "administrative",
//             elementType: "geometry.stroke",
//             stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
//           },
//         ],
//       }}
//     >
//       <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
//     </GoogleMap>
//   ))
// );


let data = [
  {
    "Locations": "hauz qazi",
    "Crime": "arrested"
  },
  {
    "Locations": "karol bagh",
    "Crime": "illegal"
  },
  {
    "Locations": "karol bagh",
    "Crime": "illegal"
  },
  {
    "Locations": "ali",
    "Crime": "murder"
  },
  {
    "Locations": "kalyanpuri",
    "Crime": "bootlegger"
  },
  {
    "Locations": "inderpuri",
    "Crime": "theft"
  },
  {
    "Locations": "kalyanpuri",
    "Crime": "bootlegger"
  },
  {
    "Locations": "kalyanpuri",
    "Crime": "bootleggers"
  },
  {
    "Locations": "kalyanpuri",
    "Crime": "criminal"
  },
  {
    "Locations": "shakarpur",
    "Crime": "arrested"
  },
  {
    "Locations": "kalyanpuri",
    "Crime": "bootlegger"
  },
  {
    "Locations": "ghazipur",
    "Crime": "killed"
  },
  {
    "Locations": "ghazipur",
    "Crime": "murder"
  },
  {
    "Locations": "kalyanpuri",
    "Crime": "murder"
  },
  {
    "Locations": "ghazipur",
    "Crime": "snatchers"
  },
  {
    "Locations": "shakarpur",
    "Crime": "arrested"
  },
  {
    "Locations": "kalyanpuri",
    "Crime": "snatching"
  },
  {
    "Locations": "ghazipur",
    "Crime": "thief"
  },
  {
    "Locations": "ghazipur",
    "Crime": "arrested"
  },
  {
    "Locations": "kalyanpuri",
    "Crime": "arrested"
  },
  {
    "Locations": "shakarpur",
    "Crime": "arrested"
  },
  {
    "Locations": "sonia vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "new usmanpur",
    "Crime": "arrested"
  },
  {
    "Locations": "sonia vihar",
    "Crime": "arresting"
  },
  {
    "Locations": "new usmanpur",
    "Crime": "robbers"
  },
  {
    "Locations": "seelampur",
    "Crime": "murder"
  },
  {
    "Locations": "alipur",
    "Crime": "murder"
  },
  {
    "Locations": "seelampur",
    "Crime": "theft"
  },
  {
    "Locations": "harsh vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "seelampur",
    "Crime": "arrested"
  },
  {
    "Locations": "mukherjee nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "ashok vihar",
    "Crime": "criminal"
  },
  {
    "Locations": "model town",
    "Crime": "arrested"
  },
  {
    "Locations": "mukherjee nagar",
    "Crime": "arrest"
  },
  {
    "Locations": "ashok vihar",
    "Crime": "arrest"
  },
  {
    "Locations": "mukherjee nagar",
    "Crime": "robbers"
  },
  {
    "Locations": "ashok vihar",
    "Crime": "thieves"
  },
  {
    "Locations": "ashok vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "model town",
    "Crime": "robber"
  },
  {
    "Locations": "maurya enclave",
    "Crime": "robber"
  },
  {
    "Locations": "model town",
    "Crime": "snatched"
  },
  {
    "Locations": "ashok vihar",
    "Crime": "robbers"
  },
  {
    "Locations": "model town",
    "Crime": "robbers"
  },
  {
    "Locations": "model town",
    "Crime": "snatching"
  },
  {
    "Locations": "model town",
    "Crime": "arrested"
  },
  {
    "Locations": "mukherjee nagar",
    "Crime": "burglary"
  },
  {
    "Locations": "mukherjee nagar",
    "Crime": "burglar"
  },
  {
    "Locations": "model town",
    "Crime": "illegal"
  },
  {
    "Locations": "model town",
    "Crime": "snatched"
  },
  {
    "Locations": "mukherjee nagar",
    "Crime": "theft"
  },
  {
    "Locations": "maurya enclave",
    "Crime": "burglary"
  },
  {
    "Locations": "model town",
    "Crime": "arrested"
  },
  {
    "Locations": "maurya enclave",
    "Crime": "arrested"
  },
  {
    "Locations": "model town",
    "Crime": "illegal"
  },
  {
    "Locations": "model town",
    "Crime": "burglar"
  },
  {
    "Locations": "model town",
    "Crime": "burglary"
  },
  {
    "Locations": "maurya enclave",
    "Crime": "robbers"
  },
  {
    "Locations": "ashok vihar",
    "Crime": "murder"
  },
  {
    "Locations": "mukherjee nagar",
    "Crime": "arrest"
  },
  {
    "Locations": "maurya enclave",
    "Crime": "burglary"
  },
  {
    "Locations": "maurya enclave",
    "Crime": "burglary"
  },
  {
    "Locations": "maurya enclave",
    "Crime": "arrested"
  },
  {
    "Locations": "mukherjee nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "model town",
    "Crime": "illegal"
  },
  {
    "Locations": "model town",
    "Crime": "arrested"
  },
  {
    "Locations": "model town",
    "Crime": "arrested"
  },
  {
    "Locations": "mukherjee nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "ashok vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "model town",
    "Crime": "snatchers"
  },
  {
    "Locations": "ashok vihar",
    "Crime": "murder"
  },
  {
    "Locations": "ashok vihar",
    "Crime": "arrest"
  },
  {
    "Locations": "bhalaswa",
    "Crime": "arrest"
  },
  {
    "Locations": "najafgarh",
    "Crime": "snatched"
  },
  {
    "Locations": "shakarpur",
    "Crime": "arrest"
  },
  {
    "Locations": "rani bagh",
    "Crime": "snatched"
  },
  {
    "Locations": "rani bagh",
    "Crime": "arrested"
  },
  {
    "Locations": "mukherjee nagar",
    "Crime": "snatching"
  },
  {
    "Locations": "bhalaswa",
    "Crime": "peddlers"
  },
  {
    "Locations": "mukherjee nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "saraswati vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "bhalaswa",
    "Crime": "arrested"
  },
  {
    "Locations": "model town",
    "Crime": "murder"
  },
  {
    "Locations": "ashok vihar",
    "Crime": "murder"
  },
  {
    "Locations": "patiala house",
    "Crime": "arrested"
  },
  {
    "Locations": "north avenue",
    "Crime": "arrested"
  },
  {
    "Locations": "connaught place",
    "Crime": "arrested"
  },
  {
    "Locations": "vasant kunj",
    "Crime": "arrested"
  },
  {
    "Locations": "chaukhandi",
    "Crime": "arrested"
  },
  {
    "Locations": "connaught place",
    "Crime": "arrested"
  },
  {
    "Locations": "north avenue",
    "Crime": "arrested"
  },
  {
    "Locations": "connaught place",
    "Crime": "theft"
  },
  {
    "Locations": "connaught place",
    "Crime": "arrested"
  },
  {
    "Locations": "connaught place",
    "Crime": "arrested"
  },
  {
    "Locations": "inderpuri",
    "Crime": "arrested"
  },
  {
    "Locations": "chanakya puri",
    "Crime": "arrested"
  },
  {
    "Locations": "connaught place",
    "Crime": "snatcher"
  },
  {
    "Locations": "chanakya puri",
    "Crime": "thieves"
  },
  {
    "Locations": "karol bagh",
    "Crime": "burglary"
  },
  {
    "Locations": "connaught place",
    "Crime": "robbers"
  },
  {
    "Locations": "chandni chowk",
    "Crime": "arrested"
  },
  {
    "Locations": "connaught place",
    "Crime": "arrested"
  },
  {
    "Locations": "nangloi",
    "Crime": "arrested"
  },
  {
    "Locations": "sangam vihar",
    "Crime": "snatched"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "arrested"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "peddlers"
  },
  {
    "Locations": "sangam vihar",
    "Crime": "snatchers"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "murder"
  },
  {
    "Locations": "new friends colony",
    "Crime": "bootleggers"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "bootlegger"
  },
  {
    "Locations": "madanpur khadar",
    "Crime": "robbers"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "snatching"
  },
  {
    "Locations": "madanpur khadar",
    "Crime": "thief"
  },
  {
    "Locations": "lal kuan",
    "Crime": "pickpocket"
  },
  {
    "Locations": "lal kuan",
    "Crime": "arrested"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "thieves"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "snatcher"
  },
  {
    "Locations": "madanpur khadar",
    "Crime": "arrested"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "robber"
  },
  {
    "Locations": "amar colony",
    "Crime": "arrested"
  },
  {
    "Locations": "amar colony",
    "Crime": "robbers"
  },
  {
    "Locations": "jaitpur",
    "Crime": "burglar"
  },
  {
    "Locations": "kalkaji",
    "Crime": "robbers"
  },
  {
    "Locations": "kalkaji",
    "Crime": "arrested"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "snatchers"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "robber"
  },
  {
    "Locations": "madanpur khadar",
    "Crime": "arrested"
  },
  {
    "Locations": "ali",
    "Crime": "arrested"
  },
  {
    "Locations": "madanpur khadar",
    "Crime": "robbers"
  },
  {
    "Locations": "mehrauli",
    "Crime": "robbers"
  },
  {
    "Locations": "amar colony",
    "Crime": "thieves"
  },
  {
    "Locations": "new friends colony",
    "Crime": "arrested"
  },
  {
    "Locations": "sangam vihar",
    "Crime": "snatcher"
  },
  {
    "Locations": "seelampur",
    "Crime": "snatchers"
  },
  {
    "Locations": "sangam vihar",
    "Crime": "snatched"
  },
  {
    "Locations": "lal kuan",
    "Crime": "arrested"
  },
  {
    "Locations": "new friends colony",
    "Crime": "peddler"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "thief"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "thief"
  },
  {
    "Locations": "kalkaji",
    "Crime": "arrested"
  },
  {
    "Locations": "madanpur khadar",
    "Crime": "robbers"
  },
  {
    "Locations": "jaitpur",
    "Crime": "arrested"
  },
  {
    "Locations": "jaitpur",
    "Crime": "burglary"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "thief"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "theft"
  },
  {
    "Locations": "jaitpur",
    "Crime": "snatcher"
  },
  {
    "Locations": "tehkhand",
    "Crime": "arrested"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "amar colony",
    "Crime": "thieves"
  },
  {
    "Locations": "new friends colony",
    "Crime": "bootleggers"
  },
  {
    "Locations": "kalkaji",
    "Crime": "robbers"
  },
  {
    "Locations": "kalkaji",
    "Crime": "steal"
  },
  {
    "Locations": "tehkhand",
    "Crime": "robbers"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "snatcher"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "bootlegger"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "theft"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "snatchers"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "robber"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "robber"
  },
  {
    "Locations": "jaitpur",
    "Crime": "snatched"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "theft"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "madanpur khadar",
    "Crime": "thief"
  },
  {
    "Locations": "jaitpur",
    "Crime": "arrested"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "kalkaji",
    "Crime": "steal"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "theft"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "robbers"
  },
  {
    "Locations": "lal kuan",
    "Crime": "robber"
  },
  {
    "Locations": "vasant kunj",
    "Crime": "murder"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "jaitpur",
    "Crime": "snatchers"
  },
  {
    "Locations": "east of kailash",
    "Crime": "snatchers"
  },
  {
    "Locations": "jaitpur",
    "Crime": "robber"
  },
  {
    "Locations": "jaitpur",
    "Crime": "robber"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "illegal"
  },
  {
    "Locations": "kalkaji",
    "Crime": "arrested"
  },
  {
    "Locations": "jaitpur",
    "Crime": "arrested"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "thieves"
  },
  {
    "Locations": "ali",
    "Crime": "robbers"
  },
  {
    "Locations": "kalkaji",
    "Crime": "arrested"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "jungpura",
    "Crime": "arrested"
  },
  {
    "Locations": "amar colony",
    "Crime": "bootlegger"
  },
  {
    "Locations": "jaitpur",
    "Crime": "criminals"
  },
  {
    "Locations": "pragati maidan",
    "Crime": "theft"
  },
  {
    "Locations": "kalkaji",
    "Crime": "snatched"
  },
  {
    "Locations": "jaitpur",
    "Crime": "burglary"
  },
  {
    "Locations": "jungpura",
    "Crime": "steal"
  },
  {
    "Locations": "madanpur khadar",
    "Crime": "bootleggers"
  },
  {
    "Locations": "amar colony",
    "Crime": "robbers"
  },
  {
    "Locations": "lal kuan",
    "Crime": "arrested"
  },
  {
    "Locations": "seelampur",
    "Crime": "snatchers"
  },
  {
    "Locations": "amar colony",
    "Crime": "robbers"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "snatchers"
  },
  {
    "Locations": "kalkaji",
    "Crime": "snatched"
  },
  {
    "Locations": "lal kuan",
    "Crime": "snatched"
  },
  {
    "Locations": "amar colony",
    "Crime": "snatcher"
  },
  {
    "Locations": "madanpur khadar",
    "Crime": "theft"
  },
  {
    "Locations": "amar colony",
    "Crime": "murder"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "theft"
  },
  {
    "Locations": "kalkaji",
    "Crime": "snatched"
  },
  {
    "Locations": "maya puri",
    "Crime": "theft"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "snatched"
  },
  {
    "Locations": "kalkaji",
    "Crime": "snatched"
  },
  {
    "Locations": "amar colony",
    "Crime": "thief"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "theft"
  },
  {
    "Locations": "zakir nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "jaitpur",
    "Crime": "arrested"
  },
  {
    "Locations": "amar colony",
    "Crime": "theft"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "robber"
  },
  {
    "Locations": "amar colony",
    "Crime": "burglar"
  },
  {
    "Locations": "jaitpur",
    "Crime": "burglary"
  },
  {
    "Locations": "amar colony",
    "Crime": "arrested"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "peddler"
  },
  {
    "Locations": "vasant kunj",
    "Crime": "theft"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "jaitpur",
    "Crime": "arrested"
  },
  {
    "Locations": "amar colony",
    "Crime": "thieves"
  },
  {
    "Locations": "amar colony",
    "Crime": "bootlegger"
  },
  {
    "Locations": "jaitpur",
    "Crime": "theft"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "snatching"
  },
  {
    "Locations": "jaitpur",
    "Crime": "arrested"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "snatched"
  },
  {
    "Locations": "amar colony",
    "Crime": "arrested"
  },
  {
    "Locations": "lal kuan",
    "Crime": "robbers"
  },
  {
    "Locations": "kalkaji",
    "Crime": "arrested"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "criminal"
  },
  {
    "Locations": "jaitpur",
    "Crime": "arrested"
  },
  {
    "Locations": "ali",
    "Crime": "snatched"
  },
  {
    "Locations": "jaitpur",
    "Crime": "snatched"
  },
  {
    "Locations": "amar colony",
    "Crime": "robbers"
  },
  {
    "Locations": "safdarjung enclave",
    "Crime": "burglary"
  },
  {
    "Locations": "amar colony",
    "Crime": "robber"
  },
  {
    "Locations": "jaitpur",
    "Crime": "snatched"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "arrested"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "robber"
  },
  {
    "Locations": "amar colony",
    "Crime": "theft"
  },
  {
    "Locations": "kalkaji",
    "Crime": "robber"
  },
  {
    "Locations": "madanpur khadar",
    "Crime": "arrested"
  },
  {
    "Locations": "amar colony",
    "Crime": "snatchers"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "snatched"
  },
  {
    "Locations": "madanpur khadar",
    "Crime": "theft"
  },
  {
    "Locations": "kalkaji",
    "Crime": "arrested"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "thief"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "thief"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "bootleggers"
  },
  {
    "Locations": "sangam vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "amar colony",
    "Crime": "murder"
  },
  {
    "Locations": "amar colony",
    "Crime": "snatched"
  },
  {
    "Locations": "kalkaji",
    "Crime": "arrested"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "thief"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "snatching"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "snatched"
  },
  {
    "Locations": "amar colony",
    "Crime": "thieves"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "kalkaji",
    "Crime": "burglar"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "crime"
  },
  {
    "Locations": "amar colony",
    "Crime": "arrest"
  },
  {
    "Locations": "jaitpur",
    "Crime": "crime"
  },
  {
    "Locations": "amar colony",
    "Crime": "arrested"
  },
  {
    "Locations": "jaitpur",
    "Crime": "bootlegger"
  },
  {
    "Locations": "jaitpur",
    "Crime": "killed"
  },
  {
    "Locations": "kalkaji",
    "Crime": "arrested"
  },
  {
    "Locations": "amar colony",
    "Crime": "arrest"
  },
  {
    "Locations": "amar colony",
    "Crime": "burglary"
  },
  {
    "Locations": "jaitpur",
    "Crime": "drug"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "theft"
  },
  {
    "Locations": "amar colony",
    "Crime": "snatching"
  },
  {
    "Locations": "jungpura",
    "Crime": "arrested"
  },
  {
    "Locations": "amar colony",
    "Crime": "robbers"
  },
  {
    "Locations": "jaitpur",
    "Crime": "killed"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "murder"
  },
  {
    "Locations": "east of kailash",
    "Crime": "arrested"
  },
  {
    "Locations": "kalkaji",
    "Crime": "shoot"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "murder"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "murder"
  },
  {
    "Locations": "sarita vihar",
    "Crime": "arrest"
  },
  {
    "Locations": "kalkaji",
    "Crime": "murder"
  },
  {
    "Locations": "zakir nagar",
    "Crime": "killed"
  },
  {
    "Locations": "nizamuddin",
    "Crime": "criminals"
  },
  {
    "Locations": "kalkaji",
    "Crime": "arrest"
  },
  {
    "Locations": "mandi",
    "Crime": "arrested"
  },
  {
    "Locations": "vikas puri",
    "Crime": "snatched"
  },
  {
    "Locations": "ramesh nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "vikas puri",
    "Crime": "arrested"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "arrested"
  },
  {
    "Locations": "vikas puri",
    "Crime": "snatcher"
  },
  {
    "Locations": "inderpuri",
    "Crime": "arrested"
  },
  {
    "Locations": "maya puri",
    "Crime": "arrested"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "snatched"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "arrested"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "arrested"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "thieves"
  },
  {
    "Locations": "vikas puri",
    "Crime": "robbers"
  },
  {
    "Locations": "sagarpur",
    "Crime": "arrested"
  },
  {
    "Locations": "inderpuri",
    "Crime": "arrested"
  },
  {
    "Locations": "paschim vihar",
    "Crime": "robber"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "snatching"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "snatched"
  },
  {
    "Locations": "inderpuri",
    "Crime": "arrested"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "steal"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "snatchers"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "arrested"
  },
  {
    "Locations": "nangloi",
    "Crime": "arrested"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "arrested"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "arrested"
  },
  {
    "Locations": "inderpuri",
    "Crime": "arrested"
  },
  {
    "Locations": "vikas puri",
    "Crime": "arrested"
  },
  {
    "Locations": "uttam nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "punjabi bagh",
    "Crime": "snatcher"
  },
  {
    "Locations": "uttam nagar",
    "Crime": "extortion"
  },
  {
    "Locations": "timarpur",
    "Crime": "bootlegger"
  },
  {
    "Locations": "gulabi bagh",
    "Crime": "theft"
  },
  {
    "Locations": "timarpur",
    "Crime": "robbers"
  },
  {
    "Locations": "burari",
    "Crime": "arrested"
  },
  {
    "Locations": "burari",
    "Crime": "criminals"
  },
  {
    "Locations": "burari",
    "Crime": "snatched"
  },
  {
    "Locations": "ashok vihar",
    "Crime": "criminal"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "snatched"
  },
  {
    "Locations": "mandi",
    "Crime": "criminal"
  },
  {
    "Locations": "burari",
    "Crime": "killed"
  },
  {
    "Locations": "burari",
    "Crime": "burglary"
  },
  {
    "Locations": "gulabi bagh",
    "Crime": "peddler"
  },
  {
    "Locations": "burari",
    "Crime": "murder"
  },
  {
    "Locations": "roop nagar",
    "Crime": "burglary"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "drug"
  },
  {
    "Locations": "mandi",
    "Crime": "drug"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "burglar"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "burglary"
  },
  {
    "Locations": "burari",
    "Crime": "theft"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "criminal"
  },
  {
    "Locations": "burari",
    "Crime": "criminal"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "bootlegger"
  },
  {
    "Locations": "burari",
    "Crime": "theft"
  },
  {
    "Locations": "burari",
    "Crime": "criminal"
  },
  {
    "Locations": "krishna nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "mandi",
    "Crime": "snatched"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "criminals"
  },
  {
    "Locations": "burari",
    "Crime": "criminal"
  },
  {
    "Locations": "mandi",
    "Crime": "bootlegger"
  },
  {
    "Locations": "mandi",
    "Crime": "criminal"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "murder"
  },
  {
    "Locations": "mandi",
    "Crime": "thief"
  },
  {
    "Locations": "mandi",
    "Crime": "murder"
  },
  {
    "Locations": "burari",
    "Crime": "arresting"
  },
  {
    "Locations": "burari",
    "Crime": "criminal"
  },
  {
    "Locations": "burari",
    "Crime": "criminal"
  },
  {
    "Locations": "mandi",
    "Crime": "thieves"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "bootleggers"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "snatched"
  },
  {
    "Locations": "jamia nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "snatched"
  },
  {
    "Locations": "gulabi bagh",
    "Crime": "snatcher"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "theft"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "arrested"
  },
  {
    "Locations": "burari",
    "Crime": "snatched"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "robbers"
  },
  {
    "Locations": "burari",
    "Crime": "snatched"
  },
  {
    "Locations": "timarpur",
    "Crime": "arrested"
  },
  {
    "Locations": "burari",
    "Crime": "arrested"
  },
  {
    "Locations": "mandi",
    "Crime": "arrested"
  },
  {
    "Locations": "timarpur",
    "Crime": "murder"
  },
  {
    "Locations": "burari",
    "Crime": "burglar"
  },
  {
    "Locations": "burari",
    "Crime": "murdered"
  },
  {
    "Locations": "roop nagar",
    "Crime": "arrested"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "burglary"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "robbers"
  },
  {
    "Locations": "burari",
    "Crime": "illegal"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "arrested"
  },
  {
    "Locations": "mandi",
    "Crime": "robber"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "arrested"
  },
  {
    "Locations": "burari",
    "Crime": "arrested"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "arrested"
  },
  {
    "Locations": "burari",
    "Crime": "arrested"
  },
  {
    "Locations": "chandni chowk",
    "Crime": "thieves"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "snatched"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "burglary"
  },
  {
    "Locations": "burari",
    "Crime": "snatching"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "criminal"
  },
  {
    "Locations": "burari",
    "Crime": "bootleggers"
  },
  {
    "Locations": "roop nagar",
    "Crime": "snatcher"
  },
  {
    "Locations": "gulabi bagh",
    "Crime": "bootleggers"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "burglary"
  },
  {
    "Locations": "timarpur",
    "Crime": "arrested"
  },
  {
    "Locations": "burari",
    "Crime": "arrested"
  },
  {
    "Locations": "timarpur",
    "Crime": "theft"
  },
  {
    "Locations": "bazar road",
    "Crime": "theft"
  },
  {
    "Locations": "timarpur",
    "Crime": "snatchers"
  },
  {
    "Locations": "hauz qazi",
    "Crime": "arrested"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "robber"
  },
  {
    "Locations": "timarpur",
    "Crime": "robbers"
  },
  {
    "Locations": "mandi",
    "Crime": "snatched"
  },
  {
    "Locations": "mandi",
    "Crime": "arrested"
  },
  {
    "Locations": "roop nagar",
    "Crime": "snatched"
  },
  {
    "Locations": "burari",
    "Crime": "arrested"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "burglar"
  },
  {
    "Locations": "burari",
    "Crime": "arrested"
  },
  {
    "Locations": "timarpur",
    "Crime": "robbers"
  },
  {
    "Locations": "shahdara",
    "Crime": "robbers"
  },
  {
    "Locations": "burari",
    "Crime": "arrested"
  },
  {
    "Locations": "timarpur",
    "Crime": "arrested"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "arrested"
  },
  {
    "Locations": "timarpur",
    "Crime": "arrested"
  },
  {
    "Locations": "mandi",
    "Crime": "arrested"
  },
  {
    "Locations": "mandi",
    "Crime": "arrest"
  },
  {
    "Locations": "chandni chowk",
    "Crime": "theft"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "arrested"
  },
  {
    "Locations": "roop nagar",
    "Crime": "burglar"
  },
  {
    "Locations": "burari",
    "Crime": "arrested"
  },
  {
    "Locations": "geeta colony",
    "Crime": "robber"
  },
  {
    "Locations": "sarai rohilla",
    "Crime": "thieves"
  },
  {
    "Locations": "burari",
    "Crime": "arrested"
  },
  {
    "Locations": "majnu ka tila",
    "Crime": "drugs"
  },
  {
    "Locations": "delhi university",
    "Crime": "crime"
  },
  {
    "Locations": "mandi",
    "Crime": "arrested"
  },
  {
    "Locations": "mandi",
    "Crime": "arrested"
  },
  {
    "Locations": "mandi",
    "Crime": "arrested"
  },
  {
    "Locations": "burari",
    "Crime": "illegal"
  },
  {
    "Locations": "gulabi bagh",
    "Crime": "drug"
  },
  {
    "Locations": "timarpur",
    "Crime": "snatching"
  },
  {
    "Locations": "timarpur",
    "Crime": "snatchers"
  },
  {
    "Locations": "gulabi bagh",
    "Crime": "snatchers"
  },
  {
    "Locations": "ranhola",
    "Crime": "robbers"
  },
  {
    "Locations": "nangloi",
    "Crime": "pickpocket"
  },
  {
    "Locations": "nangloi",
    "Crime": "arrested"
  },
  {
    "Locations": "nangloi",
    "Crime": "robbers"
  },
  {
    "Locations": "paschim vihar",
    "Crime": "arrested"
  },
  {
    "Locations": "nangloi",
    "Crime": "arrested"
  },
  {
    "Locations": "paschim vihar",
    "Crime": "criminals"
  },
  {
    "Locations": "begumpur",
    "Crime": "thief"
  }
]

let fullData = [{
  "Locations": "hauz qazi",
  "Crime": "arrested",
  "lat": "28.6473149",
  "long": "77.2309034"
},


{
  "Locations": "karol bagh",
  "Crime": "arrested",
  "lat": "28.6620158",
  "long": "77.2028422"
},


{
  "Locations": "karol bagh",
  "Crime": "arrested",
  "lat": "28.6620158",
  "long": "77.2028422"
},


{
  "Locations": "ali",
  "Crime": "arrested",
  "lat": "46.8041547",
  "long": "4.005579"
},


{
  "Locations": "kalyanpuri",
  "Crime": "arrested",
  "lat": "28.6261891",
  "long": "77.3209064"
},


{
  "Locations": "inderpuri",
  "Crime": "arrested",
  "lat": "28.6323781",
  "long": "77.1504055"
},


{
  "Locations": "kalyanpuri",
  "Crime": "arrested",
  "lat": "28.6261891",
  "long": "77.3209064"
},


{
  "Locations": "kalyanpuri",
  "Crime": "arrested",
  "lat": "28.6261891",
  "long": "77.3209064"
},


{
  "Locations": "kalyanpuri",
  "Crime": "arrested",
  "lat": "28.6261891",
  "long": "77.3209064"
},


{
  "Locations": "shakarpur",
  "Crime": "arrested",
  "lat": "28.6358483",
  "long": "77.2863729"
},


{
  "Locations": "kalyanpuri",
  "Crime": "arrested",
  "lat": "28.6261891",
  "long": "77.3209064"
},


{
  "Locations": "ghazipur",
  "Crime": "arrested",
  "lat": "25.9011555",
  "long": "83.9617252"
},


{
  "Locations": "ghazipur",
  "Crime": "arrested",
  "lat": "25.9011555",
  "long": "83.9617252"
},


{
  "Locations": "kalyanpuri",
  "Crime": "arrested",
  "lat": "28.6261891",
  "long": "77.3209064"
},


{
  "Locations": "ghazipur",
  "Crime": "arrested",
  "lat": "25.9011555",
  "long": "83.9617252"
},


{
  "Locations": "shakarpur",
  "Crime": "arrested",
  "lat": "28.6358483",
  "long": "77.2863729"
},


{
  "Locations": "kalyanpuri",
  "Crime": "arrested",
  "lat": "28.6261891",
  "long": "77.3209064"
},


{
  "Locations": "ghazipur",
  "Crime": "arrested",
  "lat": "25.9011555",
  "long": "83.9617252"
},


{
  "Locations": "ghazipur",
  "Crime": "arrested",
  "lat": "25.9011555",
  "long": "83.9617252"
},


{
  "Locations": "kalyanpuri",
  "Crime": "arrested",
  "lat": "28.6261891",
  "long": "77.3209064"
},


{
  "Locations": "shakarpur",
  "Crime": "arrested",
  "lat": "28.6358483",
  "long": "77.2863729"
},


{
  "Locations": "sonia vihar",
  "Crime": "arrested",
  "lat": "28.7299257",
  "long": "77.2581823"
},


{
  "Locations": "new usmanpur",
  "Crime": "arrested",
  "lat": "30.2757681",
  "long": "76.4527859"
},


{
  "Locations": "sonia vihar",
  "Crime": "arrested",
  "lat": "28.7299257",
  "long": "77.2581823"
},


{
  "Locations": "new usmanpur",
  "Crime": "arrested",
  "lat": "30.2757681",
  "long": "76.4527859"
},


{
  "Locations": "seelampur",
  "Crime": "arrested",
  "lat": "28.6748165",
  "long": "77.2718137"
},


{
  "Locations": "alipur",
  "Crime": "arrested",
  "lat": "29.4218018",
  "long": "70.9497965"
},


{
  "Locations": "seelampur",
  "Crime": "arrested",
  "lat": "28.6748165",
  "long": "77.2718137"
},


{
  "Locations": "harsh vihar",
  "Crime": "arrested",
  "lat": "28.6781309",
  "long": "77.0914071"
},


{
  "Locations": "seelampur",
  "Crime": "arrested",
  "lat": "28.6748165",
  "long": "77.2718137"
},


{
  "Locations": "mukherjee nagar",
  "Crime": "arrested",
  "lat": "28.7159356",
  "long": "77.2195268"
},


{
  "Locations": "ashok vihar",
  "Crime": "arrested",
  "lat": "19.116553",
  "long": "72.886805"
},


{
  "Locations": "model town",
  "Crime": "arrested",
  "lat": "28.7077136",
  "long": "77.1989912"
},


{
  "Locations": "mukherjee nagar",
  "Crime": "arrested",
  "lat": "28.7159356",
  "long": "77.2195268"
},


{
  "Locations": "ashok vihar",
  "Crime": "arrested",
  "lat": "19.116553",
  "long": "72.886805"
},


{
  "Locations": "mukherjee nagar",
  "Crime": "arrested",
  "lat": "28.7159356",
  "long": "77.2195268"
},


{
  "Locations": "ashok vihar",
  "Crime": "arrested",
  "lat": "19.116553",
  "long": "72.886805"
},


{
  "Locations": "ashok vihar",
  "Crime": "arrested",
  "lat": "19.116553",
  "long": "72.886805"
},


{
  "Locations": "model town",
  "Crime": "arrested",
  "lat": "28.7077136",
  "long": "77.1989912"
},]

class FullScreenMap extends React.Component {
  render() {
    return (
      <>

        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>Google Maps</CardHeader>
                <CardBody>
                  <div>
                    <MapContainer style={{ height: "600px" }} center={[28.692333, 77.238970]} zoom={11} scrollWheelZoom={false}>
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {
                        fullData.map((ele, ind) => {
                          return (
                            <>
                              <Circle center={[ele.lat, ele.long]} pathOptions={{ fillColor: 'blue' }} radius={1000} >
                                <Popup>
                                  {ele.Locations} <br />{ele.Crime}
                                </Popup>
                              </Circle>
                            </>
                          )
                        })
                      }
                    </MapContainer>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default FullScreenMap;
