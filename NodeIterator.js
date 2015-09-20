function NodeIterator(argumets){
	this.root=argumets[0];
	this.referenceNode=argumets[1];
	this.pointerBeforeReferenceNode=argumets[2];
	this.whatToShow=argumets[3];
	this.filter=argumets[4];
}
NodeIterator.prototype.nextNode=function(){

}
NodeIterator.prototype.previousNode=function(){

}
NodeIterator.prototype.detach=function(){

}
exports.NodeIterator=NodeIterator;