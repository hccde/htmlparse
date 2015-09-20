var Node= require('./Node');
function DocumentType(arguments){
	nodeAgruments = arguments.splice(0,11);
	Node.apply(this,nodeAgruments);
	this.name=arguments[0];
	this.publicId=arguments[1];
	this.systemId=arguments[2];
}
DocumentType.prototype.before=function(node){

}
DocumentType.prototype.after=function(node){

}
DocumentType.prototype.remove=function(){

}
exports.DocumentType=DocumentType;