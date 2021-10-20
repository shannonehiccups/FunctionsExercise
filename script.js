// 1. Create a declaration function called spookyGhost that displays the string "Boo!!!" in the console/terminal when the function is run/executed. Also, run/execute the function.
function spookyghost(){
    console.log(`Boo!`);
}
spookyghost(); 

// 2. Create another declaration function named candy that has a parameter named goal. Using multiple console logs in the function, have whatever is passed as an argument display 4 times in the console/terminal. Finally, run/execute the function and pass "Get Candy as the argument.
function candy(goal){
console.log(goal);
console.log(goal);
console.log(goal);
console.log(goal);
}
candy(`Get Candy`);

// 3. Create another declaration function called werewolf that has two parameters named a and b. Inside the function create a conditional statement (A.K.A. If statement) where if the string argument "Full" is passed in for a AND the string argument "Moon" is passed in for b, then "ARH-WOOO!" displays in the console/terminal when the function is run/executed. (NOTE: If anything other than "Full" and "Moon" are passed in as arguments for a and b, then the function should display nothing when run/executed)

function werewolf(a,b){
    if (a=== `Full` && b===`Moon`){
        console.log(`ARH-WOOO!`);
    }
}
werewolf(`Full`, `Moon`); 

// 4. Create another declaration function called halloween that RETURNS the following string value "October 31st" when it is run/executed
function halloween(){
    return "October 31st";
}
console.log(halloween());

// 5. Create another declaration function called isEnoughCandy that has a parameter named pieces. In the function, create a conditional statement where if the number argument passed for pieces is 31 or more have the function RETURN the boolean value of true. Also, if it is less than 31 have the function RETURN the boolean value of false.
function isEnoughCandy(pieces){
    if (pieces>= 31){
        return true; 
    } else if (pieces <31){
        return false; 
    }
}

console.log(isEnoughCandy(31));
console.log(isEnoughCandy(2));

// 6. Create another declaration function called candyCounter with a parameter named nums that accepts an array of numbers for an argument and RETURNS the total of all the numbers.
function candyCounter(nums){
    let total =0;
    for (i =0; i<nums.length; i++){
        total += nums[i]; 
    }
    return total; 
}
console.log(candyCounter([1, 2, 3]));

// 7. Create a function expression that is a const variable called hauntedMansion that contains a console log with the string value of "Welcome, foolish mortals, to the Haunted Mansion!".
const hauntedMansion = function(){
    console.log("Welcome, foolish mortals, to the Haunted Mansion!");
}
hauntedMansion();

// 8. Create an Arrow function called ghostbusters which RETURNS a string value of "Who You Gonna Call?" (Do this without using brackets "{}" or the return keyword)
ghostbusters = () => `Who You Gonna Call?`
console.log(ghostbusters());

// 9. QUESTION: If a let or const variable is created/declared inside a function, loop, or conditional can the value of it be accessed outside of the function, loop, or conditional? (Just use a comment to answer yes or no)
// NO

// 10. QUESTION: If a let or const variable is created/declared outside the scope of a function called change and the value of the variable is updated inside the change function, then (assuming the function has been run) could the updated value of the variable be accessed outside of the function (Again, just use a comment to answer yes or no)
// YES

// 11a. Create a const variable called costumes and set the value to an array with the following item values: "Ghost", "Princess", and "Pirate".
const costumes = ["Ghost", "Princess", "Pirate"];

// 11b. Using the Map method on the costumes array, create an anonymous declaration function to pass as an argument for the Map method that changes the letters of each array item to uppercase. Also, set the returned value to a new const variable called upperCostumes.
const upperCostumes = costumes.map(i=> i.toUpperCase());
console.log(upperCostumes);

// 12a. Create a const variable called stephenKingMovies and set the value to an array with the following values: "The Shining", "Christine", "It", "The Mist", "Creepshow", and "Pet Sematary".
const stephenKingMovies = [
    "The Shining", "Christine", "It", "The Mist", "Creepshow", "Pet Sematary"
];

// 12b. Using the Filter array method on the stephenKingMovies array, create an anonymous arrow function to pass as an argument for the Filter method that will return/create a new array with only the "Christine" and "Creepshow" items in it. Also, set the value of the new array that is returned/created to a const variable called twoMovies. (HINT: The length property)
const twoMovies = stephenKingMovies.filter(i=> i.length === 9);
console.log(twoMovies);

// 13a. Create a const variable called halloweenSongs1 and set the value to an array with the following values: "Monster Mash" & "Thriller"
const halloweenSongs1 = [
    "Monster Mash", "Thriller"
]; 

// 13b. Create a const variable called halloweenSongs2 and set the value to an array with the following values: "I Put A Spell On You", "This Is Halloween", and "Ghostbusters"
const halloweenSongs2 = [
    "I Put A Spell On You", "This is Halloween", "Ghostbusters"
]; 

// 13c. Create an arrow function called halloweenJukeBox with a parameter called songs that accepts an array of strings for an argument. Inside the function use Math.random() and console log to have the value of a random item (AKA Song) in the array that is passed in display in the console/terminal (NOTE: You will need more than just Math.random and a console log to complete this)
halloweenJukeBox= (songs) => {
    const random = Math.floor(Math.random() * songs.length); 
    console.log(songs[random]);
}

// 13d. Run/execute the halloweenJukeBox function twice (Passing halloweenSongs1 as the argument for the first one and halloweenSongs2 for the second)
halloweenJukeBox(halloweenSongs1);
halloweenJukeBox(halloweenSongs2); 

// 14. Create an arrow function called caps with a parameter called string that accepts a string argument and RETURNS a new string value with every other letter capitalized starting with the first letter.



