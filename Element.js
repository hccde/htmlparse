var Node = require('./Node');
function Element(agruments){
	var nodeAgruments = agruments.splice(0,11);
	Node.Node.call(this,nodeAgruments);
	this.namespaceURI=agruments[0];
	this.prefix = agruments[1]
	this.localName = agruments[2];
	this.tagName = agruments[3];
	this.id=agruments[4];
	this.className=agruments[5];
	this.classList=agruments[6];
	this.attributes=attributes[7];
	this.children=attributes[8];//HTMLcollection
	this.firstElementChild=arguments[9];
	this.lastElementChild=argumets[10];
	this.previousElementSibling=arguments[11];
	this.nextElementSibling=arguments[12];
	this.childElementCount=arguments[13];
}
Element.prototype.getAttribute=function(str){

}
Element.prototype.getAttributeNS=function(name,str){

}
Element.prototype.setAttribute=function(str){

}
Element.prototype.removeAttribute=function(str){

}
Element.prototype.removeAttributeNS=function(namespace,str){

}
Element.prototype.hasAttribute=function(str){

}
Element.prototype.hasAttributeNS=function(str){

}
Element.prototype.getElementsByTagName=function(str){

}
Element.prototype.getElementsByTagNameNs=function(namespce,str){

}
Element.prototype.getElementsByClassName=function(str){

}
Element.prototype.prepend=function(){

}
Element.prototype.append=function(){

}
Element.prototype.before=function(){

}
Element.prototype.after=function(){

}
Element.prototype.replace=function(){

}
Element.prototype.remove=function(){

}
exports.Element=Element;