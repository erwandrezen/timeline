//Choisir un root

//Recuperer ses enfants
//Pourcourir ses enfants et recuperer ses enfants

//Modifier feuilles

function d3_Parcourir(root){ // Un noeud
	let children = [root];
	
	while (children.length > 0){
		
		// Recuperer le niveau d'en dessous
		children = get_d3_children(children);
		save_element(children,2,"data");
		//Parcourire en hauteur
		// Soit pour chaque element
		// Enregistrer 2 element (l'ancien et le nouveau)
		
	} 
	
}

function get_d3_children(noeud){ //Liste de noeud
	let tmp = [];
	

	// Pour chaque element
	for (n in noeud){
		let children = [];
		//recuperer ses enfants
		
		try {
			children = noeud[n].children;
			
			//Recuperer la longueur sinon envoi une erreur
			children.length;
		} catch(e) {
			console.log("error");
			children = [];
		}
		
		
			//le sauvegarder
			tmp = tmp.concat(children);
			
		
		
			
	}
		
	//Returouner la sauvegarde
	return tmp;
} // Liste de noeud


function save_element(liste, length,objet = null){ // Liste d'element d'objet
	let tmp = [];
	//Pour chaque element
	
	
	for (l in liste){
		
		let numero_tableau = l%length;
		console.log(numero_tableau);
		let element = liste[l];
		if (objet){
			tmp[numero_tableau] = element[objet];
			console.log("f");
		} else {
			tmp[numero_tableau] = element;
		}
		
	}
	console.log("a",tmp);
}