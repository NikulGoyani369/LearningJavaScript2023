/***************
 * Variable and data type
 */
/*
var firstName = 'Johan';
console.log(firstName);

var lastName = 'Doll';
var age = 25;
console.log(lastName ,' ',+ age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';

console.log(job);

*/

/***************
* Variable mutationn and data coercion



var firsName = 'John';
var age = 26;
console.log(firsName + ' ' + age);


//Type coercion
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firsName + ' is a ' + age  + ' year old ' + job +
            '. Is he married? '  +  isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firsName + ' is a ' + age  + ' year old ' + job +
            '. Is he married? '  +  isMarried);


var lastName = prompt('What is your last Name?');
console.log(firsName + '  ' + lastName);

*/

/**************************
* Basic Operators


var year,yearNirmal,yearNirman;
year = 2020;
ageNirmal = 27;
ageNirman = 26;
//Math operators 
yearNirman = year - ageNirman;
yearNirmal = year - ageNirmal;
console.log(yearNirman);
console.log(yearNirmal);

console.log(year + 3);
console.log(year * 3);
console.log(year / 3);

//Logical operator 
//boolean operator
var nirmalOlder = ageNirman < ageNirmal;

console.log(nirmalOlder);


//typeof operator
console.log(typeof nirmalOlder);
console.log(typeof ageNirman);
console.log(typeof 'I am gunatiti');
var abc;
console.log(typeof abc);

*/

/*********************
* operator precedence ->means priotiry


var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assigments
 var x, y;
x = y  = (3 + 9) * 5 - 6; // 12 * 5 - 6 // 60 - 6 // 54 
console.log(x, y)


// More operators

x *= 2;
console.log(x)
x += 20;
console.log(x)
x /= 2;
console.log(x)
x -= 21;
console.log(x)
x++;
console.log(x)
x--;
console.log(x)
*/

/********************** 
* Coding challenge 1 
 

var markMass, johnMass, markHeight, johnHeight
markMass = 78;
johnMass = 85;
markHeight = 1.78;
johnHeight = 1.95;


var bmiMark = markMass / (markHeight * markHeight);
console.log(bmiMark);


var bmiJohn = johnMass / (johnHeight * johnHeight);
console.log(bmiJohn);



var markHeigherBmi = bmiMark >bmiJohn;
console.log("Is Mark's BMI higher than John's?");
console.log(markHeigherBmi);
*/

/******************
* If / else statements



var firstName = 'Ohhio';
var civilStatus = 'single';


if(civilStatus === 'Married') {
    console.log(firstName  + 'is married with Beuty queen');
} else {
    console.log(firstName + ' will get marrry soon  hope so :). ');
}


var isMarried = true;
if(isMarried) {
    console.log(firstName  + 'is married with Beuty queen');
} else {
    console.log(firstName + ' will get marrry soon  hope so :). ');
}





var markMass, johnMass, markHeight, johnHeight
markMass = 78;
johnMass = 85;
markHeight = 1.78;
johnHeight = 1.95;

var bmiMark = markMass / (markHeight * markHeight);
//console.log(bmiMark);
var bmiJohn = johnMass / (johnHeight * johnHeight);
//console.log(bmiJohn);

if(bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
//var markHeigherBmi = bmiMark >bmiJohn;
//console.log("Is Mark's BMI higher than John's?");
//console.log(markHeigherBmi);
*/

/********************
* boolean logic 
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // between 13 and 20 === age >= 13 AND age < 20
  console.log(firstName + 'is a teenager');  
} else if(age >= 20 && age < 30) {
console.log(firstName + ' is a young man.');
}
else {
    console.log(firstName + ' is a man.');
}

*/

/*******************
 *The Ternary Operator and Switch Statements 


var firstName = 'John';
var age = 12;

// ternary operator
age >= 18 ? console.log(firstName + ' drink  beer.') : console.log(firstName + ' drinks juice.');

 
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


//if (age >= 18) {
//    var drink = 'beer';
//} else {
//    var drink = 'juice';
//}

//Switch statement 

var job = 'insructor';
switch (job) {
    case 'teacher':
    case 'insructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
         console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'desinger':
         console.log(firstName + ' designs beautigul website.');
        break;
    default: 
        console.log(firstName + ' does something else.');
}
 



age = 52;
switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}
 */

