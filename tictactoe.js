var nextXo = "X";

function fWinner() {


	var p1 = document.getElementById("pId1").innerHTML;
	var p2 = document.getElementById("pId2").innerHTML;
	var p3 = document.getElementById("pId3").innerHTML;
	var p4 = document.getElementById("pId4").innerHTML;
	var p5 = document.getElementById("pId5").innerHTML;
	var p6 = document.getElementById("pId6").innerHTML;
	var p7 = document.getElementById("pId7").innerHTML;
	var p8 = document.getElementById("pId8").innerHTML;
	var p9 = document.getElementById("pId9").innerHTML;

	var r = isRowAWinner(p1,p2,p3,p4,p5,p6,p7,p8,p9);
	if (r) {
		return true;
        }

	var c = isColumnAWinner(p1,p2,p3,p4,p5,p6,p7,p8,p9);
	if (c) {
		return true;
        }

	var d = isDiagonalAWinner(p1,p3,p5,p7,p9);
	if (d) {
		return true;
        }

	return false;
}
function isDiagonalAWinner(p1,p3,p5,p7,p9) {
	if ( p1 == p5 && p5 == p9 ) {
		return true;
        }
	if ( p3 == p5 && p5 == p7 ) {
		return true;
        }
	return false;

}

function isRowAWinner(p1,p2,p3,p4,p5,p6,p7,p8,p9) {

	if ( p1 == p2 && p2 == p3 ) {
		return true;
        }
	if ( p4 == p5 && p5 == p6 ) {
		return true;
        }
	if ( p7 == p8 && p8 == p9 ) {
		return true;
        }
	return false;
}

function isColumnAWinner(p1,p2,p3,p4,p5,p6,p7,p8,p9) {
	if ( p1 == p4 && p4 == p7 ) {
		return true;
        }
	if ( p2 == p5 && p5 == p8 ) {
		return true;
        }
	if ( p3 == p6 && p6 == p9 ) {
		return true;
        }

	return false;
}

function xo(id) {
	var elementCell = document.getElementById(id);
	if (nextXo == "X") {
		elementCell.innerHTML = nextXo;
		nextXo = "O";
	} else {
		elementCell.innerHTML = "O";
		nextXo = "X";
	}

	var aWinner = fWinner();
	if (aWinner) {
		window.alert("You won!");
	}

}


function clear() {
	 window.location.reload();
}









	
