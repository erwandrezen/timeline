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
						.style("fill", "white");
						
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

