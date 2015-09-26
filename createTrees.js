var htmlparse = require('./htmlparse');
var Document = require('./Document');
var Element = require('./Element');
var Text = require('./Text');
/******/
//typeof stack is Array,we know tree's shape
/******/
var arrs = ['<!DOCTYPE html>','<html>', '<head>', 'hah', '</head>', '<p>', 'ha', '<centre>', '</m>', 'ko', '</centre>',
	'</p>',
	'</html>'
];
var pointer = [];
var stack = [];
stack[0] = arrs[0];
pointer[0] = stack;
function createArray(filename){
// var arrs =htmlparse.htmlparse('1.html');
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

	// console.log(createArray('1.html')[1][2][2]);

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
		pointer[pointer.length - 1].push(str);
		pointer.pop(); //still split arr
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
function getEleAttr(str){
	return str.split(' ')

}
function getEleName(str){


}
// exports.createTrees=
function createTrees(filename){
		// var arrs =htmlparse.htmlparse('1.html');
		stack=createArray(filename);
		var child=[];
		var url = 'localhost';
		var documentElemet=stack;
		var length = stack.length;
		var arguments = [9,'#document',null,url,null,
		null,stack[0],stack[length-1],stack,
		null,null,"DocumetImplementationObject",url,url,"CSS1Compat",'UTF-8',"UTF-8","windows-1252","text/html","<!DOCTYPE html>",stack[length-1]];
		var documentnode=new Document.Document(arguments);
		var lastNode = documentnode;
	// 	function package(){
	// 	var collect = lastNode.childNodes;
	// 	for(var j =0;j<collect.length;j++){//find childNodes go on;
	// 		var ele= arrs[j];
	// 		if(typeof(ele)=='string'){
	// 			getEleObject(getEleAttr(ele)[0].slice(1));
	// 		}
	// 		else{
	// 			child.push(ele);
	// 		}
	// 	}
	// 		collect=child;
	// }
	var list=[];
	var nextCollect;
	var collect = lastNode.documentElement;
	var father=documentnode;
	function expandArray(col){
		col.pop();//drop </
		var collectObject=col.map(function(e){
			return packageObject(e);
	}
	);
		dealRelation(collectObject);//deal child's relationship
    }


    function packageObject(arryorstring){
    	var obj;
    	if (typeof(arryorstring)=='string') {
    		console.log(arryorstring)
    		if (arryorstring[0]=='<'&&
    			arryorstring[arryorstring.length-1]=='>') 
    			{
    				createCommonNode(arryorstring)//common node
    			}
    		else{
    				createText(arryorstring)//text node
    		}
    	}
    	else{
    		//
    		console.log(arryorstring);
    		list.push()
    	}
    	return obj;
    }

    function dealRelation(col){
		father.childNodes=collectObject;
    	//firstchild lastchild previous next
    	if(list.length){
    		father=list.pop();
    		expandArray(father.childNodes);
    	}
    	else
    	return;
    }
    function createCommonNode(str){

    }
    function createText(str){

    }

    expandArray(collect);

}
createTrees("1.html");

