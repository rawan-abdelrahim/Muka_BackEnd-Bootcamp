function DayOfWeek(day)
{
	switch (day){

		case 1:
			console.log("Saturday");
			break;
		case 2:
			console.log("Sunday");
			break;
		case 3:
			console.log("Monday");
			break;
		case 4:
			cosole.log("Tuesday");
			break;
		case 5:
			console.log("Wednesday");
			break;
		case 6:
			console.log("Thursday");
			break;
		case 7:
			console.log("Friday");
			break;
		default:
			console.log("Invalid number! Please enter a number between 1 and 7.");
	}

}

DayOfWeek(5);
