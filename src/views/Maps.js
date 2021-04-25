



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
import React, { useEffect, useState } from "react";
import _ from 'lodash';

// reactstrap components
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import fullData from '../data'

import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// let data = [
//   {
//     "Locations": "hauz qazi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "karol bagh",
//     "Crime": "illegal"
//   },
//   {
//     "Locations": "karol bagh",
//     "Crime": "illegal"
//   },
//   {
//     "Locations": "ali",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "kalyanpuri",
//     "Crime": "bootlegger"
//   },
//   {
//     "Locations": "inderpuri",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "kalyanpuri",
//     "Crime": "bootlegger"
//   },
//   {
//     "Locations": "kalyanpuri",
//     "Crime": "bootleggers"
//   },
//   {
//     "Locations": "kalyanpuri",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "shakarpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "kalyanpuri",
//     "Crime": "bootlegger"
//   },
//   {
//     "Locations": "ghazipur",
//     "Crime": "killed"
//   },
//   {
//     "Locations": "ghazipur",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "kalyanpuri",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "ghazipur",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "shakarpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "kalyanpuri",
//     "Crime": "snatching"
//   },
//   {
//     "Locations": "ghazipur",
//     "Crime": "thief"
//   },
//   {
//     "Locations": "ghazipur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "kalyanpuri",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "shakarpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sonia vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "new usmanpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sonia vihar",
//     "Crime": "arresting"
//   },
//   {
//     "Locations": "new usmanpur",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "seelampur",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "alipur",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "seelampur",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "harsh vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "seelampur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mukherjee nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "ashok vihar",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mukherjee nagar",
//     "Crime": "arrest"
//   },
//   {
//     "Locations": "ashok vihar",
//     "Crime": "arrest"
//   },
//   {
//     "Locations": "mukherjee nagar",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "ashok vihar",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "ashok vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "maurya enclave",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "ashok vihar",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "snatching"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mukherjee nagar",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "mukherjee nagar",
//     "Crime": "burglar"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "illegal"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "mukherjee nagar",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "maurya enclave",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "maurya enclave",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "illegal"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "burglar"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "maurya enclave",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "ashok vihar",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "mukherjee nagar",
//     "Crime": "arrest"
//   },
//   {
//     "Locations": "maurya enclave",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "maurya enclave",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "maurya enclave",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mukherjee nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "illegal"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mukherjee nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "ashok vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "ashok vihar",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "ashok vihar",
//     "Crime": "arrest"
//   },
//   {
//     "Locations": "bhalaswa",
//     "Crime": "arrest"
//   },
//   {
//     "Locations": "najafgarh",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "shakarpur",
//     "Crime": "arrest"
//   },
//   {
//     "Locations": "rani bagh",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "rani bagh",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mukherjee nagar",
//     "Crime": "snatching"
//   },
//   {
//     "Locations": "bhalaswa",
//     "Crime": "peddlers"
//   },
//   {
//     "Locations": "mukherjee nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "saraswati vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "bhalaswa",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "model town",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "ashok vihar",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "patiala house",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "north avenue",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "connaught place",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "vasant kunj",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "chaukhandi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "connaught place",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "north avenue",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "connaught place",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "connaught place",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "connaught place",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "inderpuri",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "chanakya puri",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "connaught place",
//     "Crime": "snatcher"
//   },
//   {
//     "Locations": "chanakya puri",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "karol bagh",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "connaught place",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "chandni chowk",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "connaught place",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "nangloi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sangam vihar",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "peddlers"
//   },
//   {
//     "Locations": "sangam vihar",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "new friends colony",
//     "Crime": "bootleggers"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "bootlegger"
//   },
//   {
//     "Locations": "madanpur khadar",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "snatching"
//   },
//   {
//     "Locations": "madanpur khadar",
//     "Crime": "thief"
//   },
//   {
//     "Locations": "lal kuan",
//     "Crime": "pickpocket"
//   },
//   {
//     "Locations": "lal kuan",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "snatcher"
//   },
//   {
//     "Locations": "madanpur khadar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "burglar"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "madanpur khadar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "ali",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "madanpur khadar",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "mehrauli",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "new friends colony",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sangam vihar",
//     "Crime": "snatcher"
//   },
//   {
//     "Locations": "seelampur",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "sangam vihar",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "lal kuan",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "new friends colony",
//     "Crime": "peddler"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "thief"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "thief"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "madanpur khadar",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "thief"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "snatcher"
//   },
//   {
//     "Locations": "tehkhand",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "new friends colony",
//     "Crime": "bootleggers"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "steal"
//   },
//   {
//     "Locations": "tehkhand",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "snatcher"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "bootlegger"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "madanpur khadar",
//     "Crime": "thief"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "steal"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "lal kuan",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "vasant kunj",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "east of kailash",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "illegal"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "ali",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "jungpura",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "bootlegger"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "criminals"
//   },
//   {
//     "Locations": "pragati maidan",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "jungpura",
//     "Crime": "steal"
//   },
//   {
//     "Locations": "madanpur khadar",
//     "Crime": "bootleggers"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "lal kuan",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "seelampur",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "lal kuan",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "snatcher"
//   },
//   {
//     "Locations": "madanpur khadar",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "maya puri",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "thief"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "zakir nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "burglar"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "peddler"
//   },
//   {
//     "Locations": "vasant kunj",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "bootlegger"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "snatching"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "lal kuan",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "ali",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "safdarjung enclave",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "madanpur khadar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "madanpur khadar",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "thief"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "thief"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "bootleggers"
//   },
//   {
//     "Locations": "sangam vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "thief"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "snatching"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "burglar"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "crime"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "arrest"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "crime"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "bootlegger"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "killed"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "arrest"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "drug"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "snatching"
//   },
//   {
//     "Locations": "jungpura",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "amar colony",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "jaitpur",
//     "Crime": "killed"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "east of kailash",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "shoot"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "sarita vihar",
//     "Crime": "arrest"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "zakir nagar",
//     "Crime": "killed"
//   },
//   {
//     "Locations": "nizamuddin",
//     "Crime": "criminals"
//   },
//   {
//     "Locations": "kalkaji",
//     "Crime": "arrest"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "vikas puri",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "ramesh nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "vikas puri",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "vikas puri",
//     "Crime": "snatcher"
//   },
//   {
//     "Locations": "inderpuri",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "maya puri",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "vikas puri",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "sagarpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "inderpuri",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "paschim vihar",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "snatching"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "inderpuri",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "steal"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "nangloi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "inderpuri",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "vikas puri",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "uttam nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "punjabi bagh",
//     "Crime": "snatcher"
//   },
//   {
//     "Locations": "uttam nagar",
//     "Crime": "extortion"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "bootlegger"
//   },
//   {
//     "Locations": "gulabi bagh",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "criminals"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "ashok vihar",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "killed"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "gulabi bagh",
//     "Crime": "peddler"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "roop nagar",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "drug"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "drug"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "burglar"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "bootlegger"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "krishna nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "criminals"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "bootlegger"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "thief"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "arresting"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "bootleggers"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "jamia nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "gulabi bagh",
//     "Crime": "snatcher"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "murder"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "burglar"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "murdered"
//   },
//   {
//     "Locations": "roop nagar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "illegal"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "chandni chowk",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "snatching"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "criminal"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "bootleggers"
//   },
//   {
//     "Locations": "roop nagar",
//     "Crime": "snatcher"
//   },
//   {
//     "Locations": "gulabi bagh",
//     "Crime": "bootleggers"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "burglary"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "bazar road",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "hauz qazi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "roop nagar",
//     "Crime": "snatched"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "burglar"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "shahdara",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "arrest"
//   },
//   {
//     "Locations": "chandni chowk",
//     "Crime": "theft"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "roop nagar",
//     "Crime": "burglar"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "geeta colony",
//     "Crime": "robber"
//   },
//   {
//     "Locations": "sarai rohilla",
//     "Crime": "thieves"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "majnu ka tila",
//     "Crime": "drugs"
//   },
//   {
//     "Locations": "delhi university",
//     "Crime": "crime"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "mandi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "burari",
//     "Crime": "illegal"
//   },
//   {
//     "Locations": "gulabi bagh",
//     "Crime": "drug"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "snatching"
//   },
//   {
//     "Locations": "timarpur",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "gulabi bagh",
//     "Crime": "snatchers"
//   },
//   {
//     "Locations": "ranhola",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "nangloi",
//     "Crime": "pickpocket"
//   },
//   {
//     "Locations": "nangloi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "nangloi",
//     "Crime": "robbers"
//   },
//   {
//     "Locations": "paschim vihar",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "nangloi",
//     "Crime": "arrested"
//   },
//   {
//     "Locations": "paschim vihar",
//     "Crime": "criminals"
//   },
//   {
//     "Locations": "begumpur",
//     "Crime": "thief"
//   }
// ]

