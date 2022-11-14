function buttonClick(){
  console.log("How dar you click the button! Did you ask their permission!?");
}

var todayFullDate = new Data();
var todayTime = todayFullDate.getTime();
var todayMonth = todayFullDate.getMonth() + 1; //fix for zero-based months
var todayDate = todayFullDate.getDate();
var todayDay = todayFullDate.getDay();
var todayHours = todayFullDate.getHours();
var todayYear = todayFullDate.getYear();
var todayFullYear = todayFullDate.getFullYear();

console.log(todayFullDate);
console.log(todayTime);
console.log(todayMonth);
console.log(todayDate);
console.log(todayDay);
console.log(todayHours);
console.log(todayYear);
console.log(todayFullYear);

function displaydate(){
  document.getElementById("theData").innerHTML = String(todayMonth) +"/"+ String(todayDate) + "/" + String(todayFullYear) ;
}

//popups

//var myAlert = alert ("im alerting you to danger");
//console.log(myAlert);

//var myConfirm = confirm("is this todays date?" + todayDate);
//.console.log(myConfirm);

//var myPrompt = prompt(" Tell me a Joke");
//.console.log(myPrompt);
