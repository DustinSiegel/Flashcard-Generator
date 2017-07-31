var clozeData = require("./ClozeCard.js");
var basicData = require("./BasicCard.js");
var inquirer = require("inquirer");
var fs = require('file-system');

var count = 0;

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
	     	message: "Select a style of flash card deck to build.",
	     	choices: ["Basic Card", "Cloze Card"]
	    },
	    {
	    	type: "input",
	    	name: "deckName",
	    	message: "What is this deck's name?"
	    },
	    {
	    	type: "input",
	    	name: "numberOfCards",
	    	message: "How many cards would you like to make?",
	    }
	]).then(function(cardStyle) {
	    
	    var gameType = cardStyle.flashCardType;
	    var cardCount = cardStyle.numberOfCards;
	    var deckName = cardStyle.deckName;
	    
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
			        	cardStyle.deckName,
			        	answers.completeText,
			        	answers.hiddenText);

    				fs.appendFile("log.txt", "\n" + JSON.stringify(newCard) + ",", function(err) {
			    		if (err) {
			    			return console.log("Error; " + err);
			    		}
			    	})

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
			    		cardStyle.deckName,
			    		answers.front,
			    		answers.back);

			    	fs.appendFile("log.txt", "\n" + JSON.stringify(newCard) + ",", function(err) {
			    		if (err) {
			    			return console.log("Error; " + err);
			    		}
			    	})

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

};

