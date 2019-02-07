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
						
						
						
						if (m.show){
							
							//console.log(m);
							let x;
							let y;
							g
							.append("rect")
							.attr("x",function(d){x = d.x+d.width; return d.x})
							.attr("y",function(d,i){y = d.y; return d.y})
							.style("width", function(d){return d.width;})
							.style("height", function(d){return d.height;})
							.style("fill", function(d){
								let object_values = Object.values(d);
								let mapping = object_values.filter(f => f.constructor.name == "Array");
								
								mapping = mapping.flat();
								let mapping2 = mapping.filter(f => f.show == true);
		
								
								let bool = (mapping.length > 0 ? true : false);
								let bool2 = (mapping2.length > 0 ? true : false);
								
		
								
								if (bool){
									x -= 15;
									y += 2;
									if (bool2 == false){

										let point1X = 0+x;
										let point2X = 10+x;
										let point3X = 0+x;
										
										let point1Y = 10+y;
										let point2Y = 5+y;
										let point3Y = 0+y;
										
										let point1 = point1X + " " + point1Y;
										let point2 = point2X + " " + point2Y;
										let point3 = point3X + " " + point3Y;
										
										let points = [point1,point2,point3];
										
										console.log(points);
										g
										.append("polygon")
										.attr("id","expand")
										.attr("points",points)
										.on("click",function(){
											
											console.log("clicked", d3.select(this));
											
											nav_expand(d.name);
											
										});
										
									} else {
										let point1X = 5+x;
										let point2X = 10+x;
										let point3X = 0+x;
										
										let point1Y = 10+y;
										let point2Y = 0+y;
										let point3Y = 0+y;
										
										let point1 = point1X + " " + point1Y;
										let point2 = point2X + " " + point2Y;
										let point3 = point3X + " " + point3Y;
										
										let points = [point1,point2,point3];
										
										console.log("changing",d3.select(this));
										
										g
										.append("polygon")
										.attr("id","expand")
										.attr("points",points)
										.on("click",function(){
											
											console.log("clicked", d3.select(this));
											
											nav_collapse(d.name);
											
										});
										
							
									}
									
									
								}
								
								
								return d.color;
								
							})
							
							/*pour chaque point [x,y]
							 * <polygon points="0 10, 10 5, 0 0"/>*/
							
							
							g
							.append("text")
							.attr("x",function(d){return d.x})
							.attr("y",function(d,i){return d.y})
							.attr("alignment-baseline","hanging")
							.html(function(d){return d.uid;});
						}
		
						

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

function resize(datas){
	let hierarchy = d3.select("#hierarchypart");
	let svg = hierarchy.select("svg");
	let g = svg.selectAll("g");
	let elements = g.selectAll("rect");
	var x = 0;
	var y = 0;
	
	let updates = elements.data(datas, function(d){
		return d;
	});

	

	updates
	.enter()
	.append('rect')
	
	.merge(updates)
	.transition()
	.attr("id",function(d){return d.name})
	.attr("x",function(d){x = d.x+20; return d.x+"px"})
	.attr("y",function(d){y = d.y;return d.y+"px"})
	.style("width", function(d){return d.width+"px";})
	.style("height", function(d){return d.height+"px";})
	.style("fill", function(d){return d.color;});
	
	
	//Supression ancien element
	updates.exit().remove();

	
	
	
	
	elements = g.selectAll("polygon");
	updates = elements.data(datas, function(d){
		return d;
	});
	
	
	

	
	
	
	let bool;
	let bool2;
	
	updates
	.enter()
	.append('polygon')
	
	.merge(updates)

	.attr("points",function(d){
		
		let object_values = Object.values(d);
		let mapping = object_values.filter(f => f.constructor.name == "Array");
		
		mapping = mapping.flat();
		let mapping2 = mapping.filter(f => f.show == true);

		
		bool = (mapping.length > 0 ? true : false);
		bool2 = (mapping2.length > 0 ? true : false);
		
		y = d.y;
		x = d.x+d.width;

		
		
		if (bool){
			let hierarchy = d3.select("#hierarchypart");
			let svg = hierarchy.select("svg");
			let elements = svg.selectAll("rect,polygon");
			let datas = elements.data();
			let rect_data = [d];
			
			x -= 15;
			y += 2;
			let points = "";
			if (bool2 == false){

				let point1X = 0+x;
				let point2X = 10+x;
				let point3X = 0+x;
				
				let point1Y = 10+y;
				let point2Y = 5+y;
				let point3Y = 0+y;
				
				let point1 = point1X + " " + point1Y;
				let point2 = point2X + " " + point2Y;
				let point3 = point3X + " " + point3Y;
				
				points = [point1,point2,point3];
				
				d3.select(this).on("click",function(d){
					nav_expand("#"+d.name);

				})

			
			} else {

				let point1X = 5+x;
				let point2X = 10+x;
				let point3X = 0+x;
				
				let point1Y = 10+y;
				let point2Y = 0+y;
				let point3Y = 0+y;
				
				let point1 = point1X + " " + point1Y;
				let point2 = point2X + " " + point2Y;
				let point3 = point3X + " " + point3Y;
				
				points = [point1,point2,point3];
				d3.select(this).on("click",function(d){
					nav_collapse("#"+d.name);
	
				})
				
		
				
				

			}
			
			
			//datas = get_all_childrens(datas);	
			
			
			return points;
			
		} else {
			this.remove();
		}
		
		
		
		
		
	})
	
	//Supression ancien element
	updates.exit().remove();
	
	event_rect(root);
	event_doc();
}

