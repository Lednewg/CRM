steal('can/util','can/view/mustache',function(can){
	can.Mustache.registerHelper('plural', function (str, count) {
		return str + (count !== 1 ? 's' : '');
	});
})
