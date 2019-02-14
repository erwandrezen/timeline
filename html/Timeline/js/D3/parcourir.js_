


//Parcourire en profondeur
//w,h referencer
	
	//Ecrire les feuilles
	/*var feuilles = root.leaves();
	console.log("feuilles: ", feuilles);*/
	
	//Ecrire x,y
	//Referencer un ordre en fonction du parent

var i = 0;
let essai = [];
let root_passed = false;
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
				
				var childrens = [];
				if (m.show == true || m.show == undefined){

					//Recuperer l'enfant et le placer dans pour un element
					childrens = get_childrens([m]);
					childrens = childrens.filter(f => f.show == true || f.show == undefined);
					
				}
				
	
				
				
				
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
				
				//Si la vue n'es pas definie
				if (m.show === undefined ){
					
					//On affect seulement le root en true
					if (root_passed){
						Object.assign(m,{show:false});
					} else {
						Object.assign(m,{show:true, root:true});
						root_passed = true;
					}
					Object.assign(m,{color:"white"});
		
				} 
				
				
	
				

				if(childrens.length > 0){
					//console.log("Parent: ",m);
					//information.p[0] = m;
					//console.log(information.p[0]);
	
	
						
		
				
					//Ajouter l'element contenant des enfants
					
					//Si le parent à l'attribut show == true

						essai.unshift(m); // En partant de la fin du tableau

					
					
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
							information.y += 15;

					
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
		
		//Recuperation des enfants
		let mapping = get_childrens([un_obj], true);
		
		//Compter les feuilles des enfants
		let i = 0;
		let compteur = mapping.map(m => {
			(m.feuilles == 0 ? i += 1 : i += m.feuilles);
		})
		
		//Inscrire le nombre des feuilles pour ce noeud
		un_obj.feuilles = i;



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


i = 0;
function get_childrens(array, filter = undefined){ //LISTE d'objet
	let liste = [];
	// Pour chaque objet
	array.map(obj => {
		
		if (obj.children != undefined){
			liste.push(obj.children);
		}
		
/*
		//Supprime les occurances comme enfants
		delete obj.occurs;

		
		//Recupere sous forme de tableau les valeurs et les clees de l'objet
		let obj_values = Object.values(obj);

		
		
		//Filtrer pour les valeurs de type liste
		let filtre = obj_values.filter((f) => {
			

			
			return f.constructor.name == "Array"
			
		});
		
		filtrer = filtre.flat();
		
		liste.push(filtrer);
		*/
		
		
		
	}) //Retourne rien
	
	liste = liste.flat();
	
	if (filter != undefined){
		liste = liste.filter(f => f.show == filter);
		
	}
	
	return liste;
} // RETOURNE LISTE


function get_all_childrens(array, filter = undefined){ //LISTE d'objet
	let datas = [] //list d'objet
	let tmp = array;
	
	datas.push(tmp);
	
	while (tmp.length > 0){
		tmp = get_childrens(tmp);
		datas.push(tmp);
		
	}
	
	tmp = undefined;
	
	datas = datas.flat();
	
	if (filter != undefined){
		datas = datas.filter(f => f.show == filter);
	}
	
	
	return datas;
}
