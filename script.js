window.onload = function() {
	var preview = document.getElementById("preview");
	
	preview.onload = function() {
		alert("The image has loaded...);
	};

	setTimeout(function() {	
		alert("Timeout...);
	}, 5000);
}