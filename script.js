function plot() {
    var xdropdown = document.getElementById("xdropdown");
	var newx = xdropdown.value;
	newx = newx * 30

	var ydropdown = document.getElementById("ydropdown");
	var newy = ydropdown.value;
	newy = 300 - newy*30

	var frame = document.getElementById("frame");

	var point = document.createElement("circle");
	point.setAttribute("cx", x);
	point.setAttribute("cy", y);
	point.setAttribute("r", 5);
	frame.appendChild(point);
	
}

function highlight(point_id) {
      document.getElementById(point_id).style.stroke="orange";
      document.getElementById("recent").innerHTML = point_id;
  }




