

var body = d3.select("body");
var timeline = body.append("div")
.attr("id","timeline")
.style("display","flex") // alignement en horizontal
.style("flex-wrap","wrap") // deplacement a la ligne quand il n'y a plus de place
.style("width",width*2+"px"); // definie la place

var timepart = timeline.append("div").attr("id","timepart");
var hierarchypart = timeline.append("div").attr("id","hierarchypart");
var occurpart = timeline.append("div").attr("id","occurpart");
var divTools = timeline.append("div").attr("id","tools");


svg = timepart.append("svg").attr("width",width*2+"px").attr("height",25+"px");
svg.append("g").attr("id","rect")
	.append("rect").attr("width",width*2+"px").attr("height",25+"px").attr("fill","white");
svg.append("g").attr("id","text")

	.append("foreignObject").attr("width",width+"px").attr("height",25+"px")
	.html("Hierarchy part")
	.style("text-align","center")

svg = hierarchypart.append("svg").attr("width",width+"px").attr("height",height+"px");		
svg.append("g").attr("id","rect");		
svg.append("g").attr("id","polygon");		
svg.append("g").attr("id","text");
	

svg = occurpart.append("svg").attr("width",width+"px").attr("height",height+"px");
svg.append("g").attr("id","rect");
svg.append("g").attr("id","circle")

/* CREATION d'un cercle d'essai
.append("circle")
.attr("cx","50" )
.attr("cy","50" )
.attr("r","40" )
.attr("stroke","black" )
.attr("stroke-width","3")
.attr("fill","red");
*/



divTools
	.append("div").attr("id","tooltip");
divTools
	.append("div").attr("id","colorpicker");
divTools
.append("div").attr("id","menu");
