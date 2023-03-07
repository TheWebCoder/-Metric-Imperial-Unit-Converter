/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-El")
const cardsEl = document.getElementById("cards")
const convertBtn = document.getElementById("convertBtn")

let number;
let length;
let length2;
let volume;
let volume2;
let mass;
let mass2;

function convertValues() {
    number = inputEl.value
    
    length = number * 3.281
    length = length.toFixed(3)
    length2 = number / 3.281
    length2 = length2.toFixed(3)
    
    volume = number * 0.264
    volume = volume.toFixed(3)
    volume2 = number / 0.264
    volume2 = volume2.toFixed(3)
    
    mass = number * 2.204
    mass = mass.toFixed(3)
    mass2 = number / 2.204
    mass2 = mass2.toFixed(3)
    
    cardsEl.innerHTML = ""
    
    cardsEl.innerHTML += `<div class="card">
                          <p class="cardTitle">Length (Meter/Feet)</p>
                          <p class="cardP">${number} meters = ${length} feet | ${number} feet = ${length2} meters</p>
                          </div>`
                          
    cardsEl.innerHTML += `<div class="card">
                          <p class="cardTitle">Volume (Liters/Gallon)</p>
                          <p class="cardP">${number} liters = ${volume} gallons | ${number} gallons = ${volume2} liters</p>
                          </div>`  
                          
    cardsEl.innerHTML += `<div class="card">
                          <p class="cardTitle">Mass (Kilograms/Pound) </p>
                          <p class="cardP">${number} kilos = ${mass} pounds | ${number} pounds = ${mass2} kilos</p>
                          </div>`                           
                                              
}

convertBtn.addEventListener("click", convertValues)