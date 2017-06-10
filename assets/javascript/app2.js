$(document).ready(function() {
// Create a function that creates the start button and initial screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><div id='start-button' class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</div></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...
// Matt - this works, but you can attach the event directly to the button if you give it an id.
$("#start-button").click(function(event){
	event.preventDefault(); 
	// Matt - not sure what this is or what it's supposed to do
	//clickSound.play();
	generateHTML();

	timerWrapper();

}); // Closes start-button click



$("body").on("click", ".reset-button", function(event){
	//clickSound.play();
	resetGame();
}); // Closes reset-button click

});  //  Closes jQuery wrapper

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + '<img src=\'' + imageArray[0] + '\'></img>';
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + '<img src=\'' + imageArray[0] + '\'></img>';
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + '<img src=\'' + imageArray[0] + '\'></img>';
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateHTML() {
	if(questionCounter === questionArray.length)
	{
		finalScreen();
		return;
	}

	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);

	//Matt - need to attach the event once the elements have been rendered.
	$(".answer").click(function(event){
	//answeredQuestion = true;
	//clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var imageArray = ['assets/images/90snick.jpg']
var questionArray = ["In the Rugrats, what is Tommy's last name?", "In Doug, what is the name of Doug's sister?", "In Ren and Stimpy, what kind of animal is Ren?", "In Global Guts, which of the following was NOT one of the names of the mountain they had to climb at the end of the show?", ];
var answerArray = [["Packer", "Pickles", "Parker", "Puckett"], ["Joanna", "Julie", "Judy", "Nancy"], ["Chihuahua", "Rat", "Lemming", "Meerkat"], ["The Crag", "The Aggro Crag", "The Super Aggro Crag", "The Mega Crag"]];
var correctAnswers = ["B. Pickles", "C. Judy", "A. Chihuahua", "D. The Mega Crag",];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
