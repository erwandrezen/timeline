function f(){
	console.log("f");
	window.onload = function(){
		console.log("window");
		document.getElementById("div").onkeypress = s_console();
	}
}

function s_console(){
	let div = d3.select("body");
	
	div
	.on("keydown",function(){
		let key = d3.event;
		let alt = d3.event.altKey;
		console.log(key);
	})
}