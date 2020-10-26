//displays the current date
var date = moment().format('MMMM Do YYYY');
var currentDate = document.createElement("h3");
document.getElementById("currentDay").appendChild(currentDate);
currentDate.textContent = date;

var now = moment();
var then = moment().hour(9).minute(0).second(0);

var timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//save any task input to local storage when save button is clicked
var nineAM = document.getElementById("taskOne");
var tenAM = document.getElementById("taskTwo");
var elevenAM = document.getElementById("taskThree");
var twelvePM = document.getElementById("taskFour");
var onePM = document.getElementById("taskFive");
var twoPM = document.getElementById("taskSix");
var threePM = document.getElementById("taskSeven");
var fourPM = document.getElementById("taskEight");
var fivePM = document.getElementById("taskNine");


var saveBtnOne = document.getElementById("btnOne");
var saveBtnTwo = document.getElementById("btnTwo");
var saveBtnThree = document.getElementById("btnThree");
var saveBtnFour = document.getElementById("btnFour");
var saveBtnFive = document.getElementById("btnFive");
var saveBtnSix = document.getElementById("btnSix");
var saveBtnSeven = document.getElementById("btnSeven");
var saveBtnEight = document.getElementById("btnEight");
var saveBtnNine = document.getElementById("btnNine");

var saveOne = saveBtnOne.addEventListener("click", function() {
    localStorage.setItem('taskone', nineAM.value);
})

var saveTwo = saveBtnTwo.addEventListener("click", function() {
    localStorage.setItem('tasktwo', tenAM.value);
})

var saveThree = saveBtnThree.addEventListener("click", function() {
    localStorage.setItem('taskthree', elevenAM.value);
})

var saveFour = saveBtnFour.addEventListener("click", function() {
    localStorage.setItem('taskfour', twelvePM.value);
})

var saveFive = saveBtnFive.addEventListener("click", function() {
    localStorage.setItem('taskfive', onePM.value);
})

var saveSix = saveBtnSix.addEventListener("click", function() {
    localStorage.setItem('tasksix', twoPM.value);
})

var saveSeven = saveBtnSeven.addEventListener("click", function() {
    localStorage.setItem('taskseven', threePM.value);
})

var saveEight = saveBtnEight.addEventListener("click", function() {
    localStorage.setItem('taskeight', fourPM.value);
})

var saveNine = saveBtnNine.addEventListener("click", function() {
    localStorage.setItem('tasknine', fivePM.value);
})




var rehydrateOne = function () {
    var saveTask = localStorage.getItem('taskone');
    nineAM.value = saveTask;
}
var rehydrateTwo = function () {
    var saveTask = localStorage.getItem('tasktwo');
    tenAM.value = saveTask;
}
var rehydrateThree = function () {
    var saveTask = localStorage.getItem('taskthree');
    elevenAM.value = saveTask;
}
var rehydrateFour = function () {
    var saveTask = localStorage.getItem('taskfour');
    twelvePM.value = saveTask;
}
var rehydrateFive = function () {
    var saveTask = localStorage.getItem('taskfive');
    onePM.value = saveTask;
}
var rehydrateSix = function () {
    var saveTask = localStorage.getItem('tasksix');
    twoPM.value = saveTask;
}
var rehydrateSeven = function () {
    var saveTask = localStorage.getItem('taskseven');
    threePM.value = saveTask;
}
var rehydrateEight = function () {
    var saveTask = localStorage.getItem('taskeight');
    fourPM.value = saveTask;
}
var rehydrateNine = function () {
    var saveTask = localStorage.getItem('tasknine');
    fivePM.value = saveTask;
}

rehydrateOne();
rehydrateTwo();
rehydrateThree();
rehydrateFour();
rehydrateFive();
rehydrateSix();
rehydrateSeven();
rehydrateEight();
rehydrateNine();

//if task time is < moment(), textarea background is grey
//if task time is === moment(), textarea background is red
//if task time is > moment(), text area background is green

