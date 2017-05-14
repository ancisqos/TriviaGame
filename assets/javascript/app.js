//GLOBAL VARIABLES
// =====================================================
// Arrays and variables for holding data

	var start
	// Variable that holds array of questions to be generated
	var questionArray =[];
	// Variable that holds array of answers
	var answerArray = [];
	// Variable that holds images of correct answers
	var imageArray = [];

	// Game Counters
	var correctAnswers = [];
	var correctScore = [];
	var incorrectScore = [];


//FUNCTIONS
// ================================================

// Initialize game
$(document).ready(function() {}

function startScreen(){
	start = "<p class=''text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Begin Quiz!</a></p>";'
	$(".mainArea").html(start);
}

//MAIN PROCESS
// ================================================