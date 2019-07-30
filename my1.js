console.log("connected16")

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

function LengthEmp()
{
	var a = employee["name"];
	console.log(a);
	console.log(a.length);
}

function AlertEmp()
{
	alert("Name is "+ employee["name"] + ", Job is " + employee["job"] + "age is " + employee["age"]);
}
