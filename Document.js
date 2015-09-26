	var Node = require('./Node');
	function Document (arguments) {
		var nodeArguments = arguments.splice(0,11);//split para
		Node.Node.call(this,nodeArguments);//inherit
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
	//Document.prototype = new Node.Node([]);
	Document.prototype.getElementsByTagName=function(str){

	}
	Document.prototype.getElementsByTagNameNS=function(namespce,str){

	}
	Document.prototype.getElementsByClassName=function(str){

	}
	Document.prototype.getElementById=function(str){

	}
	Document.prototype.createElement =function(str){

	}
	Document.prototype.createElementNS=function(namespce,str){

	}
	Document.prototype.creteDocumentFragment=function(some){

	}
	Document.prototype.createTextNode = function(data){

	}
	Document.prototype.createComment=function(data){

	}
	Document.prototype.createProcessingInstruction=function(target,data){

	}
	Document.prototype.importNode=function(node,boolean){

	}
	Document.prototype.adoptNode=function(node){

	}
	Document.prototype.createRange=function(){

	}
	Document.prototype.createNodeIterator=function(root,whattoshow,filter){

	}
	Document.prototype.createTreeWalk=function(root,whattoshow,filter){

	}
	Document.prototype.prepend=function(node){

	}
	Document.prototype.append=function(){

	}
	exports.Document=Document;



