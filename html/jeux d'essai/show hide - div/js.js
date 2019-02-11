let rect = d3.selectAll("#rect");
let aa = d3.selectAll("rect");

let doc = d3.select(window)

rect.on("cuechange",function(d){
	console.log(aa);
})
aa.on("blur",function(d,i,e){
		console.log("cancel");
		d3.select(this).style("visibility","hidden")
	})
aa.node().focus();