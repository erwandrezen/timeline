let rect1 = d3.select("#rect1");
let bbox = rect1.node().getBBox();
let x = bbox.x
let y = bbox.y
let pos1 = [x,y];

//d3.select("polygon").attr("points","")

d3.select("polygon").on("click",function(){
	console.log("clicked");
});