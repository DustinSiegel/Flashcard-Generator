exports.ClozeCard = function(name, text, cloze) {
  	
  	this.deckName = name;
  	this.completeText = text;
  	this.hiddenText = cloze;
  	this.completeText.replace(this.hiddenText, "...");
};