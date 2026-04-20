Chapter = 21^25

// Que 1
// let firstName = prompt("Enter the fist name");
// let lastName = prompt("Enter the last name")
// let fullName = firstName + " " + lastName;
// document.writeln("Hello " + fullName + " !")

// Que 2
// let userInfo = prompt("My Favorite phone is");
// let inputLength = userInfo.length;
// document.writeln("My Favorite phone model is:" + " " + userInfo + "</br>" );
// document.writeln("length of a string is " + inputLength);

// Que 3
// let cityName = "Pakistani";
// let find = cityName.indexOf("n");
// document.writeln("index of 'n' is " + find);

// Que 4
// let word = "Hello World"
// let index = word.lastIndexOf("l");
// document.writeln(index);

// Que 5
// let word = "Pakistan"
// let update = word[3];
// document.writeln(update);

// Que 6
// let firstName = "Wajhi";
// let lastName = "Rizvi";
// let fullName = firstName.concat(" " + lastName);
// document.writeln("Hello " + fullName + " !" );

// Que 7
// let city = "Hyderabad";
// let updateCity = city.replace("Hyderabad","Islamabad")
// document.writeln(updateCity);

// Que 8
// let msg = "ALi and Sami are the best friends, they play cricket and football together. ;"
// let updateMsg = msg.replace(/and/g, "&");
// document.writeln(updateMsg);

// Que 9
// let str = "472";
// let num = Number(str);

// document.writeln("Value: " + str + "</br>");
// document.writeln("Type: " + typeof str + "</br>");
// document.writeln("Value: " + str + "</br>");
// document.writeln("Type: " + typeof num);

// Que 10
// let inputInfo = prompt("What's your fav dry fruit?")
// let update = inputInfo.toUpperCase();

// document.writeln(inputInfo + "</br>");
// document.writeln(update);

// Que 11
// let userInput = prompt("What's your language?");
// let cap = userInput.slice(0,1).toUpperCase();
// let nor = userInput.slice(1).toLowerCase();

// console.log(userInput);
// console.log(cap + nor);

// Que 12
// var num = 35.36;
// var str = num.toString().replace(".","");
// console.log(str);
// console.log(typeof str);
// var num2 = parseInt(str);
// console.log(num2);
// console.log(typeof num2);

26^30

// Que 1
// var num = prompt("Enter a positive Integer", "3.45214");

// console.log("number: " + num);
// console.log("round of number: " + Math.round(num));
// console.log("floor value: " + Math.floor(num));
// console.log("Ceil value: " + Math.ceil(num));

// Que 2
// var num = prompt("Enter a negative Integer", "-2.673");
//    console.log("number: " + num);
//    console.log("round of value: " + Math.round(num));
//    console.log("floor value: " + Math.floor(num));
//    console.log("ceil value:"+ Math.ceil(num));

// Que 3
// var num = prompt("Enter a number to find its absolute value");
// num = Number(num);
// var absValue = Math.abs(num);
// console.log("The absolute value of " + num + " is " + absValue);

// Que 4
// let text = "Hello World";

// let lastIndex = text.lastIndexOf("l");

// console.log("String: " + text + "<br>");
// console.log("Last index of 'l': " + lastIndex);

// Que 5
// Que 6
// let randomNum = Math.floor(Math.random () * 100) + 1;
// console.log("Random number between 1 and 100: " + randomNum);

// Que 7
// let userInput = prompt("Enter your weight in kilograms");
// let weight = parseFloat(userInput);
// console.log("The weight of user is " + weight + " kilograms");

// Que 8
// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let userGues = prompt("Enter a number between 1 and 10");

// userGuess = Number(userGues);

// if (userGues === secretNumber) {
//   alert("Congratulations! You guessed the secret number.");
// } else {
//   alert("Try again! The secret number was " + secretNumber);
// }
31^34
// Que 1
// var currentDate = new Date();
// document.write(currentDate); 

// Que 2
// var months = ["January", "February", "March", "April", "May", "June",
//               "July", "August", "September", "October", "November", "December"];

// var currentDate = new Date();
// var monthIndex = currentDate.getMonth(); 
// var currentMonth = months[monthIndex];

// alert("Current month: " + currentMonth);

// Que 3
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var currentDate = new Date();
// var dayIndex = currentDate.getDay(); 
// var currentDay = days[dayIndex];

// alert("Today is " + currentDay);

// Que 4
// var currentDate = new Date();
// var day = currentDate.getDay(); 

// if (day === 0 || day === 6) {
//     document.write("It's Fun day");
// }

// Que 5
// var currentDate = new Date();
// var date = currentDate.getDate(); 

// if (date < 16) {
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }

// Que 6
// var d = new Date();
// var millisecondsSince1970 = d.getTime(); 
// var minutesSince1970 = millisecondsSince1970 / (1000 * 60); 

// document.write("Current Date: " + d + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millisecondsSince1970 + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + minutesSince1970);

// Que 7
// var currentDate = new Date();
// var hours = currentDate.getHours(); 

