<html>
<!-- Essai de commit nouveau bureau : Chomphoo -->
    <head>  
        <script src="http://d3js.org/d3.v3.min.js"></script>

    </head>
    
    <body>
    	voir log console
    </body>

    <script>

    // Ouvre le fichier json
    function open_json(file){
    	var requestURL = file;
    	var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        return request;
    }

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

    // lancement des fonctions pour ouvrir le json,
    // recuperer les sommets
    function get_tree(graph, sommet) {
    	var request = open_json(graph);
    	var file;
        request.onload = function() {        
        	  file = request.response;
        	  sommet_voisin(file,sommet);
        	}
    	} 


    get_tree('../mocks/mock2.json',"ownerlist");
    	

   </script>

</html>