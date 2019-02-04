//Ouvrire le json
//Parcourire en profondeur
	//w,h referencer
	//Ecrire les feuilles
	//Ecrire x,y
	//Referencer un ordre en fonction du parent


//Ouvrire le json

function drawing(id, root, information = {tmp_d:0,y:0}){ // ENTRER: ARRAY

		//Pour chaque element
		root.map(m => {
					//console.log("root: ", m);

					let g = d3.select("body").select("svg").select("#"+id)
					.append("g").selectAll("g")
					.data([m]).enter().append("g").attr("id",function(d,i){return d.name;})
					
					g
					.append("rect")
					.attr("x",function(d){return d.x})
					.attr("y",function(d,i){return d.y})
					.style("width", function(d){return d.width;})
					.style("height", function(d){return d.height;});
					
					g
					.append("text")
					.attr("x",function(d){return d.x})
					.attr("y",function(d,i){return d.y})
					.attr("alignment-baseline","hanging")
					.html(function(d){return d.uid;});
					
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
					 * Renvoi null
					*/
					 (childrens.length > 0 ? drawing(m.name, childrens,information) : null);


				});


	} //RETURN NULL

let json = "mocks/mock2.json";
d3.json(json).then(function(data){
	//console.log(data);
	let width = 500;
	//root = data['ownerlist'][0]['nodelist'];
	root = data['ownerlist'][0]['nodelist'];

	parcourir(root,width,15);

	//console.log("*p",p)
	//nombre max de profondeur

	
	
	let svg = d3.select("body").append("svg").attr("width",width);
	let g = svg.append("g")
	.attr("id","hierarchy");
	
	
	drawing("hierarchy", root);
	
	//g.selectAll("rect").data(p).enter().append("rect");
	
});



/*
var depthCount = function (branch,children) {
    if (!branch[children]) {
        return 1;
    }
    return 1 + d3.max(branch[children].map(depthCount));
 }*/

