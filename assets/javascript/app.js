//GLOBAL VARIABLES
// =====================================================
// Arrays and variables for holding data

	var start
	// Variable that holds array of questions to be generated
	var questionArray =[
	"In the Rugrats, what is Tommy's last name?", 
	"In Doug, what is the name of Doug's sister?",
	"In Ren and Stimpy, what kind of animal is Ren?",
	"In Global Guts, which of the following was NOT one of the names of the mountain they had to climb at the end of the show?",
	""
	];
	// Variable that holds array of answers
	var answerArray = [
	["Packer", "Pickles", "Parker", "Puckett"], 
	["Joanna", "Julie", "Judy", "Nancy"],
	["Chihuahua", "Rat", "Lemming", "Meerkat"],
	["The Crag", "The Aggro Crag", "The Super Aggro Crag," "The Mega Crag", ],



	];
	// Variable that holds images of correct answers
	var imageArray = [];

	// Game Counters
	var counter = 30;
	var correctAnswers = 
	["B. Pickles", "C. Judy", "A. Chihuahua", "D. The Mega Crag",  ];
	var correctScore = [ ];
	var incorrectScore = [];


//FUNCTIONS
// ================================================

// Initialize game
$(document).ready(function() {

})



//MAIN PROCESS
// ================================================

$("#startGame").click(function() {
    $("#startGame").remove();
    countDown();
    setTimeout(function() {
        triviaQuestions();
        triviaResponses();
    }, 1000);
    console.log(startGame);
    })