// Simfast Redesign IST 331 SP2020

// Create map layer centered on Philadelphia Airport at default zoom
var map = L.map('map').setView([39.8744, -75.2424], 10);

                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                    maxZoom: 18,
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1
                }).addTo(map);
var flightMarkerIcon = L.icon({iconUrl: 'markerIcons/planeMarker.png', iconSize: [40]});
// Icon for airport markers
var airportMarkerIcon = L.icon({iconUrl: 'markerIcons/airportMarker.png', iconSize: [25]});
// Layer group holding airport markers - Adds all airport markers as one layer
var airportMarkers = L.layerGroup().addTo(map);
// Nearby airport markers

L.marker([39.8744, -75.2424], {icon: airportMarkerIcon}).addTo(airportMarkers);
L.marker([40.6895, -74.1745], {icon: airportMarkerIcon}).addTo(airportMarkers);
L.marker([40.6413, -73.7781], {icon: airportMarkerIcon}).addTo(airportMarkers);
L.marker([39.4558, -74.5725], {icon: airportMarkerIcon}).addTo(airportMarkers);
L.marker([40.0781, -75.0098], {icon: airportMarkerIcon}).addTo(airportMarkers);
L.marker([40.7769, -73.8740], {icon: airportMarkerIcon}).addTo(airportMarkers);
L.marker([39.6802, -75.6035], {icon: airportMarkerIcon}).addTo(airportMarkers);
L.marker([40.3342, -75.1230], {icon: airportMarkerIcon}).addTo(airportMarkers);
L.marker([39.5755, -75.8716], {icon: airportMarkerIcon}).addTo(airportMarkers);
L.marker([40.1188, -76.2993], {icon: airportMarkerIcon}).addTo(airportMarkers);

// Holds all flights data

var flights1 = [

        {
            'callSign': "N6701S",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.6413,
            'startLon': -73.7781,
            'endLat': 39.8744,
            'endLon': -75.2424   
        },
        {
            'callSign': "N8502F",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.5755,
            'startLon': -75.8716,
            'endLat': 40.7769,
            'endLon': -73.8740
        },
        {
            'callSign': "TWY85",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.1188,
            'startLon': -76.2993,
            'endLat': 39.4558,
            'endLon': -74.5725
        
        },
        {
            'callSign': "UPS2196",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.8744,
            'startLon': -75.2424,
            'endLat': 40.6413,
            'endLon': -73.7781
            
        },
        {
            'callSign': "DAL609",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.4558,
            'startLon': -74.5725,
            'endLat': 40.3342,
            'endLon': -75.1230
        },
        {
            'callSign': "AAL2020",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.7769,
            'startLon': -73.8740,
            'endLat': 40.1188,
            'endLon': -76.2993
        },
        {
            'callSign': "SWA1126",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.6895,
            'startLon': -74.1745,
            'endLat': 39.6802,
            'endLon': -75.6035
        },
        {
            'callSign': "N71453",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.6802,
            'startLon': -75.6035,
            'endLat': 40.0781,
            'endLon': -75.0098
            
        },
        {
            'callSign': "DAL3363",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 38.556,
            'startLon': -74.999,
            'endLat': 41,
            'endLon': -75.2424
        }, 
        {
            'callSign': "M4321S",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat':39.6802,
            'startLon': -75.6035,
            'endLat': 40.1188,
            'endLon': -76.2993 
        },
        {
            'callSign': "ABC5722",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat':39.8744,
            'startLon': -75.2424,
            'endLat': 40.6413,
            'endLon': -73.7781 
        },
        {
            'callSign': "BAC1300",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.7769,
            'startLon': -73.8740,
            'endLat': 39.8744,
            'endLon': -75.2424 
        },
        {
            'callSign': "MMR3222",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.1188,
            'startLon': -76.2993,
            'endLat': 40.6895,
            'endLon': -74.1745 
        },
        {
            'callSign': "COL3711",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.5755,
            'startLon': -75.8716,
            'endLat': 39.4558,
            'endLon': -74.5725
        }]
