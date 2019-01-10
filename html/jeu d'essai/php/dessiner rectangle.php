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
        <div id="timeline">
            <div id="hierarchypart">
 

            </div>
        </div>
    </body>

    <script>
    	
    	var file = "../mocks/mock2.json";
    	var sommet = "ownerlist";
    	var request = open_json(file);
    	var hierarchypart = svg("#hierarchypart",window.innerWidth,3000);
    	var element = hierarchypart.append("g");
    	//rectangle(element,10,10,50,50);
    	request.onload = function() {        
    	  var tableau;
      	  file = request.response;
      	  // Parcoure du fichier json en largeur
		 // tableau = explorer(file[sommet]);
		  branche(file[sommet][0]);
		  tableau = marquer;
		  //console.log(tableau);


		  
		  var x = 10;
		  var y = 10;
		  var w = 50;
		  var h = 20;

      	}

        	

   </script>

</html>