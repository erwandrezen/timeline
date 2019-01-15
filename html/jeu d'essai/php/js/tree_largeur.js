//Variable externe permettant d'enregistrer tout les sommets d'un niveau

var marquer = [];

function branche_niveau(sommet){
		//marquer.push(sommet);

		
	console.log(sommet);
		var values = sommet.values(sommet); // valeurs du sommet
		console.log(values);
		var profondeur = {}; // niveau de profondeur pour chaque des sommets
		var lesSousSommets = []; // variable temporaire permettant de stocker les sous-sommets de chaque sommet d'une branche qui n'as pas atteint sa feuille
		var lesSommets = []; // variable temporaire permettant de stocker seulement des branches du niveau actuel



	
		resultat = values.next();
			
		
		
		// Pour chaque valeur en largeur
		while (!resultat.done) {
				
			//console.log(resultat.value.constructor.name);
			//console.log(resultat.value);
				
			var dejaParcouru = false; // Variable indiquant si la branche a deja ete parcourue une fois
				
				
				// Pour chaque clées (key) du tableau ou objet (resultat.value) on parcour le tableau
				for (key in resultat.value){
						
					// Si la clées est de type tableau
					if (resultat.value[key].constructor.name == "Array"){
						
						//console.log(resultat.value[key]);
						
						// Pour chaque element de cette clee
						for (Souskey in resultat.value[key]){
								
							var unSommet = resultat.value[key][Souskey] // variable correspondant a un sous-sommet
							//console.log(sousBranche);
								
							// On ajoute cet nouveau sommet comme sous-branche
							lesSousSommets.push(unSommet);
								
							//console.log(lesSousSommets);
								
						}
					} else {
						// Si la clees n'es pas un tableau qui n'as pas été parcouru
						if (dejaParcouru == false){
								
							// On ajoute le parametre profondeur
							profondeur['profondeur'] = marquer.length+1;
							resultat.value['profondeur'] = profondeur;

							// On ajoute tout les sommets du niveau
							lesSommets.push(resultat.value);
								
							// On indique que cette branche est deja parcouru
							dejaParcouru = true;
						}
							
					}
				}

			
				resultat = values.next();
		}
			
		// S'il y as des données comportant les sommets du niveau actuel
		if (lesSommets.length > 0){
			console.log("Nouveau niveau");
			//console.log(lesSommets);
			
			// On ajoute 
			marquer.push(lesSommets);
		}
		if (lesSousSommets.length > 0){
			//console.log(lesSousSommets);
			branche_niveau(lesSousSommets);
			//return marquer;
			
		} else {
			//affiche toute les branches avec le paramètre: profondeur
			console.log(marquer);
		}
		
    }






/*
    // lancement des fonctions pour ouvrir le json,
    // recuperer les sommets
    function get_tree(graph, sommet) {
    	var request = open_json(graph);
    	var file;
        request.onload = function() {        
        	  file = request.response;
        	  branche_niveau(file[sommet]);
        	}
    	} 
    	
    	*
    	*/