var flights2 = [

        {
            'callSign': "COL3711",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.5755,
            'startLon': -75.8716,
            'endLat': 39.4558,
            'endLon': -74.5725
        },
        {
            'callSign': "MMR3222",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.1188,
            'startLon': -76.2993,
            'endLat': 40.6895,
            'endLon': -74.1745 
        },
        {
            'callSign': "BAC1300",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.7769,
            'startLon': -73.8740,
            'endLat': 39.8744,
            'endLon': -75.2424 
        },
        {
            'callSign': "ABC5722",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat':39.8744,
            'startLon': -75.2424,
            'endLat': 40.6413,
            'endLon': -73.7781 
        },
        {
            'callSign': "M4321S",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat':39.6802,
            'startLon': -75.6035,
            'endLat': 40.1188,
            'endLon': -76.2993 
        },
        {
            'callSign': "DAL3363",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 38.556,
            'startLon': -74.999,
            'endLat': 41,
            'endLon': -75.2424
        }, 
        {
            'callSign': "N71453",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.6802,
            'startLon': -75.6035,
            'endLat': 40.0781,
            'endLon': -75.0098
        },
        {
            'callSign': "SWA1126",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.6895,
            'startLon': -74.1745,
            'endLat': 39.6802,
            'endLon': -75.6035
        },
        {
            'callSign': "AAL2020",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.7769,
            'startLon': -73.8740,
            'endLat': 40.1188,
            'endLon': -76.2993
        },
        {
            'callSign': "DAL609",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.4558,
            'startLon': -74.5725,
            'endLat': 40.3342,
            'endLon': -75.1230
        },
        {
            'callSign': "UPS2196",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.8744,
            'startLon': -75.2424,
            'endLat': 40.6413,
            'endLon': -73.7781
        },
        {
            'callSign': "TWY85",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.1188,
            'startLon': -76.2993,
            'endLat': 39.4558,
            'endLon': -74.5725
        },
        {
            'callSign': "N8502F",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.5755,
            'startLon': -75.8716,
            'endLat': 40.7769,
            'endLon': -73.8740
        },
        {
            'callSign': "N6701S",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.6413,
            'startLon': -73.7781,
            'endLat': 39.8744,
            'endLon': -75.2424   
        }]
var flights3 = [

   {
            'callSign': "BAC1300",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.7769,
            'startLon': -73.8740,
            'endLat': 39.8744,
            'endLon': -75.2424 
        },
        {
            'callSign': "M4321S",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat':39.6802,
            'startLon': -75.6035,
            'endLat': 40.1188,
            'endLon': -76.2993 
        },
        {
            'callSign': "MMR3222",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.1188,
            'startLon': -76.2993,
            'endLat': 40.6895,
            'endLon': -74.1745 
        },
        {
            'callSign': "N8502F",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.5755,
            'startLon': -75.8716,
            'endLat': 40.7769,
            'endLon': -73.8740
        },
        {
            'callSign': "DAL3363",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 38.556,
            'startLon': -74.999,
            'endLat': 41,
            'endLon': -75.2424
        }, 
        {
            'callSign': "N71453",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.6802,
            'startLon': -75.6035,
            'endLat': 40.0781,
            'endLon': -75.0098
        },
        {
            'callSign': "SWA1126",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.6895,
            'startLon': -74.1745,
            'endLat': 39.6802,
            'endLon': -75.6035
        },
        {
            'callSign': "UPS2196",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.8744,
            'startLon': -75.2424,
            'endLat': 40.6413,
            'endLon': -73.7781
        },
        {
            'callSign': "AAL2020",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.7769,
            'startLon': -73.8740,
            'endLat': 40.1188,
            'endLon': -76.2993
        },
        {
            'callSign': "DAL609",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.4558,
            'startLon': -74.5725,
            'endLat': 40.3342,
            'endLon': -75.1230
        },
        {
            'callSign': "COL3711",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.5755,
            'startLon': -75.8716,
            'endLat': 39.4558,
            'endLon': -74.5725
        },
        {
            'callSign': "N6701S",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.6413,
            'startLon': -73.7781,
            'endLat': 39.8744,
            'endLon': -75.2424   
        }]
