// Navigation Bar JS | Assigns topnav to be responsive when possible

function navBarFunction() {
	var x = document.getElementById("myTopNav");

	if (x.className === "topnav") {
		x.className += "responsive";
	}
		
	else {
		x.className = "topnav";
	}
}