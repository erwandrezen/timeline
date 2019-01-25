




/*///////////////////////////////////////
 * Permet d'afficher la palette de couleur
 ///////////////////////////////////////*/
function show_color(element){
	//Recupere la position de la souris
	let position = d3.mouse(element);
	
	// Affiche la couleur
	console.log(c_color);

	// Supprimer le menu contextuel
	d3.event.preventDefault();
	
	//Selectionne l'element de class 'color'
	d3.select(".color").transition()
	
	// Afficher une palette de couleur
    .style("visibility", "")
    
    // Positionne la palette
    .attr("transform","translate("+position+")");
}





/*////////////////////////////
 * Permet de créer un rectangle
 ////////////////////////*////
function rectangle(element, x, y, w, h, id=null, name= null, uneFonction = null){
	//Selection la div de class 'tooltip'
	let tooltip = d3.select(".tooltip");
	
	//a joute un rectangle
	element.append("rect")
	
	//Ajoute des attributs a ce rectangle
    .attr("x", x)           .attr("y", y)
    .attr("width", w)      	.attr("height", h)
    .attr("id", id)			.attr("name", name)
    .attr("fill",laCouleur)
    .attr("onclick",uneFonction)
    
    // Evenement d'entrer de la souris sur un element
    .on("mouseover", function () {
    	
    	// Recupere la position de la souris
    	let position = d3.mouse(this);
    	
    	position[1] -= 15;
    	tooltip.transition()
    	
    	// Changement d'opaciter
    	.style("opacity", .9); 
    	
    	// Creation de texte dans la div
    	//tooltip.html("{"+x+" ; "+y+"}") // POSITION de l'element
    	tooltip.html("<a href='http://google.fr'>url</a>"+name) // Nom de l'element
    	
    	
    	
    	// Deplacement du tooltip en X en partant d'en haut à gauche
    	.style("left", position[0] + "px") 
    	
    	// Deplacement du tooltip en Y en partant d'en haut à gauche
        .style("top",  position[1] + "px"); 

    })
    
    .on("contextmenu", function () {
    	show_color(this);
    	
    })
    
	.on("mouseout_", function () {
	    	// Modification du style de la div "tooltip" en transition
	    	tooltip.transition()
	    	
	    	// Changement d'opaciter
	    	.style("opacity", 0); 
	
	    })
    
    .on("contextmenu", function () {
    	show_color(this);
    	
    })

	 .on("click", function () {
	    	// Changer la couleur de l'element
	    	let s = d3.select(this);
	    	s.attr("fill", laCouleur);
	    })



}





/*//////////////////////////
 * Permet d'aligner le text
 ////////////////////////*/
function align_text(element){
	//Recuperer l'identifiant du bouton
	element = d3.select(element).attr("id");
	
	//Selectionner les elements cibles
	let d = d3.selectAll("text");
	
	// Compare l'identifiant du bouton cliqué
	if (element == "gauche"){
		//Aligner a gauche
		d.attr("text-anchor", "end");
		
	} else if (element == "centrer"){
		//Aligner au centre
		console.log("centrer");
		d.attr("text-anchor", "middle");
		
	} else if (element == "droite"){
		//Aligner a droite
		console.log("droite");
		d.attr("text-anchor", "start");
	}

	
}





/*/////////////////////////
 * Permet d'aligner le text
 ////////////////////////*/
function text(element,text, x, y,w,h){
	
	element.append("text")

    .attr("x", x+(w/2))           .attr("y", y+(h/3))
    .attr("text-anchor", "middle")
	.attr("dx", "0.2em")    .attr("dy", "0.9em")
	.attr("fill", "#111111") .html(text)
	
	.on("contextmenu", function () {
    	show_color(this);
    	
    })
}





/*///////////////////////////////////////
 * Permet de cacher la palette de couleur
 //////////////////////////////////////*/
function hide_color(){
	// Selection la couleur
	d3.select(".color").transition()
	
	//Modifie son attribut en "cacher"
    .style("visibility", "hidden");
}





/*////////////////////////
 * Permet dde créer un SVG
 ///////////////////////*/
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