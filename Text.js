var CharacterData = require('./CharacterData');
var Node = require('./Node');
function Text(arguments){
	var Nodearguments = arguments.splice(0,11);
	var CharacterAgruments=arguments.splice(11,2);
	CharacterData.CharacterData.apply(this,CharacterAgruments);
	Node.Node.apply(this,Nodearguments);
	this.wholeText=this.arguments[0];//tem
}
Text.prototype.splitText=function(offset){

}
exports.Text=Text;