// var button = document.getElementsByTagName("button")[0]

// // button.addEventListener("click", function() {
// // 	console.log("CLICK!!!")
// button.addEventListener("mouseleave", function() {
// 	console.log("CLICK1!!!")
// })
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var delButns = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;

}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";

	var btn = document.createElement("button");
	btn.innerHTML = "delete";
	btn.onclick = removeParent;

	li.appendChild(btn);


	ul.appendChild(li);
		input.value ="";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	} 
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

// function clickToggle(event) {
// 	event.target.classList.toggle("done")
// }

// ul.addEventListener("click", clickToggle)

ul.onclick = clickToggle;

function clickToggle(event) {
	event.target.classList.toggle("done")
}

function removeParent(event) {
	event.target.removeEventListener("click",removeParent,false);
	event.target.parentNode.remove();

}

// add delete button to intial list

for (var i = 0; i < delButns.length; i++) {
	delButns[i].addEventListener("click",removeParent,false);
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

