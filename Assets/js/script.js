var m = moment().format('MMMM Do YYYY');
var date = m.toString();
var currentDate = document.createElement("h3");
document.getElementById("currentDay").appendChild(currentDate);
currentDate.textContent = date;



