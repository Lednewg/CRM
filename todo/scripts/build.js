//js todo/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build',function(){
	steal.build('todo/scripts/build.html',{to: 'todo'});
});