// let fullData = [
//   {
//     "Locations": "hauz qazi,India",
//     "Crime": "arrested",
//     "lat": "28.6473149",
//     "long": "77.2309034"
//   },


//   {
//     "Locations": "karol bagh,India",
//     "Crime": "illegal",
//     "lat": "28.6620158",
//     "long": "77.2028422"
//   },


//   {
//     "Locations": "karol bagh,India",
//     "Crime": "illegal",
//     "lat": "28.6620158",
//     "long": "77.2028422"
//   },


//   {
//     "Locations": "ali,India",
//     "Crime": "murder",
//     "lat": "30.1066224",
//     "long": "78.79738"
//   },


//   {
//     "Locations": "kalyanpuri,India",
//     "Crime": "bootlegger",
//     "lat": "28.6261891",
//     "long": "77.3209064"
//   },


//   {
//     "Locations": "inderpuri,India",
//     "Crime": "theft",
//     "lat": "28.6323781",
//     "long": "77.1504055"
//   },


//   {
//     "Locations": "kalyanpuri,India",
//     "Crime": "bootlegger",
//     "lat": "28.6261891",
//     "long": "77.3209064"
//   },


//   {
//     "Locations": "kalyanpuri,India",
//     "Crime": "bootleggers",
//     "lat": "28.6261891",
//     "long": "77.3209064"
//   },


//   {
//     "Locations": "kalyanpuri,India",
//     "Crime": "criminal",
//     "lat": "28.6261891",
//     "long": "77.3209064"
//   },


//   {
//     "Locations": "shakarpur,India",
//     "Crime": "arrested",
//     "lat": "28.6358483",
//     "long": "77.2863729"
//   },


//   {
//     "Locations": "kalyanpuri,India",
//     "Crime": "bootlegger",
//     "lat": "28.6261891",
//     "long": "77.3209064"
//   },


//   {
//     "Locations": "ghazipur,India",
//     "Crime": "killed",
//     "lat": "25.9011555",
//     "long": "83.9617252"
//   },


//   {
//     "Locations": "ghazipur,India",
//     "Crime": "murder",
//     "lat": "25.9011555",
//     "long": "83.9617252"
//   },


//   {
//     "Locations": "kalyanpuri,India",
//     "Crime": "murder",
//     "lat": "28.6261891",
//     "long": "77.3209064"
//   },


//   {
//     "Locations": "ghazipur,India",
//     "Crime": "snatchers",
//     "lat": "25.9011555",
//     "long": "83.9617252"
//   },


//   {
//     "Locations": "shakarpur,India",
//     "Crime": "arrested",
//     "lat": "28.6358483",
//     "long": "77.2863729"
//   },


