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
