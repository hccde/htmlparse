	var Node =require('./Node')
	function DocumentFragment(arguments){
		var nodeAgruments=arguments.splice(0,11);
		Node.apply(this,nodeAgruments);
	}

	DocumentFragment.prototype.prepend=function(node){

	};
	DocumentFragment.prototype.append=function(node){

	}
	exports.DocumentFragment=DocumentFragment;