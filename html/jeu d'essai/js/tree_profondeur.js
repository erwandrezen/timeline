function branche(sommet){
    	marquer.push(sommet);
    	var table = sommet;
    	var keys = Object.keys(table);
    	var values = Object.values(table);



		// Parcourir pour chaque valeurs
    	values.forEach(function(e){
    		//console.log(sommet.length);
        	// Si c'est un objet (sous-branche)
    		if (typeof e == 'object'){
    			
        		
    			
				console.log(e);
        		// Parcourir la sous-branche
    			// SI ce n'es pas un noeud sans propieter on dessine
				if (sommet.length){
					// dessiner un rectangle (plus tard)
					rectangle(element,x,y,w,h);
	    			text(element,e['uid'],x,y);
	    			y += h+2;
	    			//console.log(sommet.length);
				} else {
					// Sinon on change de niveau
					console.log("niveau suivant");
					x += w + 2;
				}
        		branche(e);
        		
    		} else {
    			//console.log("not object");
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