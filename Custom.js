// function AddValue()
// {
// 	//debugger;
// 	var A1 = document.getElementById("lbl1").innerHTML;
// 	alert(A1);
// 	var A2=parseInt(A1);
	
// 	var B1 = document.getElementById("addvalue").value
// 	alert(B1);
// 	var B2=parseInt(B1);
	
// 	document.getElementById("lbl1").innerHTML = B2+A2;
// 	alert(B2+A2);
// }

function New()
{
	document.getElementById("lbl1").innerHTML="Hi";
}
function AddValue()
{
	var a=document.getElementById("e1").value;

	var b=document.getElementById("e2").value;
	
	var a2=parseInt(a);
	var b2=parseInt(b);
	document.getElementById("heading").innerHTML=a2+b2;
}