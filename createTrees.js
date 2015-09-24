var htmlparse = require('./htmlparse');
var Document = require('./Document')
/******/
//typeof stack is Array,we know tree's shape
/******/
var arrs = ['<html>', '<head>', 'hah', '</head>', '<p>', 'ha', '<centre>', '</m>', 'ko', '</centre>',
	'</p>',
	'</html>'
];
function createArray(filename){
// var arrs =htmlparse.htmlparse('1.html');
var pointer = [];
var stack = []
pointer[0] = stack;
stack[0] = arrs[0];
var lastElemetIsOn = 1; //unfinished
for (var i = 1; i < arrs.length; i++) {
	var eleType = type(arrs[i]);
	if (eleType !== undefined) {
		eleType == 0 ? parent(arrs[i]) : (eleType == 1 ? backPointer(arrs[i]) :
			pointer[pointer.length - 1].push(arrs[i]));
	} else {
		;
	}

}
return stack;
	}
	console.log(createArray('1.html'));
function type(str) {
	var type;
	type = 2;
	str[0] && str[0] == '<' && str[str.length - 1] == '>' ? type = 0 : null;
	str[0] == '<' && str[1] == '/' && str[str.length - 1] == '>' ? type = 1 : null;
	if (type == 1) {
		return isPair(pointer[pointer.length - 1][0], str);
	}
	return type;
}

function parent(str) {
	var parent = [];
	parent[0] = str;
	if (stack.length == 1) {
		stack.push(parent);
	} else {
		pointer[pointer.length - 1].push(parent);
	}
	pointer.push(parent); //changed pointer

	return parent;
}

function backPointer(str) {
	if (str == '</html>') {
		stack.push(str);
		return;
	} else {
		pointer[pointer.length - 1].push(str);
		pointer.pop(); //still split arr
	}
}

function isPair(a, b) {
	a = a.toLowerCase();
	b = b.toLowerCase();
	var length = b.length - 3
	if ('</' + a.slice(1, length + 1) + '>' == b)
		return 1;
	else
		return undefined;
}
function getEleName(str){
	return str.split(' ')[0].slice(1);

}
function getEleName(str){

}
exports.createTrees=function createTrees(filename){
		// var arrs =htmlparse.htmlparse('1.html');
		var child=[];
		var documentnode=
		for(var j =0;j<arrs.length-1;j++){
			var ele= arrs[j];
			if(typeof(ele)=='string'){
				getEleObject(getEleName(ele));
			}
			else{
				child.push(ele);
			}
		}
}