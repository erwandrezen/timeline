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
		  //console.log(tableau);
		  var x = 10;
		  var y = 10;
		  var w = 50;
		  var h = 20;
		  /*
		  x += w + 2;
    	  y += h+2;
		  */
/*

		  for (k in tableau){
			  
			  console.log(tableau[k].length);
			  for (i = 1 ; i <= tableau[k].length; i++){
				  rectangle(element,x,y,w,h);
				  y += h+2;
			  }
			  x += w + 2;
		  }

*/

		  
		 

      	}

        	

   </script>

</html>