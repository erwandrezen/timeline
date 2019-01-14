<html>
<!-- Essai de commit nouveau bureau : Chomphoo -->
    <head>  
        <script src="http://d3js.org/d3.v3.min.js"></script>
        <script src="../js/file_json.js"></script>
        <script src="../js/tree_largeur.js"></script>
        <script src="../js/tree_profondeur.js"></script>
        <script src="../js/draw.js"></script>
        
        <link rel="stylesheet" type="text/css" href="../css/css.css">
    </head>
    
    <body>
    voir logs console
        <div id="timeline">
            <div id="hierarchypart">
 

            </div>
        </div>
    </body>

    <script>


	
    	var file = "../mocks/mock2.json";
    	var sommet = "ownerlist";
    	var requestt = open_json(file);


    	
    	var hierarchypart = svg("#hierarchypart",window.innerWidth,3000);
    	var element = hierarchypart.append("g");

    	//rectangle(element,10,10,50,50);
    	//console.log(requestt.onload);
    	requestt.onload = function() {        
    	  var tableau;
      	  file = requestt.response;
      	  // Parcoure du fichier json en largeur
		  //tableau = explorer(file[sommet]);

		  explorer(file[sommet]);
		  tableau = marquer;

		  
		  var x = 10;
		  var y = 10;
		  var i = 0;


		  // explorer
		  for (key_element in tableau){
			  i += 1;
			  y += 24;
			  text(element, "Niveau: "+i,x,y);
			  
			  for (key_feature in tableau[key_element]){
				  y += 14;
				  var feature = tableau[key_element][key_feature];
				  text(element, feature['uid'],x,y);
				  
			  }
			  
		  }



		  
		 

      	}

        	

   </script>

</html>