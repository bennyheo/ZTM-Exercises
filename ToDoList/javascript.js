var button = document.querySelector("button");
var input = document.querySelector("input");
var ul = document.querySelector("ul");
var list = document.querySelectorAll('li');


function inputLength(){
    return input.value.length;
}

function addListItem(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var btn = document.createElement("Button");
    var txt = document.createTextNode("Delete");
    btn.className = "Delete";
    btn.appendChild(txt);
    li.appendChild(btn);
    
    addDeleteFunction();
}

function appendToListClick(){
    if (inputLength() > 0){
        addListItem();
    }
}

function appendToListEnter(event){
    if (inputLength() > 0 && event.key === 'Enter'){
        addListItem();
    }
}

function crossOut(event){
    if (event.target.tagName === 'LI')
    {
        event.target.classList.toggle('done');
    }
}

function createDeleteButton(i){
    var btn = document.createElement("Button");
    var txt = document.createTextNode("Delete");
    btn.className = "Delete";
    btn.appendChild(txt);
    list[i].appendChild(btn);
}

function addDeleteFunction(){
    var close = document.getElementsByClassName("Delete");
    for (var i = 0; i < close.length; i++){
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

button.addEventListener("click", appendToListClick);
input.addEventListener("keydown", appendToListEnter);
ul.addEventListener('click', crossOut);

for (var i = 0; i < list.length; i++)
{
    createDeleteButton(i);
    addDeleteFunction();
}

