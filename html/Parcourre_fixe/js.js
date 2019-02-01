//Ouvrire le json
//Parcourire en profondeur
	//w,h referencer
	//Ecrire les feuilles
	//Ecrire x,y
	//Referencer un ordre en fonction du parent


//Ouvrire le json
let branche = [];
let x = 0;
function drawing(element, root, w = 100, h = 25){ // ENTRER: ARRAY


		//console.log("root: ", root);
			

	
	/*.attr("x","")
	.attr("y","");*/
	
	//Pour chaque element
	let somme = 0;
		root.map(m => {
				
					let array_object = Object.values(m);
					//console.log(array_object);
					
					//Recuperer l'enfant et le placer dans pour un element
					var childrens = array_object.filter(f => f.constructor.name == "Array")
					
					//Mettre les enfants à plat
					childrens = childrens.flat();
					
					branche = branche.concat(m);
					
					
					/* (S'il y'a des donnees (des enfants)) 
					 * ? 
					 * On reparcour 
					 * : 
					 * Sinon message dans la console
					*/
					// (childrens.length > 0 ? parcourir(childrens) : feuilles())

					if(childrens.length > 0){
						
						
						//console.log("*",root,childrens);
						console.log("Parent: ",m);
						console.log("Childrens: ",childrens);
						//console.log(branche,"*");
				
						
						x += 50;
							d3.select("body").select("svg").select("#"+m.name)
							.append("g").selectAll("g")
							.data(childrens).enter().append("g").attr("id",function(d,i){

								return d.name;
							})
							.append("rect")
							.attr("x",x)
							.style("height", function(d){
								let this_height = d.feuilles*15;
								return this_height;
							})
							.attr("y",function(d,i){

								let this_height = d.feuilles*15;
								somme += this_height;
								return somme-this_height;
							})
							
						
						
						branche = [];
						
						drawing(element, childrens);
					} else {
						somme += 15;
					}
					
					//Retourne rien
					return m;
				});
	x -= 52;
	console.log("changement de niveau",root);
		
			//reintialiser

		
	return root;
	} //RETURN ARRAY

let json = "mocks/mock2.json";
d3.json(json).then(function(data){
	//console.log(data);
	
	//root = data['ownerlist'][0]['nodelist'];
	root = data['ownerlist'][0]['nodelist'];
	
	parcourir(root);

	//console.log("*p",p)
	//nombre max de profondeur

	console.log(root[0].name);
	
	let svg = d3.select("body").append("svg");
	let g = d3.select("body").select("svg").append("g")
	.attr("id",root[0].name)
	.append("rect")
	.style("height",15*root[0].feuilles);
	
	
	drawing(g, root);
	
	//g.selectAll("rect").data(p).enter().append("rect");
	
});

//let profondeur = depthCount(root[0],"children")+1;

/*
var depthCount = function (branch,children) {
    if (!branch[children]) {
        return 1;
    }
    return 1 + d3.max(branch[children].map(depthCount));
 }*/

