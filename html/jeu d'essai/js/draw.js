/*
 * element: var element = hierarchypart.append("g");
 *x: position en x
 *y: position en y
 *w: width 	- largeur
 *h: height - hauteur 
 * */
function rectangle(element, x, y, w, h){
	element.append("rect")
    .attr("x", x)           .attr("y", y)
    .attr("width", w)      .attr("height", h);
}


function svg(svg_part,w,h){
	/*
	hierarchypart = d3.select("#hierarchypart")
    .append("svg")
    .attr("width",  window.innerWidth)
    .attr("height", 3000);
    */
	var unSVG = d3.select(svg_part,w,h)
	.append("svg")
	.attr("width",  w)
    .attr("height", h);
	
	return unSVG;
}