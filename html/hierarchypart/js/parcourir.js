


//Parcourire en profondeur
//w,h referencer
	
	//Ecrire les feuilles
	/*var feuilles = root.leaves();
	console.log("feuilles: ", feuilles);*/
	
	//Ecrire x,y
	//Referencer un ordre en fonction du parent

var i = 0;
let essai = [];
function parcourir(root,
		w = 100,
		h = 15,
		start_functions = [], //Liste de nom des fonctions a lancer au debut
		parcour_functions = [],//Liste de nom des fonctions a lancer pendant
		end_functions = [], //Liste de nom des fonctions a lancer a la fin
		information = {d:0,x:0,y:0,max_d:0,tmp_d:0})
{ // ENTRER: ARRAY
	information.d += 1; // Ajout d'un niveau de profondeur
	
	// S'il y'a des fonction les lancé sinon renvoyer null
	(start_functions.length > 0 ? start_functions.forEach(function(f){f();}) : null);
	
	
	let noeuds = root.map(m => {
				// S'il y'a des fonction les lancé sinon renvoyer null
				(parcour_functions.length ? parcour_functions.forEach(function(f){f();}) : null);
				
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
				if (m.show === undefined ){
					if(childrens.length < 1){
						information.y += 15;
					}
					//console.log("*undefined");
					Object.assign(m,{show:true});
					Object.assign(m,{color:"white"});
					
				} else if (m.show){
					if(m.feuilles == 0){
						information.y += 15;
					}
				}
				
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
					parcourir(childrens, w,h,
							start_functions, 
							parcour_functions,
							end_functions, information);
				} else {
					//debugger
					
					
					//marquer la feuille
					
					
					//console.log("Feuille - no childrens: ",childrens);

						Object.assign(m,{feuilles: 0});
	
							
							
							
		
					

				
					
					//console.log("i",information.d);
				}
				
				
				
				
				
			
				
				//Retourne rien
				return m;
			});

//debugger;
	
	
	
	

if (information.d > information.max_d ){
	information.max_d = information.d;
}

set_feuilles(essai);
set_rect_info(noeuds, w, h, information);

//S'il y'a des fonction les lancé sinon renvoyer null
(end_functions.length > 0 ? end_functions.forEach(function(f){f();}) : null);





		//reintialiser
		
		information.d -= 1; // Enleve d'un niveau de profondeur

		
return root;
} //RETURN ARRAY



function set_feuilles(liste){
	//Pour chaque elements show == true
	liste.map(un_obj => {
			
		
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
				if (un_obj_enfant.feuilles == 0){
					compter += 1;
				} else {
					compter += un_obj_enfant.feuilles;
				}
				
			}
				
				
			
			

			});
		
		
			un_obj.feuilles = compter;

		
		 //un_obj.feuilles = compter;
		 
		 console.log(root);
		//Retourne rien
	});
}


function set_rect_info(noeuds, w, h, information){
	let obj_val = Object.values(noeuds);
	let max_depth = information.max_d;
	let width = w / max_depth;
	let depth = max_depth - information.d + 1;
	let x = information.x;
	obj_val.map(m => {
		
		//Si la feuilles = 0 la hauteur seras une ligne sinon on multipli la ligne
		(m.feuilles == 0 ? height = h : height = m.feuilles*h);
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
		if (m.feuilles != 0 && m.show == true){
			Object.assign(m,{width:width});
		} else {
			Object.assign(m,{width:width*m.depth});
		}
		
		
		
	});
}