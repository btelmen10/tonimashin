var age= +prompt("nasaa oruulnu");
if(age>18){
	console.log("nasand hursen bn");
}else if(age<=3 && age>=0){
	console.log("nylh huuhd");
}else if(age<18 && age>10){
	console.log("zalu huuhd");
}else{
	console.log("nasand huregu bn");
}

var number = +prompt("too oruulnu");
if(number%2==0){
	console.log("tegsh too");
}else{
	console.log("sondgoi too");
}

var number2 = +prompt ("too orulrai")
if(number2<0){
	console.log("surug too");
}else{
	console.log("eyrg too");
}
var today = 2;
switch(today){
	case 5:
		console.log("firday");
		break;
	case 6:
		console.log("saturday");
		break;
	default:
		console.log("not found");
		break;
	case 7:
		console.log("sunday");
		break;
	case 1:
		console.log("monday");
		break;
	case 2:
		console.log("tuesday");
		break;
	case 3:
		console.log("wednesday");
		break;
	case 4:
		console.log("thursday");
		break;
}

var lang = "mongolia";
switch(lang){
	case "english":
		console.log("hello!");
	case "mongolia":
		console.log("sainuu!");
	case "spanish":
		console.log("hola!");
}

var too1 = +prompt("too1 oruulnu!");
var op = prompt("operator oruulnu!");
var too2 = +prompt("too2 orulnu!");
switch(op){
	case "-":
		alert(too1-too2);
		break;
	case "+":
		alert(too1+too2);
		break;
	case "*":
		alert(too1*too2);
		break;
	case "/":
		alert(too1/too2);
		break;
}