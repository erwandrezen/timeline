


function event_rect(){
	let rect = d3.select("#hierarchypart").selectAll("rect");
	
	let focused;
	
	rect.on("mouseenter",function(){
		let parent_node = d3.select(this).node().parentNode;
		let parent_id = parent_node.id;
		focused = String(parent_id);
		
		
		d3.select("svg")
		.on("keydown", function(){
			let event = d3.event;
			
			let alt = event.altKey;
			let ctrl = event.ctrlKey;
			let shift = event.shiftKey;
			
			if (ctrl){
				nav_collapse(focused);
			}
			

			
			return null;
		});
	});
	var shift_cliked = false;

	d3.select("body")
	
	.on("keydown", function() {
		shift_cliked = true;
		
		let shift = event.shiftKey;
		if (shift){
			d3.select("html")
	    	.style("cursor", "crosshair");
		}

	})
	.on("keyup", function() {
		shift_cliked = false;
		
		console.log("key up")
		let shift = event.shiftKey;
		if (!shift){
			d3.select("html")
	    	.style("cursor", "inherit");
		}
		
	})
	.on("mousedown", function(){

    	if (shift_cliked){

        let target = event.target;
        let select = d3.select(target);
        
        
        
        let parent = d3.select(target).node().parentNode
		let select_parent = d3.select(parent);
		let select_childrens = select_parent.selectAll("rect");
		let g = select_childrens;
		

		
		
		//https://github.com/d3/d3-ease
		
		
		g.datum(function(d){
			//Enregistrer la couleur
			d.color = laCouleur;
			let select = d3.select(this);
			
			//Modifier la couleur visuelle
			select
			.transition()
			.duration(1000)
			.ease(d3.easeExpOut)
			.style("fill",d.color);
			
			return d;
			});
    
    
    	} 
	});



	
	
	let children;
	
	
	
	rect.on("contextmenu", function(){
		console.log("clicked on: ", this);
		//console.log("contextmenu");
		 
		//Recuperation des donnees cible
			let data = d3.select(this).datum();
			let rect_id =  d3.select(this).attr("id");
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
					
					
					navigation_li(menu,"show","nav_show('#"+rect_id+"')");
					navigation_li(menu,"hide","nav_hide('#"+rect_id+"')");
					navigation_li(menu,"expand","nav_expand('#"+rect_id+"')");
					navigation_li(menu,"collapse","nav_collapse('#"+rect_id+"')");
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
					
					navigation_li(menu,"show","nav_show('#"+rect_id+"')");
					navigation_li(menu,"hide","nav_hide('#"+rect_id+"')");
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


function nav_show(nom){  //nom de l'id
	
	let select = d3.select(nom);
	let data = select.datum();
	
	datas = get_all_childrens([data]);
	console.log(datas);
	set_show(datas,true);
	
	update();

}

function nav_hide(nom){  //nom de l'id
	
	let select = d3.select(nom);
	let data = select.datum();
	
	datas = get_all_childrens([data]);
	set_show(datas,false);
	
	update();
}




function nav_expand(nom){  //nom de l'id

	let select = d3.select(nom);
	let data = select.datum();
	
	datas = get_childrens([data]);
	datas = datas.flat();
	
	set_show(datas,true);
	
	update();

}


function nav_collapse(nom){ //nom de l'id
	let select = d3.select(nom);
	let data = select.datum();
	
	datas = get_all_childrens([data]);
	datas.shift();
	
	set_show(datas,false);
	
	update();

}


function update(){
	parcourir(root,500,15);
	datas = get_all_childrens(root, true);
	resize(datas);
}

function set_show(datas,bool){ // List d'objet
	
	datas.map(m => {
		m.show = bool;
	});
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
		
		
		
		
	}) //Retourne rien
	
	liste = liste.flat();
	return liste;
} // RETOURNE LISTE


function get_all_childrens(array, filter = undefined){ //LISTE d'objet
	let datas = [] //list d'objet
	let tmp = array;
	
	datas.push(tmp);
	
	while (tmp.length > 0){
		tmp = get_childrens(tmp);
		datas.push(tmp);
		
	}
	
	tmp = undefined;
	
	datas = datas.flat();
	
	if (filter != undefined){
		datas = datas.filter(f => f.show == filter);
	}
	
	console.log("children",datas);
	
	return datas;
}

