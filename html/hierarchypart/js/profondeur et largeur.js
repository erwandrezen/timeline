
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

var essai_tmp = [];
function parcourire_arbre(sommet,profondeur = {profondeur:0, hauteur:0,feuilles_noeud:1},parent_noeud = []){
	
	// Si l'element est une liste (contient des sous noeud)
	if (sommet.constructor.name == "Array"){


		//console.log(sommet);
		
		// si l'element contient des donnees
		if (sommet.length > 0){
			
			// on ajoute un niveau de profondeur
			profondeur.profondeur += 1;
			
			/* pour chaque element 
			 * e = valeur d'une element du tableau
			 * i = l'indice de cet element du tableau
			*/
			let ii = 1;
			sommet.forEach(function(e,i){
				//console.log(e);
				// profondeur.hauteur = index du tableau qu'on parcour + 1
				
				/*  /!\ l'element peut etre soit un tableau soit un objet
				 * Mais la profondeur n'es pas sauvegarder à cette endroit dans le tableau
				 * la hauteur est egal a l'indice d'un element
				*/
				profondeur.hauteur = i+1;
				ii = profondeur.hauteur;
				// on parcoure l'element e en sauvegardant la profondeur
				parcourire_arbre(e,profondeur,parent_noeud);
				
			});
			
			//console.log("retour en haut", sommet);
			profondeur.profondeur -= 1;
		}
		
		
		
	}
	
	
	// Si l'element est un objet (contient un noeud / feature)
	if (sommet.constructor.name == "Object"){
		Object.assign(sommet,profondeur);
		
		//console.log(sommet,profondeur);
		// Enregistrer profondeur.profondeur
		//profondeur.hauteur += 1;
		/*
		console.log(profondeur.profondeur, profondeur.hauteur, sommet);
		try {
			essai_tmp[profondeur.profondeur][profondeur.hauteur] = sommet;
		} 
		
		catch(error) {
			essai_tmp[profondeur.profondeur] = ["profondeur: "+profondeur.profondeur];
			essai_tmp[profondeur.profondeur][profondeur.hauteur] = sommet;
			//console.log(error);
		}*/


		//essai_tmp[profondeur.profondeur][profondeur.hauteur] = sommet;
		
		//let profondeur = {profondeur : profondeur.profondeur};
		
		// Enregistrer profondeur.hauteur
		
			// Recuperer toutes les valeurs de l'objets
			let values = Object.values(sommet);
			
			// Recuperer toutes les valeurs de type tableau de cet objet
			let values_noeud = values.filter(a => a.constructor.name == "Array")
			
			
			// Si la longueur de values_noeud > 0 on renvoi vrai sinon on ajoute 1 à feuille
			bool_noeud = (values_noeud.length > 0 ? true : false);
			//console.log(values_noeud);
			// Si vrai
			//console.log(sommet);
			if (values_noeud.length > 0){
				let tmp_array = [];
				console.log("liste");
				parent_noeud.push(sommet);
				//console.log(parent_noeud);
				values_noeud.forEach(function(v){
					tmp_array = tmp_array.concat(v);
				});

				parcourire_arbre(tmp_array,profondeur,parent_noeud);
				
				
			} else {
				profondeur.feuilles_noeud = 1;
			}
			

		}
		

	
	
	
}