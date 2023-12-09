  function Num(val){
     document.getElementById('result').value += val;
  }
  function equal(){
    let Input = document.getElementById('result').value;
    let Output = eval(Input);
    document.getElementById('result').value = Output;
  }

  function clr(){
    document.getElementById("result").value="";
}

// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

// var geek = [[],[],[]];

// 2. Declare and initialize a multidimensional array representing the following matrix:

// var geek = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for(let i= 0; i<geek.length; i++){

//   for(let j = 0; j<4; j++){
//     document.write(geek[i][j] + " ")
//   }
//   document.write( "<br> ")
// }

// 3. Write a program to print numeric counting from 1 to 10.

// for(let i= 1; i<=10; i++){

//   document.write( i+"<br> ")
// }

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// let table = +prompt("Enter a Number to Show Multiplication Table")
// let length = +prompt("Enter a Number to Show Multiplication Table")
// for(let i= 1; i<=length; i++){

//   document.write( table+" x "+ i+" = "+ table*i+"<br>")
// }

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(let i =0; i<fruits.length; i++){
//   document.write(fruits[i]+"<br>")
// }
// document.write("<br>")
// fruits.forEach(function(value,index){
//   document.write( "Element at index "+index+" is "+ value+"<br>")

// })

// 6. Generate the following series in your browser. See example output. a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// var heading = "<h2>Counting</h2>"
// document.write(heading)
// var counting = 15;
// for(let i =1; i<=counting; i++){
//   document.write(i+" , ")
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// var heading = "<h2>Reverse Counting</h2>"
// document.write(heading)
// var counting = 1;
// for(let i =15; i>=counting ; --i){
//   document.write(i+" , ")
// }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// var heading = "<h2>Even</h2>"
// document.write(heading)
// var even = 20;
// for(let i =0; i<=even ; i+=2){
//   document.write(i+" , ")
// }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// var heading = "<h2>Odd</h2>"
// document.write(heading)
// var even = 20;
// for(let i =1; i<=even ; i+=2){
//   document.write(i+" , ")
// }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var heading = "<h2>Series</h2>"
// document.write(heading)
// var series = 20;
// for(let i =2; i<=series ; i+=2){
//   document.write(i+"k, ")
// }

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

// var order = prompt("Welcome to Paradise Bakery. What do you want to order sir/ma'am?")
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]

// if(a.includes(order))

// document.write(order+ " is Available at index "+a.indexOf(order)+" in our bakery  "+ "<br>")

// else
// document.write("We are sorry "+order +" is not available in our bakery")

// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

// var a =[24, 53, 78, 91, 12];
// var largestNumber = a[0]

// for(let i =0; i<a.length; i++){
//   if(a[i]>largestNumber){
//     largestNumber = a[i];
//   }
// }
// document.write(a+"<br>"+"The largest number in the array is: " + largestNumber)

// 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

// var a =[24, 53, 78, 91, 12];
// var smallest = a[0]

// for(let i =0; i<a.length; i++){
//   if(a[i]<smallest){
//     smallest = a[i];
//   }
// }
// document.write(a+"<br>"+"The smallest number in the array is: " + smallest)

// 10. Write a program to print multiples of 5 ranging 1 to 100.

// var number= 100;
// for(let i = 5;i<=number; i+=5){
//   document.write(i+", ")
// }

// Assignment # 21-25 JAVASCRIPT

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("First Name");
// var lastName = prompt("Last Name");
// var fullName = firstName+lastName;

// document.write("Hello "+fullName+" Welcome")

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// var str = prompt("Your Favorite Mobile Phone Model")
// var strLength = str.length;
// document.write(str+ "<br>"+ "Length Of String: "+strLength)

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

// var str = prompt("Pakistan");
// var str1 = str.indexOf(prompt("Enter a 1 character will tell you the number of index"))
// document.write("String: "+ str+ "<br>"+ "Index of Character:  "+str1  )

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var str = "Hello World";
// var str1 = str.lastIndexOf("l")
// document.write("String: "+ str+ "<br>"+ "Last Index of Character:  "+str1  )

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var str = "Pakistani";
// var str1 = str.charAt(3)
// document.write("String: "+ str+ "<br>"+ "The character at 3rd  index is  :  "+str1  )

// 6. Repeat Q1 using string concat() method.

// var firstName = "John";
// var lastName = "Wick";

// document.write(firstName+" "+lastName)

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city = "City: Hyderabad";
// var afterReplacement = city.replace("City: Hyderabad"," Islamabad");

// document.write(city+"<br>"+"After Replacement:"+afterReplacement)

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var replace = message.replace(/and/g, "&")
// // Display the result in the browser
// document.write("<p>Original Message: " +"<br>"+ message + "</p>");
// document.write("<p>Modified Message: " +"<br>"+ replace + "</p>");

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var value = "472";
// var  type = typeof(value)
// var number = Number(value)
// var type1 = typeof(number)

