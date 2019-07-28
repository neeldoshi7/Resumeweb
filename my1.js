var fSName = prompt("Enter First Name ")
var sSName = prompt("Enter Second Name ")

var Age = prompt("Enter Age")
var Height = prompt("Enter height")

var pName = prompt("Enter petname")

if((20<Age<30))
	{
		console.log("working")
	}


if(( fSName[0] === sSName[0] ) && (20<Age<30) && (Height > 170) && (pName[pName.length]==="y" ))
{
	console.log("Attack is tonight");
}
else
{
	console.log("You have been compromised")
}