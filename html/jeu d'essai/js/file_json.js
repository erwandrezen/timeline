 // Ouvre le fichier json
    function open_json(file){
    	var requestURL = file;
    	var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        return request;
    }
    
    
    function write_profondeur_json(file,sommet,H,L){
    	
    	//Ouvrire le fichier
    	var sommet;
    	var open = open_json(file);
    	//Chargement du fichier
    	open.onload = function(){
    		// Recuperation des donnees
    		var profondeur = {hauteur : H, largeur : L};
    		var response = open.response;
    		sommet = response[sommet];



        	sommet["profondeur"] = profondeur;
        	console.log(sommet);
    	}
    	
    }