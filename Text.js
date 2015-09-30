var CharacterData = require('./CharacterData');
var Node = require('./Node');
function Text(arguments){
	var NodeArguments = arguments.splice(0,11);
	var CharacterArguments=arguments.splice(0,2);
	CharacterData.CharacterData.apply(this,CharacterArguments);
	Node.Node.apply(this,NodeArguments);
	this.wholeText=arguments[0];//tem
}
Text.prototype.splitText=function(offset){

}
exports.Text=Text;