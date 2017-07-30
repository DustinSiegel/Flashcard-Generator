var cardCreate = require("./cardCreate.js");
exports.ClozeCard = function(text, cloze) {
  	this.completeText = text;
  	this.hiddenText = cloze;
  	this. = function () {
   
  		var correctAnswer = this.completeText;
  		var correctQuestion = this.completeText.replace(this.hiddenText, "...");
 		console.log ("Question: " + this.correctQuestion);
  		console.log ("Answer: " + correctAnswer)
  		cardCreate.nextCard();
 	};
};