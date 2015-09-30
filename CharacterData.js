var Node=require('./Node');
function CharacterData(arguments){
	var nodeArguments=arguments.splice(0,11);
	Node.Node.call(this,nodeArguments)
	this.data=arguments[0];
	this.length=arguments[1];

}
CharacterData.prototype=new Node.Node([]);
CharacterData.prototype.substringData=function(offset,count){

}
CharacterData.prototype.insertData=function(offset,data){

}
CharacterData.prototype.deleteData=function(offset,count){

}
CharacterData.prototype.replaceData=function(offset,count,data){

}
CharacterData.prototype.before=function(node){

}
CharacterData.prototype.after=function(node){

}
CharacterData.prototype.replace=function(node){

}
CharacterData.prototype.remove=function(){

}
exports.CharacterData=CharacterData;