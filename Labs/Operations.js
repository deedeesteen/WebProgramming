let num1 = Math.floor(Math.random() * 60) + 1;
document.writeln("1st Number: " + num1 + "<br>"); 

let num2 = Math.floor(Math.random() * 60) + 1;
document.writeln("2nd Number: " + num2 + "<br> <br>");

function Addition()
{
	sum = num1 + num2;
	let result = prompt(num1 + " + " + num2 + " = ", "");
	if (result == sum)
	{
		alert("YOU ARE CORRECT!");
	}
	else
	{
		alert("INCORRECT. The answer is " + sum);
	}
}

function Subtraction()
{
	if (num1 >= num2)
	{
		diff = num1 - num2;
		let result = prompt(num1 + " - " + num2 + " = ", "");
		if (result == diff)
		{
			alert("YOU ARE CORRECT!");
		}
		else
		{
			alert("INCORRECT. The answer is " + diff);
		}
	}
	else
	{
		diff = num2 - num1;
		let result = prompt(num2 + " - " + num1 + " = ", "");
		if (result == diff)
		{
			alert("YOU ARE CORRECT!");
		}
		else
		{
			alert("INCORRECT. The answer is " + diff);
		}
	}
}

function Division()
{
	if (num1 >= num2)
	{
		divide = num1 / num2;
		let result = prompt(num1 + " / " + num2 + " = ", "");
		if (result == divide)
		{
			alert("YOU ARE CORRECT!");
		}
		else
		{
			alert("INCORRECT. The answer is " + divide);
		}
	}
	else
	{
		divide = num2 / num1;
		let result = prompt(num2 + " / " + num1 + " = ", "");
		if (result == divide)
		{
			alert("YOU ARE CORRECT!");
		}
		else
		{
			alert("INCORRECT. The answer is " + divide);
		}
	}
}

function Multiplication()
{
	product = num1 * num2;
	let result = prompt(num1 + " * " + num2 + " = ", "");
	if (result == product)
	{
		alert("YOU ARE CORRECT!");
	}
	else
	{
		alert("INCORRECT. The answer is " + product);
	}
}

function Modulo()
{
	if (num1 >= num2)
	{
		mod = num1 % num2;
		let result = prompt(num1 + " MOD " + num2 + " = ", "");
		if (result == mod)
		{
			alert("YOU ARE CORRECT!");
		}
		else
		{
			alert("INCORRECT. The answer is " + mod);
		}
	}
	else
	{
		mod = num2 % num1;
		let result = prompt(num2 + " MOD " + num1 + " = ", "");
		if (result == mod)
		{
			alert("YOU ARE CORRECT!");
		}
		else
		{
			alert("INCORRECT. The answer is " + mod);
		}
	}
}
