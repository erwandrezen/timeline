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
				var dejaParcouru = false;
					// On parcour les clées (tableau ou objet)
					for (k in resultat.value){
						
						// Si c'est un tableau (sous branche)
						if (resultat.value[k].constructor.name == "Array"){
							// on enregistre ses sous branches
							//console.log(resultat.value[k]);
							for (sk in resultat.value[k]){
								var sousBranche = resultat.value[k][sk]
								//console.log(sousBranche);
								newArray.push(sousBranche);
							}
						} else {
							// Si la clees n'es pas un tableau ni deja parcouru
							if (dejaParcouru == false){
								// On enregistre toute cette branche
								newArray_object.push(resultat.value);
								// on indique que cette branche est deja parcouru
								dejaParcouru = true;
							}
							
						}
					}

			
                 resultat = values.next();
			}
			
			
		if (newArray_object.length > 0){
			console.log("Nouveau niveau");
			l++;
			//console.log(newArray_object);
			
			marquer.push(newArray_object);
		}
		if (newArray.length > 0){
			explorer(newArray);
			//return marquer;
			
		} else {
			console.log(marquer);
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