// document.write("Value: "+value+"<br>"+"Type: "+type+"<br>"+"Value: "+number+"<br>"+"Type: "+type1)

// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var user = prompt("Covert Lower Case to Upper Case")
// var upperCase = user.toUpperCase();
// document.write("User Input: "+user+ "<br>"+"Upper Case: "+upperCase)

// 11. Write a program that takes user input. Convert and show the input in title case.

// var user = prompt("Convert Lower Case to Upper Case")
// var convert = user.charAt(0);
// var upperCase = convert.toUpperCase();
// document.write("User Input: "+user+ "<br>"+"Upper Case: "+upperCase)

// 12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// var str = num.toString().replace(".", "");
// document.write("Number: "+num +"<br>"+"Result: "+str)

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// function validateUsername() {
//     // Get user input for the username
//     var username = prompt("Please enter your username:");

//     // Check if the username contains any special symbols
//     if (/[,@.!]/.test(username)) {
//         alert("Invalid username. Please enter a username without special symbols [@ . , !]");
//     } else {
//         alert("Username is valid: " + username);
//     }
// }

// // Call the validation function when the page loads (for demonstration)
// validateUsername();

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// var order = prompt("Welcome to Paradise Bakery. What do you want to order sir/ma'am?")
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]

// if(a.includes(order))

// document.write(order+ " is Available at index "+a.indexOf(order)+" in our bakery  "+ "<br>")

// else
// document.write("We are sorry "+order +" is not available in our bakery")

// Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// function validatePassword() {
// Get user input for the password
//   var password = prompt("Enter a password:");

//   // Check if the password meets the requirements
//   if (
//       password.length >= 6 &&
//       /[a-zA-Z]/.test(password) &&     // Contains at least one alphabet
//       /[0-9]/.test(password) &&        // Contains at least one number
//       !/[0-9]/.test(password[0])       // Does not start with a number
//   ) {
//       alert("Password is valid.");
//   } else {
//       alert("Invalid password. Please enter a valid password that meets the requirements.");
//   }
// }

// // Call the validation function when the page loads (for demonstration)
// validatePassword();

// Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.

// // Define the string
// var university = "University of Karachi";

// // Split the string into an array using space as the delimiter
// var universityArray = university.split(" ");

// // Display the elements of the array in the browser
// document.write("<p>Original String: " + university + "</p>");
// document.write("<p>Array Elements:</p>");
// document.write("<ul>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write("<li>" + universityArray[i] + "</li>");
// }
// document.write("</ul>");

// 17. Write a program to display the last character of a user input

//18 You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// // Define the input string
// var inputString = "The quick brown fox jumps over the lazy dog";

// // Convert the input string to lowercase to make it case-insensitive
// var lowercaseString = inputString.toLowerCase();

// // Define the word to search for
// var wordToSearch = "the";

// // Use regular expressions to count occurrences of the word
// var wordCount = (lowercaseString.match(new RegExp("\\b" + wordToSearch + "\\b", "g")) || []).length;

// // Display the result in the browser
// document.write("<p>Input String: " + inputString + "</p>");
// document.write("<p>Occurrences of '" + wordToSearch + "': " + wordCount + "</p>");

// var user = prompt("Enter Name");
// // var text = user.title();
// document.write("User Input: " + user + "<br>" + "Upper Case: " );















              
   //  Assignment 26 to 30
      //  Task 1
// let user = +prompt("Enter Positive Number")

//   if( user >=0){
//     document.write("Number: "+user +"<br>"+"Round off value of the number: "+Math.round(user)+"<br>"+ "Floor value of the number: "+Math.floor(user)+"<br>"+"Ceil value of the number: "+Math.ceil(user))
//   }

      //  Task 2
// let user = +prompt("Enter Positive Number")

//   if( user <=-1){
//     document.write("Number: "+user +"<br>"+"Round off value of the number: "+Math.round(user)+"<br>"+ "Floor value of the number: "+Math.floor(user)+"<br>"+"Ceil value of the number: "+Math.ceil(user))
//   }

    //  Task 3


// let user = +prompt("Enter Number")
//     document.write("Absolute value of : "+user+" is "+ Math.abs(user))

            // Task 4

// let round = Math.round(Math.random()* 6);
// let round1 = Math.round(Math.random()* 6);
//     document.write("Random dice value : "+round+"<br>"+ "Random dice value : "+round1)

            // Task 5

// let round = Math.round(Math.random()*2);

// if(round <2 && Math.random()>1 ){
//       document.write(round+"<br>"+"Random coin value : Heads ")
// }
// else
// document.write(round+"<br>"+"Random coin value : Tails ")


            // Task 6

      // let round = Math.round(Math.random()*100);
      //  document.write("Random number between 1 and 100: "+round)




