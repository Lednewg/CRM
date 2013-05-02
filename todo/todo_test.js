steal(
	'funcunit',
	function (S) {

	// this tests the assembly 
	module("todo", {
		setup : function () {
			S.open("//todo/index.html");
		}
	});

	test("welcome test", function () {
		equals(S("h1").text(), "Welcome to JavaScriptMVC!", "welcome text");
	});

});
