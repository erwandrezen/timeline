function explorer(sommet){
		
		marquer.push(sommet);
		
		var values = sommet.values();
		var newArray = [];
		var unSommet;
		var unSousSommet;

		if (sommet.length >= 1){
			//console.log(sommet);
			resultat = values.next();
			while (!resultat.done) {
				//newArray.push(resultat.value);
				unSommet = resultat.value;
				if (typeof unSommet == "object"){
					// Pour chaque sous sommet
					for (key in unSommet){
						// CONCAT
						unSousSommet = unSommet[key];
						newArray.push(unSousSommet);
					}
					//console.log(unSousSommet);
					
				}
                 resultat = values.next();
			}
			

		}
		

		/* Si le le tableau contient des donnees (les sous branches d'un seul niveau) 
			on continue à reutiliser cette fonction
		*/
		if (newArray.length > 0){
			console.log(marquer);
			explorer(newArray);
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
        	  sommet_voisin(file,sommet);
        	}
    	}*/