function updatescore() {
    document.getElementById("recent").innerHTML = "UPDATED";
}

function highlight(point_id)
  {
      document.getElementById(point_id).style.stroke="orange";
      document.getElementById("recent").innerHTML = point_id;
  }

/**
document.getElementById('add').addEventListener('click', function(){
	var xdropdown = document.getElementById("xdropdown");
	var newx = xdropdown.value;

	var ydropdown = document.getElementById("ydropdown");
	var newx = ydropdown.value;
}
**/ 
