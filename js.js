// // // // var name = 'john';
// // // // var age = 33;
// // // // console.log(name + age)
// // // // console.log(age + age)

// // // // var job, is_married;
// // // // console.log(job)

// // // // job = 'teacher';
// // // // is_married = false;
// // // // console.log(name + ' is a ' + age + ' years old ' + job + ' is he married? ' + is_married + ' .');
// // // // // CHANGING THE VALUE OF A VARIABLE IS CALLED
// // // // // VARIABLE MUTATION.

// // // // age = 'thirty six';
// // // // job = 'driver';
 
// // // // console.log(name + ' is a ' + age + ' years old ' + job + '. is He Married ' + is_married + ' .');

// // // // var name = prompt('what is ur lastname ?');
// // // // console.log(name);


// // // // alert(name + ' is a ' + age + ' years old ' + job + '. is He Married ' + is_married + ' .')



// // // //OPERATORS
// // // var now = 2016;
// // // var bday = now - 26;
// // // byear = now - 26 *2;
// // // console.log(byear);

// // // var ageJohn = 30;
// // // var ageSk = 40;
// // // ageJohn=ageSk=(3+5) * 4-5;
// // // //ageJohn = ageSk = 27
// // // // ageJogn==hn = 26
// // // ageJohn++;
// // // ageSk *= 2
// // // console.log(ageJohn); 
// // // console.log(ageSk);

// // // IF ELSE STATEMENT
// // var name = 'sk';
// // var ageSk = 22;
// // var is_married = 'Yes';

// // if (is_married === 'yes') {
// // 	// if false
// // 	console.log(name + ' is married!');
// // } else {
// // 	console.log(name + ' will hopefully marry soon :)');
// // }


// // is_married = true;
// // if (is_married) {
// // 	console.log('yes!');
// // } else{
// // 	console.log('NO!');
// // }

// // if (is_married) {
// // 	console.log('yes!');
// // }

// // // (=== this is a comparison operator whioch is good)
// // if (23 === '23') {
// // 	console.log('something to protn');
// // }

// // BOOLEAN LOGIC AND SWITCH
// var age = 78;
// if (age <= 30) {
// 	console.log('john is a teenager');
// } else if (age > 20 && age < 30) {
// 	console.log('Joh  is a yung maaaaaaaaaaaaan');
// } else {
// 	console.log('john is a man');
// }


// CODING CHALLENGE
///
// players height
// var johnHeight = prompt(integer('Heloo --- '));
// var markHeight  = int(prompt('Heloo --- '));
// // players age
// var johnAge = prompt();
// var markAge = prompt();
// // player with d heighest value of height
// // john = 10/ plus (age*5) will WIN*********

// // SCORE
// var johnScore = johnHeight + 5 * johnAge;
// var markScore = markHeight + 5 * markAge;
// // johnMarkdraw = johnScore + markScore
// if (johnScore > markScore) {
// 	console.log('John Wins this silly Game by Udemy' + johnScore);
// } else if(markScore > johnScore) {
// 	console.log('Mark Wisn this silly by ' + markScore)
// } else if (johnScore === markScore) {
// 	console.log('They played draw')
// }

// // var y = prompt('add')
// // var yh = prompt('minus')
// // add = y + yh
// // console.log(add)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++_
// FUNCTIONS
// function calAge (yearOfBirth) {
// // body...
// 	var age = 2016 - yearOfBirth;
// 	return age;
// }

// var ageJohn = calAge(1994);
// var ageMike = calAge(1960);
// var ageNur = calAge(1948);
// // console.log(ageNur);
// // functiona cal call another functions

// function yearsOfRetirement (name, year) {
//  	// body...
//  	var age = calAge(year);
//  	var retirement = 65 - age;
//  	if (retirement >= 0) {
//  		console.log(name + ' retires in ' + retirement + ' years.');
// 	} else {
// 		console.log(name + ' is already retired.');
// 	}
// }

