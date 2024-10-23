var attempt = 3;

function validate()
{
	var username = document.getElementById("username").value;
	var psword = document.getElementById("psword").value;
	if ( username == "teach3R" && psword == "CPE*report")
	{
		alert ("Login successful");
		window.location = "../HTML/reportcard.html";
		return false;
	}
	
	else
	{
		attempt --;
		alert("You have "+attempt+" attempt(s) left;");
		if( attempt == 0)
		{
			document.getElementById("username").disabled = true;
			document.getElementById("psword").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}
