$(document).ready(function(){

var magic8Ball = {};
magic8Ball.listOfAnswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes."];

$("#answer").hide();

magic8Ball.askQuestion = function(question) {
	$("#8ball").effect("shake");
	$("#answer").fadeIn(4000);
var randomNumber = Math.random();
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberForListOfAnswers);
var answer = this.listOfAnswers[randomIndex];

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
$("#answer").text(answer);
};

var onClick = function () {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	setTimeout(
       function() {
          var question = prompt("ASK ME ANYTHING!");
           magic8Ball.askQuestion(question);
	   }, 500);
};

$("#questionButton").click(onClick);
});
