console.log("connected12")

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

function LengthEmp()
{
	var a = employee["name"];
	console.log(a);
	var ln = employee["name"].length();
	console.log("Length is " + ln);
}
