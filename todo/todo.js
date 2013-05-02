steal(
	'todo/models/todo.js',
	'todo/controls/todos',
	'./todo.less',
function(Todo, TodosControl){
	
	// Set up a route that maps to the `filter` attribute
	can.route(':filter');
	
	// Delay routing until we initialized everything
	can.route.ready(false);
	

	new TodosControl('#todoapp', {
		todos: new Todo.List({}),
		state: can.route
	});
	
	
	// Now we can start routing
	can.route.ready(true);
	
})