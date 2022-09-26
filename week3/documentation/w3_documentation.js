
// Declaring variables:
let variable; // empty variable
let price = 120; // Number variable
let name = "John"; // String variable
let proposition = true; // Boolean variable


// Declaring constants - cant be reasigned, but is muttable, they can be any data type:
const ten = 10; // Number constant


// Sends an alert to the html page:
alert("Your cars extended warranty is expired...");


// Sends a message to the console:
console.log("Hello World!");


// The == vs. === operators:
console.log(1 == 1)    // True 
console.log(1 == '1')  // True
console.log(1 === 1)   // True
console.log(1 === '1') // False


// The != vs. !== operators:
console.log(1 != 1)    // False
console.log(1 !== 1)   // False
console.log('1' != 1)  // False
console.log('1' !== 1) // True
console.log("1" != 1)  // False
console.log("1" !== 1) // True
console.log(0 !=  1)   // True
console.log(0 !== 1)   // True


// Greater than & Less than:
console.log(0 > 1)     // False
console.log(0 < 1)     // True
console.log(0 >= 1)    // False
console.log(0 <= 1)    // True
console.log(0 <= 0)    // True
// Please note that you cannot compare object types in this way.


// If, Else, Else If Statements:
let message = "How do I learn JavaScript?" // (26 Character string)


// If Statement:
if(message.length == 26){
    console.log("The message is 26 characters long")
} 


// If, Else Statement:
if(message.length == 27){
    console.log("The message is 27 characters long")
} else {
    console.log("The message is less or greater than 27 characters long")
}


// If, Else If Statement:
if(message.length < 26){
    alert("Your message is less than 26 characters")
} else if(message.length == 26){
    alert("Your message is exactly 26 characters")
} else if(message.length > 26){
    alert("Your message is greater than 26 characters")
}


// Object.is(value1, value2):   This will help us later when comparing objects
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true


// Switch Statement:
switch(1 + 1) {
    case 1:
      console.log("Case 1, (1)")
      break;
    case 2:
        console.log("Case 2, (2)")
      break;
    default:
        console.log("If no cases apply, this statement runs.")
  }
  

// Arrays:
let numbers = new Array(100, 200, 300);
let names = ["Mark", "Elizabeth", "Adam"];
console.log(names[0]); // This will output: "Mark"
console.log(names[1]); // This will output: "Elizabeth"

names[0] = "James";
console.log(names[0]); // This will output: "James"
console.log(names[0]); // This will output: "Elizabeth"
console.log(names[-1]);// This will output: "Adam"

console.log(names.length); // This will output "3"
console.log(names.sort()); // This will output ["Adam","Elizabeth","James"]

let names2 = ["Ryan", "Maya"];
let allNames = names.concat(names2); // The concat() method concatenates the two arrays into one array
console.log(names2);


// Functions:
// A JavaScript function is a block of code designed to perform a particular task.
function addition(num1, num2){
    summation = num1 + num2;
    return summation;
}

output = addition(5,10);
console.log(output);


// Arrow Functions:
// A JavaScript arrow function is a simpler version of a standard function that condenses your code.
addition2 = (num1, num2) => {return(num1 + num2)};
console.log(addition2(5,10));


// Objects:
let fullName = {firstName:"John", lastName:"Doe"}


// DOM - Document Object Model, You can access the DOM using document.querySelector():
const pageTitle = document.querySelector("h3"); // This will grab the first h3 tag found on the document
console.log(pageTitle); // This will log the following to the console: "<h3 id="title">This is an example HTML document</h3>"

const pageTitle1 = document.querySelector("#title");// This will grab the first element with the css class of 'title' 
console.log(pageTitle);


// We can even call the querySelector on certain elements like so:
const secondh3Tag = container1.querySelector("h3");
console.log(secondh3Tag);


// To get the contents of the element we can call .value:
console.log(pageTitle.value);


// MORE EXAMPLES & IMPLIMENTATION ON ACTUAL WEEK 3 CONTENT...