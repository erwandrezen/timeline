

function branche(sommet){

    	marquer.push(sommet);
    	var keys = Object.keys(sommet);
    	var values = Object.values(sommet);
    	var lesValeurs = sommet.values;
    	var unBool = false;

		// Parcourir pour chaque valeurs
    	keys.forEach(function(e){
   
        	// Si c'est un objet (sous-branche)
    		if (typeof sommet[e] == 'object'){
    			
    			
        		
    			

    			
   
    				x += w + 2;
  
        		branche(sommet[e]);
        		
    		} else if (sommet['uid'] == sommet[e]) {
    			// Sinon  Ce n'es pas un object
    		
    				
    				// Parcourir la sous-branche
    				// SI ce n'es pas un noeud sans propieter on dessine

    					//console.log(e);
    					// dessiner un rectangle (plus tard)

    					rectangle(element,x,y,w,h);
    					
    	    			text(element,sommet['uid'],x,y);
    	    			x = w + 2;
    	    			y += h+2;
    	    			console.log(sommet.length);
    	
    	
    				
    			
    			
    			
    			
    		} else {
    		}
    		
    		//x = x - w - 2;

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