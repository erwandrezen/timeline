	// Pour chaque sommet
	// parcourir une branche jusqu'� ses feuilles
    function branche(sommet){
    	var sommet_nom = [];
    	var table = sommet;
    	var keys = Object.keys(table);
    	var values = Object.values(table);



		// Parcourir pour chaque valeurs
    	values.forEach(function(e){
        	// Si c'est un objet (sous-branche)
    		if (typeof e == 'object'){
        		// dessiner un rectangle (plus tard)
    			 keys = Object.keys(e);
    			 console.log("clees: " + keys);
        		
        		// Parcourir la sous-branche
        		branche(e);
    		}


    	});

    
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