//   {
//     "Locations": "kalyanpuri,India",
//     "Crime": "snatching",
//     "lat": "28.6261891",
//     "long": "77.3209064"
//   },


//   {
//     "Locations": "ghazipur,India",
//     "Crime": "thief",
//     "lat": "25.9011555",
//     "long": "83.9617252"
//   },


//   {
//     "Locations": "ghazipur,India",
//     "Crime": "arrested",
//     "lat": "25.9011555",
//     "long": "83.9617252"
//   },


//   {
//     "Locations": "kalyanpuri,India",
//     "Crime": "arrested",
//     "lat": "28.6261891",
//     "long": "77.3209064"
//   },


//   {
//     "Locations": "shakarpur,India",
//     "Crime": "arrested",
//     "lat": "28.6358483",
//     "long": "77.2863729"
//   },


//   {
//     "Locations": "sonia vihar,India",
//     "Crime": "arrested",
//     "lat": "28.7299257",
//     "long": "77.2581823"
//   },


//   {
//     "Locations": "new usmanpur,India",
//     "Crime": "arrested",
//     "lat": "30.2757681",
//     "long": "76.4527859"
//   },


//   {
//     "Locations": "sonia vihar,India",
//     "Crime": "arresting",
//     "lat": "28.7299257",
//     "long": "77.2581823"
//   },


//   {
//     "Locations": "new usmanpur,India",
//     "Crime": "robbers",
//     "lat": "30.2757681",
//     "long": "76.4527859"
//   },


//   {
//     "Locations": "seelampur,India",
//     "Crime": "murder",
//     "lat": "28.6748165",
//     "long": "77.2718137"
//   },


//   {
//     "Locations": "alipur,India",
//     "Crime": "murder",
//     "lat": "28.8059955",
//     "long": "77.1460706"
//   },


//   {
//     "Locations": "seelampur,India",
//     "Crime": "theft",
//     "lat": "28.6748165",
//     "long": "77.2718137"
//   },


//   {
//     "Locations": "harsh vihar,India",
//     "Crime": "arrested",
//     "lat": "28.6781309",
//     "long": "77.0914071"
//   },


//   {
//     "Locations": "seelampur,India",
//     "Crime": "arrested",
//     "lat": "28.6748165",
//     "long": "77.2718137"
//   },


//   {
//     "Locations": "mukherjee nagar,India",
//     "Crime": "arrested",
//     "lat": "28.7159356",
//     "long": "77.2195268"
//   },


//   {
//     "Locations": "ashok vihar,India",
//     "Crime": "criminal",
//     "lat": "19.116553",
//     "long": "72.886805"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "arrested",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "mukherjee nagar,India",
//     "Crime": "arrest",
//     "lat": "28.7159356",
//     "long": "77.2195268"
//   },


//   {
//     "Locations": "ashok vihar,India",
//     "Crime": "arrest",
//     "lat": "19.116553",
//     "long": "72.886805"
//   },


//   {
//     "Locations": "mukherjee nagar,India",
//     "Crime": "robbers",
//     "lat": "28.7159356",
//     "long": "77.2195268"
//   },


//   {
//     "Locations": "ashok vihar,India",
//     "Crime": "thieves",
//     "lat": "19.116553",
//     "long": "72.886805"
//   },


//   {
//     "Locations": "ashok vihar,India",
//     "Crime": "arrested",
//     "lat": "19.116553",
//     "long": "72.886805"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "robber",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "maurya enclave,India",
//     "Crime": "robber",
//     "lat": "35.513331",
//     "long": "97.395561"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "snatched",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "ashok vihar,India",
//     "Crime": "robbers",
//     "lat": "19.116553",
//     "long": "72.886805"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "robbers",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "snatching",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "arrested",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "mukherjee nagar,India",
//     "Crime": "burglary",
//     "lat": "28.7159356",
//     "long": "77.2195268"
//   },


//   {
//     "Locations": "mukherjee nagar,India",
//     "Crime": "burglar",
//     "lat": "28.7159356",
//     "long": "77.2195268"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "illegal",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "snatched",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "mukherjee nagar,India",
//     "Crime": "theft",
//     "lat": "28.7159356",
//     "long": "77.2195268"
//   },


//   {
//     "Locations": "maurya enclave,India",
//     "Crime": "burglary",
//     "lat": "35.513331",
//     "long": "97.395561"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "arrested",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "maurya enclave,India",
//     "Crime": "arrested",
//     "lat": "35.513331",
//     "long": "97.395561"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "illegal",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "burglar",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "burglary",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "maurya enclave,India",
//     "Crime": "robbers",
//     "lat": "35.513331",
//     "long": "97.395561"
//   },


//   {
//     "Locations": "ashok vihar,India",
//     "Crime": "murder",
//     "lat": "19.116553",
//     "long": "72.886805"
//   },


//   {
//     "Locations": "mukherjee nagar,India",
//     "Crime": "arrest",
//     "lat": "28.7159356",
//     "long": "77.2195268"
//   },


//   {
//     "Locations": "maurya enclave,India",
//     "Crime": "burglary",
//     "lat": "35.513331",
//     "long": "97.395561"
//   },


//   {
//     "Locations": "maurya enclave,India",
//     "Crime": "burglary",
//     "lat": "35.513331",
//     "long": "97.395561"
//   },


//   {
//     "Locations": "maurya enclave,India",
//     "Crime": "arrested",
//     "lat": "35.513331",
//     "long": "97.395561"
//   },


//   {
//     "Locations": "mukherjee nagar,India",
//     "Crime": "arrested",
//     "lat": "28.7159356",
//     "long": "77.2195268"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "illegal",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "arrested",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "arrested",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "mukherjee nagar,India",
//     "Crime": "arrested",
//     "lat": "28.7159356",
//     "long": "77.2195268"
//   },


