function branche(sommet){
    	marquer.push(sommet);
    	var table = sommet;
    	var keys = Object.keys(table);
    	var values = Object.values(table);



		// Parcourir pour chaque valeurs
    	values.forEach(function(e){
        	// Si c'est un objet (sous-branche)
    		if (typeof e == 'object'){
        		// dessiner un rectangle (plus tard)
    			rectangle(element,x,y,w,h);
				y += h+2;
        		// Parcourir la sous-branche
        		branche(e);
    		} else {
    			console.log(marquer);
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