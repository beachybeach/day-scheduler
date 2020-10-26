//displays the current date
var date = moment().format('MMMM Do YYYY');
var time = moment().format('')
var currentDate = document.createElement("h3");
document.getElementById("currentDay").appendChild(currentDate);
currentDate.textContent = date;

//save any task input to local storage when save button is clicked
var nineAM = document.getElementById("taskOne");
var saveButton = document.getElementById("buttonOne");

console.log(nineAM.textContent);

var save = saveButton.addEventListener("click", function() {
    localStorage.setItem('task One', nineAM.value);
})

var rehydrate = function () {
    var saveTask = localStorage.getItem('task One');
    nineAM.value = saveTask;
}

rehydrate();

//if saveButton is clicked, and storageInput has textContent, save to local storage
//show all tasks after page is refreshed
//display past events as grey


//display current events as red
//display future events as green




