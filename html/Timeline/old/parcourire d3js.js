//Choisir un root

//Recuperer ses enfants
//Pourcourir ses enfants et recuperer ses enfants

//Modifier feuilles
let element_hidden = [];
function d3_Parcourir(root,w,h,d){ // Un noeud
	//Modifier feuilles
	Object.assign(root, {height: 1});
	let children = [root];
	
	var i = d;
	while (children.length > 0){
		
		//Enregistrer cette profondeur
		let essai = d3.select(children);
		let unObjet = {depth: i};
		children.map(m => {
			
			return Object.assign(m,unObjet);
		})
		
		/*initialise element_hidden
		 * i = profondeur*/
		element_hidden[i] = [];
	
		
		
		
		
		
		// Recuperer le niveau d'en dessous
		children = get_d3_children(children);
		
		//Modifier l'ordre de chaque noeud
		set_d3_ordre(children,i);
		save_element(children,2,"data");
		//Parcourire en hauteur
		// Soit pour chaque element
		// Enregistrer 2 element (l'ancien et le nouveau)
		i--;
	} 
	//supprimer le dernier tableeau
	element_hidden.pop();
	console.log("level",element_hidden);
}

function set_d3_ordre(liste,indice){ // liste d'objets
	try {
		/*i reference à l'odre de la hauteur en fonction du parent
		*Reintialisation a chaque niveau
		*/
		let i = 0;
		
		liste.forEach(function (f){
			
			//Increment i a chaque objet du même niveau
			i++;
			
			//Recuperation de l'ordre du parent
			let ordre_parent = f.parent.height;
			
			//indicer l'ordre courant en fonction du parent
			let ordre_courant = ordre_parent*10+i;
			
			//Assigner l'ordre courant à l'objet
			Object.assign(f, {height: ordre_courant});
			
			//Si l'element n'as pas d'enfant
			if (!f.children){
				//element_hidden[niveau actuelle][height]]
				console.log(indice);
				try{
					element_hidden[indice][i] = [false];
				} catch(e) {

				}
				
			}
				
		});
	} catch (e){
		console.log("Erreur sur la fonction set_d3_order",e)
	}
	
} //Ne renvoie rien modifie l'objet en lui meme

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


var depthCount = function (branch) {
    if (!branch.children) {
        return 1;
    }
    return 1 + d3.max(branch.children.map(depthCount));
 }

function save_element(liste, length,objet = null){ // Liste d'element d'objet
	let tmp = [];
	//Pour chaque element
	
	
	for (l in liste){
		
		let numero_tableau = l%length;

		let element = liste[l];
		if (objet){
			tmp[numero_tableau] = element[objet];

		} else {
			tmp[numero_tableau] = element;
		}
		
	}

	return tmp;
}

let constante = 15;

function d3_draw(root,w,h,d){
	let save_last_info_rect = {x:0, y:0, w:0, h:0};
	var save_last_branch = {d:3,h:1};
	let array = [];
	let largeur = 20;

	let nodes = [root];
	let svg = d3.select("body").append("svg");
	let g = svg.append("g");
	try {
		//Pour chaque element
		while (nodes.length){
			

			//Dessiner avec hauteur_rect = feuille *const
		
		g.selectAll("rect").data(nodes).enter().append("rect");

		
		nodes = nodes.map(m => {
			console.log("eee",m.children);
			return m.children});
		console.log("nn",nodes.flat());
		nodes = nodes.flat();
		
		//nodes = nodes.children;
		
			//largeur_rect = const
			//Sauvegarder depth, hauteur, hauteur_rect
		//Recuperer children
		}//Loop

	} catch (e){
		console.log("la fonction d3_drax a rencontrer un probleme",e);
	}
	
	
	
	
	
}