	function Node(){
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
		this.nodeType='';
		this.nodeName='';
		this.ownerDocumet='';
		this.baseURI='';//webpage uri
		this.parentNode='';
		this.parentElement='';//only for IE
		this.firstChild='';
		this.lastChild='';
		this.childNodes={};//nodelist
		this.previousSibling='';
		this.nextSibling='';
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

	}
	Node.prototype.compareDocumentPosition=function(othernode){//unfinished error
		this.childNodes[othernode]||this.parentNode.isEqualNode(othernode)?compareCotain(othernode):
		(function(){return this.DOCUMENT_POSITION_DISCONNECTED })();

		function compareCotain(){
			this.childNodes[othernode]?(function(){return this.DOCUMENT_POSITION_FOLLOWING})():
			(function(){return this.DOCUMENT_POSITION_FOLLOWING});
		}	


	}
	Node.prototype.insertBefore=function(newnode,existingnode){
		this.childNodes[this.childNodes.length]=newnode;
		existingnode.previousSibling?existingnode.previousSibling.nextSibling=newnode;
		existingnode.previousSibling?newnode.previousSibling=existingnode.nextSibling;
		existingnode.previousSibling=newnode;
		newnode.parentNode=this;


	}
	Node.prototype.in