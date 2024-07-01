//1.Declare four variables without assigning values and print them in console
var i;
var j;
var k;
var l;
console.log("i","j","k","l");

//2.How to get value of the variable myvar as output
var myvar=1;
console.log(myvar);

//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname="priya";
var lastname="karth";
var maritalstatus="married";
var country="India";
var age=20;

//4.Declare variables to store your first name, last name, marital status, country and age in a single line
var arr=["priya","karth","married","India",20]

//5.Declare variables and assign string, boolean, undefined and null data types
var name="keshav";
var condition=true;
var z;
var std=null;

//6.Convert the string to integer
//parseInt
var a1="50";
console.log("typeof a1 before conversation:" +typeof a1);
console.log("typeof a1 after conversation:" +typeof parseInt(a1));

//number()
let num = "23";
let n1 = "Manya";

console.log(
    "Type of name and age before conversion: ", 
    typeof num, typeof n1
);

console.log(
    "Type of name and age after conversion: ", 
    typeof Number(num), typeof Number(n1)
);
//plus sign(+)
let size="55";
console.log("tyoeof size before conversion:", typeof(size));
console.log("typeof size after conversion:",typeof(+size));
//Write 6 statement which provide truthy & falsey values.
console.log(Boolean(10>9));
let day="tuesday"
console.log(Boolean(day))
let xyz;
console.log(Boolean(xyz));
let xy = "";
console.log(Boolean(xy));
let zz = -0;
console.log(Boolean(zz));
let yx=10/"hello"
console.log(Boolean(yx));

//Task:2
//1.Square of a number

let number = 5;
let square = number ** 2;

console.log(square)
//2. swapping two numbers

var num1=10;
var num2=20;
console.log(`before swapping:num1=${num1},num2=${num2}`);
var temp=num1;
num1=num2;
num2=temp;
console.log(`After swapping:num1=${num1},num2=${num2}`);
//3.Addition of 3 numbers
let num9=10;
let num8=789;
let num7=87687;
console.log(num9+num8+num7);
//4.Celsius to Fahrenheit conversion
const celcToFahr = (n) =>
  `${n} Celsius is equal to ${(n * 9 / 5) + 32} Fahrenheit.`;

const n = 20;
console.log(celcToFahr(n));
//5.Meter to miles
const kilometers =10000000;
const factor = 0.621371;
const miles = kilometers * factor

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
//6.Pounds to kg
 var pounds =1000000;
  var kilograms = pounds * 0.453592;

console.log("kilograms:",kilograms);
//7.Calculate Batting Average
//Batting average = Number of times the player has scored a hit / Number of official times player is at bat
var Number_of_times_the_player_has_scored_a_hit =5;
var player_is_at_bat=10;
var batting_avg=Number_of_times_the_player_has_scored_a_hit/player_is_at_bat;
console.log("Batting:",batting_avg);

let tamil=88;
let english=90;
let math=99;
let science=82;
let social=99;
let total=tamil+english+math+science+social;
console.log("Average:",total/5);
//9.Power of any number x ^ y.
let n4 = 5

// Power input
let power = 3

// Result variable
let num4 = 1;
for (let i = 0; i < power; i++) {
    num4 = num4* n4;
}

// Display output
console.log(num4);
//10.Calculate simple interest
let P = 1, R = 1, T = 1;
 let SI = (P * T * R) / 100;
 console.log("Simple Interest = " + SI);
 //11.Calculate area of an equilateral triangle
var i,
a1= 20.1;
var area1 =1;
for(i=1;i<=a;i++)
{
 
    area = (1.73*a1*a1)/4
    
}
console.log(Math.round(area1*100)/100);
//12.Area Of Isosceles Triangle
const base = 5;
const height = 10;
const area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

//13.Volume of sphere
const radius = 3;

const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
console.log(
    "Volume of the sphere with radius", radius, "is", volume.toFixed(2));
//15.Volume Of Triangle
const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);
//17.find diameter ,cicumfernce and area of circle area given
const r = 2;
const area1 = Math.PI * Math.pow(r, 2);
console.log(`${area1.toFixed(3)}`);
//18.Given two numbers and perform all arithmethic operation
let z1=10;
let z2=20;
let z3=z1+z2;
let z4=z2-z1;
let z5=z1*z2;
let z6=z1/z2;
let z7=z1%z2;
console.log("addition",z3);
console.log("subtraction",z4);
console.log("Multipication",z5);
console.log("Division",z6);
console.log("modulus",z7);
//Task 3 simple programs todo for condition,looping and array
//1.write a loop that makes seven calls to console.log to output the following triangle
let x=7;
let y=7;
let str3 = "";

for(let i = 1; i <=y; i++ ){
    for(let j = 1; j <= x; j++){
        if(i >= j ){
            str3 = str3.concat("*");
        }
    }
    str3 = str3.concat("\n")
}

console.log(str3);