//   {
//     "Locations": "ashok vihar,India",
//     "Crime": "arrested",
//     "lat": "19.116553",
//     "long": "72.886805"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "snatchers",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "ashok vihar,India",
//     "Crime": "murder",
//     "lat": "19.116553",
//     "long": "72.886805"
//   },


//   {
//     "Locations": "ashok vihar,India",
//     "Crime": "arrest",
//     "lat": "19.116553",
//     "long": "72.886805"
//   },


//   {
//     "Locations": "bhalaswa,India",
//     "Crime": "arrest",
//     "lat": "28.7372144",
//     "long": "77.1675147"
//   },


//   {
//     "Locations": "najafgarh,India",
//     "Crime": "snatched",
//     "lat": "28.6181778",
//     "long": "77.0032846"
//   },


//   {
//     "Locations": "shakarpur,India",
//     "Crime": "arrest",
//     "lat": "28.6358483",
//     "long": "77.2863729"
//   },


//   {
//     "Locations": "rani bagh,India",
//     "Crime": "snatched",
//     "lat": "28.6887433",
//     "long": "77.135926"
//   },


//   {
//     "Locations": "rani bagh,India",
//     "Crime": "arrested",
//     "lat": "28.6887433",
//     "long": "77.135926"
//   },


//   {
//     "Locations": "mukherjee nagar,India",
//     "Crime": "snatching",
//     "lat": "28.7159356",
//     "long": "77.2195268"
//   },


//   {
//     "Locations": "bhalaswa,India",
//     "Crime": "peddlers",
//     "lat": "28.7372144",
//     "long": "77.1675147"
//   },


//   {
//     "Locations": "mukherjee nagar,India",
//     "Crime": "arrested",
//     "lat": "28.7159356",
//     "long": "77.2195268"
//   },


//   {
//     "Locations": "saraswati vihar,India",
//     "Crime": "arrested",
//     "lat": "28.4790279",
//     "long": "77.0856587"
//   },


//   {
//     "Locations": "bhalaswa,India",
//     "Crime": "arrested",
//     "lat": "28.7372144",
//     "long": "77.1675147"
//   },


//   {
//     "Locations": "model town,India",
//     "Crime": "murder",
//     "lat": "28.7077136",
//     "long": "77.1989912"
//   },


//   {
//     "Locations": "ashok vihar,India",
//     "Crime": "murder",
//     "lat": "19.116553",
//     "long": "72.886805"
//   },


//   {
//     "Locations": "patiala house,India",
//     "Crime": "arrested",
//     "lat": "28.6165835",
//     "long": "77.2338029"
//   },


//   {
//     "Locations": "north avenue,India",
//     "Crime": "arrested",
//     "lat": "19.0788785",
//     "long": "72.8328924"
//   },


//   {
//     "Locations": "connaught place,India",
//     "Crime": "arrested",
//     "lat": "28.6413827",
//     "long": "77.2297924"
//   },


//   {
//     "Locations": "vasant kunj,India",
//     "Crime": "arrested",
//     "lat": "28.5468308",
//     "long": "77.1645215"
//   },


//   {
//     "Locations": "chaukhandi,India",
//     "Crime": "arrested",
//     "lat": "28.6463168",
//     "long": "77.0994969"
//   },


//   {
//     "Locations": "connaught place,India",
//     "Crime": "arrested",
//     "lat": "28.6413827",
//     "long": "77.2297924"
//   },


//   {
//     "Locations": "north avenue,India",
//     "Crime": "arrested",
//     "lat": "19.0788785",
//     "long": "72.8328924"
//   },


//   {
//     "Locations": "connaught place,India",
//     "Crime": "theft",
//     "lat": "28.6413827",
//     "long": "77.2297924"
//   },


//   {
//     "Locations": "connaught place,India",
//     "Crime": "arrested",
//     "lat": "28.6413827",
//     "long": "77.2297924"
//   },


//   {
//     "Locations": "connaught place,India",
//     "Crime": "arrested",
//     "lat": "28.6413827",
//     "long": "77.2297924"
//   },


//   {
//     "Locations": "inderpuri,India",
//     "Crime": "arrested",
//     "lat": "28.6323781",
//     "long": "77.1504055"
//   },


//   {
//     "Locations": "chanakya puri,India",
//     "Crime": "arrested",
//     "lat": "15.3563273",
//     "long": "75.1418286"
//   },


//   {
//     "Locations": "connaught place,India",
//     "Crime": "snatcher",
//     "lat": "28.6413827",
//     "long": "77.2297924"
//   },


//   {
//     "Locations": "chanakya puri,India",
//     "Crime": "thieves",
//     "lat": "15.3563273",
//     "long": "75.1418286"
//   },


//   {
//     "Locations": "karol bagh,India",
//     "Crime": "burglary",
//     "lat": "28.6620158",
//     "long": "77.2028422"
//   },


//   {
//     "Locations": "connaught place,India",
//     "Crime": "robbers",
//     "lat": "28.6413827",
//     "long": "77.2297924"
//   },


//   {
//     "Locations": "chandni chowk,India",
//     "Crime": "arrested",
//     "lat": "22.5720118",
//     "long": "88.3591581"
//   },


//   {
//     "Locations": "connaught place,India",
//     "Crime": "arrested",
//     "lat": "28.6413827",
//     "long": "77.2297924"
//   },


//   {
//     "Locations": "nangloi,India",
//     "Crime": "arrested",
//     "lat": "28.6874007",
//     "long": "77.0697319"
//   },


