var CharacterData = require('./CharacterData');
function Text(arguments){
	var CharacterAgruments=arguments.splice(0,11);
	CharacterData.apply(this,CharacterAgruments);
	this.wholeText=this.arguments[0];
}
Text.prototype.splitText(offset){

}
exports.Text=Text;