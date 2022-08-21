var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorwrapper = document.querySelector(".color-wrapper");
var button = document.getElementById("random-button");

var ul = colorwrapper.appendChild(document.createElement("ul"));

function setGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
}

function writeGradient1(){
    li.textContent="Color1: " + color1.value;
}

function writeGradient2(){
    li2.textContent="Color2: " + color2.value;
}

var li = document.createElement("li");
li.appendChild(document.createTextNode("Color1: " + color1.value));
ul.appendChild(li);
var li2 = document.createElement('li');
li2.appendChild(document.createTextNode("Color2: " + color2.value));
ul.appendChild(li2);

color1.addEventListener("input", setGradient);
color1.addEventListener("input", writeGradient1);

color2.addEventListener("input", setGradient);
color2.addEventListener("input", writeGradient2);

button.addEventListener("click", function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#" + randomColor;
    setGradient();
    writeGradient1();
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#" + randomColor;
    setGradient();
    writeGradient2();

})