//   {
//     "Locations": "sangam vihar,India",
//     "Crime": "snatched",
//     "lat": "28.6073802",
//     "long": "77.0008217"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "arrested",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "arrested",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "peddlers",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "sangam vihar,India",
//     "Crime": "snatchers",
//     "lat": "28.6073802",
//     "long": "77.0008217"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "murder",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "new friends colony,India",
//     "Crime": "bootleggers",
//     "lat": "28.5722519",
//     "long": "77.278634"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "bootlegger",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "madanpur khadar,India",
//     "Crime": "robbers",
//     "lat": "28.54493",
//     "long": "77.3105184"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "snatching",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "madanpur khadar,India",
//     "Crime": "thief",
//     "lat": "28.54493",
//     "long": "77.3105184"
//   },


//   {
//     "Locations": "lal kuan,India",
//     "Crime": "pickpocket",
//     "lat": "28.643381",
//     "long": "77.4837197"
//   },


//   {
//     "Locations": "lal kuan,India",
//     "Crime": "arrested",
//     "lat": "28.643381",
//     "long": "77.4837197"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "thieves",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "snatcher",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "madanpur khadar,India",
//     "Crime": "arrested",
//     "lat": "28.54493",
//     "long": "77.3105184"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "robber",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "arrested",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "robbers",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "burglar",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "robbers",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "arrested",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "snatchers",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "arrested",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "robber",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "madanpur khadar,India",
//     "Crime": "arrested",
//     "lat": "28.54493",
//     "long": "77.3105184"
//   },


//   {
//     "Locations": "ali,India",
//     "Crime": "arrested",
//     "lat": "30.1066224",
//     "long": "78.79738"
//   },


//   {
//     "Locations": "madanpur khadar,India",
//     "Crime": "robbers",
//     "lat": "28.54493",
//     "long": "77.3105184"
//   },


//   {
//     "Locations": "mehrauli,India",
//     "Crime": "robbers",
//     "lat": "28.5418262",
//     "long": "77.1983232"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "thieves",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "new friends colony,India",
//     "Crime": "arrested",
//     "lat": "28.5722519",
//     "long": "77.278634"
//   },


//   {
//     "Locations": "sangam vihar,India",
//     "Crime": "snatcher",
//     "lat": "28.6073802",
//     "long": "77.0008217"
//   },


//   {
//     "Locations": "seelampur,India",
//     "Crime": "snatchers",
//     "lat": "28.6748165",
//     "long": "77.2718137"
//   },


//   {
//     "Locations": "sangam vihar,India",
//     "Crime": "snatched",
//     "lat": "28.6073802",
//     "long": "77.0008217"
//   },


//   {
//     "Locations": "lal kuan,India",
//     "Crime": "arrested",
//     "lat": "28.643381",
//     "long": "77.4837197"
//   },


//   {
//     "Locations": "new friends colony,India",
//     "Crime": "peddler",
//     "lat": "28.5722519",
//     "long": "77.278634"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "thief",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "thief",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "arrested",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "madanpur khadar,India",
//     "Crime": "robbers",
//     "lat": "28.54493",
//     "long": "77.3105184"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "arrested",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "burglary",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "thief",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "theft",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "snatcher",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "tehkhand,India",
//     "Crime": "arrested",
//     "lat": "28.5237139",
//     "long": "77.2883584"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "arrested",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "thieves",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "new friends colony,India",
//     "Crime": "bootleggers",
//     "lat": "28.5722519",
//     "long": "77.278634"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "robbers",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "steal",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "tehkhand,India",
//     "Crime": "robbers",
//     "lat": "28.5237139",
//     "long": "77.2883584"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "snatcher",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "arrested",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "bootlegger",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "theft",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "snatchers",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "robber",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "robber",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "snatched",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "theft",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "arrested",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "madanpur khadar,India",
//     "Crime": "thief",
//     "lat": "28.54493",
//     "long": "77.3105184"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "arrested",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "arrested",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "steal",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "theft",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "robbers",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "lal kuan,India",
//     "Crime": "robber",
//     "lat": "28.643381",
//     "long": "77.4837197"
//   },


//   {
//     "Locations": "vasant kunj,India",
//     "Crime": "murder",
//     "lat": "28.5468308",
//     "long": "77.1645215"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "arrested",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "snatchers",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "east of kailash,India",
//     "Crime": "snatchers",
//     "lat": "28.5619823",
//     "long": "77.2616181"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "robber",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "robber",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "illegal",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "arrested",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "arrested",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "thieves",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "ali,India",
//     "Crime": "robbers",
//     "lat": "30.1066224",
//     "long": "78.79738"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "arrested",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "arrested",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "jungpura,India",
//     "Crime": "arrested",
//     "lat": "35.513331",
//     "long": "97.395561"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "bootlegger",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "criminals",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "pragati maidan,India",
//     "Crime": "theft",
//     "lat": "28.6284752",
//     "long": "77.2475278"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "snatched",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "burglary",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "jungpura,India",
//     "Crime": "steal",
//     "lat": "35.513331",
//     "long": "97.395561"
//   },


//   {
//     "Locations": "madanpur khadar,India",
//     "Crime": "bootleggers",
//     "lat": "28.54493",
//     "long": "77.3105184"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "robbers",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "lal kuan,India",
//     "Crime": "arrested",
//     "lat": "28.643381",
//     "long": "77.4837197"
//   },


