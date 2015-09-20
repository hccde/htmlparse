	var Node = require('./Node');
	function Document (arguments) {
		var nodeArguments = arguments.splice(0,11);//split para
		Node.apply(this,nodeArguments);//inherit
		this.implementation=arguments[0];
		this.URL=arguments[1];
		this.documentURL=arguments[2];
		this.compatMode =arguments[3];
		this.charset=arguments[4];
		this.characterSet=arguments[5];
		this.defaultCharset=arguments[6];
		this.contentType=arguments[7];
		this.doctype=arguments[8];
		this.documentElement=arguments[9];
	}
	Document.prototype = new Node([]);
	Document.prototype.getElementsByTagName(str){

	}
	Document.prototype.getElementsByTagNameNS(namespce,str){

	}
	Document.prototype.getElementsByClassName(''){

	}
	Document.prototype.getElementById(''){

	}
	Document.prototype.createElement(str){

	}
	Document.prototype.createElementNS(namespce,str){

	}
	Document.prototype.creteDocumentFragment(){

	}
	Document.prototype.createTextNode(data){

	}
	Document.prototype.createComment(data){

	}
	Document.prototype.createProcessingInstruction(target,data){

	}
	Document.prototype.importNode(node,boolean){

	}
	Document.prototype.adoptNode(node){

	}
	Document.prototype.createRange(){

	}
	Document.prototype.createNodeIterator(root,whattoshow,filter){

	}
	Document.prototype.createTreeWalk(root,whattoshow,filter){

	}
	Document.prototype.prepend(node){

	}
	Document.prototype.append(){

	}
	exports.Document=Document;



