var htmlparse = require('./htmlparse');
var Document = require('./Document');
var Element = require('./Element');
var Text = require('./Text');
var Attr = require('./Attr');
/******/
//typeof stack is Array,we know tree's shape
/******/
var arrs = ['<!DOCTYPE html>', '<html>', '<head>', 'hah', '</head>','<style>','mystyle','</style>',
 '<p>', 'ha', '<centre>','test', '<strong>', 'ko', '</strong>', '</centre>',
	'</p>', '<div>', 'mydiv', '</div>',
	'</html>',
];
var pointer = [];
var stack = [];
stack[0] = arrs[0];
pointer[0] = stack;

function createArray(filename) {
	// var arrs =htmlparse.htmlparse('1.html');
	var lastElemetIsOn = 1; //unfinished
	for (var i = 1; i < arrs.length; i++) {
		var eleType = type(arrs[i]);
		if (eleType !== undefined) {
			eleType == 0 ? parent(arrs[i]) : (eleType == 1 ? backPointer(arrs[i]) :
				pointer[pointer.length - 1].push(arrs[i]));
		} else {;
		}

	}
	return stack;
}

// console.log(createArray('1.html')[1]);

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

function getEleName(str) {

	var strarry = str.split('');
	strarry.pop();
	strarry.shift();
	var str = strarry.join('');
	var purestr = trim(str);
	var rough = purestr.split(' ');
	var name = rough.shift();
	var id = void 0;
	var classstyle = [];
	var attributes={};

	rough.forEach(function(e) {

		if (e != ' ') {
			var keyAndValue = e.split('=');
			var key = trim(keyAndValue[0]).toLowerCase();
			var value = trim(keyAndValue[1]).toLowerCase();
			arrtibutes[key] = (new Attr.Attr([2, key, 'document', null, null,
				null, null, null, [], null, null, null, null, name, name, value
			]));
			if (key == 'id') {
				id = value;
			} else if (key == 'class') {
				classstyle.push(value);

			}
		};
	});

	function trim(strs) {
		return strs.replace(/^\s+|\s+$/g, '')
	}
	return {
		'name': name,
		'id': id,
		'attributes': attributes,
		'classstyle': classstyle

	}

}
function createTrees(filename) {
	// var arrs =htmlparse.htmlparse('1.html');
	stack = createArray(filename);
	var child = [];
	var url = 'localhost';
	var documentElemet = stack;
	var length = stack.length;
	var arguments = [9, '#document', null, url, null,
		null, stack[0], stack[length - 1], stack,
		null, null, "DocumetImplementationObject", url, url, "CSS1Compat", 'UTF-8', "UTF-8", "windows-1252", "text/html", "<!DOCTYPE html>", stack[length - 1]
	];
	var documentnode = new Document.Document(arguments);
	var lastNode = documentnode;
	var list = [];
	var nextCollect;
	var collect = lastNode.documentElement;
	var father = documentnode;

	function expandArray(col) { //col is childNodes Array
		col.pop();
		var collectObject = col.map(function(e) {
			return packageObject(e);
		});
		dealRelation(collectObject); //deal child's relationship
	}


	function packageObject(arryorstring) {
		var obj;
		if (typeof(arryorstring) == 'string') {
			if (arryorstring[0] == '<' &&
				arryorstring[arryorstring.length - 1] == '>') {
				obj = createCommonNode(arryorstring) //common node
			} else {
				obj = createText(arryorstring) //text node
			}
		} else {
			obj = packageList(arryorstring); //array
			list.push(obj);
		}
		return obj;
	}

	function dealRelation(col) {
		if (father==documentnode) {
			father.childNodes=[col[0]];
			father.firstChild=col[0];
			father.lastChild=col[0];
			father=col.shift();
		}

		father.childNodes = col;
		if (col.length !== 0) {
		father.firstChild = col[0];
		father.lastChild = col[col.length - 1];
		if (col.length<2) {
			col[0].nextSibling=null;
			col[0].previousSibling=null;
		}else if(col.length==2){
			col[0].previousSibling=null;
			col[col.length-1].nextSibling=null;
		}else{
			for(var j=1;j<col.length-1;j++){
				if (col[j]) {
					col[j].previousSibling=col[j-1];
					col[j].nextSibling=col[j+1];
				}
			}
		}

		col.forEach(function(e) {
				if (!e) {return};
				e.parentNode = e.parentElement = father;
		});
			//next loop
	}		

		if (list.length!=0) {
			father = list.shift() ; //choose the first one as new father
			expandArray(father.childNodes); //array
			}else{
				console.log(documentnode.childNodes[0].childNodes[1].childNodes[0].nodeName);//result
			return;
		}

	}

	function packageList(arry) {
		if (arry.length == 0) {
			return
		}
		// console.log(arry);
		var fisrtobj = packageObject(arry.shift());
		fisrtobj.childNodes = arry;
		// console.log(fisrtobj.nodeName)
		return fisrtobj;
	}

	function createCommonNode(str) {
		var tagDetail = getEleName(str);
		var tagName = tagDetail.name;
		var idname = tagDetail.id;
		var attributes = tagDetail.arrtibutes;
		var classlist = tagDetail.classstyle;
		return new Element.Element([1, tagName.toUpperCase(), '#document',
			url, father, father, null, null, [], null, null, 'namespace',
			'prefix', tagName.toLowerCase(), tagName.toUpperCase(),
			idname, classlist, attributes, [], null, null, null, null, null
		]);

	}

	function createText(str) {
		return new Text.Text([3, '#text', '#document',
			url, father, father, null, null, [], null, null, str,
			str.length, str
		]); //third str ===the whole text
	}

	expandArray(collect);

}
createTrees("1.html");