var flights4 = [

        {
            'callSign': "SWA1126",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.6895,
            'startLon': -74.1745,
            'endLat': 39.6802,
            'endLon': -75.6035
        },
        {
            'callSign': "MMR3222",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.1188,
            'startLon': -76.2993,
            'endLat': 40.6895,
            'endLon': -74.1745 
        },
        {
            'callSign': "BAC1300",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.7769,
            'startLon': -73.8740,
            'endLat': 39.8744,
            'endLon': -75.2424 
        },
        {
            'callSign': "N8502F",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.5755,
            'startLon': -75.8716,
            'endLat': 40.7769,
            'endLon': -73.8740
        },
        {
            'callSign': "DAL3363",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 38.556,
            'startLon': -74.999,
            'endLat': 41,
            'endLon': -75.2424
        }, 
        {
            'callSign': "N6701S",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.6413,
            'startLon': -73.7781,
            'endLat': 39.8744,
            'endLon': -75.2424   
        },
        {
            'callSign': "N71453",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.6802,
            'startLon': -75.6035,
            'endLat': 40.0781,
            'endLon': -75.0098
        },
        {
            'callSign': "UPS2196",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.8744,
            'startLon': -75.2424,
            'endLat': 40.6413,
            'endLon': -73.7781
        },
        {
            'callSign': "M4321S",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat':39.6802,
            'startLon': -75.6035,
            'endLat': 40.1188,
            'endLon': -76.2993 
        },
        {
            'callSign': "AAL2020",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 40.7769,
            'startLon': -73.8740,
            'endLat': 40.1188,
            'endLon': -76.2993
        },
        {
            'callSign': "DAL609",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.4558,
            'startLon': -74.5725,
            'endLat': 40.3342,
            'endLon': -75.1230
        },
        {
            'callSign': "COL3711",
            'heading': 0,
            'speed': 0,
            'altitude': 350,
            'startLat': 39.5755,
            'startLon': -75.8716,
            'endLat': 39.4558,
            'endLon': -74.5725
        }]        
// Holds loaded flight data
var flights = [];
// Holds Flight objects
var pendingFlights = [];
// Holds flight markers
var flightMarkers = [];


// Flag for controlling airport marker visibility
var toggleFlag = false;
// Toggle visibility of airport markers on map
function toggleAirports() {
    if (toggleFlag == false) {
        map.removeLayer(airportMarkers);
        toggleFlag = true;
    } else {
        map.addLayer(airportMarkers);
        toggleFlag = false;
    }}
// Pauses all flights on screen
function pauseFlights() {

    pauseFlag = true;
    for (var i in flightMarkers) {
        flightMarkers[i].pause();
    }}
// Resumes all flights on screen
function resumeFlights() {
    pauseFlag = false;
    for (var i in flightMarkers) {
        flightMarkers[i].resume();
    }}
// Loads flight scenario selected by user - Initializes flight objects,
// flight markers, and flight table
function loadFlights(choice) {
    // Clears all flights, pending flights, flight markers, and flight table
    flights = [];
    pendingFlights = [];
    flightMarkers = [];
    var flightTable = document.getElementById("flightTable");
    flightTable.getElementsByTagName("tbody")[0].innerHTML = flightTable.rows[0].innerHTML;
    // Load chosen flight scenario
    switch(choice) {
        case 1:
            flights = flights1;
            break;
        case 2:
            flights = flights2;
            break;
        case 3:
            flights = flights3;
            break;
        case 4: 
            flights = flights4;
            break;  
    }
    // Re populate pending markers and flight table
    buildFlights();
    buildMarkers();
    initalizeFlightTable();    }


// Launches flight scenario
function startSimulation() {

    var table = document.getElementById("flightTable");

    for (var i in flightMarkers) {
        (function(i) {
            setTimeout(function() {
                flightMarkers[i].addTo(map);
                table.deleteRow(1);
            }, 5000 * i);
        }(i));   
    }}        
