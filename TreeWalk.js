function TreeWalk (arguments) {
	this.root=arguments[0];
	this.whatToShow=arguments[1];
	this.filter=arguments[2];
	this.currentNode=arguments[3];

}
TreeWalk.prototype.parentNode=function(){}
TreeWalk.prototype.firstChild=function(){}
TreeWalk.prototype.lastChild=function(){}
TreeWalk.prototype.previousSibling=function(){

}
TreeWalk.prototype.nextSibling=function(){

}
TreeWalk.previousNode=function(){

}
TreeWalk.nextNode=function(){

}
exports.TreeWalk=TreeWalk;