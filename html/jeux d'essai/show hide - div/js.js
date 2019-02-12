let rect = d3.selectAll("#rect1");
let aa = d3.selectAll("div");

let doc = d3.select(window)

document.getElementById('#rect1').focus();
rect.on("blur",function(d,i,e){
		console.log("cancel");
		d3.select(this).style("visibility","hidden")
	})
	document.getElementById('#rect1').focus();
rect.node().focus();