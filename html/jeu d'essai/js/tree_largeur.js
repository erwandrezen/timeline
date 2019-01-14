var marquer = [];

var x = 10;
var y = 10;
var w = 50;
var h = 20;
var h_max = 200;


function explorer(sommet){
		//marquer.push(sommet);
		//var profondeur = {profondeur : marquer.length+1, largeur : l};

		//console.log(sommet);
		
		var values = sommet.values();
		var keys = Object.keys(sommet);
		
		var lesSousBranches = [];
		var lesBranches = [];
		var unSommet;
		var unSousSommet;


			resultat = values.next();
			
			// Pour chaque valeur en largeur
			while (!resultat.done) {
				//console.log(resultat.value.constructor.name);
				//console.log(resultat.value);
				var dejaParcouru = false;
					// On parcour les clées (tableau ou objet)
					for (key in resultat.value){
						
						// Si c'est un tableau (sous branche)
						if (resultat.value[key].constructor.name == "Array"){
							// on enregistre ses sous branches
							//console.log(resultat.value[key]);
							for (Souskey in resultat.value[key]){
								var sousBranche = resultat.value[key][Souskey]
								//console.log(sousBranche);
								lesSousBranches.push(sousBranche);
							}
						} else {
							// Si la clees n'es pas un tableau ni deja parcouru
							if (dejaParcouru == false){
								// On ajoute le parametre profondeur
								var profondeur = {profondeur : marquer.length+1, longueur : 'l'};
								resultat.value['profondeur'] = profondeur;
								console.log(resultat.value);
								// On enregistre toute cette branche
								lesBranches.push(resultat.value);
								// on indique que cette branche est deja parcouru
								dejaParcouru = true;
							}
							
						}
					}

			
                 resultat = values.next();
			}
			
			
		if (lesBranches.length > 0){
			console.log("Nouveau niveau");
			//console.log(lesBranches);
			
			marquer.push(lesBranches);
		}
		if (lesSousBranches.length > 0){
			//console.log(lesSousBranches);
			explorer(lesSousBranches);
			//return marquer;
			
		} else {
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
        	  explorer(file[sommet]);
        	}
    	} 
    	
    	*
    	*/