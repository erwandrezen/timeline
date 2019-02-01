
//Parcourire en profondeur
//w,h referencer
	
	//Ecrire les feuilles
	/*var feuilles = root.leaves();
	console.log("feuilles: ", feuilles);*/
	
	//Ecrire x,y
	//Referencer un ordre en fonction du parent
var i = 0;

function parcourir(root, w = 100, h = 25, information = {d:0,f:0,p:[],x:0,y:0}){ // ENTRER: ARRAY
	information.f = 0;
	information.d += 1; // Ajout d'un niveau de profondeur
		

	//console.log("root: ", root);
		//Pour chaque element
	let noeuds = root.map(m => {
			
				let array_object = Object.values(m);
				//console.log(array_object);
				
				//Recuperer l'enfant et le placer dans pour un element
				var childrens = array_object.filter(f => f.constructor.name == "Array")
				
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
					//console.log("Parent: ",m);
					//information.p[0] = m;
					//console.log(information.p[0]);
					
					//console.log("Childrens: ",childrens);
					parcourir(childrens, w,h,information);
				} else {
					//debugger
					
					
					//marquer la feuille
					Object.assign(m,{feuilles: 1});
					
					//console.log("Feuille - no childrens: ",childrens);
					information.f += 1;
					
					//console.log("i",information.d);
				}
				
				
				
				//Retourne rien
				return m;
			});
		
		/*
	
	
		*/	

let feuilles = noeuds.filter(f => 'feuilles' in f === false);
if (feuilles.length > 0){
	for (i in feuilles){
		let array_object = Object.values(feuilles[i]);
		
		//Recuperation des enfants
		let mapping = array_object.filter(m => m.constructor.name == "Array");
		
		
		//Applatire la liste
		mapping = mapping.flat();
		
		var compter = 0;
		
		//Pour chaque enfant compter les feuilles
		let calcule = mapping.map((m,i) => {
			
			let object_courrant = mapping[i];
			let feuilles_courrant = object_courrant.feuilles;
			
			compter += feuilles_courrant;

			
			
			});
		feuilles[i].feuilles = compter;
		//console.log(feuilles[i]);
		
	}
}
	
		//reintialiser
		
		information.d -= 1; // Enleve d'un niveau de profondeur
	
return root;
} //RETURN ARRAY