// Toggles on screen keyboard
function displayKeyboard() {
    var keyboard = document.getElementById("keyboard");
    var keyboardButton = document.getElementById("keyboardButton");
    var closeButton = document.getElementsByClassName("closeKeyboardButton")[0];
    keyboard.style.display = "inline";
    closeButton.onclick = function() {
      keyboard.style.display = "none";
    }}


// Constructor for flight object
function Flight(callSign, heading, speed, altitude, startLat, startLon, endLat, endLon) {
    this.callSign = callSign;
    this.heading = heading;
    this.speed = speed;
    this.altitude = altitude;
	this.startLat = startLat;
	this.startLon = startLon;
	this.endLat	 = endLat;
	this.endLon = endLon;}
// Creates fight objects from loaded flight data
function buildFlights() {
    var x1;
    var y1;
    var x2;
    var y2;

    for (var i in flights) {
        x1 = (flights[i].startLat);
        y1 = (flights[i].startLon);
        x2 = (flights[i].endLat);
        y2 = (flights[i].endLon);

        var heading = Math.atan2(x2-x1, y2-y1);
        heading = heading * (180 / Math.PI);
        flights[i].heading = parseFloat((450 - heading) % 360).toFixed(1);

        var randomizedDuration = Math.random() * (700000 - 600000) + 600000;
        flights[i].speed = Math.round((randomizedDuration * .0005));

        var flight = new Flight(flights[i].callSign, flights[i].heading, flights[i].speed, flights[i].altitude,
                                flights[i].startLat, flights[i].startLon, flights[i].endLat, flights[i].endLon);

        pendingFlights.push(flight);
    }}
// Creates flight marker from flight object and adds to flight markers array
function buildMarker(Flight) {
    var flightMarker = L.Marker.movingMarker([[Flight.startLat, Flight.startLon], [Flight.endLat, Flight.endLon]], 
                                                [400 * Flight.speed], {autostart: true, icon: flightMarkerIcon}).on('end',
                                                function(e) {map.removeLayer(this);});

    flightMarker.bindTooltip(Flight.callSign + "<br/>" + Flight.heading + "°/ " + Flight.speed + " kt / " + Flight.altitude + " alt", {
            className: 'datablock',
            offset: L.point({x: -85, y: 0}),
            permanent: true,
            direction: 'center'});

    flightMarker.id = Flight.callSign;

    flightMarkers.push(flightMarker);}
// Creates all flight markers from loaded flight objects
function buildMarkers() {
    for (var i in pendingFlights) {
        buildMarker(pendingFlights[i]);
    }}
// Prepares pending flight window
function initalizeFlightTable() {
    var table = document.getElementById("flightTable");
    for (var i = 0; i < pendingFlights.length; i++) {
            row = table.insertRow(i + 1);
            cell1 = row.insertCell(0);
            cell1.innerHTML = pendingFlights[i].callSign;
    }}


// Reads command from user 
function readAndExecuteCommand() {
    var input = document.getElementById("commandBox").value;
    var callSign = input.replace(/ .*/,'');
    var flightIndex = getFlightMarkerIndex(callSign);

    for (var i in pendingFlights) {

        if (callSign == pendingFlights[i].callSign) {
    
            if (input.includes('ALT')) {
                var altitude = input.split(" ").slice(-1);
                if (altitude < 0 || altitude > 999) {
                    alert("Invalid altitude.  Must be between 0 and 999.");
                    return;
                }
                setAltitude(flightIndex, altitude);
                return;
            }

            if (input.includes('SPD')) {
                var speed = input.split(" ").slice(-1);
                if(speed < 0 || speed > 999) {
                    alert("Invalid speed.  Must be between 0 and 999.");
                    return;
                }
                setSpeed(flightIndex, speed);
                return;
            }

            if (input.includes('HDG')) {
                var newHeading = parseFloat(input.split(" ").slice(-1));
                if (newHeading < 0 || newHeading > 360) {
                    alert("Invalid heading.  Must be between 0 and 360.");
                    return;
                }
                setHeading(flightIndex, newHeading);
                return;
            }   
            alert("Invalid command. Please use SPD, ALT, or HDG.");
            return;
        }
    } 
    alert("Invalid call sign.");}
