
var start = new Date();
var todayTime =start.getTime();
// var todayStopTime = stop.getTime(); not a real function
var todaySec= start.getSeconds();
var todayMonth = start.getMonth() + 1 ;//fix for zero-based month index
var todayDate = start.getDate();
var todayDay = start.getDay();
var todayHour = start.getHours();
var todayYear = start.getYear();
var todayFullYear = start.getFullYear();

//var todayTime = start.getTime();
//var onloadd = start() + todayTime(); // then subtract current time with another today time.....?
//not working.
function stopTime(){
  alert("You have been on the page for" + todayTime - todayStopTime );
document.getElementById("timee").innerHTML = todayTime - todaySec + " seconds";
}

//function stopTime(){
//  alert("You have been on the page for some odd" + todayTime)
//document.getElementById("timee").innerHTML = todayTime /100000000000 + " seconds";}
//

console.log(new Date());
console.log(todayStopTime);

//POPUPS
//honestly having issues with this lab. I understand  to get the onpageload start timer or that be 0, then subtract current time and previous time, but im not understanding or knowing the function
// one varibale would stay current time, the other should save the time page loaded with then subtract from one another then divide 1000
//but brain is not processing how to save time on load.
//popup works then when i change something, it doesent...

//var myAlert = alert("You have been on the page for: " start+" seconds");
//console.log(myAlert);