//   {
//     "Locations": "seelampur,India",
//     "Crime": "snatchers",
//     "lat": "28.6748165",
//     "long": "77.2718137"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "robbers",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "snatchers",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "snatched",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "lal kuan,India",
//     "Crime": "snatched",
//     "lat": "28.643381",
//     "long": "77.4837197"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "snatcher",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "madanpur khadar,India",
//     "Crime": "theft",
//     "lat": "28.54493",
//     "long": "77.3105184"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "murder",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "theft",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "snatched",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "maya puri,India",
//     "Crime": "theft",
//     "lat": "28.6381341",
//     "long": "77.2108917"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "snatched",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "snatched",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "thief",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "arrested",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "theft",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "zakir nagar,India",
//     "Crime": "arrested",
//     "lat": "19.0609464",
//     "long": "72.92476"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "arrested",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "theft",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "robber",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "burglar",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "burglary",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "arrested",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "peddler",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "vasant kunj,India",
//     "Crime": "theft",
//     "lat": "28.5468308",
//     "long": "77.1645215"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "arrested",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "arrested",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "thieves",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "bootlegger",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "theft",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "snatching",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "arrested",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "snatched",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "arrested",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "lal kuan,India",
//     "Crime": "robbers",
//     "lat": "28.643381",
//     "long": "77.4837197"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "arrested",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "criminal",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "arrested",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "ali,India",
//     "Crime": "snatched",
//     "lat": "30.1066224",
//     "long": "78.79738"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "snatched",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "robbers",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "safdarjung enclave,India",
//     "Crime": "burglary",
//     "lat": "28.569331",
//     "long": "77.2007014"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "robber",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "snatched",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "arrested",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "arrested",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "arrested",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "robber",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "theft",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "robber",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "madanpur khadar,India",
//     "Crime": "arrested",
//     "lat": "28.54493",
//     "long": "77.3105184"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "snatchers",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "snatched",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "madanpur khadar,India",
//     "Crime": "theft",
//     "lat": "28.54493",
//     "long": "77.3105184"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "arrested",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "thief",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "thief",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "bootleggers",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "sangam vihar,India",
//     "Crime": "arrested",
//     "lat": "28.6073802",
//     "long": "77.0008217"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "murder",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "snatched",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "arrested",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "thief",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "snatching",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "snatched",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "thieves",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "arrested",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "burglar",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "crime",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "arrest",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "crime",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "arrested",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "bootlegger",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "killed",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "arrested",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "arrest",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "burglary",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "drug",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "theft",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "snatching",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "jungpura,India",
//     "Crime": "arrested",
//     "lat": "35.513331",
//     "long": "97.395561"
//   },


//   {
//     "Locations": "amar colony,India",
//     "Crime": "robbers",
//     "lat": "28.5633973",
//     "long": "77.245909"
//   },


//   {
//     "Locations": "jaitpur,India",
//     "Crime": "killed",
//     "lat": "20.877831",
//     "long": "79.8663455"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "murder",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "east of kailash,India",
//     "Crime": "arrested",
//     "lat": "28.5619823",
//     "long": "77.2616181"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "shoot",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "murder",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "murder",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "sarita vihar,India",
//     "Crime": "arrest",
//     "lat": "28.5335737",
//     "long": "77.2933311"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "murder",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "zakir nagar,India",
//     "Crime": "killed",
//     "lat": "19.0609464",
//     "long": "72.92476"
//   },


//   {
//     "Locations": "nizamuddin,India",
//     "Crime": "criminals",
//     "lat": "28.6009417",
//     "long": "77.2523341"
//   },


//   {
//     "Locations": "kalkaji,India",
//     "Crime": "arrest",
//     "lat": "28.5488923",
//     "long": "77.2688023"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "arrested",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "vikas puri,India",
//     "Crime": "snatched",
//     "lat": "28.9689003",
//     "long": "77.7110201"
//   },


//   {
//     "Locations": "ramesh nagar,India",
//     "Crime": "arrested",
//     "lat": "28.6577444",
//     "long": "77.1366496"
//   },


//   {
//     "Locations": "vikas puri,India",
//     "Crime": "arrested",
//     "lat": "28.9689003",
//     "long": "77.7110201"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "arrested",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "vikas puri,India",
//     "Crime": "snatcher",
//     "lat": "28.9689003",
//     "long": "77.7110201"
//   },


//   {
//     "Locations": "inderpuri,India",
//     "Crime": "arrested",
//     "lat": "28.6323781",
//     "long": "77.1504055"
//   },


//   {
//     "Locations": "maya puri,India",
//     "Crime": "arrested",
//     "lat": "28.6381341",
//     "long": "77.2108917"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "snatched",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "arrested",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "arrested",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "thieves",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "vikas puri,India",
//     "Crime": "robbers",
//     "lat": "28.9689003",
//     "long": "77.7110201"
//   },


//   {
//     "Locations": "sagarpur,India",
//     "Crime": "arrested",
//     "lat": "28.1564113",
//     "long": "76.2072933"
//   },


//   {
//     "Locations": "inderpuri,India",
//     "Crime": "arrested",
//     "lat": "28.6323781",
//     "long": "77.1504055"
//   },


//   {
//     "Locations": "paschim vihar,India",
//     "Crime": "robber",
//     "lat": "28.6808923",
//     "long": "77.1197404"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "snatching",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "snatched",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "inderpuri,India",
//     "Crime": "arrested",
//     "lat": "28.6323781",
//     "long": "77.1504055"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "steal",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "snatchers",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "arrested",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "nangloi,India",
//     "Crime": "arrested",
//     "lat": "28.6874007",
//     "long": "77.0697319"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "arrested",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "arrested",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "inderpuri,India",
//     "Crime": "arrested",
//     "lat": "28.6323781",
//     "long": "77.1504055"
//   },


//   {
//     "Locations": "vikas puri,India",
//     "Crime": "arrested",
//     "lat": "28.9689003",
//     "long": "77.7110201"
//   },


//   {
//     "Locations": "uttam nagar,India",
//     "Crime": "arrested",
//     "lat": "28.6390739",
//     "long": "77.0766861"
//   },


//   {
//     "Locations": "punjabi bagh,India",
//     "Crime": "snatcher",
//     "lat": "28.6751532",
//     "long": "77.1384751"
//   },


