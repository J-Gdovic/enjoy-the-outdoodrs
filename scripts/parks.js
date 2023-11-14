"use strict";

//States drop down

const statesAndTerritoriesSelect = document.querySelector("#statesAndTerritoriesSelect");

function loadStates() {
  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.value = location;
    option.innerText = location;
    statesAndTerritoriesSelect.appendChild(option);
  }
}

// Parks table

const nationalParkTable = document.querySelector("#nationalParkTable");
const nationalParkTbody = document.querySelector("#nationalParkTbody");
const parksDataTableDiv = document.querySelector("#parksDataTableDiv");

function buildNationalParkTable(parkState) {
  nationalParkTbody.innerHTML = "";
  for (const park of nationalParksArray) {
    if (park.State == parkState) {
      let tableRow = nationalParkTbody.insertRow(-1);

      let td2 = tableRow.insertCell(0);
      td2.innerText = park.LocationName;

      let td3 = tableRow.insertCell(1);
      td3.innerText = park.Address;

      let td4 = tableRow.insertCell(2);
      td4.innerText = park.City;

      let td5 = tableRow.insertCell(3);
      td5.innerText = park.State;

      let td6 = tableRow.insertCell(4);
      td6.innerText = park.ZipCode;

      let td7 = tableRow.insertCell(5);
      td7.innerText = park.Phone;

      let td8 = tableRow.insertCell(6);
      if (park.Visit != undefined) {
        td8.innerText = park.Visit;
      }
    }
  }
}

function changeLocation() {
  nationalParkTbody.innerHTML = "";
  const parkState = statesAndTerritoriesSelect.value;
  buildNationalParkTable(parkState);
}
///breaakkkkkkkkkkkkkkkkkkkkkk

// function for type of park drop down
const byTypeTbody = document.querySelector("#byTypeTbody");
const typeSelect = document.querySelector("#typeSelect");

//function to load types of parks
function loadByType() {
  for (const type of parkTypesArray) {
    let option = document.createElement("option");
    option.value = type;
    option.innerText = type;
    typeSelect.appendChild(option);
  }
}

function buildNationalParkTableByType(parkType) {
  nationalParkTbody.innerHTML = "";
  for (const park of nationalParksArray) {
    if (park.LocationName.indexOf(parkType) !== -1) {
      let tableRow = nationalParkTbody.insertRow(-1);

      let td2 = tableRow.insertCell(0);
      td2.innerText = park.LocationName;

      let td3 = tableRow.insertCell(1);
      td3.innerText = park.Address;

      let td4 = tableRow.insertCell(2);
      td4.innerText = park.City;

      let td5 = tableRow.insertCell(3);
      td5.innerText = park.State;

      let td6 = tableRow.insertCell(4);
      td6.innerText = park.ZipCode;

      let td7 = tableRow.insertCell(5);
      td7.innerText = park.Phone;

      let td8 = tableRow.insertCell(6);
      if (park.Visit != undefined) {
        td8.innerText = park.Visit;
      }
    }
  }
}

function changeType() {
  nationalParkTbody.innerHTML = "";
  const parkType = typeSelect.value;
  buildNationalParkTableByType(parkType);
  console.log("change type working");
}

//wire up

loadStates();
statesAndTerritoriesSelect.onchange = changeLocation;

loadByType();
typeSelect.onchange = changeType;
