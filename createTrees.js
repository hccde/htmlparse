var htmlparse=require('./htmlparse');
var arrs = ['<html>','<head>','hah','</head>','<p>','ha','<centre>','ko','</centre>',
'</p>',
'</html>'];
// var arrs =htmlparse.htmlparse('1.html');
var pointer=[];
var stack=[]
pointer[0]=stack;
stack[0]=arrs[0];
var lastElemetIsOn=1;//unfinished
for(var i=1;i<arrs.length;i++){
type(arrs[i])==0?parent(arrs[i]):(type(arrs[i])==1?backPointer(arrs[i]):
	pointer[pointer.length-1].push(arrs[i]));
	
}
 console.log(stack);

function type(str){
	var type;
	type=2;
	str[0]&&str[0]=='<'&&str[str.length-1]=='>'?type=0:null;
	str[0]=='<'&&str[1]=='/'&&str[str.length-1]=='>'?type=1:null;
	return type;
}

function parent(str){
	var parent=[];
	parent[0]=str;
	if (stack.length==1) {
		stack.push(parent);
	}else{
		pointer[pointer.length-1].push(parent);
	}
	pointer.push(parent);//changed pointer

	return parent;
}

function backPointer(str){
	if (str=='</html>') {
		stack.push(str);
		return;
	}
else{
	pointer[pointer.length-1].push(str);
	pointer.pop();//still split arr
}
}