/*************************
* Truthy and Flasy values and equality operators



// falsy values: undefined, null, 0, '', NaN(note a number)
// truthy values: NOT falsy values 

var height;
height = 23; 

if(height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

//Equality operators
if(height == '23') {
    console.log('The == operator does type coercion');
}
*/

/******************
 * CODING CHALLENGE 2
 */

/* 
John and mike both play basketboll in different teams. in the latest 3 games, john's team scored 89, 120 and 103 points, while mike's team scored 116, 94 and 123 points.



// 1. Calculate the average score for each team

var johnTeamScore,mikeTeamScore, johnTeamAvrg, mikeTeamAvrg, maryTeamScore, maryTeamAvrg;


johnTeamScore = (109 + 120 + 103);
console.log('John team Score ' +johnTeamScore);

mikeTeamScore = (114 + 94 + 123);
console.log('Mike team Score ' + mikeTeamScore);

maryTeamScore = (93+ 134 + 104);
console.log('Mary team Score ' + maryTeamScore);

johnTeamAvrg = johnTeamScore / 3;
console.log(' John team average ' + johnTeamAvrg);

mikeTeamAvrg = mikeTeamScore / 3;
console.log(' Mike team average ' + mikeTeamAvrg);

maryTeamAvrg = maryTeamScore /3;
console.log(' Mary team average ' + maryTeamAvrg);



if( johnTeamAvrg > mikeTeamAvrg && johnTeamAvrg > maryTeamAvrg) {
    console.log('John Team Win the basketball match  Average is ' + johnTeamAvrg);
}else if(maryTeamAvrg > johnTeamAvrg && maryTeamAvrg > mikeTeamAvrg) {
     console.log('Mary Team Win the basketball match Average is ' + maryTeamAvrg);
} else if (mikeTeamAvrg > johnTeamAvrg && mikeTeamAvrg > maryTeamAvrg){
    console.log('Mike Team Win the basketball match Average is ' + mikeTeamAvrg);
} else {
   console.log('There is a drw'); 
}
*/

/**********************
* Function


function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1985);
var ageSina = calculateAge(1993);
var ageBina = calculateAge(1946);


console.log(ageJohn, ageSina, ageBina);


function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

//    console.log(firstName + ' retires in ' + retirement + ' years.');
    
    
    if( retirement > 0) {
        console.log(firstName + ' retire in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearUntilRetirement(1985 , 'John');

yearUntilRetirement(1993, 'Bina');

yearUntilRetirement(1946, 'Sina');

*/

/***********************
* Function Statement and Expressions


// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function does something which in this case pruduce a string and then returns it.
// function like a machine that receives something then does something with data and give back something diffrent.
// Below is Function Expression example 

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName  + ' driver a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default: 
            return firstName  + ' dose something else Fuck';
    }
}

console.log(whatDoYouDo( 'teacher', 'John'));
console.log(whatDoYouDo( 'driver', 'Jane'));
console.log(whatDoYouDo( 'retired', 'Mark'));



// Function Greeting example
function greet(name, lastName) {
    console.log('Hello my dear Friends ' + name + ' ' + lastName);
}
greet('Nirmal', 'Goyani');
greet('Nirman', 'Mevada');
greet('Harsh', 'Shah');
greet('Vivek', 'patel'); 
*/

/*****************
*Arrays


// Initialize new array

var names = ['Manan', 'Nirdish', 'Parmarth'];
var years = new Array(1989, 1985, 1975);

console.log(names[1]);
console.log(names.length);


//Mutate array data
names[1] = 'Nirdosh';
names[names.length] = 'Manav';
console.log(names);

//Diffrent data types
var john = ['John', 'Smith', 1990, 'teacer', false, 'movie maker'];

//push method new value add krse array ma but last ma new value add karse 
john.push('blue');
console.log(john);
//unshift method array ma new value starting ma add karse
john.unshift('DasNaDas');
console.log(john);


// pop method arraya mathi value remove karse 
john.pop();
console.log(john);

//shift method to remove first value from array
john.shift();
console.log(john);

//indexOf method show us the value that we pass in inside of this array atle kya number ma value store thai che arrya ma 

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('movie maker') === -1 ? 'john is not movie maker' : 'john is movie maker';
console.log(isDesigner); 

*/

/* codding challenge 2 
about to create resturant calculator
*/

function tipCalculator(bill) {
  var percentage;

  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) percentage = 0.15;
  else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

var finalvalue = [bills[0] + tips[1], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(finalvalue);
