var Node =require('./Node')
function Attr (arguments) {
	var nodeAgruments=arguments.splice(0,11);
	Node.apply(this.arguments);
	this.namespaceURI=arguments[0];
	this.prefix=arguments[1];
	this.localName=arguments[2];
	this.name=arguments[3];
	this.value=arguments[4];

}
exports.Attr=Attr;