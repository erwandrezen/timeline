// Ouvre le fichier json
    function open_json(file){
    	var requestURL = file;
    	var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        return request;
    }
    
    
    function write_profondeur_json(sommet,H,L){
    		// Creer un object avec la hauteur et la largeur du sommet
    		var profondeur = {hauteur : H, largeur : L};
    		// Recuperation des donnees
    		var response = open.response;
    		

    		sommet["profondeur"] = profondeur;
    		return sommet;
        	//console.log(sommet);

    }
    
    
    
function write_profondeur_json2(file,sommet,H,L){
    	
    	//Ouvrire le fichier
    	var sommet;
    	var open = open_json(file);
    	//Chargement du fichier
    	open.onload = function(){
    		// Creer un object avec la hauteur et la largeur du sommet
    		var profondeur = {hauteur : H, largeur : L};
    		// Recuperation des donnees
    		var response = open.response;
    		
    		sommet = response[sommet];
    		sommet["profondeur"] = profondeur;

        	//console.log(sommet);
    	}
    	
    }


