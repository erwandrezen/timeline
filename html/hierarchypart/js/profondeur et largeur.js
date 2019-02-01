function element_is_object(sommet,profondeur = {profondeur:0, hauteur:0,feuilles_noeud:0}, noeud_max = 0,essai_var = [0,0]){
	

	// Si l'element est un objet (contient un noeud / feature)
	if (sommet.constructor.name == "Object")
	{
		sommet = sommet.data;
		console.log("s",sommet);
		//console.log(sommet,profondeur);
		
		//let profondeur = {profondeur : profondeur.profondeur};
		
		// Enregistrer profondeur.hauteur
		
		// Recuperer toutes les valeurs de l'objets
		let values = Object.values(sommet);	
		
		// Recuperer toutes les valeurs de type tableau de cet objet
		let values_noeud = values.filter(a => a.constructor.name == "Array")
		let tmp_array = [];
		//console.log(values_noeud,sommet);
		
		if (values_noeud.length > 0)
		{
			if (essai_var[profondeur.profondeur] > 0){
				essai_var[profondeur.profondeur] += 1;
			} else {
				essai_var[profondeur.profondeur] = 1;
			}
			//console.log("nouveau niveau", sommet);
			
			//console.log(noeud_max, sommet);
			//console.log(noeud.parent,noeud.max);
			//console.log(noeud.parent);
			values_noeud.forEach(function(v)
					{
						tmp_array = tmp_array.concat(v);
					});
			
			profondeur.feuilles_noeud = 0;
		} 
		else
		{                 
			profondeur.feuilles_noeud = 1;
			//console.log("feuille");

			let legth = essai_var.length;
			
				
				
				//console.log(essai_var[i],sommet);
				if (essai_var[profondeur.profondeur] > 0){
					for (i = profondeur.profondeur; i < legth ; i++){
						//console.log(i,profondeur.profondeur,essai_var.length, sommet);
						essai_var[i] += 1;
					}
					
				} else {
					essai_var[profondeur.profondeur] = 1;
				}
	
		}
		
		profondeur.hauteur = essai_var[profondeur.profondeur];
		Object.assign(sommet,profondeur);
		parcourire_arbre(tmp_array,profondeur,noeud_max,essai_var);
		return true;
		
	} 
	else
	{
		return false;
	}
}


/* Calcule le nombre de feuilles de ses sous noeuds
 * 
 * 
 * */
function calcule_feuilles_noeud(noeuds){
	noeuds.forEach(function(e){
		
		let arr = Object.values(e).filter(lst => lst.constructor.name == "Array");
		if (arr.length > 0){
			let essai = 0;
			
			arr[0].forEach(function(e){
				essai += e.feuilles_noeud;
			});
			e.feuilles_noeud = essai;
			
		}
	});
}

function element_is_array(sommet,profondeur = {profondeur:0, hauteur:0,feuilles_noeud:0},noeud_max = 0,essai_var = [0,0]){

	
	// Si l'element est une liste 
	if (sommet.constructor.name == "Array" ){
		
		// Si la liste contient des donnees (contient des sous noeuds)
		if (sommet.length > 0){

			// on ajoute un niveau de profondeur
			profondeur.profondeur += 1;
			//essai_var[profondeur.profondeur] = 0;
			noeud_max += 1;
			
			/* pour chaque element 
			 * e = valeur d'une element du tableau
			 * i = l'indice de cet element du tableau
			*/
			sommet.forEach(function(e,i){
				//console.log(e);
				// profondeur.hauteur = index du tableau qu'on parcoure + 1
				
				/*  /!\ l'element peut etre soit un tableau soit un objet
				 * Mais la profondeur n'es pas sauvegarder à cette endroit dans le tableau
				 * la hauteur est egal a l'indice d'un element
				*/
				//console.log(sommet,  essai_var[profondeur.profondeur]);
				

				
				//console.log(essai_var[essai_var.length-2]);
				
				// on parcoure l'element e en sauvegardant la profondeur
				parcourire_arbre(e,profondeur, noeud_max,essai_var);
				
			});
		
				//console.log("*FIN BRANCHE*", sommet);
				profondeur.profondeur -= 1;
				//ldsfg -= 1;
				// Fin de branche: calcule de feuille
				calcule_feuilles_noeud(sommet);

				return true;
		}
	
	} else {

		return false;
	}
}


function f_essai2(tabl){
	// Pour un type array contenant des objets
	// Recuperer ses noeuds (objets)
	let m = tabl.map(mp => Object.values(mp));
	let qsdfsdf = [];
	let unBool = false;
	//console.log("p",tabl);
	tabl = [];
	// Pour chaque noeud
	
	
	for (z in m){
		// noter ses sous noeud
		qsdfsdf = m[z].filter(f => f.constructor.name == "Array")
		console.log("p",m[z]);
		// enregistrer la liste des sous noeud
		qsdfsdf = qsdfsdf.map(m => qsdfsdf[0]);
		if (qsdfsdf.length <= 0){
			qsdfsdf.push({});
			//console.log("<0",qsdfsdf);
			
		} else {
			//console.log("_",qsdfsdf);
			unBool = true;
		}
		tabl = tabl.concat(qsdfsdf[0]);
		
	}

	return [unBool,tabl];
	
}

/* parcourire_arbre permet de parcourir un arbre en inscrivant la profondeur et ses feuilles du noeud n
 * 
 * 
 * 
 * le parametre:
 * 
 * - sommet renseigne le noeud racine
 * - profondeur permet la sauvegarder de la profondeur du noeud n
 * il n'es pas utile de le renseigner lors du lancement de la fonction
 * il n'es pas nécessaire de le prendre en compte
 * sert seulement de variable à cette fonction recursive
 * */

function parcourire_arbre(sommet,profondeur = {profondeur:0, hauteur:0,feuilles_noeud:0},noeud_max = 0, essai_var = [0,0]){
	/*
	let f_bool = true;
	while(f_bool){
		
		let f = f_essai2(sommet);
		f_bool = f[0];
		sommet = f[1];
			

		
	}
*/
	
//sommet = sommet.data;
console.log("s",sommet);
	// Si l'element est une liste (contient des sous noeud)
	let element_bool;

	if (!element_is_array(sommet, profondeur, noeud_max,essai_var)){
		element_bool = element_is_object(sommet, profondeur, noeud_max,essai_var);
		
	}
	//console.log(essai_var);
	//console.log(sommet);

	
}