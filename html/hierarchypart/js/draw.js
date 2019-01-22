/*
 * element: var element = hierarchypart.append("g");
 *x: position en x
 *y: position en y
 *w: width 	- largeur
 *h: height - hauteur 
 * */


  
function rectangle(element, x, y, w, h, id=null, name= null, uneFonction = null){
	let tooltip = d3.select(".tooltip");
	element.append("rect")
	
    .attr("x", x)           .attr("y", y)
    .attr("width", w)      	.attr("height", h)
    .attr("id", id)			.attr("name", name)
    .attr("fill","coral")
    .attr("onclick",uneFonction)
    
    // Evenement de d'entrer de la souris sur un element
    .on("mouseover", function () {
    	// Modification du style de la div "tooltip" en transition
    	tooltip.transition()
    	
    	// Changement d'opaciter
    	.style("opacity", .9); 
    	
    	
    	// Creation de texte dans la div
    	//tooltip.html("{"+x+" ; "+y+"}") // POSITION de l'element
    	tooltip.html(name) // Nom de l'element
    	
    	
    	
    	// Deplacement du tooltip en X en partant d'en haut à gauche
    	.style("left", (x+(w/2)) + "px") 
    	
    	// Deplacement du tooltip en Y en partant d'en haut à gauche
        .style("top", (y-20) + "px"); 

    })
	
    
	// Evenement de sortie de la souris sur un element
	.on("mouseout", function () {
		tooltip.transition()
		.style("opacity", 0);
  });


}

function text(element,text, x, y){
	element.append("text")
    .attr("x", x)           .attr("y", y)
	.attr("dx", "0.2em")    .attr("dy", "0.9em")
	.attr("fill", "#111111") .text(function(d) { return text; });
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


function essai(){
	  console.log(svg);
	console.log(event.target);
}