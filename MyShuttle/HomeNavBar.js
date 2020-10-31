// Main JS | functions for Scope/Map & Control Boxes.

function navBarFunction() {
	var x = document.getElementById("myTopNav");

	if (x.className === "topnav") {
		x.className += " responsive";
	}
		
	else {
		x.className = "topnav";
	}
}