//   {
//     "Locations": "uttam nagar,India",
//     "Crime": "extortion",
//     "lat": "28.6390739",
//     "long": "77.0766861"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "bootlegger",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "gulabi bagh,India",
//     "Crime": "theft",
//     "lat": "28.6696995",
//     "long": "77.1947756"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "robbers",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "arrested",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "criminals",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "snatched",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "ashok vihar,India",
//     "Crime": "criminal",
//     "lat": "19.116553",
//     "long": "72.886805"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "snatched",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "criminal",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "killed",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "burglary",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "gulabi bagh,India",
//     "Crime": "peddler",
//     "lat": "28.6696995",
//     "long": "77.1947756"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "murder",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "roop nagar,India",
//     "Crime": "burglary",
//     "lat": "28.688098",
//     "long": "77.2035347"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "drug",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "drug",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "burglar",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "burglary",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "theft",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "criminal",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "criminal",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "bootlegger",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "theft",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "criminal",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "krishna nagar,India",
//     "Crime": "arrested",
//     "lat": "17.4430523",
//     "long": "78.4346746"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "snatched",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "criminals",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "criminal",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "bootlegger",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "criminal",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "murder",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "thief",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "murder",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "arresting",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "criminal",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "criminal",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "thieves",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "bootleggers",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "snatched",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "jamia nagar,India",
//     "Crime": "arrested",
//     "lat": "17.3923106",
//     "long": "78.4582082"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "snatched",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "gulabi bagh,India",
//     "Crime": "snatcher",
//     "lat": "28.6696995",
//     "long": "77.1947756"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "theft",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "arrested",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "snatched",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "robbers",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "snatched",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "arrested",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "arrested",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "arrested",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "murder",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "burglar",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "murdered",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "roop nagar,India",
//     "Crime": "arrested",
//     "lat": "28.688098",
//     "long": "77.2035347"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "burglary",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "robbers",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "illegal",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "arrested",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "robber",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "arrested",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "arrested",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "arrested",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "arrested",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "chandni chowk,India",
//     "Crime": "thieves",
//     "lat": "22.5720118",
//     "long": "88.3591581"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "snatched",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "burglary",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "snatching",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "criminal",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "bootleggers",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "roop nagar,India",
//     "Crime": "snatcher",
//     "lat": "28.688098",
//     "long": "77.2035347"
//   },


//   {
//     "Locations": "gulabi bagh,India",
//     "Crime": "bootleggers",
//     "lat": "28.6696995",
//     "long": "77.1947756"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "burglary",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "arrested",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "arrested",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "theft",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "bazar road,India",
//     "Crime": "theft",
//     "lat": "9.9677722",
//     "long": "76.2597207"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "snatchers",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "hauz qazi,India",
//     "Crime": "arrested",
//     "lat": "28.6473149",
//     "long": "77.2309034"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "robber",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "robbers",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "snatched",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "arrested",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "roop nagar,India",
//     "Crime": "snatched",
//     "lat": "28.688098",
//     "long": "77.2035347"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "arrested",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "burglar",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "arrested",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "robbers",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "shahdara,India",
//     "Crime": "robbers",
//     "lat": "28.6783333",
//     "long": "77.2940248"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "arrested",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "arrested",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "arrested",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "arrested",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "arrested",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "arrest",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "chandni chowk,India",
//     "Crime": "theft",
//     "lat": "22.5720118",
//     "long": "88.3591581"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "arrested",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "roop nagar,India",
//     "Crime": "burglar",
//     "lat": "28.688098",
//     "long": "77.2035347"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "arrested",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "geeta colony,India",
//     "Crime": "robber",
//     "lat": "29.3949041",
//     "long": "76.9686296"
//   },


//   {
//     "Locations": "sarai rohilla,India",
//     "Crime": "thieves",
//     "lat": "28.6654272",
//     "long": "77.204228"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "arrested",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "majnu ka tila,India",
//     "Crime": "drugs",
//     "lat": "28.7186766",
//     "long": "77.2460118"
//   },


//   {
//     "Locations": "delhi university,India",
//     "Crime": "crime",
//     "lat": "28.7996668",
//     "long": "77.0366938"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "arrested",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "arrested",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "mandi,India",
//     "Crime": "arrested",
//     "lat": "31.8394458",
//     "long": "77.1246671"
//   },


//   {
//     "Locations": "burari,India",
//     "Crime": "illegal",
//     "lat": "30.5320408",
//     "long": "78.065119"
//   },


//   {
//     "Locations": "gulabi bagh,India",
//     "Crime": "drug",
//     "lat": "28.6696995",
//     "long": "77.1947756"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "snatching",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "timarpur,India",
//     "Crime": "snatchers",
//     "lat": "28.7088696",
//     "long": "77.2260784"
//   },


//   {
//     "Locations": "gulabi bagh,India",
//     "Crime": "snatchers",
//     "lat": "28.6696995",
//     "long": "77.1947756"
//   },


//   {
//     "Locations": "ranhola,India",
//     "Crime": "robbers",
//     "lat": "28.6601084",
//     "long": "77.0386875"
//   },


//   {
//     "Locations": "nangloi,India",
//     "Crime": "pickpocket",
//     "lat": "28.6874007",
//     "long": "77.0697319"
//   },


//   {
//     "Locations": "nangloi,India",
//     "Crime": "arrested",
//     "lat": "28.6874007",
//     "long": "77.0697319"
//   },


//   {
//     "Locations": "nangloi,India",
//     "Crime": "robbers",
//     "lat": "28.6874007",
//     "long": "77.0697319"
//   },


//   {
//     "Locations": "paschim vihar,India",
//     "Crime": "arrested",
//     "lat": "28.6808923",
//     "long": "77.1197404"
//   },


