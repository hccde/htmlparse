var Node = require('./Node');
function Element(arguments){
	var nodearguments = arguments.splice(0,11);
	Node.Node.call(this,nodearguments);
	this.namespaceURI=arguments[0];
	this.prefix = arguments[1]
	this.localName = arguments[2];
	this.tagName = arguments[3];
	this.id=arguments[4];
	this.className=arguments[5];
	this.classList=arguments[6];
	this.attributes=arguments[7];
	this.children=arguments[8];//HTMLcollection,only HTMLElement
	this.firstElementChild=arguments[9];
	this.lastElementChild=arguments[10];
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