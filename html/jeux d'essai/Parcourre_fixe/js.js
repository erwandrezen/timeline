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
			
			
					//Si l'element doit être afficher
					if (m.show == true){
						
						//On affiche
						let g = d3.select("body").select("svg").selectAll("#"+id)
						.selectAll("#"+m.name)
						.data([m]).enter().append("g")
						.attr("id",m.name);
						
						
						g
						.append("rect")
						.attr("x",function(d){return d.x})
						.attr("y",function(d,i){return d.y})
						.style("width", function(d){return d.width;})
						.style("height", function(d){return d.height;})
						.style("fill", "#03a9f4");
						
						g
						.append("text")
						.attr("x",function(d){return d.x})
						.attr("y",function(d,i){return d.y})
						.attr("alignment-baseline","hanging")
						.html(function(d){return d.uid;});

					}
					
					
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

function resize(){
	
}

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
	
	
let rect = d3.selectAll("rect");
	
	rect.on("click", function(){
		let parent = d3.select(this).node().parentNode
		let select_parent = d3.select(parent);
		let select_childrens = select_parent.selectAll("rect")
		let g = select_childrens;
		g.style("fill","red");
		g = d3.select(d3.select(this).node().children.selectAll("g"))
		g.style("fill","red");

	})
	//g.selectAll("rect").data(p).enter().append("rect");
	
});



/*
var depthCount = function (branch,children) {
    if (!branch[children]) {
        return 1;
    }
    return 1 + d3.max(branch[children].map(depthCount));
 }*/

