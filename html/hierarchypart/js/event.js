function event_rect(){
	let rect = d3.select("#hierarchypart").selectAll("rect");
	
	
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
		.duration(1000)
		
		//https://github.com/d3/d3-ease
		.ease(d3.easeExpOut)
		.style("fill",laCouleur);

	})
	
	
	let children;
	
	
	
	rect.on("contextmenu", function(){
		//console.log("contextmenu");
		 
		//Recuperation des donnees cible
			let data = d3.select(this).datum();
			
			//Recuperation des enfants
			let object_values = Object.values(data);
			let mapping = object_values.filter(f => f.constructor.name == "Array");
			mapping = mapping.flat();
			
			//console.log(mapping);
			//S'il y as  des enfants et que la variable children étais false
			if (mapping.length > 0 && (children == false || children == undefined)){
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
					let parent_node = d3.select(this).node().parentNode;
					let parent_id = parent_node.id;
					let idToString = String(parent_id);
					
					navigation_li(menu,"expand","nav_expand('"+idToString+"')");
					navigation_li(menu,"collapse","nav_collapse('"+idToString+"')");
					navigation_li(menu,"hide","nav_hide('"+idToString+"')");
					navigation_li(menu,"color","show_color(this)");
				
				
			}
			
			
			//S'il n'y as pas d'enfant et que la variable children étais true
			if (mapping.length < 1 && (children == true || children == undefined)){
				console.log("Not children");
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
					let parent_node = d3.select(this).node().parentNode;
					let parent_id = parent_node.id;
					let idToString = String(parent_id);
					
					navigation_li(menu,"hide","nav_hide('"+idToString+"')");
					navigation_li(menu,"color","show_color(this)");
						//Comportant des items
			}
		 
		 
		 
			
			show_nav(this);
			
			
		
		
		

	})
}



function event_doc(){
	let doc = d3.select(document);
	doc.on("click", function (){
		hide_nav();
		//hide_color();
	})
	
	
	//Desactive le menu contextuelle
	doc.on("contextmenu", function (){
		d3.event.preventDefault();
	});

}


function show_nav(element){
	
	let mouse = d3.mouse(element);
	let menu = d3.select("#menu");
	let nav = menu.select("#navigation");	
	
	 
	//console.log(mouse);
	
	menu
	.style("position","absolute")
	.style("left",mouse[0]+"px")
	.style("top",mouse[1]+"px")
	.style("z-index","2");
	
	nav.style("visibility","");
}
	

function hide_nav(){
	let menu = d3.select("#menu");
	let nav = menu.select("#navigation");	
	
	menu
	.style("z-index","-100");
	
	
	nav
	.style("visibility","hidden")
	
}


function nav_hide(element){
	let e = d3.select("body").select("#hierarchypart").select("#"+element);
	
	//e.data()[0].width = 500;
	let hide = e.selectAll("*");
	let datas = hide.data();
	hide.data(datas, function (f){f.show = false});
	console.log(e.data()[0], hide.data());
	
	update();
	
	
	
	
	
	
	/*e.data()[0].width = 500;
	//console.log(e.data());
	e.select("rect")
	.transition()
	.duration(500)
	.style("width",function(d){return d.width+"px"});
*/
}

function nav_expand(element){
	let e = d3.select("body").select("#hierarchypart").select("#"+element);
	
	let expand = e;
	
	let datas = [] //list d'objet
	let tmp = e.data();
	
	while (tmp.length > 0){
		tmp = get_childrens(tmp);
		datas.push(tmp);
	}
	
	datas = datas.flat();
	
	
	
	
	expand.data(datas, function (f){f.show = true});
	console.log("d",datas);
	
	update();

}

function nav_collapse(element){
	let e = d3.select("body").select("#hierarchypart").select("#"+element);
	
	
	
	let expand = e.selectAll("g").selectAll("*")
	let datas = expand.data();
	expand.data(datas, function (f){f.show = false});
	console.log(e.data()[0],datas);
	
	update();
	

}


function update(){
	let hierarchy = d3.select("#hierarchypart").select("svg");
	hierarchy.select("#hierarchy").remove();
	hierarchy.append("g").attr("id","hierarchy");
	drawing("hierarchy", root);
	
	event_rect(root);
}


function get_childrens(array){ //LISTE d'objet
	let liste = [];
	
	// Pour chaque objet
	array.map(obj => {
		//Recupere sous forme de tableau les valeurs et les clees de l'objet
		let obj_values = Object.values(obj);
		
		//Filtrer pour les valeurs de type liste
		let filtre = obj_values.filter(f => f.constructor.name == "Array");
		
		filtrer = filtre.flat();
		
		liste.push(filtrer);
		
		//console.log(filtre);
		
		
	}) //Retourne rien
	
	liste = liste.flat();
	
	return liste;
} // RETOURNE LISTE