//   {
//     "Locations": "nangloi,India",
//     "Crime": "arrested",
//     "lat": "28.6874007",
//     "long": "77.0697319"
//   },


//   {
//     "Locations": "paschim vihar,India",
//     "Crime": "criminals",
//     "lat": "28.6808923",
//     "long": "77.1197404"
//   },


//   {
//     "Locations": "begumpur,India",
//     "Crime": "thief",
//     "lat": "28.5370282",
//     "long": "77.2099906"
//   }]

const maxReports = 40
const redfill = '#ff7373'
const highlightred = '#f7347a'
const bluefill = '#407294'
const highlightblue = '#003366'

const circleColour = redfill
const circleHighlight = highlightred
const animatedComponents = makeAnimated();


const SearchControl = (props) => {
  const map = useMap();

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: props.provider,
      ...props,
    });

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [props]);

  return null;
};

const groupCrimes = (name) => {
  let criminal_intent = ["crime", "criminal", "criminals", "arrest", "arrested", "arresting", "extortion", "dacoit", "dacoits", "illegal"]
  let murder = ["murder", "murders", "murdered", "murderer", "kill", "killed", "assassinate", "slaughter", "shooter", "shooters", "shoot", "shooting"]
  let theft = ["steal", "theft", "thief", "thieves", "burglar", "burglary", "snatcher", "snatchers", "snatching", "snatch", "snatched", "robber", "robbers", "robbed", "bootlegger", "bootleggers", "pickpocket", "pick pocket"]
  let drugs = ["drug", "drugs", "peddlers", "peddler"]
  if (criminal_intent.includes(_.toLower(name))) {
    return 'Criminal Intent'
  }
  if (murder.includes(_.toLower(name))) {
    return 'Murder'
  }
  if (theft.includes(_.toLower(name))) {
    return 'Theft'
  }
  if (drugs.includes(_.toLower(name))) {
    return 'Peddler'
  }
  // console.log(name)
  return ''
}

const crimeOptions = [
  { value: 'Criminal Intent', label: 'Criminal Intent' },
  { value: 'Murder', label: 'Murder' },
  { value: 'Theft', label: 'Theft' },
  { value: 'Peddler', label: 'Peddler' }
]

const FullScreenMap = () => {
  const [Data, SetData] = useState([])
  const [selected, setSelected] = React.useState([
    crimeOptions[0],
    crimeOptions[1],
    crimeOptions[2],
    crimeOptions[3],
  ]);


  useEffect(() => {
    let groupedData = fullData.map(el => (
      {
        'Locations': el.Locations,
        'Crime': groupCrimes(el.Crime),
        'lat': el.lat,
        'long': el.long,
        'Created At': el['Created At']
      }))

    let newData = _.groupBy(groupedData, el => el.Locations);
    const objArray = [];
    Object.keys(newData).forEach(key => objArray.push({
      name: key,
      crimeReport: newData[key]
    }));
    // console.log(objArray)
    SetData(objArray)
    return () => {

    }
  }, [])

  return (
    <>

      <PanelHeader size="sm" />
      <div className="content">
        <Row className='justify-content-center'>
          <Col className='my-5' xs={12} md={8}>
            <Select
              styles={{
                menu: provided => ({ ...provided, zIndex: 9999 })
              }}
              defaultValue={[crimeOptions[0]]}
              isMulti
              name="colors"
              components={animatedComponents}
              options={crimeOptions}
              value={selected}
              onChange={e => setSelected(e)}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder='Filter By Crime...'
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader className='text-center text-muted'>Delhi-NCR Crime Heatmap</CardHeader>
              <CardBody>
                <div>
                  <MapContainer style={{ height: "600px" }} center={[28.692333, 77.238970]} zoom={11} scrollWheelZoom={true}>
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                      Data?.map((ele, ind) => {
                        let currentFilter = selected.map(e => _.toLower(e.label))
                        let filteredEle = {}
                        filteredEle.name = ele.name
                        filteredEle.crimeReport = ele.crimeReport.filter(e => {
                          return currentFilter.includes(_.lowerCase(e.Crime))
                        })

                        let weightOfCircle = filteredEle['crimeReport'].length / maxReports
                        let nameOfPlace = _.startCase(_.toLower(filteredEle['name'].slice(0, -6)))
                        let crimeCountsTemp = _.groupBy(filteredEle['crimeReport'], el => el.Crime)
                        let crimeCounts = [];
                        Object.keys(crimeCountsTemp).forEach(key => {
                          crimeCounts.push({
                            crimeType: key,
                            crimeReport: crimeCountsTemp[key].length
                          })
                        })
                        if (!_.isEmpty(filteredEle['crimeReport']))
                          return (
                            <div key={ind}>
                              <Circle center={[filteredEle['crimeReport'][0].lat, filteredEle['crimeReport'][0].long]}
                                pathOptions={{ fillColor: circleColour, fillOpacity: weightOfCircle, color: circleHighlight, weight: 3, opacity: 0.5 }} radius={1500} >
                                <Popup>
                                  <h6 className='mt-2'>{nameOfPlace}</h6>
                                  <b>Total Reports - {filteredEle['crimeReport'].length}</b>
                                  <br />
                                  <br />
                                  {
                                    crimeCounts.map((el, ind) => {
                                      return (
                                        <div key={ind}>
                                          {_.startCase(_.toLower(el.crimeType))} - {el.crimeReport}
                                          <br />
                                        </div>
                                      )
                                    })
                                  }
                                </Popup>
                              </Circle>
                            </div>
                          )
                      })
                    }
                    <SearchControl
                      provider={new OpenStreetMapProvider({
                        params: {
                          'accept-language': 'en', // render results in English
                          countrycodes: 'in', // limit search results to Canada & United States
                        },
                      })}
                      style='bar'
                    />

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


export default FullScreenMap;
