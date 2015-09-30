var CharacterData = require('./CharacterData');
function Text(arguments){
	var CharacterArguments=arguments.splice(0,13);
	CharacterData.CharacterData.call(this,CharacterArguments);
	this.wholeText=arguments[0];//tem
}
Text.prototype=new CharacterData.CharacterData([]);
Text.prototype.splitText=function(offset){

}
exports.Text=Text;