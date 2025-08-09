function Calculate()
{
	var rad = parseFloat(document.getElementById("radius").value);
	var unit = document.getElementById("area_circum").value;
	var arear = 0;
	var circ = 0;
	
	if (unit = "area")
	{
		arear = 3.14 * (rad * rad);
		document.getElementById("answer").innerHTML = arear;
	}
	else
	{
		circ = 2 * 3.14 * rad;
		document.getElementById("answer").innerHTML = circ;
	}
	
	document.getElementById("radius").disabled = true;
}

function Display()
{
	var unit = document.getElementById("area_circum").value;
	var aformula = ("3.14 * (radius * radius)");
	var cformula = ("2 * 3.14 * radius");
	if (unit == "area")
	{
		document.getElementById("resTxt").innerHTML = "Area =";
	}
	else
	{
		document.getElementById("resTxt").innerHTML = "Circumference =";
	}
	
	if (unit == "area")
	{
		document.getElementById("formula").innerHTML = aformula;
	}
	else
	{
		document.getElementById("formula").innerHTML = cformula;
	}
}

function Cancel()
{
	window.location = "WP_LabTest2_Nov2019.html";
}
