function plot() {
    document.getElementById("recent").innerHTML = "UPDATED";
    var xdropdown = document.getElementById("xdropdown");
	var newx = xdropdown.value;

	var ydropdown = document.getElementById("ydropdown");
	var newy = ydropdown.value;

	alert(newy)

	
}

function highlight(point_id) {
      document.getElementById(point_id).style.stroke="orange";
      document.getElementById("recent").innerHTML = point_id;
  }




