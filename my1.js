console.log("connected")

var roster = []
function addNew(){
	var Name = prompt("Add Name")
	roster.push(Name);
	console.log(roster);
}

function RemoveName()
{
	console.log("Current roster is "+ roster)
	var Rname = prompt("Enter Name to be removed");
	var x = roster.indexOf(Rname);
	console.log("index of "+ x);
	console.log("Element is at "+ roster.indexOf(Rname))
	delete roster[indexOf(Rname)]
	console.log(roster)
}

