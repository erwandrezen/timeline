


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
				
				
				/*
				if (m.uid == "ROOT/A/1/1"){
					Object.assign(m,{y:information.y},{show:false});
				} else {
					Object.assign(m,{y:information.y},{show:true});
				}*/
				
				
				if(childrens.length > 0){
					//console.log("Parent: ",m);
					//information.p[0] = m;
					//console.log(information.p[0]);
	
	
						
		
				
					//Ajouter l'element contenant des enfants
					
					//Si le parent à l'attribut show == true
					if (m.show || m.show == undefined) {
						essai.unshift(m); // En partant de la fin du tableau
					}
					
					
					//console.log("Childrens: ",childrens);
					parcourir(childrens, w,h,information);
				} else {
					//debugger
					
					
					//marquer la feuille
					
					
					//console.log("Feuille - no childrens: ",childrens);

						Object.assign(m,{feuilles: 1});
	
							
							
							
		
					

				
					
					//console.log("i",information.d);
				}
				
				
				
				if (m.show === undefined ){
					if(childrens.length < 1){
						information.y += 15;
					}
					console.log("*undefined");
					Object.assign(m,{show:true});
					Object.assign(m,{color:"white"});
					
				} else if (m.show){
					if(m.feuilles == 1){
						information.y += 15;
					}
				}
				
			
				
				//Retourne rien
				return m;
			});

//debugger;
	//Pour chaque elements show == true
	essai.map(un_obj => {
			
		
		//Valeurs et clées de l'objet un_obj
		let array_object = Object.values(un_obj);
		
		//Recuperation des enfants
		let mapping = array_object.filter(un_obj => un_obj.constructor.name == "Array");
		
		
		//Applatire la liste
		mapping = mapping.flat();
		
		//Initialise le compteur pour ce noeud
		let compter = 0;
		
		//Pour chaque enfant compter les feuilles avec show == true
		let calcule = mapping.map((un_obj_enfant,i) => {

			//Recupere le nombre de feuille de cet enfant
			
			
			//Si l'enfant doit etre afficher
		
				//L'ajoute au nombre total du noeud au parent
			if (un_obj_enfant.show){
				let feuilles = un_obj_enfant.feuilles;
				compter += feuilles;
			}
				
				
			
			

			});
		
		
			(compter == 0 ? un_obj.feuilles = 1 : un_obj.feuilles = compter);

		
		 //un_obj.feuilles = compter;
		 
		 
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


console.log(root);
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
	//console.log(tmp_filter, tmp_filter.length);
	
	//Si enfant
	if (m.feuilles != 1 && m.show == true){
		Object.assign(m,{width:width});
	} else {
		Object.assign(m,{width:width*m.depth});
	}
	
	
	
});




		//reintialiser
		
		information.d -= 1; // Enleve d'un niveau de profondeur

		
return root;
} //RETURN ARRAY