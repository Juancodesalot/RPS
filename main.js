var getUserChoice= function(userInput) {
  var userInput= userInput.toLowerCase();

    // console.log(userInput) tried to do this but wouldnt work because you have to return a value had the wrong { <---- called a block
    //  on else need to make sure 
    // all || options have their own comparison like = to it wont read the one before
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
            console.log("Error! Please select rock paper or scissors")
        
        }
};



// console.log(getUserChoice('Rock'))

var getComputerChoice = function () {
    // you have to set a new var to get a new number 
   var randomNumber = Math.floor(Math.random() * 3)
    if ( randomNumber === 0){
        return "rock"}
        else if (randomNumber === 1) {
            return 'paper'}
            else if ( randomNumber === 2) {
                return 'scissors'
            }
    }


// console.log(getComputerChoice())

var determineWinner = function (userChoice,computerChoice) {
    // var userChoice = getUserChoice
    // var computerChoice = getComputerChoice

    if (
        userChoice === computerChoice ){
             return ("It is a tie")
        }

    // rock an scissors 
    if ( userChoice === 'rock') {
        if ( computerChoice === 'paper') {
            return "computer wins paper covers rock"
        } else {
            return "You win Rock crushes scissors"
        }
    }
    if ( userChoice === 'paper') {
        if(computerChoice === 'scissors'){
           return "Computer wins scissors cut paper"
        } else {
            return " You win paper covers rock"
        }
    }
    if ( userChoice === 'scissors') {
        if ( computerChoice === 'rock'){
            return "Computer wins rock crushes scissors"
        } else {
            return "You win scissors cut paper"
        }
    } else if (userChoice='Bomb'){
        return "you win bomb is awesome"
    }
}
// console.log(determineWinner("scissors", "scissors"));

var playGame = function() {
    var userChoice = getUserChoice('Bomb','paper','scissors')
    var computerChoice = getComputerChoice()
console.log(`User choice: ${userChoice}`);
console.log(`Computer Choice: ${computerChoice}`);

console.log(determineWinner(userChoice,computerChoice));
}
playGame(determineWinner)
