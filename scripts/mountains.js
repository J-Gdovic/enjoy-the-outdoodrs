"use strict";
// get elements into variables

const mountainSelect = document.querySelector("#mountainSelect");


//functions


function loadMountainDropDown() {
    for (const mountain of mountainsArray) {
        let option = document.createElement("option");
        option.value = mountain.name;
        option.innerText = mountain.name;
        mountainSelect.appendChild(option);
    }
    
}

function showMountainTable() {
    
}



//wire up
loadMountainDropDown();