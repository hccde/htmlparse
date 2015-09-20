var arrs = ['<html>', '<body>', 'hah', '</body>','<div>','haha','</div>','</html>'];
var flag = 0; //pre one isOn or isOff
var waitAnther = [];
var tree = []

function createTree(arr) {
	loop(arr, isOn);
	console.log(tree);
}
createTree(arrs)

function isOn(str) {
	(str[0] == '<') ? ((str[1] == '/') ? innerflag = 0 : innerflag = 1) : innerflag = undefined;
	var innerflag;
	innerflag ? flag = 0 : flag = 1;
	return innerflag;
}

function loop(arr, fn) {
	var length = arr.length;
	for (var i = 0; i < length; i++) {
		if (fn(arr[i]) == undefined) {
			waitAnther.push(arr[i]);
		} else {
			fn(arr[i]) ? waitAnther.push(arr[i]) : removeWait(arr[i]);
		}
	}
}

function removeWait(str) {
	var length = waitAnther.length;
	length = length - 1;
	// console.log(waitAnther[length]);

	while (isTextNode(waitAnther[length])) {
		length = length - 1;
	}
	var segment = waitAnther.splice(length);
	segment = segment.join('') + str;
	 tree.push(segment) : addArray() //flag=1  mean children otherwise brother
		// console.log(flag+segment)
	flag = 1;

	function addArray() {
		var n = [];
		var treelength = tree.length;
		treelength ? (treelength = treelength - 1) : 0;
		if (tree.length) {
			n.push(tree[treelength]);
			n.push(segment);
			tree[treelength] = n;
		} else {
			return;
		}

	}
}

function isTextNode(str) {
	str ? (str[0] == '<' ? flag = 0 : flag = 1) : flag = 0;
	var flag;
	return flag;
}