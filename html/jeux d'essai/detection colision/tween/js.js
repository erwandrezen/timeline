let svg = d3.select("body")
.append("svg");

let g = svg.append("g");

g
.append("rect")
.attr("id","rect");

let transition = g
.append("rect")
.attr("class","rect");

d3.select("#rect")
.transition()
.duration(1000)
//.style("fill","red")
.tween("style.fill",function(){
	var c_rect = d3.selectAll(".rect");
	 var i1 = d3.interpolateRgb("green", "red");
	 var essai = d3.interpolateNumber(0, 10);
	return function(t) {
		//c_rect.style("fill",i1(t));
        console.log(essai(t));
      };
})
;