// yearsOfRetirement('john', 1990);
// yearsOfRetirement('Mike', 1994);
// yearsOfRetirement('mary', 1948);

// // FUNCTION STATEMENT
// function someFun (parentheses) {
// 	// body...
// }

// var someFunctions = function(parentheses) {
// }
// // functions expressions - this proiduces a value or output
// 3 + 4;
// var x= 3;

// // statements dont bring an immei=diate value or output ;
// // this just perform some actions
// if (x===5) {
// 	// do something here
// };

// UDEMY ARRAYS+++++++++++++++++++_+))))))+)_+)_+_
// var names = ['john', 'Jane', 'mark'];
// var years = [1990, 1969, 1948];
// console.log(names);
// //  change values or mutates in arrays
// names[1] = 'Ben';
// console.log(names);

// var john   = ['John', 'Smith', 1990, 'teacher', false];
// // PUSH is a builtIN --method add an
// // selements at d end of an array
// john.push('Blue');
// john.unshift('Mr.');
// john.pop();
// john.shift();
// john.shift([2]);


// console.log(john);

//OBJECTS / methods
// to give a member a name; u use an objects;
// group them together
/* var john = {
	name: 'john',
	lastName: 'Ajayi',
	yearOfBirth: '1990',
	job: 'programmer',
	is_married: 'false',
	family: ['jane', 'mark', 'bob'],
	calAge: function() {
		// body...
		// return 2016 - yearOfBirth;
		return 2016 - this.yearOfBirth;
	}
};
*/
// console.log(john.calAge());

// var age = john.calAge();
// john.age = age;
// console.log(john);

// // DATAMUTATION ====
// // DOTNOTATION/SQUARE NOTATION

// // to read a value from objects
// // use dotNotation.
// console.log(john.lastName);
// // OR use squareBracket
// console.log(john['lastName']);

// var xyz = 'job';
// console.log(john[xyz]);

// // change john last name
// john.lastName = 'Miller';
// john['job'] = 'ddeveloper';
// console.log(john);

// var jane n= new objects();
// jane.name = 'jane';


// // OBJECTS CONTINUED
// var john = {
// 	name: 'john',
// 	lastName: 'Ajayi',
// 	yearOfBirth: '1990',
// 	job: 'programmer',
// 	is_married: 'false',
// 	family: ['jane', 'mark', 'bob'],
// 	calAge: function() {
// 		// body...
// 		// return 2016 - yearOfBirth;
// 		// return 2016 - this.yearOfBirth;
// 		this.age = 2016 - this.yearOfBirth;
// 	}
// };


// FOR LOOP
// var name = ['sk', 'nu', 'ak', 'aj', 'kb'];
// for (var na = 0; na < name.length; na++) {
// 	console.log(name[na]);
// }

// var name = ['sk', 'nu', 'ak', 'aj', 'kb'];
// for (var na = name.length - 1; na >= 0; na--) {
// 	console.log(name[na]);
// }

// WHILE LOOP
// var i = 0;
// while (i < name.length) {
// 	console.log(name[1]);
// // 	i++;
// // }

// // CODING CHALLENGE UDEMY TWO
// var pYear = [2001, 2002, 2003, 2004];
// var empArr = [];

// for (var i = 0; i < pYear.length; i++) {
// 	 empArr[i] = 2018 - pYear[i];
// 	 // console.log(persons[i]);
// 	 // console.log(empArr)
// };

// for (i = 0; i < empArr.length; i++){
// 	if (empArr[i] >= 18) {
// 		console.log('Person is ' + empArr[i] + 'years old, and is of FULL Age')
// 	} else {
// 		console.log('Person is ' + empArr[i] + 'Years Old, and NOT ful age')
// 	}
// }

// function printFullAge (pYear) {
// 	// body...
// 	var empArr = [];
// 	var fullAge = [];

// for (var i = 0; i < pYear.length; i++) {
// 	 empArr[i] = 2018 - pYear[i];
// 	 // console.log(persons[i]);
// 	 // console.log(empArr)
// };

