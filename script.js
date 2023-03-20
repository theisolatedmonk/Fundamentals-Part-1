/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas")
console.log(23);

let firstName = "Matilda";

console.log(firstName)
console.log(firstName)
console.log(firstName)
console.log(firstName)


let jonas_matilda = 'JM'
let $function = 27;
let person = "Jonas";
let PI = 3.1415

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "teacher";

console.log(myFirstJob)

// Assignment-1


let country = "India";
let continent = "Asia";
let population = 1.4;

console.log(country);
console.log(continent);
console.log(population);

*/

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;
/*
var job = 'prorammer';
job = 'teacher';

lastName = 'Schmrdtmann';
console.log(lastName);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10; //x=x +10
x *= 4; //x=x *4
x++; //x=x +1
x--;
x--;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x=10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageSarah, ageSarah, averageAge);
*/

//Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.


//1.
const mass1 = 78;
const height1 = 1.69;


const marksWeights1 = mass1 / height1 ** 2;
console.log(marksWeights1);


const mass2 = 92;
const height2 = 1.95;
const johnWeights1 = mass2 / height2 ** 2;
console.log(johnWeights1);
const markHigherBMI1 = (marksWeights1 > johnWeights1);
console.log(markHigherBMI1);

//2.
const mass3 = 95;
const height3 = 1.88;
const marksWeights2 = mass3 / height3 ** 2;
console.log(marksWeights2);

const mass4 = 85;
const height4 = 1.76;
const johnWeights2 = mass4 / height4 ** 2;
console.log(johnWeights2);
markHigherBMI2 = (marksWeights2 > johnWeights2);
console.log(markHigherBMI2);