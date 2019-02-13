
// variables
var guess = " ";
var guessedWordArr = [];
var incorrectGuessedArr = [];
var wordSpace = [];
// var wordGuessCount = 0;
 
// var guessedLetter = "";
var remainingGuesses = 10;
var wins = 0;
var losses = 0;

//object declarations

var jesseJames = {
   "firstname": ["J", "E", "S", "S", "E"],
   "lastname": "James"
};

var wildBillHitchcock = {

   "firstname": ["W", "I", "L", "D", "B", "I", "L", "L"],
   "lastname": "Hitchcock"
};

var annieOakley = {
   "firstname": ["A", "N", "N", "I", "E"],
   "lastname": "Oakley"

};

var billyTheKid = {
   "firstname": ["B", "I", "L", "L", "Y"],
   "lastname": "The Kid"
};

var buffaloBill = {
   "firstname": ["B", "U", "F", "F", "A", "L", "O"],
   "lastname": "Bill"
};

var butchCassidy = {
   "firstname": ["B", "U", "T", "C", "H"],
   "lastname": "Cassidy"
};

var docHoliday = {
   "firstname": ["D", "O", "C"],
   "lastname": "Holiday"
};
var words = [jesseJames, wildBillHitchcock, annieOakley, billyTheKid, buffaloBill, butchCassidy, docHoliday];
var randomWord = Math.floor(Math.random() * words.length);
var chosenWord = words[randomWord];
 
// document.onkeyup = function(event) {
//    userText.textContent = event.key;
//  };
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
$(document).ready(function () {

   for (var i = 0; i < letters.length; i++) {
      var letterBtn = $("<button>");
      letterBtn.addClass("letter-button letter letter-button-color");
      letterBtn.attr("data-letter", letters[i]);
      letterBtn.text(letters[i]);

      $("#buttons").append(letterBtn);

   }


   $(".letter-button").on("click", function (event) {
      guess = $(this).attr("data-letter");
      letterClick = $("<div>");
      letterClick.addClass("letter");
      letterClick.text($(this).attr("data-letter"));

      $("#display").append(letterClick);
      showLetter();
   });
   function showLetter(letter) {
		 	   
   }
  
   function myFunction() {
      fruits.splice(2, 0, "Lemon", "Kiwi");
      document.getElementById("demo").innerHTML = fruits;
    }
   // showLetter();

      for (var j = 0; j < chosenWord.firstname.length; j++) {


         if (chosenWord.firstname[j] === guess) {
            guessedWordArr.push(guess);
            
            wordSpace[j] = "_";
         wordSpace.splice([j],0, guessedWordArr[j])
         document.getElementById("wordGuess").innerHTML= wordSpace;
            console.log(wordSpace);
          
         }
         
         wordSpace[j] = "_";
         // wordSpace.splice([j],1, guessedWordArr[j])
         document.getElementById("wordGuess").innerHTML= wordSpace;
            console.log(wordSpace);
          //remaining guesses counter
      if ((chosenWord.firstname[j] === guess) || (guessedWordArr[j] === guess)){
         remainingGuesses--;
         console.log(remainingGuesses);
      }
         
      }

      //letters guessed output to user
      if (chosenWord.firstname[j] !== guess); {

         incorrectGuessedArr[j] = guess;
         console.log(incorrectGuessedArr);
        
         // incorrectGuessedArr.push(guessedWordArr);
         document.getElementById("display").innerHTML = incorrectGuessedArr;
      }
      // wins, losses counter, end of game
      if (chosenWord.firstname === guessedWordArr){
   
         alert("You win");
     wins ++;
         }
         if (remainingGuesses < 1){
            alert("You lost");
            losses++;
         }
//outputs to user
   document.getElementById("userlives").innerHTML = remainingGuesses;
   document.getElementById("gameInstructions").innerHTML = "Click letter to begin game";
   document.getElementById("wins").innerHTML = wins;
   document.getElementById("losses").innerHTML = losses;
   document.getElementById("lastname").innerHTML = chosenWord.lastname;

   

}); 




















   // var guessedWordArr = [];
   // for (var i = 0; i < chosenWord.firstname.length; i++) {
   //    guessedWordArr[i] = "_";

   // }






   // var lettersLeft = chosenWord.firstname;

   //    while (lettersLeft > 0) {
   //       alert(guessedWordArr.join(" "));
         

      

   




   

   
 