// Task 8

// let user = +prompt("Enter a number between 1 and 10")
// let random = Math.round(Math.random()*10)
// let result = random;

// if(user === result){

//   document.write("Rondome Number: "+random+"<br>"+"Congratulation your number: "+user+" is Matched")
// }else
// document.write("Rondome Number: "+random+"<br>"+"Sorry your number "+user+" is not match please try again")  

                  // task 1

// let tarikh = new Date()
// document.write(tarikh)

               // Task 2
      
// let tarikh = new Date()
// let day = tarikh.getDay()
// document.write(getMonthName(day))
// function  getMonthName(monthnumber){
//       let monthName = ["Jauary","Februry"," March","April","May","Jun","July","August","September","October","November","December"]
//       return monthName[monthnumber]
      
// }

                  // Task 3
      
// let tarikh = new Date()
// let day = tarikh.getDay()
// document.write(getDayName(day))
// function  getDayName(daynumber){
//       let dayName = ["Sunday","Monday"," Tuesday","Wednesday","Thursday","Friday","Saturday"]

//       return dayName[daynumber]
// }

                  //   Task 4

// let date = new Date();
// let week = date.getDay();

// if(week ===6 ||week ===0){
//       alert("Its Fun Day")
// }else
// alert("Its Not Fun Day")


                  //   Task 5

// let date = new Date();
// let month = date.getDay();

// if(month<=15){
//       document.write("First fifteen days of the month")
// }else
// alert("“Last days of the month”.")


            // Task 6
 
// var currentDate = new Date();
// var minutesSinceEpoch = (currentDate.getTime() - currentDate.getTimezoneOffset() * 60000) / 60000; 
// document.write("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);

                  //   Tassk 7

// let currentTime = new Date();
// let currentHour = currentTime.getHours();
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

                  //    Task 8
            
//  var laterDate = new Date(2020, 11, 31, 23, 59, 59);
//   document.write(laterDate);

            //     Task 9


// var ramadanStartDate = new Date(2015, 5, 18); 
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// document.write("Number of days passed since 1st Ramadan , 2015: " + daysPassed);

            //   Task 10
            
//             var startDate = new Date();
// let refernceDate = new Date(2015,11,5,22,50,16)
// var timeDifference = startDate - refernceDate;
// var secondsElapsed = timeDifference / 1000;
// document.write("On reference date: " + refernceDate + "<br>" + secondsElapsed +" Seconds elapsed between the reference date and the beginning of 2015")

            //   Task 11

// let currentDate = new Date();
// let refernceDate = new Date(2023,9,6,6,48)
// document.write("Current date: " + currentDate + "<br>" +" 1 hour ago,it was "+ refernceDate)

//   Task 12

// // Create a Date object for the current date
// var currentDate = new Date();

// // Calculate the date 100 years ago by subtracting 100 years worth of milliseconds
// var date100YearsAgo = new Date(currentDate);
// date100YearsAgo.setFullYear(currentDate.getFullYear() - 100);

// // Display the date 100 years ago in an alert box
// alert("Date 100 years ago was: " + date100YearsAgo.toDateString());

                  // Task 13    

// // Ask the user for their age
// var age = prompt("Please enter your age:");

// // Calculate the current year
// var currentYear = new Date().getFullYear();

// // Calculate the birth year by subtracting the age from the current year
// var birthYear = currentYear - parseInt(age);

// // Display the birth year in an alert box
// alert("Your birth year is: " + birthYear);

      //      Task 14

// Constants
// const chargesPerUnit = 15.50; // Charges per unit (replace with your actual rate)
// const dueDate = 10; // Due date of the month

// // User input (you can prompt for these or get them from a form)
// const customerName = "John Doe";
// const currentMonth = "October"; // Replace with the current month
// const numberOfUnits = 150; // Replace with the actual number of units consumed

// // Calculate Net Amount Payable (within Due Date)
// const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

// // Calculate Late Payment Surcharge (if applicable)
// const currentDate = new Date();
// const currentDay = currentDate.getDate();

// let latePaymentSurcharge = 0;
// if (currentDay > dueDate) {
//   // Late payment surcharge percentage (replace with your actual rate)
//   const latePaymentRate = 2.5; // 2.5% for example
//   latePaymentSurcharge = ((netAmountPayable * latePaymentRate) / 100).toFixed(2);
// }

// // Calculate Gross Amount Payable (after Due Date)
// const grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

// // Display the bill details in the browser
// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
// document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
// document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
// document.write("<p><strong>Charges per Unit:</strong> " + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p><strong>Net Amount Payable (within Due Date):</strong> $" + netAmountPayable + "</p>");
// document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge + "</p>");
// document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmountPayable + "</p>");

