
var start = new Date();

var end = new Date();
var todayClick= end.getTime();

var todayTime =start.getTime();
// var todayStopTime = stop.getTime(); not a real function
var todaySec= start.getSeconds();
var todayMonth = start.getMonth() + 1 ;//fix for zero-based month index
var todayDate = start.getDate();
var todayDay = start.getDay();
var todayHour = start.getHours();
var todayYear = start.getYear();
var todayFullYear = start.getFullYear();


//var total= (end-start) / 1000

console.log(new Date());
//console.log(todayStopTime);
//var todayTime = start.getTime();
//var onloadd = start() + todayTime(); // then subtract current time with another today time.....?
//not working.

//this shows the time, but like not as an alert.
//function stopTime(){
//document.getElementById("timee").innerHTML = todayTime - todaySec + " seconds";
//alert("You have been on the page for" + todayTime - todayStopTime );
//}
//new
//function stopTime(){
//alert("You have been on the page for " + Number(todayTime) - Number(todaySec) + " seconds");
//document.getElementById("timee").innerHTML = end - start + " seconds";}

//the one thjat works ( kinda still shows whole sec but not sec on page.  )
// alert in the fucntion makes it alert when function is called when button is called.
function stopTime(){
alert("You have been on the page for " + todaySec + " seconds");
document.getElementById("timee").innerHTML = todaySec + " seconds";}

//NAN prob on ppop
//function stopTime(){
//alert("You have been on the page for " + Number(todayTime) - Number(todayClick) + " seconds");
//document.getElementById("timee").innerHTML = todayTime - todayClick /100000000000 + " seconds";}



//honestly having issues with this lab. I think to get the onpageload start timer or that be 0, then subtract current time and previous time, but im not understanding or knowing the function
// one varibale would stay current time, the other should save the time page loaded with then subtract from one another then divide 1000 not 600
//but brain is not processing how to save time on load.

//var myAlert = alert("You have been on the page for: " start+" seconds");
//console.log(myAlert
//<popup type="" id="timee"> </popup>?

// when i look at youtube tutorials they are all talking about unloading and events? Confused by concept
// honestly very confused on this onthis one.
