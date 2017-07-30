var clozeData = require("./ClozeCard.js");
var basicData = require("./BasicCard.js");
var inquirer = require("inquirer");
var fs = require('file-system');

var count = 0;
var flashCardArray = [];
	
inquirer.prompt([
    {
     	type: "list",
     	name: "flashCardType",
     	message: "Select a style of Flash Card to build.",
     	choices: ["Basic Card", "Cloze Card"]
    },
    {
    	type: "list",
    	name: "numberOfCards",
    	message: "How many cards would you like to make?",
    	choices: ["1", "2", "3", "4", "5", "6"]

    }]).then(function(cardStyle) {
     	gameType = cardStyle.flashCardType;

     	if (gameType === "Cloze Card"){
        	
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

	        	console.log(flashCardArray);

	        });
	    } else {

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

	    		console.log(flashCardArray);
	    	})
	    }
	});


	