
function Range (arguments) {
	this.startContainer=arguments[0];
	this.startOffset=arguments[1];
	this.endContainer=arguments[2];
	this.endOffset=arguments[3];
	this.collapsed=arguments[4];
	this.commonAncestorContainer=arguments[5];
	this.START_TO_START=0;
	this.START_TO_END=1;
	this.END_TO_END=2;
	this.END_TO_START=3;

}
Range.prototype.setStart=function(refNode,offset){
}
Range.prototype.setEnd=function(refNode,offset){

}
Range.prototype.setStartBefore=function(refNode){

}
Range.prototype.setStartAfter=function(refNode){

}
Range.prototype.setEndBefore=function(refNode){

}
Range.prototype.setEndAfter=function(refNode){

}
Range.prototype.collapse=function(bollean){

}
Range.prototype.selectNode=function(refNode){

}
Range.prototype.selectNodeContents=function(refNode){

}
Range.prototype.compareBoundaryPoints=function(refNode){

}
Range.prototype.deleteContents=function(){

}
Range.prototype.insertNode=function(node){

}
Range.prototype.surroundContents=function(newparent){

}
Range.prototype.cloneRange=function(){

}
Range.prototype.detach=function(){

}
Range.prototype.isPointInRange=function(parent,offset){

}
Range.prototype.comparePoint=function(parent,offset){

}
Range.prototype.intersectsNode=function(node){

}
Range.prototype.extractContents=function(){

}
Range.prototype.cloneContents=function()
exports.Range=Range;