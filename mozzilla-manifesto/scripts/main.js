var myImage = document.querySelector('img');
var myTitle = document.querySelector('title');
var mySetButton = document.querySelector('#set');
var myClearButton = document.querySelector('#clear');

var images = ["firefox-icon.png","google-icon.svg","edge-logo.png"];
var index = 0;

if (!localStorage.getItem('name'))
{
	document.title = "Default Title";
} else {
	var myName = localStorage.getItem('name');
	document.title = "Current User: " + myName;
}

myImage.onclick = function() {
	index++;
	index = index % images.length;
	myImage.setAttribute ('src', "images/" + images[index]);
}

mySetButton.onclick = function() {
	var myName = prompt("Username: ");
	localStorage.setItem('name', myName);
	document.title = "Current User: " + myName;
}

myClearButton.onclick = function() {
	localStorage.removeItem('name');
	document.title = "Default Title";
}