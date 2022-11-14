function getAge(){
if (myPrompt != null) {
print.document.getElementById("theYear").innerHTML = "Your birth year is " + (2022 - myPrompt);
}
}

var myPrompt = prompt("What is your age?");
console.log(myPrompt);

//<button type="button" onclick="getAge()">Click.</button>
//<button type="button" onclick="getAge()">Click.</button>
