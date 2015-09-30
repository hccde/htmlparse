	function Node(arguments){
		this.ELEMENT_NODE=1;
		this.ATTRIBUTE_NODE=2;
		this.TEXT_NODE=3;
		this.CDATA_SECTION_NODE=4;
		this.ENTITY_REFERENCE_NODE=5;
		this.ENTITY_NODE=6;
		this.PROCESSING_INSTRUCTION_NODE=7;
		this.COMMENT_NODE=8;
		this.DOCUMENT_NODE=9;
		this.DOCUMENT_TYPE_NODE=10;
		this.DOCUMENT_FRAGMENT_NODE=11;
		this.NOTATION_NODE=12;
		this.nodeType=arguments[0];
		this.nodeName=arguments[1];
		this.ownerDocument=arguments[2];
		this.baseURI=arguments[3];//webpage uri
		this.parentNode=arguments[4];
		this.parentElement=arguments[5];//only for IE
		this.firstChild=arguments[6];
		this.lastChild=arguments[7];
		this.childNodes=arguments[8];//nodelist
		this.previousSibling=arguments[9];
		this.nextSibling=arguments[10];
		this.DOCUMENT_POSITION_DISCONNECTED=1;
		this.DOCUMENT_POSITION_PRECEDING=2;
		this.DOCUMENT_POSITION_FOLLOWING=4;
		this.DOCUMENT_POSITION_CONTAINS=8;
		this.DOCUMENT_POSITION_CONTAINED_BY=16;
		this.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC=32;
	}
	Node.prototype.hasChildNodes=function(){
		return new Boolean(this.childNodes);
	}
	Node.prototype.isEqualNode = function(){
//unfinished
	}
	Node.prototype.compareDocumentPosition=function(othernode){//unfinished error
		this.childNodes[othernode]||this.parentNode.isEqualNode(othernode)?compareCotain(othernode):
		(function(){return this.DOCUMENT_POSITION_DISCONNECTED })();

		function compareCotain(){
			this.childNodes[othernode]?(function(){return this.DOCUMENT_POSITION_FOLLOWING})():
			(function(){return this.DOCUMENT_POSITION_FOLLOWING});
		}	


	}
	Node.prototype.contain = function(){//unfinshed
		return Boolean
	}
	Node.prototype.appendChild = function(node){

	}
	Node.prototype.replaceChild = function(nodeA,nodeB){

	}
	Node.prototype.removeChild = function(child){

	}
	Node.prototype.normalize =function(){

	}
	Node.prototype=function cloneNode(boolean){

	}
	Node.prototype.lookUpPrefix = function(namespace){

	}
	Node.prototype.lookUpNamespaceUrI=function(){

	}
	Node.prototype.isDefaultNamespace=function(){

	}
	Node.prototype.insertBefore=function(newnode,existingnode){
		this.childNodes[this.childNodes.length]=newnode;
		existingnode.previousSibling?existingnode.previousSibling.nextSibling=newnode:null;
		existingnode.previousSibling?newnode.previousSibling=existingnode.nextSibling:null;
		existingnode.previousSibling=newnode;
		newnode.parentNode=this;


	}
	exports.Node=Node;