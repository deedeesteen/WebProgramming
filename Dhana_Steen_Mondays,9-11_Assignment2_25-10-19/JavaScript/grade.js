function calculations()
{
	var test1 = parseFloat(document.getElementsByName("test1").value);
	var test2 = parseFloat(document.getElementsByName("test2").value);
	var finalg = parseFloat(document.getElementsByName("finalg").value);
	
	var total = (test1 + test2 + finalg) / 3;
	if (total <= 100)
	{
		if (total >= 90)
		{
			document.getElementById("letterg").value="A";
		}
			
		else if (total >= 80)
		{
			document.getElementById("letterg").value = "B+";			
		}
	
		else if (total >= 70)
		{
			document.getElementById("letterg").value = "B";
		}
			
		else if (total >= 60)
		{
			document.getElementById("letterg").value = "C+";
		}
			
		else if (total >= 50)
		{
			document.getElementById("letterg").value = "C";
		}
			
		else
		{
			document.getElementById("letterg").value = "D";
		}
	}
}
