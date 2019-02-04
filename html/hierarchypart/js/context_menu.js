//Creation de la div .navigation
function navigation(element){
	let e = element
	.append("div")
	.attr("id", "navigation");
	
	return e;
} //Retourne un element





//Creation d'un menu
function navigation_menu(element){
	let e = element
	.append("menu");
	
	return e;
} //Retourne un element





 //Creation d'un li (item)
function navigation_li(element,html,uneFonction = null){
	let e = element
	.append("li")
	.html(html)
	.attr("onclick",uneFonction);
	return e;
} //Retourne un element
	//Ajout possible d'une fonction
	//Ajout possible d'un text
	//Ajout possible d'un menu dans li


/*///////////////////////////////////////
 * Permet de créer un menu contextuelle
 ///////////////////////////////////////*/
function context_menu(){
	//Selection de l'endroit cible
	let body = d3.select("body");
	let mon_menu = body.append("div");
	
	mon_menu
	.attr("id","menu");

	//Ajout d'une div principal
	let nav = navigation(mon_menu);
	nav.style("visibility", "hidden");
		//Ajout d'un menu
		let menu = navigation_menu(nav);
		
			//Comportant des items
			navigation_li(menu,"item 1 <a href='google.fr'>url google</a>");
			let li = navigation_li(menu,"item 2");
				let menu2 = navigation_menu(li);
					navigation_li(menu2,"item 2.1 Color picker","show_color()");
			li = navigation_li(menu,"item 3");
}
