width = 500;
height = 800;

var body = d3.select("body");
var timeline = body.append("div").attr("id","timeline");
var hierarchypart = timeline.append("div").attr("id","hierarchypart");
var divTools = timeline.append("div").attr("id","tools");

svg = hierarchypart.append("svg").attr("width",width+"px").attr("height",height+"px");
		
svg 
	.append("g").attr("id","rect");
		
svg 
	.append("g").attr("id","polygon");
		
svg 
	.append("g").attr("id","text");
	


divTools
	.append("div").attr("id","tooltip");
divTools
	.append("div").attr("id","colorpicker");
divTools
.append("div").attr("id","menu");
