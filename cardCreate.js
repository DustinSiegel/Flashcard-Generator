var clozeData = require("./ClozeCard.js");
var basicData = require("./BasicCard.js");
var inquirer = require("inquirer");
var fs = require('file-system'); //pulls from fs node packet

var flashCardArray = [];

exports.userPrompts = function () {
	inquirer.prompt([
    {
     	type: "list",
     	name: "flashCardType",
     	message: "Select a style of Flash Card to build.",
     	choices: ["Basic Card", "Cloze Card"]
    }]).then(function(typeChoice) {
     	gameType = typeChoice.flashCardType;

     	if (gameType === "Cloze Card"){
        
	    	inquirer.prompt([
	        {
	        	
	        }]).then(function() {


	        });
      	}

      	else {
        	inquirer.prompt([
         	{
            	
          	}]).then(function() {

          	});
      	}
    });
};