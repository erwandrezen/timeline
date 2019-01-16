var marquer = []; // DONNEES FINAL

function branche_profondeur(sommet){
	
    	var lesSousSommets = []; // variable temporaire correspondant aux sommets d'un sous sommet
    	var keys = Object.keys(sommet); // iterateur de clées du sommets
		
    	let i = 0;
    	
		// Parcourir pour chaque valeurs
    	keys.forEach(function(e){
    		
    		//debugger;
        	// Si c'est un objet (une partie de la hierarchy part)
    		if (sommet[e].constructor.name == 'Object'){
    			//debugger;
    			
    			let tmp = []; // Variable temporaire
    			let hauteur = {hauteur : parseInt(e) + 1};// Niveau de hauteur		pour chaque des sommets
    			//console.log(e, profondeur);
    			
    			
    			Object.assign(tmp,sommet[e] , hauteur);	// Ajout objet profondeur 	dans l'objet 	tmp
    			console.log(tmp);
    			
    			
    			marquer.push(tmp); //Enregistre cette variable aleatoire
    			
    			
    			
    			/*
        		FONCTION			Parcoure chaque clée de l'objets courrant
        		*/
    			branche_profondeur(sommet[e]);


    		} 
    		

    		
    		if (sommet[e].constructor.name == 'Array'){
    			

    			// On ajoute le tableau à la liste des tableaux à parcourir
    			sommet[e].forEach(function(e){
    				lesSousSommets.push(e);
    			});
    			
    			//branche_profondeur(sommet[e]);
    			
    			
    		}

    	});

    	
    	// Si des sous sommets sont affectés
    	if (lesSousSommets.length > 0){
    		//On relance la fonction
    		branche_profondeur(lesSousSommets);
    		
		}
    }





/*
    function get_tree(graph, sommet) {
    	var request = open_json(graph);
    	var file;
        request.onload = function() {        
        	  file = request.response;
        	  branche(file[sommet][0]);
        	}
    	} */