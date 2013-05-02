//js todo/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs", function(DocumentJS){
	DocumentJS('todo/index.html', {
		markdown : ['todo', 'steal', 'jquery', 'can', 'funcunit']
	});
});