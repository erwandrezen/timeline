
var height = 1500;
var body = d3.select("body");
var timeline = body.append("div")
.attr("id","timeline")
.style("display","flex") // alignement en horizontal
.style("flex-wrap","wrap") // deplacement a la ligne quand il n'y a plus de place
.style("width",width*2+20+"px") // definie la place
.style("overflow","scroll");

var timepart = timeline.append("div").attr("id","timepart");
var hierarchypart = timeline.append("div").attr("id","hierarchypart");
var occurpart = timeline.append("div").attr("id","occurpart");
var divTools = timeline.append("div").attr("id","tools");


svg = timepart.append("svg").attr("width",width*2+"px").attr("height",25+"px");
svg.append("g").attr("id","rect")
	.append("rect").attr("width",width*2+"px").attr("height",height+"px").attr("fill","white");
let text = svg.append("g").attr("id","text")
text.append("foreignObject").attr("width",width+"px").attr("height",25+"px").attr("x",width+"px").attr("id","chronologique")
	.html("Occurrence part")

text.append("foreignObject").attr("width",width+"px").attr("height",25+"px")
	.html("Hierarchy part")
	.style("text-align","center")
	.style("background-color","white")


	

svg = hierarchypart.append("svg").attr("width",width+"px").attr("height",height+"px");		
svg.append("g").attr("id","rect");		
svg.append("g").attr("id","polygon");		
svg.append("g").attr("id","text");
	

svg = occurpart.append("svg").attr("width",width+"px").attr("height",height+"px");
svg.append("g").attr("id","rect");

let r = 5;
svg.append("g").attr("id","circle").append("g")

 //CREATION d'un cercle d'essai
/*
.append("circle")
.attr("cx","50" )
.attr("cy",r*2)
.attr("r",r )
.attr("fill","red");*/




divTools
	.append("div").attr("id","tooltip");
divTools
	.append("div").attr("id","colorpicker");
divTools
.append("div").attr("id","menu");
