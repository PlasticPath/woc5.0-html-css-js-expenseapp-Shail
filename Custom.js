function AddValue()
{
	var a=document.getElementById("e1").value;

	var b=document.getElementById("e2").value;
	
	var a2=parseInt(a);
	var b2=parseInt(b);
	document.getElementById("heading").innerHTML=a2+b2;
}


function Reload()
{
	location.reload();
}

function New()
{
	location.reload();
	
}
