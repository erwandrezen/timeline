marquer = [];
var i = 0;
function branche_profondeur(sommet){
		


    	var newArray = [];
    	
    	var keys = Object.keys(sommet);

    	var values = Object.values(sommet);
    	var lesValeurs = sommet.values;
    	var unBool = false;
    	var essai;
		var profondeur = {}; // niveau de profondeur pour chaque des sommets

		// Parcourir pour chaque valeurs
    	keys.forEach(function(e){
    		
    		
        	// Si c'est un objet (sous-branche)
    		//console.log(e);
    		if (sommet[e].constructor.name == 'Object'
    			 && e != "profondeur"){
    			//console.log("branche", parseInt(e) + 1);
    			
    			//console.log(profondeur);
    			//console.log(sommet[e]);


    			
    			// On parcourire l'objet
    			console.log(e, parseInt(e)+1);
    			profondeur['largeur'] = parseInt(e) ;
    			console.log("??: ", sommet[e]);
    			sommet[e]['profondeur'] = profondeur;
    			
    			
    			marquer.push(sommet[e]);
    			branche_profondeur(sommet[e]);


    		} 
    		

    		
    		if (sommet[e].constructor.name == 'Array'){
    			

    			// On ajoute le tableau à la liste des tableaux à parcourir
    			sommet[e].forEach(function(e){
    				newArray.push(e);
    			});
    			
    			//branche_profondeur(sommet[e]);
    			
    			
    		} else {
    		}
    		
    		
    		
    		//x = x - w - 2;

    	});

    	if (newArray.length > 0){
    		//console.log(newArray);
    		branche_profondeur(newArray);
		} else {
			console.log(marquer);
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