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

	// Pour chaque sommet
	// parcourir une branche jusqu'à ses feuilles
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
    			 values = Object.values(e);
    			 console.log(values);
        		
        		// Parcourir la sous-branche
        		branche(e);
    		}


    	});

    
    }

    function get_tree(graph, sommet) {
    	var request = open_json(graph);
    	var file;
        request.onload = function() {        
        	  file = request.response;
        	  branche(file[sommet][0]);
        	}
    	} 


    get_tree('../mocks/mock2.json',"ownerlist");
    	

   </script>

</html>