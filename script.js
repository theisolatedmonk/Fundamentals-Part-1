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

// let age = 30;
// age = 31;

// const birthYear = 1991;
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


/*
//Coding Challenge #1

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
const markHigherBMI2 = (marksWeights2 > johnWeights2);
console.log(markHigherBMI2);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year -  birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`just a regular string...`);

console.log(`String with \n\
multiple \n\
lines`);

console.log('String with \n\
multiple \n\
lines');
*/

/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license🚗');
} else {
    const yearLeft = 18 - age;
    console.log(` Sarah is too young. Wait another ${yearLeft} years:`);
}


const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Coding Challenge #2

/*
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
const markBMI = massMark / (heightMark ** 2);
const johnBMI = massJohn / (heightJohn ** 2);
if (markBMI > johnBMI) {
    console.log(" Mark's BMI is greater than John's BMI ");
} else {
    console.log(" John's BMI is greater than Mark's BMI ");
}


let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
const markBMI = massMark / (heightMark ** 2);
const johnBMI = massJohn / (heightJohn ** 2);
if (markBMI > johnBMI) {
    console.log(` Mark's BMI (${ markBMI}) is greater than John's (${johnBMI}) BMI `);
} else {
    console.log(` John's (${johnBMI})  BMI is greater than Mark's (${ markBMI})  BMI `);
}

// type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3);
console.log('23' / '2');


let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('you should get a job!');
}


let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFIND')
}
*/

// const age = '18';
// if (age === 18) console.log('You just become an adult:D');

// if (age == 18) console.log('You just become an adult:D');

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);
// 23

// if (favourite === 23) {
//     console.log('Cool! 23 is an amazing number!')

// } else if (favourite == 7) {
//     console.log('7 is also a cool number')

// } else if (favourite == 9) {
//     console.log('9 is also a cool number')
// } else {
//     console.log('Number is2344 not 23 or 7 or 9')
// }

// if (favourite != 23) console.log('Why not 23?');
/*
const hasDriversLicense = true; //A
const hasGoodVision = false; //B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive')
} else {
    console.log('someone else should drive...')
}

const isTired = true; // C
console.log (hasDriversLicense&&hasGoodVision && isTired);
if  (hasDriversLicense&&hasGoodVision &&! isTired){
    console.log('Sarah is able to drive!');
}else{
    console.log('Someone else should drive!');
}
*/

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


//Dolphins score 96, 108 and 89

// const Dscore1 = 96;
// const Dscore2 = 108;
// const Dscore3 = 89;

// const DolphinScoreAvg = (Dscore1 + Dscore2 + Dscore3) / 3
// console.log(DolphinScoreAvg);


// //Koalas score 88, 91 and 110

// const Kscore1 = 88
// const Kscore2 = 91
// const Kscore3 = 110

// const KoalaScoreAvg = (Kscore1 + Kscore2 + Kscore3) / 3
// console.log(KoalaScoreAvg);

// if (DolphinScoreAvg > KoalaScoreAvg) {
//     console.log('Dolphins are winner')
// } else if (DolphinScoreAvg < KoalaScoreAvg) {
//     console.log('Koalas are winner')
// } else if (DolphinScoreAvg === KoalaScoreAvg) {
//     console.log('Both win the trophy');
// }

//Bonus 1

//Dolphins score 96, 108 and 89

// const Dscore1 = 97;
// const Dscore2 = 112;
// const Dscore3 = 101;

// const DolphinScoreAvg = (Dscore1 + Dscore2 + Dscore3) / 3
// console.log(DolphinScoreAvg);


// //Koalas score 88, 91 and 110

// const Kscore1 = 109
// const Kscore2 = 95
// const Kscore3 = 123

// const KoalaScoreAvg = (Kscore1 + Kscore2 + Kscore3) / 3
// console.log(KoalaScoreAvg);

// if (DolphinScoreAvg > KoalaScoreAvg && DolphinScoreAvg >= 100) {
//     console.log('Dolphins are winner')
// } else if (DolphinScoreAvg < KoalaScoreAvg && KoalaScoreAvg <= 100) {
//     console.log('Koalas are winner')
// } else if (DolphinScoreAvg === KoalaScoreAvg && DolphinScoreAvg >= 100 && KoalaScoreAvg <= 100) {
//     console.log('Both win the trophy');
// }else {console.log('Both loss the trophy');}

//Bonus 2

//Dolphins score 96, 108 and 89

// const Dscore1 = 97;
// const Dscore2 = 112;
// const Dscore3 = 101;

// const DolphinScoreAvg = (Dscore1 + Dscore2 + Dscore3) / 3
// console.log(DolphinScoreAvg);


//Koalas score 88, 91 and 110

// const Kscore1 = 109
// const Kscore2 = 95
// const Kscore3 = 126

// const KoalaScoreAvg = (Kscore1 + Kscore2 + Kscore3) / 3
// console.log(KoalaScoreAvg);

// if (DolphinScoreAvg > KoalaScoreAvg && DolphinScoreAvg >= 100) {
//     console.log('Dolphins are winner')
// } else if (DolphinScoreAvg < KoalaScoreAvg && KoalaScoreAvg <= 100) {
//     console.log('Koalas are winner')
// } else if (DolphinScoreAvg === KoalaScoreAvg && DolphinScoreAvg >= 100 && KoalaScoreAvg <= 100) {
//     console.log('Both win the trophy');
// } else { console.log('Both loss the trophy'); }

//switch

// const day = 'wednesday';

// switch (day) {
//     case 'monday':
//         console.log('Plane course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// }

// day = 'tuesday'

// if (day === 'monday') {
//     console.log('Plane course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day');
// }


// turnery operator, coditional operator
// const age = 35;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water ');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);
// // const age = 13;

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);



// console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`);




// //Coding Challenge #4
// // 1.
// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? (15 * bill) / 100 : (20 * bill) / 100;
// console.log('Tip=', tip);

// // 2.

// console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip} `);