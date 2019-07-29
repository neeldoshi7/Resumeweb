console.log("connected5")

function caught_speeding(speed, is_birthday){
 	var ticket = null
 	if(is_birthday==true)
 	{
 		if(speed<=65)
 		{
 			return ticket=0
 		}
 		else if(speed>65 && speed<=85)
 		{
 			return ticket=1
 		}
 		else
 		{
 			return ticket=2
 		}
 	}
 	else
 	{
 		if(speed<=60)
 		{
 			return ticket=0
 		}
 		else if(speed>60 && speed <=80)
 		{
 			return ticket=1

 		}
 		else
 		{
 			return ticket=2
 		}
 	} 
 	console.log(ticket);
}