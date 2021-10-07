var slider = document.getElementById("myRange");
var output = document.getElementById("avgdur");
output.innerHTML = slider.value; 
slider.oninput = function() {
    output.innerHTML = this.value;
}

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("avgdollar");
output3.innerHTML = slider3.value; 
slider3.oninput = function() {
    output3.innerHTML = this.value;
}

var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("avgrate");
output1.innerHTML = slider1.value; 

slider1.oninput = function() {
    output1.innerHTML = this.value;
}

// function intpayments (rate, duration, dollar) {
//     var intpayments = (((rate / 100) * dollar) * duration);
//     return intpayments
// }

// $(document).ready(function() {
//     var startinterest = intpayments(slider1.value, slider.value, slider3.value);
// document.getElementById ("intpayments").innerHTML = startinterest;
// });

// intpayments.onchange = function(){
//     var startinterest = intpayments(slider1.value, slider.value, slider3.value);
// document.getElementById ("intpayments").innerHTML = startinterest;
// };


