/*
 * element: var element = hierarchypart.append("g");
 *x: position en x
 *y: position en y
 *w: width 	- largeur
 *h: height - hauteur 
 * */

function menu(x,y){
	d3.select(".color").transition()
    .style("visibility", "")
    .attr("transform","translate("+x+","+y+")");
}

function show_color(element){
	let position = d3.mouse(element);
	let x = position[0];
	let y = position[1];
	console.log(c_color);
	// Après clique droit
	// Supprimer le menu contextuel
	d3.event.preventDefault();
	
	// Afficher une palette de couleur
	menu(x, y);
}
  
function rectangle(element, x, y, w, h, id=null, name= null, uneFonction = null){
	
	let tooltip = d3.select(".tooltip");
	
	element.append("rect")
	
    .attr("x", x)           .attr("y", y)
    .attr("width", w)      	.attr("height", h)
    .attr("id", id)			.attr("name", name)
    .attr("fill","white")
    .attr("onclick",uneFonction)
    // Evenement de d'entrer de la souris sur un element
    .on("mouseover", function () {
    	
    	let position = d3.mouse(this);
    	let x = position[0];
    	let y = position[1];
    	// Modification du style de la div "tooltip" en transition
    	tooltip.transition()
    	
    	// Changement d'opaciter
    	.style("visibility", "");
    	
    	
    	// Creation de texte dans la div
    	tooltip.html(name)
    	
    	.style("left", x + "px") 
    	.style("top", y + "px"); 
    	//tooltip.html("{"+x+" ; "+y+"}") // POSITION de l'element

    })
    
    .on("contextmenu", function () {
    	show_color(this);
    	
    })

 .on("click", function () {
    	//Cacher la palette de couleur
    	
        
    	// Changer la couleur de l'element
    	let s = d3.select(this);
    	s.attr("fill", laCouleur);
    })

    
	// Evenement de sortie de la souris sur un element


}

function text(element,text, x, y){

	element.append("text")
    .attr("x", x)           .attr("y", y)
	.attr("dx", "0.2em")    .attr("dy", "0.9em")

	.attr("fill", "#111111") .text(function(d) { return text; })
	
	.on("contextmenu", function () {
    	show_color(this);
    	
    })
}


function hide_color(){
	d3.select(".color").transition()
    .style("visibility", "hidden");
}



function UnSvg(svg_part,w,h){
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