
//Parcourire en profondeur
//w,h referencer
	
	//Ecrire les feuilles
	/*var feuilles = root.leaves();
	console.log("feuilles: ", feuilles);*/
	
	//Ecrire x,y
	//Referencer un ordre en fonction du parent
function parcourir(root, w = 100, h = 25, information = {d:0}){ // ENTRER: ARRAY
	let childrens;
		console.log("root: ", root);
		
		//Pour chaque element
		root.map(m => {

				let array_object = Object.values(m);
				console.log(array_object);
				
				//Recuperer l'enfant et le placer dans pour un element
				let childrens = array_object.filter(f => f.constructor.name == "Array")
				
				//Mettre les enfants à plat
				childrens = childrens.flat();
				
				/* (S'il y'a des donnees (des enfants)) 
				 * ? 
				 * On reparcour 
				 * : 
				 * Sinon message dans la console
				*/
				// (childrens.length > 0 ? parcourir(childrens) : feuilles())
				if(childrens.length > 0){
					console.log("Parent: ",m);
					console.log("Childrens: ",childrens);
					parcourir(childrens);
				} else {
					console.log("No childrens: ",childrens);
				}
				
				//Retourne rien
			});

	} //RETURN ARRAY