width = 500;
height = 800;
var laCouleur = "white";

var body = d3.select("body");
var timeline = body.append("div")
.attr("id","timeline")
.style("display","flex"); //affiche les elements en lignes
var hierarchypart = timeline.append("div").attr("id","hierarchypart");
var occurpart = timeline.append("div").attr("id","occurpart");
var divTools = timeline.append("div").attr("id","tools");

svg = hierarchypart.append("svg").attr("width",width+"px").attr("height",height+"px");
		
svg 
	.append("g").attr("id","rect");
		
svg 
	.append("g").attr("id","polygon");
		
svg 
	.append("g").attr("id","text");
	




svg = occurpart.append("svg").attr("width",width+"px").attr("height",height+"px");

svg 
.append("g").attr("id","rect");
	
svg 
.append("g").attr("id","circle")

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
