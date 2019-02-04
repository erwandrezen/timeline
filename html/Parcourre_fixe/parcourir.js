


//Parcourire en profondeur
//w,h referencer
	
	//Ecrire les feuilles
	/*var feuilles = root.leaves();
	console.log("feuilles: ", feuilles);*/
	
	//Ecrire x,y
	//Referencer un ordre en fonction du parent

var i = 0;
let essai = [];
function parcourir(root, w = 100, h = 15, information = {d:0,x:0,y:0,max_d:0,tmp_d:0}){ // ENTRER: ARRAY
	information.d += 1; // Ajout d'un niveau de profondeur
	

	//console.log("root: ", root);
		//Pour chaque element
	
	
	let noeuds = root.map(m => {
			
				let array_object = Object.values(m);
				//console.log(array_object);
				
				//Recuperer l'enfant et le placer dans pour un element
				var childrens = array_object.filter(f => f.constructor.name == "Array")
				
				//Mettre les enfants à plat
				childrens = childrens.flat();
				
				/* (S'il y'a des donnees (des enfants)) 
				 * ? 
				 * On reparcour 
				 * : 
				 * Sinon message dans la console
				*/
				// (childrens.length > 0 ? parcourir(childrens) : feuilles())
				
				Object.assign(m,{y:information.y});
				if(childrens.length > 0){
					//console.log("Parent: ",m);
					//information.p[0] = m;
					//console.log(information.p[0]);
					
					//Ajouter l'element contenant des enfants
					essai.unshift(m); // En partant de la fin du tableau
					
					//console.log("Childrens: ",childrens);
					parcourir(childrens, w,h,information);
				} else {
					//debugger
					
					
					//marquer la feuille
					Object.assign(m,{feuilles: 1});
					
					//console.log("Feuille - no childrens: ",childrens);
					information.y += 15;
					
					//console.log("i",information.d);
				}
				
				
				
				//Retourne rien
				return m;
			});


	//Pour chaque elements
	essai.map(un_obj => {
		//Valeurs et clées de l'objet un_obj
		let array_object = Object.values(un_obj);
		
		//Recuperation des enfants
		let mapping = array_object.filter(un_obj => un_obj.constructor.name == "Array");
		
		
		//Applatire la liste
		mapping = mapping.flat();
		
		//Initialise le compteur pour ce noeud
		let compter = 0;
		
		//Pour chaque enfant compter les feuilles
		let calcule = mapping.map((un_obj_enfant,i) => {
			
			//Recupere le nombre de feuille de cet enfant
			let feuilles = un_obj_enfant.feuilles;
			
			//L'ajoute au nombre total du noeud
			compter += feuilles;

			});
		un_obj.feuilles = compter;
		
		//Retourne rien
	});

	


if (information.d > information.max_d ){
	information.max_d = information.d;
}


let obj_val = Object.values(noeuds);
let max_depth = information.max_d;
let width = w / max_depth;
let depth = max_depth - information.d + 1;
let x = information.x;



obj_val.map(m => {

	let height = m.feuilles*h;
	//console.log(height,m.feuilles,m);

	
	Object.assign(
			m,
			{depth:depth},
			{height:height});
	
	
	x = width*(information.d-1);
	Object.assign(m,{x:x});
	
	//console.log(m.depth);
	let tmp_obj_val = Object.values(m);
	let tmp_filter = tmp_obj_val.filter(f => f.constructor.name == "Array");
	//console.log(tmp_filter, tmp_filter.length);
	//Si enfant
	if (tmp_filter.length > 0 ){
		Object.assign(m,{width:width});
		//information.y = 0;
	} else {

		Object.assign(m,{width:width*m.depth});
	}
	
	
	
});




		//reintialiser
		
		information.d -= 1; // Enleve d'un niveau de profondeur

		
return root;
} //RETURN ARRAY