// Returns index of pendingFlight with matching callSign as user input
function getFlightMarkerIndex(input) {
    var flightIndex;
    for (var i in pendingFlights) {
        if (pendingFlights[i].callSign == input) {
            flightIndex = i;
        }
    }
    return flightIndex;}
// Returns arbitrary end coordinate based on current coordinate and desired heading
function destination(latlng, heading, distance) {
    heading = (heading + 360) % 360;
    var rad = Math.PI / 180,
        radInv = 180 / Math.PI,
        R = 6378137, // approximation of Earth's radius
        lon1 = latlng.lng * rad,
        lat1 = latlng.lat * rad,
        rheading = heading * rad,
        sinLat1 = Math.sin(lat1),
        cosLat1 = Math.cos(lat1),
        cosDistR = Math.cos(distance / R),
        sinDistR = Math.sin(distance / R),
        lat2 = Math.asin(sinLat1 * cosDistR + cosLat1 *
            sinDistR * Math.cos(rheading)),
        lon2 = lon1 + Math.atan2(Math.sin(rheading) * sinDistR *
            cosLat1, cosDistR - sinLat1 * Math.sin(lat2));
    lon2 = lon2 * radInv;
    lon2 = lon2 > 180 ? lon2 - 360 : lon2 < -180 ? lon2 + 360 : lon2;
    return L.latLng([lat2 * radInv, lon2]);}
// Sets altitude of flight 
function setAltitude(flightIndex, newAltitude) {

    pendingFlights[flightIndex].altitude = newAltitude;

    flightMarkers[flightIndex].unbindTooltip();

    flightMarkers[flightIndex].bindTooltip(pendingFlights[flightIndex].callSign + "<br/>" + pendingFlights[flightIndex].heading + "°/ " + 
                                 pendingFlights[flightIndex].speed + " kt / " + newAltitude + " alt", {
                                    className: 'datablock',
                                    offset: L.point({x: -85, y: 0}),
                                    permanent: true,
                                    direction: 'center'});}
// Sets speed of flight
function setSpeed(flightIndex, newSpeed) {

    pendingFlights[flightIndex].speed = newSpeed;

    flightMarkers[flightIndex].unbindTooltip();

    flightMarkers[flightIndex].bindTooltip(pendingFlights[flightIndex].callSign + "<br/>" + pendingFlights[flightIndex].heading + "°/ " + 
                                 newSpeed + " kt / " + pendingFlights[flightIndex].altitude + " alt", {
                                    className: 'datablock',
                                    offset: L.point({x: -85, y: 0}),
                                    permanent: true,
                                    direction: 'center'});}    
// Sets heading of flight and redirects marker
function setHeading(flightIndex, newHeading) {

    var currentCoord = L.latLng(flightMarkers[flightIndex].getLatLng());
    var endCoord = L.latLng(destination(currentCoord, newHeading, 200000));

    x1 = parseFloat(currentCoord.lat.toFixed(2));
    y1 = parseFloat(currentCoord.lng.toFixed(2));
    x2 = parseFloat(endCoord.lat.toFixed(2));
    y2 = parseFloat(endCoord.lng.toFixed(2));

    var heading = Math.atan2(x2-x1, y2-y1);
    heading = heading * (180 / Math.PI);
    heading = parseFloat((450 - heading) % 360).toFixed(1);

    pendingFlights[flightIndex].heading = newHeading;

    flightMarkers[flightIndex].unbindTooltip();
    flightMarkers[flightIndex].bindTooltip(pendingFlights[flightIndex].callSign + "<br/>" + newHeading + "°/ " + 
                                           pendingFlights[flightIndex].speed + " kt / " + pendingFlights[flightIndex].altitude + " alt", {
                                                className: 'datablock',
                                                offset: L.point({x: -85, y: 0}),
                                                permanent: true,
                                                direction: 'center'});

    flightMarkers[flightIndex].moveTo(endCoord, 140000);
    flightMarkers[flightIndex].addLatLng([pendingFlights[flightIndex].endLat, pendingFlights[flightIndex].endLon], 140000);}
