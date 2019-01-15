marquer = [];

function branche_profondeur(sommet){

    	var lesSousSommets = []; // variable temporaire correspondant aux sommets d'un sous sommet
    	var keys = Object.keys(sommet); // iterateur de clées du sommets
		var profondeur = {}; // niveau de profondeur pour chaque des sommets

		// Parcourir pour chaque valeurs
    	keys.forEach(function(e){
    		
    		//debugger;
        	// Si c'est un objet (une partie de la hierarchy part)
    		if (sommet[e].constructor.name == 'Object'
    			&& e != "profondeur"){
    			//debugger;

    			tmp = []; // Variable temporaire
    			profondeur = sommet[e]['profondeur'];
    			Object.assign(profondeur,  {largeur : parseInt(e) + 1});
    			
    			//Object.assign(profondeur, {largeur : parseInt(e) + 1});
    			
    			//let profondeur = {profondeur : {largeur : parseInt(e) + 1}}; // Indique la largeur du sommet
    			//profondeur['profondeur'] = {largeur : parseInt(e) + 1}; // Indique la largeur du sommet
    			
    			 // affecte à la variabl temporaire le sommet actuelle ainsi que la nouvelle profondeur en largeur
    	       try{
    	    	   console.log(sommet[e]);
    	    	   tmp["profondeur"] =  {profondeur};
    	       } catch(error){
    	    	   console.log("error");
    	       }
    		profondeur = [];
    	       //console.log(tmp);
    	        // indique de ne pas modifier cet objet la prochaine fois
    	        
    	        
    			//enregistre cette variable aleatoire
    			marquer.push(tmp);
    			
    			// Parcoure chaque clée de l'objets courrant
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
		} else {
			//console.log(marquer);
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