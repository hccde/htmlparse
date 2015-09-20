function NodeFilter(){
	 this.FILTER_ACCEPT = 1;
  this.FILTER_REJECT = 2;
  this.FILTER_SKIP = 3;

  // Constants for whatToShow
  this.SHOW_ALL = 0xFFFFFFFF;
  this.SHOW_ELEMENT = 0x1;
  this.SHOW_ATTRIBUTE = 0x2; // historical
  this.SHOW_TEXT = 0x4;
  this.SHOW_CDATA_SECTION = 0x8; // historical
  this.SHOW_ENTITY_REFERENCE = 0x10; // historical
  this.SHOW_ENTITY = 0x20; // historical
  this.SHOW_PROCESSING_INSTRUCTION = 0x40;
  this.SHOW_COMMENT = 0x80;
  this.SHOW_DOCUMENT = 0x100;
  this.SHOW_DOCUMENT_TYPE = 0x200;
  this.SHOW_DOCUMENT_FRAGMENT = 0x400;
  this.SHOW_NOTATION = 0x800; // historical

}
NodeFilter.prototype.acceptNode=function(node){

}
exports.NodeFilter=NodeFilter;