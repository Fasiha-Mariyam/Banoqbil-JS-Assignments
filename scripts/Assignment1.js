// Task 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx

var zakatPercentage = 0.025;
var userInput = +prompt("Enter Your Amount");
var result = zakatPercentage * userInput ;
alert("Your Zakat Value is " + result);
console.log("Your Zakat Value is " + result);

// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

var familyMembers = prompt("Enter Total Number Of Family Members:");
var choice = prompt("Enter the Grain You Want to Choose: Wheat, Dates, Oats & Raisin");
 if(choice === "Wheat" || choice === "wheat" )
 {
   var price = 250*familyMembers;
   alert("Your Fitrah Amount is "+price);
 }
else if(choice === "Dates" || choice === "dates" )
{
  var price = 2100*familyMembers;
  alert("Your Fitrah Amount is "+price);
}
else if(choice === "Oats" || choice === "oats" )
{
  var price = 450*familyMembers;
  alert("Your Fitrah Amount is "+price);
}
else if(choice === "Raisin" || choice === "raisin" )
{
  var price = 2800*familyMembers;
  alert("Your Fitrah Amount is "+price);
}
else{
    alert("You did'nt choose anything");
}

// Task 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

var secretNumber = 6;
var askUser = prompt("Enter Any Number Between 1 to 10 :");
 if (secretNumber ==  askUser)
 {
    alert("Congratulation! You Guessed Correct");
 }
 else if (secretNumber > askUser)
 {
    alert("Your Number is Low! Try Again");
 }
 else if (secretNumber < askUser)
 {
    alert("Your Number is High! Try Again");
 }

// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

var userName = prompt("Enter Your Name:");
var firstLetter = userName.slice(0,1);
var next = userName.slice(1);
console.log(firstLetter.toUpperCase()+next.toLowerCase());

// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

var ContactNumbers = [];
var ContactNames = [];
for( var i=0;i<3;i++)
{
    var askUser =prompt("Enter Contact Numbers:");
    var userName = prompt("Enter Contact Names:");
    ContactNumbers.push(askUser);
    ContactNames.push(userName);
}
console.log(ContactNames,ContactNumbers);

// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

var products =["Soaps","Shampoo","Dishwash","BodyLotion","Toothpaste"];
var askUser = +prompt("Enter the Position of Element which you want to buy :");
console.log(products[askUser]+" is removed from the list");
products.splice(askUser,1);
console.log("remaining products in the List "+products);
console.log("Number of products "+products.length);

// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

var userNationality=prompt("Enter Your Nationality:");
var userGender=prompt("Enter Your Gender:");
var userAge= +prompt("Enter Your Age:");
if(userNationality=="Pakistani" || userNationality=="pakistani" || userNationality=="Indian" || userNationality=="indian")
{
    if(userAge<18)
{
    alert("You are UnderAge");
    console.log("You are UnderAge")
}
 if(userGender=="M"||userGender=="m" && userAge>18)
{
    alert("You are eligible to vote");
    console.log("You are eligible to vote")
}
else if(userGender=="F"||userGender=="f" && userAge>18)
{
    alert("You are eligible to vote");
    console.log("You are eligible to vote")
}
}
else{
    alert("You are not eligible to vote");
    console.log("You are not eligible to vote");
}

// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array).

var worldCupSquad = [ "Babar Azam (c)", "Shadab Khan (vc)", "Asif Ali"," Haider Ali", "Haris Rauf", "Iftikhar Ahmed", "Khushdil Shah", "Mohammad Hasnain", "Mohammad Nawaz"," Mohammad Rizwan", "Mohammad Wasim", "Naseem Shah", "Shaheen Shah Afridi", "Shan Masood", "Usman Qadir"];
var finalTeamPlayers = worldCupSquad.slice(1,12);
console.log(worldCupSquad);
console.log(finalTeamPlayers);
