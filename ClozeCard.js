exports.ClozeCard = function(text, cloze) {
  	
  	this.completeText = text;
  	this.hiddenText = cloze;
  	this.completeText.replace(this.hiddenText, "...");
};