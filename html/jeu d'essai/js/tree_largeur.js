var marquer = [];

var x = 10;
var y = 10;
var w = 50;
var h = 20;
function explorer(sommet){
		marquer.push(sommet);
		
		var values = sommet.values();
		var newArray = [];
		var unSommet;
		var unSousSommet;

		if (sommet.length >= 1){
			//console.log(sommet);
			resultat = values.next();
			while (!resultat.done) {
				
				rectangle(element,x,y,w,h);
				y += h+2;
				unSommet = resultat.value;
				if (typeof unSommet == "object"){
					// Pour chaque sous sommet
					for (key in unSommet){
						// CONCAT
						unSousSommet = unSommet[key];
						newArray.push(unSousSommet);
					}
					//console.log(unSousSommet);
					
				}
                 resultat = values.next();
			}
			//x += w + 2;

		}
		

		/* Si le le tableau contient des donnees (les sous branches d'un seul niveau) 
			on continue à reutiliser cette fonction
		*/
		if (newArray.length > 0){
			//console.log(marquer);
			explorer(newArray);
		} else {
			//console.log(marquer);
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