// for (i = 0; i < empArr.length; i++){
// 	if (empArr[i] >= 18) {
// 		console.log('Person is ' + empArr[i] + 'years old, and is of FULL Age');
// 		fullAge.push(true);
// 	} else {
// 		console.log('Person is ' + empArr[i] + 'Years Old, and NOT ful age');
// 		fullAge.push(false);

// 	}
// }
// }

// return fullAge;

// WORKING WITH THE DOM
// WORKING WITH HTML AND CSS WITH JS
// firstly, 
// declare all ur variables like dis
// var myVariableName, Variable_name, third_variable etc...
// myVariableName = (['hahah', 'heloo' etc])
// variable_name = [gscvnbn, syghnd]

// random - this brings up any number
// floor - function is used to round up a decimal number
// -----The floor() method rounds a number DOWNWARDS 
// to the nearest integer, and returns the result.



// document.getElementBy('p').innerHTML = "nEW nAVbAR";


// https://youtu.be/xoTyrdT9SZI

// fun


// function changeText(h1) {
// 	h1.innerHTML = '';
// }

// document.getElementsByTagName("h2").innerHTML = "WELCOME";
// // var x = document.getElementsByTagName("h1").innerHTML = "GOOOOOOOOOOOOOOO"
// // var x = 15 * 5;
// // document.getElementById("demo").innerHTML = x;
// var x = document.getElementById("main");
// var y = x.getElementsByTagName("p");
// document.getElementById("demo").innerHTML='The first par insidee "main" is ' + y[0].innerHTML;


// for (var i = 0; i <= 2; i++) {
// 	alert(i);
// }

// function printAmount(){
// 	console.log(amount.toFixed(2));
// }


// SCRATCH PAD

// var a = 'hello Dhikrullah';
// function b(){
// 	console.log('called b');
// }

// b();
// console.log(a);

// var a;
// console.log(a);
// if (a === undefined) {
// 	console.log('a is undefined');
// } else{
// 	console.log('a is defined');
// }

// WRITE a code to calculate
// the highest gp of student in 5courses
// where a = 70-100marks and above,
// b= 60-69, c= 50-59, d=45-49, e=40,f=0-34 
// maths,eng,phy,chem,bio

// var name; //declare the variables o=to be used later
// var department;
// var math_score;
// var phy_score;
// var eng_score;
// var chem_score;
// var bio_score;
// var studentScore;
// var total_score;
// // get the scores of each course
// name = prompt('Students Name');
// department = prompt('Departments Name');
// math_score = Number(prompt('Mathematics Score'));
// eng_score = Number(prompt('English Score'));
// phy_score = Number(prompt('Physics Score'));
// chem_score = Number(prompt('Chemistry Score'));
// bio_score = Number(prompt('Biology Score'));
// total_score = 100;
// // add/sum up the whole courses score and devide by
// // total number of course taken
// // lets store d score in studentScore
// studentScore = math_score + phy_score + eng_score + chem_score + bio_score / total_score;
// //lets check d score
// if (studentScore >= 70 && studentScore <=100) {
// 	console.log('Welcome \'' + name + '\' CONGRATS!!! You have "A" with the overall score of' + Number(studentScore))
// } else if (studentScore >=60 && studentScore <=69) {
// 	console.log('Welcome \'' + name + '\' NICE!!! you have "B" with the overall score of' + Number(studentScore))
// } else if (studentScore >= 50 && studentScore <= 59) {
// 	console.log('Welcome \'' + name + '\' BETTER!!! you have "C" with the overall score of' + Number(studentScore))
// } else if (studentScore >= 45 && studentScore <= 49) {
// 	console.log('Welcome \'' + name + '\' IMPROVE!!! you have "D" with the overall score of' + Number(studentScore))
// } else if (studentScore >= 40 && studentScore <= 44) {
// 	console.log('Welcome \'' + name + '\' UNFAIR!!! you have "E" with the overall score of' + Number(studentScore))
// } else{
// 	alert('Welcome \'' + name + '\' OLOOODO!!! you have "F" with the overall score of' + Number(studentScore))
// };

