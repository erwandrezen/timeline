var marquer = [];

var x = 10;
var y = 10;
var w = 50;
var h = 20;
var h_max = 200;
var l = 1;

function explorer(sommet){
		//marquer.push(sommet);
		//var profondeur = {profondeur : marquer.length+1, largeur : l};

		//console.log(sommet);
		
		var values = sommet.values();
		var keys = Object.keys(sommet);
		
		var newArray = [];
		var newArray_object = [];
		var unSommet;
		var unSousSommet;


			resultat = values.next();
			// Pour chaque valeur en largeur
			
			while (!resultat.done) {
				//console.log(resultat.value.constructor.name);
				//console.log(resultat.value);
				// si c'est un object
				

					//console.log(resultat.value);
					
					// parcourir et enregistrer les valeurs
					for (k in resultat.value){
						//console.log(resultat.value[k]);
						
						if (resultat.value[k].constructor.name == "Array"){
							
							resultat.value[k].forEach(function(e){
								console.log(e);
								console.log("*array");
								newArray.push(e);
							});
							
							

						} else if (resultat.value[k].constructor.name == "Object") {
							newArray_object.push(resultat.value[k]);
							//console.log(newArray_object);
							
						} else {

							//console.log("*other");
						}
						
					}
					
					
	
				//console.log(resultat.value);
				// Continuer avec la valeur suivante
                 resultat = values.next();
			}
			//console.log(resultat);
			
		if (l < 5){
			l++;
			//console.log(newArray_object);
			explorer(newArray);
			marquer.push(newArray_object);
		} else {
			console.log(marquer);
			//return marquer;
			
		}
		
    }
/*
    // lancement des fonctions pour ouvrir le json,
    // recuperer les sommets
    function get_tree(graph, sommet) {
    	var request = open_json(graph);
    	var file;
        request.onload = function() {        
        	  file = request.response;
        	  explorer(file[sommet]);
        	}
    	} 
    	
    	*
    	*/