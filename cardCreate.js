var clozeData = require("./ClozeCard.js");
var basicData = require("./BasicCard.js");
var inquirer = require("inquirer");
var fs = require('file-system');

var count = 0;
var flashCardArray = [];

inquirer.prompt([
	{
		type: "list",
		name: "gameMode",
		message: "Would you like to create or review flash cards?",
		choices: ["Create some flash cards", "Review some flash cards"]

	}]).then(function(gameMode) {
		
		if (gameMode.gameMode === "Create some flash cards") {
			cardCreation();
		
		} else if (gameMode.gameMode === "Review some flash cards") {
			reviewCards();
		}
	});

function cardCreation() {

	inquirer.prompt([
	    {
	     	type: "list",
	     	name: "flashCardType",
	     	message: "Select a style of Flash Card to build.",
	     	choices: ["Basic Card", "Cloze Card"]
	    },
	    {
	    	type: "input",
	    	name: "numberOfCards",
	    	message: "How many cards would you like to make?",
	    }
	]).then(function(cardStyle) {
	    gameType = cardStyle.flashCardType;
	    var cardCount = cardStyle.numberOfCards;
	    cardCreator();

	    function cardCreator() {

		    if (gameType === "Cloze Card" && count < cardCount){
		        	
		        console.log("Cloze Flashcard Creator:");
			    	
			    inquirer.prompt([
			        {
			        	type: "input",
			        	name: "completeText",
			        	message: "Enter a fact that you would like to remember."
			        },
			        {
			        	type: "input",
			        	name: "hiddenText",
			        	message: "Re-Enter the words from the fact that you want hidden."
			        	
			    }]).then(function(answers) {

			        var newCard = new clozeData.ClozeCard(
			        	answers.completeText,
			        	answers.hiddenText);

			        flashCardArray.push(newCard);

			        count++

			        cardCreator();

			    });
			    
			} else if(gameType === "Basic Card" && count < cardCount){

			    console.log("Basic Flashcard Creater:");

			    inquirer.prompt([
			    	{
			    		type: "input",
			    		name: "front",
			    		message: "Enter a question."
			    	},
			    	{
			    		type: "input",
			    		name: "back",
			    		message: "Enter the answer."
			    }]).then(function(answers) {

			    	var newCard = new basicData.BasicCard(
			    		answers.front,
			    		answers.back);

			    	flashCardArray.push(newCard);

			    	count++

			    	cardCreator();

			    })
			} else if (count = cardCount) {
				reviewCards();
			}
		};
	});
};

function reviewCards() {
	console.log(flashCardArray);
};

