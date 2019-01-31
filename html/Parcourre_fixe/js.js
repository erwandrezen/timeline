//Ouvrire le json
//Parcourire en profondeur
	//w,h referencer
	//Ecrire les feuilles
	//Ecrire x,y
	//Referencer un ordre en fonction du parent


//Ouvrire le json
let json = "mocks/mock2.json";
d3.json(json).then(function(data){
	//console.log(data);
	
	//root = data['ownerlist'][0]['nodelist'];
	root = data['ownerlist'][0]['nodelist'];
	//console.log(root);
	
	
	/*
	root = d3.hierarchy(root,function(d){
		return d.children_essai //Indique les children 
								//si non renseigne par default "children"
		});
*/
	


	




	parcourir(root);
	//nombre max de profondeur
	var profondeur = depthCount(root[0],"children")+1;
	console.log("profondeur: ", profondeur);
	
	
});



var depthCount = function (branch,children) {
    if (!branch[children]) {
        return 1;
    }
    return 1 + d3.max(branch[children].map(depthCount));
 }

