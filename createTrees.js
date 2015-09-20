var arrs = ['<html>', '<body>', 'hah', '</body>', '<div>', 'haha', '</div>', '</html>'];
var tree = [];
var pointerStack = [];
pointerStack[0] = tree;

function whatType(str) {
	var type;
	str[1] && str[1] == '/' && str[0] == '<' ? type = 1 : null;
	str[0] && str[0] == '<' && str[1] !== '/' ? type = 0 : null; //isOn
	str[0] && str[0] !== '<' || str[str.length - 1] !== '>' ? type = 2 : null;
	return type;
}

function loop(arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		var element = arr[i];
		switch (fn(arr[i])) {
			case 0:
				i ? addStack(element) : tree.push(element);
				break;
			case 1:
				if (!i) {
					throw ('progrma erro')
				} else {
					var segment = pointerStack[length - 1].join() + element; //obj
					pointerStack && (pointerStack.shift());
				}
				break;
			case 2:
				pointerStack.pointerStack[length - 1].push(element);
			default:
				break;

		}
	}
}

function addStack(ele) { //push stack &&  push stack table
	if (typeof(ele) == 'string') {
		var newStack = new Array();
		newStack[0] = ele;
		pointerStack[pointerStack.length - 1].push(newStack);
		pointerStack.push(newStack);

	} else {
		throw ('type erro,string requested')
	}
}