// var f;
// var s;
// f = Number(prompt());
// s = Number(prompt());
// alert(f+s);

// function b(){
// 	var myVar;
// 	console.log(myVar);
// }

// function a(){
// 		var myVar = 2;
// 		console.log(myVar);
// 		b();
// }

// var myVar = 1;
// console.log(myVar);
// a();

/*
a = {b: "c"};
console.log(typeof a);
a = null;
console.log(a);

var abj = {
	address: 'garki',
	add_two: 'wuse!!! let\'s see now',
	add_three: "gwaeampa"
};

console.log(abj.add_two);

var obj = {
	a: 'helooo',
	b: 43
};

var b = ('a')
console.log(obj[b]);
console.log(obj[a]);

var idcard = [{
	firstName: 'Sikiru',
	lastName: 'Ajayi',
	matricNo: 'eksu/r/la/12/0314',
	idNo: 0314
}];

// console.log(obj[0]);
// console.log(firstName);

var arr = [
'heloo',
'welcome Number 234',
4566,
]
console.log(arr[2])

document.write(arr[1].toUpperCase());
// ---------------------------------------
// SURAH BAQARAH(286 and we made you all a middle nation 286in total/2 = 143 ayah)
// ---------------------------------------
function floo(){
	// body...
	let a = 1;
	if (a >= 1) {
		let b = 3;
		while (b < 5){
			let c = b * 2;
			b++

			console.log(a + c);
		}
	}
}
 floo();
 */
// ================ IF ELSE IF
// when u want to check for  ultiple conditions
// var monthlyClearance = prompt("W? ");
// var totalClearance = "12";
// var stateCode = prompt("Welcome Corper! <br >What is your state code? ");
// var present = true;
// var absent = false;
// if (stateCode ) {} else{};

// var monthlyClearance = prompt("Welcome, please provide your clearance month..."); //asks d user for d present month
// var totalClearance = 12; //set d whole month

// //check if the present month is upto the passingout month
// if (monthlyClearance < totalClearance ) {
// 	alert('Please, take chill, some month left, but POP Loading...');
// } else if (monthlyClearance == totalClearance) {
// 	alert("Congratulobia, SERVICE DONE!!!")
// } else {
// 	document.write('YOU ARE STILL SERVING')
// };


// var chh = 'see';
// console.log(typeof(chh));
// console.log(chh.length);
// console.log(chh.value);
// function checkData(){
// 	if (chh.length == 4) {
// 		console.log('Yeah');
// 	} else{
// 		alert('Enter exactly three characters. ' + chh.value + ' is not Valid');
// 		return false;
// 	};

// };

// checkData();



// get the submit button and click on it to check for product
document.querySelector('button').addEventListener('click', function(e) { 
	// alert('helo you clicked me!');
	//this takes value frrom user
	user_input = document.getElementById('product_name').value;
	// this shows the feedback after submitting
	var res = getProductQuantity(user_input);
	result = document.getElementById('result').innerHTML = res;
	//initializing the clear user input function value in the text box after submitting
	clearUserInput();
	e.preventDefault();
});


// clear user input function
function clearUserInput(){
	return document.getElementById('product_name').value = '';
}

// declare d function and put switch case inside
function getProductQuantity(fruittype){
	var result = '';
	switch (fruittype) {
		case 'Oranges':
			result = 'Oranges are Available';
			break;
		case 'Apples':
			result = 'Apples are available';
			break;
		case 'Bananas':
			result = 'Bananas are available';
			break;
		case 'Papaya':
			result = 'Papayas are available';
			break;
		default:
			result = 'Sorry we are out of ' + fruittype + ' ooo.'
	}
	// console.log(result);
	return result;
	// alert('anything else u had like?');
}




