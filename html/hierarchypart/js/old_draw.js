/*
 * element: var element = hierarchypart.append("g");
 *x: position en x
 *y: position en y
 *w: width 	- largeur
 *h: height - hauteur 
 * */

function f_essai(unName){
	let tooltip = d3.select(".tooltip");
	// Modification du style de la div "tooltip" en transition
	var e = window.event;
	console.log(tooltip);
	tooltip.transition()
	.style( "transition-delay", "0s")
	// Changement d'opaciter
	.style("opacity", .9); 
	
	
	// Creation de texte dans la div
	//tooltip.html("{"+x+" ; "+y+"}") // POSITION de l'element
	tooltip.html(unName) // Nom de l'element
	
	
	
	// Deplacement du tooltip en X en partant d'en haut à gauche
	.style("left", e.clientX + "px") 
	
	// Deplacement du tooltip en Y en partant d'en haut à gauche
    .style("top", e.clientY + "px"); 
}
  
function rectangle(element, x, y, w, h, id=null, name= null, uneFonction = null){
	element.append("rect")
	
    .attr("x", x)           .attr("y", y)
    .attr("width", w)      	.attr("height", h)
    .attr("id", id)			.attr("name", name)
    .attr("fill","coral")
    .attr("onclick",uneFonction)
    
    // Evenement de d'entrer de la souris sur un element
    /*
    .on("mousemove", function () {
    	f_essai(name);

    })*/
	
    .on("mousehover", function () {
    	f_essai(name);

    })
    
	// Evenement de sortie de la souris sur un element
	.on("mouseout", function () {
		let tooltip = d3.select(".tooltip");
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


/*
FONCTION			largeur rectangle
*/
function largeur_rect(niveau_actuel, width_max, somme_largeur_parrents,feuilles_noeud_n){
		/* Exemple
		sur 5 niveau
		
		niveau noeu source(root) = 5
		
		niveau actuelle = 3
		width_max = 500
		somme_largeur_parrents = 200
		
		
		On soustrait width_max (500) par la somme_largeur_parrents (200) soit 500-200 = 300
		qu'on divise par le niveau actuelle: 3 soit 300/3 = 100
		qu'on ajoute à la largeur parrents: 200 soit 200+100 = 300
		*/
		
		
		/* si c'est une feuille
		On soustrait width_max (500) par la somme_largeur_parrents (200) soit 500-200 = 300
		*/
		if (feuilles_noeud_n == 1){
			let somme_parrent = somme_largeur_parrents;
			let result = width_max - somme_largeur_parrents;
			return [somme_parrent, result];
		} else {
			let somme_parrent = somme_largeur_parrents;
  		let result = width_max - somme_largeur_parrents;
  		result = result / niveau_actuel;
  		somme_parrent += result;
  		return [somme_parrent, result];
  		
		}
		
		
		
	}


	
	
	
/*
FONCTION			hauteur rectangle
*/
function hauteur_rect(feuilles_noeud_n, c){
	return feuilles_noeud_n * c;
}
