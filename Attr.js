var Node =require('./Node')
function Attr (arguments) {
	var nodeAgruments=arguments.splice(0,11);
	Node.Node.call(this,nodeAgruments);
	this.namespaceURI=arguments[0];
	this.prefix=arguments[1];
	this.localName=arguments[2];
	this.name=arguments[3];
	this.value=arguments[4];

}
// Attr.prototype=new Node.Node([]);
exports.Attr=Attr;