// if (hours < 12) {
//     alert("Its AM");
// } else {
//     alert("its PM");
// }

// Que 8
// var laterDate = new Date(2020, 11, 31); 
// document.write("Later date: " + laterDate);

// Que 9
// var ramadanDate = new Date(2015, 5, 18); 
// var currentDate = new Date(); 

// var timeDiff = currentDate.getTime() - ramadanDate.getTime();

// var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// alert(daysPassed + " days have passed since 1st Ramadan, 2015");

// Que 10
// var beginningOf2015 = new Date(2015, 0, 1); 
// var referenceDate = new Date(2015, 11, 5, 22, 50, 16); 

// var timeDiff = referenceDate.getTime() - beginningOf2015.getTime();

// var secondsElapsed = Math.floor(timeDiff / 1000);

// document.write("On reference date " + referenceDate + ", <br>");
// document.write(secondsElapsed + " seconds had passed since beginning of 2015");

// Que 11
// var currentDate = new Date();
// document.write("current date: " + currentDate + "<br>");

// var hours = currentDate.getHours();

// currentDate.setHours(hours + 1);

// document.write("1 hour ahead, it was " + currentDate);

// Que 12
// var currentDate = new Date();
// document.write("current date: " + currentDate + "<br>");

// var currentYear = currentDate.getFullYear();

// currentDate.setFullYear(currentYear - 100);

// alert("100 years back, it was " + currentDate);

// Que 13
// var age = prompt("Enter your age:");

// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();

// var birthYear = currentYear - age;

// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + birthYear);

// Que 14
// var customerName = "ABC Customer";
// var units = 410;
// var chargesPerUnit = 16;


// var months = ["January", "February", "March", "April", "May", "June",
//               "July", "August", "September", "October", "November", "December"];


// var currentDate = new Date();
// var currentMonth = months[currentDate.getMonth()];

// var netAmount = units * chargesPerUnit; 
// var lateSurcharge = 350;
// var grossAmount = netAmount + lateSurcharge; 

// netAmount = netAmount.toFixed(2);
// grossAmount = grossAmount.toFixed(2);
// lateSurcharge = lateSurcharge.toFixed(2);

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Current Month: " + currentMonth + "<br>");
// document.write("Number of units: " + units + "<br>");
// document.write("Charges per unit: " + chargesPerUnit + "<br><br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
// document.write("Late Payment Surcharge: " + lateSurcharge + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount);

35^38

// Que 1
// function showDateTime() {
//     var now = new Date();
//     document.write(now);
// }
// showDateTime();

// Que 2
// function greetUser() {
//     var firstName = prompt("Enter first name:");
//     var lastName = prompt("Enter last name:");
//     var fullName = firstName + " " + lastName;
//     document.write("Hello, " + fullName + "! Welcome");
// }
// greetUser();


// Que 3
// function addNumbers() {
//     var num1 = +prompt("Enter first number:");
//     var num2 = +prompt("Enter second number:");
//     var sum = num1 + num2;
//     document.write("Sum of " + num1 + " and " + num2 + " is " + sum);
//     return sum;
// }
// addNumbers();

// Que 4
// function calculator(num1, num2, operator) {
//     var result;
//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "/") {
//         result = num1 / num2;
//     } else {
//         result = "Invalid operator";
//     }
//     document.write("Result: " + result);
//     return result;
// }

// calculator(5, 3, "+"); 

// Que 5
// function square(num) {
//     var result = num * num;
//     document.write("Square of " + num + " is " + result);
//     return result;
// }
// square(5);

// Que 6
// function factorial(num) {
//     var fact = 1;
//     for (var i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     document.write("Factorial of " + num + " is " + fact);
//     return fact;
// }
// factorial(5); 

// Que 7
// function counting() {
//     var start = +prompt("Enter start number:");
//     var end = +prompt("Enter end number:");
    
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting();

// Que 8


// Que 9
// function areaRectangle(width, height) {
//     var area = width * height;
//     document.write("Area: " + area);
//     return area;
// }

// areaRectangle(5, 10); 

// Que 10
// function isPalindrome(str) {

//     var cleanStr = str.toLowerCase().replaceAll(" ", "");

//     var reversedStr = cleanStr.split("").reverse().join("");

//     if (cleanStr === reversedStr) {
//         document.write(str + " is a Palindrome");
//         return true;
//     } else {
//         document.write(str + " is not a Palindrome");
//         return false;
//     }
// }

// isPalindrome("madam"); 
// isPalindrome("hello"); 

// Que 11
// function titleCase(str) {
  
//     var words = str.split(" ");

//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }

//     var result = words.join(" ");
//     document.write(result);
//     return result;
// }

// titleCase("the quick brown fox"); 

// Que 12
// function longestWord(str) {
  
//     var words = str.split(" ");
//     var longest = "";

//     for (var i = 0; i < words.length; i++) {
        
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }

//     document.write("Longest word: " + longest);
//     return longest;
// }

// longestWord("Web Development Tutorial"); 

// Que 13
// don"t know how to do this one