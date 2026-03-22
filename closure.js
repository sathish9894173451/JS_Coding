function outerFunction(){
	var name = "sathish";
	function innerFunction(){
	console.log(name)
}
	return innerFunction();
}
outerFunction();