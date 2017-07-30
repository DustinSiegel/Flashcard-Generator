var cardCreate = require("./cardCreate.js");

exports.BasicCard = function (front, back) {
	this.front = front;
	this.back = back;
};

this.Question = function () {
	console.log("Question: " this.front);
};

this.Answer = function () {
	console.log("Answer: " + this.back);
};