var fs = require('fs');
var str = fs.readFileSync('1.html').toString();
str=str.replace(/\r\n/g,'')  
str=str.replace(/\n/g,'');
var identifier = ''
var stack = [];
flag = 0;
textnode = '';
var domtreeStack = [];
str.split('').forEach(function(letter){
	switch(letter){
	case '<':
	identifierStrat()
	break;
	case '>':
	identifierEnd()
	break;
	default:
	if (flag) {
	textnode+=letter;	
	}else{
	identifier+=letter;}
}
});
console.log(domtreeStack);
function identifierStrat(){
	flag = 0;
	if (textnode) {
domtreeStack.push(textnode);
textnode = '';

	}
	identifier='';
	stack.push('<');
};
function identifierEnd(){
flag = 1;//textnode
stack.push(identifier);
stack.push('>');
identifier='';
var htmEle = stack.join('');
stack.length = 0;
domtreeStack.push(htmEle);
return;
}