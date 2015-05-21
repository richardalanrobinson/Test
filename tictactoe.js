function xo(id) {
	var elementCell = document.getElementById(id);
	if (strXo == "X") {
		elementCell.innerHTML = strXo;
		strXo = "O";
	} else {
		elementCell.innerHTML = "O";
		strXo = "X";
	}

}

var strXo = "X";

function clear() {
	 window.location.reload();
}









	
