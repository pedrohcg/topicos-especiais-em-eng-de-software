var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteButton);
	deleteButton.addEventListener("click", deleteListItem);

	li.addEventListener("click", toggleDoneClass);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneClass() {
	this.classList.toggle("done");
}

function deleteListItem() {
	this.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

var deleteButtons = document.querySelectorAll(".delete");
for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", deleteListItem);
}

var listItems = document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", toggleDoneClass);
}