exports.ClozeCard = function(text, cloze) {
  	
  	this.completeText = text;
  	this.hiddenText = cloze;
  	this.partial = text.replace(cloze, "...");
};

