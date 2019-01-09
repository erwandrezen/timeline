    // Recupere les sommets voisin
    function sommet_voisin(request_response, sommet){
        var sommet_nom = [];
        	request_response[sommet].forEach(function(e){
            	// Enregistrer sommet - dessiner (plus tard)
        		sommet_nom.push(e);
        	});
        console.log(sommet_nom);
        return sommet_nom;
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