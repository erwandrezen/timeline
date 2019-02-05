function event_rect(){
	let rect = d3.selectAll("rect");
	
	
	rect.on("click", function(){
		
		/*
		console.log(d3.select(this).datum(function(d){
			Object.assign(d,{color:"red"});
			console.log(d)
			}));*/
		let parent = d3.select(this).node().parentNode
		let select_parent = d3.select(parent);
		let select_childrens = select_parent.selectAll("rect")
		let g = select_childrens;
		
		g
		.transition()
		.duration(1500)
		
		//https://github.com/d3/d3-ease
		.ease(d3.easeExpOut)
		.style("fill","red");

	})
	
	let children = true;
	
	rect.on("contextmenu", function(){
		
		//console.log("contextmenu");
		
		 d3.event.preventDefault();
		 
		 
		 
		//Recuperation des donnees cible
			let data = d3.select(this).datum();
			
			//Recuperation des enfants
			let object_values = Object.values(data);
			let mapping = object_values.filter(f => f.constructor.name == "Array");
			mapping = mapping.flat();
			
			//console.log(mapping);

			//S'il y as  des enfants et que la variable children étais false
			if (mapping.length > 0 && children == false){
				children = true;
				console.log("Children");
				
				//suppresion de l'ancien menu
				d3.select("#menu").remove();
				
				
				let mon_menu = d3.select("body")
				.append("div")
				.attr("id","menu");
				
				//Ajout d'une div principal
				let nav = navigation(mon_menu);
					//Ajout d'un menu
					let menu = navigation_menu(nav);
					navigation_li(menu,"expand");
					navigation_li(menu,"collapse");
					navigation_li(menu,"hide");
					navigation_li(menu,"color");
				
				
			}
			
			
			//S'il n'y as pas d'enfant et que la variable children étais true
			if (mapping.length < 1 && children == true){
				//console.log("Not children",children == true);
				children = false;
				
				
				//suppresion de l'ancien menu
				d3.select("#menu").remove();
				
				
				let mon_menu = d3.select("body")
				.append("div")
				.attr("id","menu");
				
				//Ajout d'une div principal
				let nav = navigation(mon_menu);
					//Ajout d'un menu
					let menu = navigation_menu(nav);
					navigation_li(menu,"hide");
					navigation_li(menu,"color");
						//Comportant des items
			}
		 
		 
		 
		 
		 
		 
			
			
		let mouse = d3.mouse(this);
		let menu = d3.select("#menu");
		let nav = menu.select("#navigation");	
		 
		 
		//console.log(mouse);
		
		menu.style("position","absolute");
		menu.style("left",mouse[0]+"px");
		menu.style("top",mouse[1]+"px");
		
		nav.style("visibility","");
		
		

	})
}


	

