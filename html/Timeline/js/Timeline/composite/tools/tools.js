body = d3.select("body");
timeline = body.select("#timeline");
divTools = timeline.append("div").attr("id","tools");

divTools
	.append("div").attr("id","tooltip");
divTools
	.append("div").attr("id","colorpicker");
divTools
.append("div").attr("id","menu");
