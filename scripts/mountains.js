"use strict";
// get elements into variables

const mountainSelect = document.querySelector("#mountainSelect");
const mountainsTbody = document.querySelector("#mountainsTbody");
const mountainImageDiv = document.querySelector("#mountainImageDiv");

//functions

function loadMountainDropDown() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.value = mountain.name;
    option.innerText = mountain.name;
    mountainSelect.appendChild(option);
  }
}

function showMountainTable(mountainName) {
  mountainImageDiv.innerHTML ="";
  for (const mountain of mountainsArray) {
    if (mountain.name == mountainName) {
      mountainImageDiv.style.display="block";
      let tableRow = mountainsTbody.insertRow(-1);

      let td1 = tableRow.insertCell(0);
      td1.innerText = mountain.name;

      let td2 = tableRow.insertCell(1);
      td2.innerText = mountain.desc;

      let td3 = tableRow.insertCell(2);
      td3.innerText = mountain.elevation;

      let td5 = tableRow.insertCell(3);
      td5.innerText = mountain.effort;

      let image = document.createElement("img");

      image.src = `images/${mountain.img}`

      image.alt = mountain.name;

      mountainImageDiv.appendChild(image);
    
    }
  }
}

function changeMountain() {
  mountainsTbody.innerHTML = "";
  const mountainName = mountainSelect.value;
  showMountainTable(mountainName);
}




//wire up
loadMountainDropDown();
mountainSelect.onchange = changeMountain;
