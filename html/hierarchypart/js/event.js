let w;


//AFF
function show_tooltip(){
	
	let hierarchypart = d3.selectAll("#hierarchypart");
	let tooltip = hierarchypart.select("#tooltip");
	
	//Information de l'element
	let target = event.target;
	let tagName = target.tagName;
	let id = target.getAttribute("id");
	let x = target.getAttribute("x");
	let y = target.getAttribute("y");
	let pos = [x,y];
	
	
	//Information souris
	let mouseX = event.clientX;
	let mouseY = event.clientY;
	
	
	//Information donnees de l'elements
	let select = d3.select(target);
	let data = select.datum();
	let color = data.color;
	let depth = data.depth;
	let height = data.height;
	let width = data.width;
	let d_x = data.x;
	let d_y = data.y;
	let d_pos = [d_x,d_y];
	let detail = data.detail;
	
	console.log(data);
	
	tooltip
	
	.html( //Retourne du html
			"INFORMATION ELEMENT <br/>"+
			"tag: "+tagName + "<br/>" +
			"id: " + id  + "<br/>" +
			"pos: " + pos  + "<br/>" +
			
			
			"<br/><br/><br/>"+
			"INFORMATION DONNEES <br/>"+
			"color: "+color + "<br/>" +
			"depth: " + depth  + "<br/>" +
			"height: " + height  + "<br/>" +
			"width: "+width + "<br/>" +
			"d_pos: " + d_pos  + "<br/>" +
			"detail: " + detail  + "<br/>"
			)
	
	.style("z-index","10")
	.transition()
	.duration(250)
	.style("left",mouseX+"px")
	.style("top",mouseY+"px")
	.style("opacity","1");
	
	
}

function hide_tooltip(){
	let hierarchypart = d3.selectAll("#hierarchypart");
	let tooltip = hierarchypart.select("#tooltip");
	
	
	tooltip
	.transition()
	.duration(250)
	.style("opacity","0")
	.on("end", function(){
		tooltip
		.html("")
		.style("z-index","-10");
	});
	
}

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
			
	
			

			
			return null;
		});
	});
	var shift_cliked = false;
	
	
	d3.select("body")
	
	.on("keydown", function() {
		
		let shift = event.shiftKey;
		let ctrl = event.ctrlKey;
		
		//#SHIFT
		if (shift){
			d3.select("html")
	    	.style("cursor", "crosshair");
			
			w = d3.select(window)
		      .on("mousedown", mousedown)
		      .on("mouseup", mouseup);
	
		      function mousedown() {
					let target = event.target;
			        let select = d3.select(target);
			        let tagName = select.node().tagName
			        
			        //color_branch
			        if (tagName == "rect"){
			        	let id = select.attr("id");
			        	color_branch("#"+id);
			        }
			  
				} 
		}
		   
		
		else if (ctrl) //#CTRL
		      
		    	
		 {
				w = d3.select(window)
			      .on("mousedown", mousedown)
			  
				function mousedown() {
					console.log("tooltip");
					show_tooltip();
					
				}
		
		} 
		
		
		else 
			
		{
			w = d3.select(window)
			.on("mouseup", mouseup);
		}


	})
	
	.on("keyup", function() {
		let shift = event.shiftKey;
		let ctrl = event.ctrlKey;
		
		w = d3.select(window)
		.on("mouseup", mouseup);
		
		
		if (!shift){
			d3.select("html")
	    	.style("cursor", "inherit");
		}
	})


	
	
	
	
		
		
		

}





function event_doc(){
	
	
	w = d3.select(window)
	.on("contextmenu",contextmenu)
	.on("click",click)
	
	function contextmenu(){
		d3.event.preventDefault();
		let target = event.target;
		let tagName = target.tagName;

		if(tagName == "rect"){
			show_nav(target);
		}
		
	}
	
	function click(){
		hide_nav();
	}

	

}


function show_nav(element){
	
	console.log("clicked on: ", this);
	//console.log("contextmenu");
	 
	//Recuperation des donnees cible
		let data = d3.select(element).datum();
		let children;
		let isRoot = (data.root != undefined ? true : false);
		console.log(isRoot);
		let rect_id =  element.getAttribute("id");
		//Recuperation des enfants
		let object_values = Object.values(data);
		let mapping = object_values.filter(f => f.constructor.name == "Array");
		mapping = mapping.flat();
		
		
		
		//S'il y as  des enfants et que la variable children étais false
		if (mapping.length > 0 && (children == false || children == undefined)){
			children = true;
			console.log("Children");
			
			//suppresion de l'ancien menu
			d3.select("#menu").remove();
			
			
			let mon_menu = d3.select("body")
			.append("div")
			.attr("id","menu")
			
			//Ajout d'une div principal
			let nav = navigation(mon_menu);
				//Ajout d'un menu
				let menu = navigation_menu(nav);
				let parent_node = d3.select(element).node().parentNode;
				let parent_id = parent_node.id;
				let idToString = String(parent_id);
				
				
				navigation_li(menu,"show","nav_show('#"+rect_id+"')");
				if (isRoot){
					children = false;
					navigation_li(menu,"hide","");
				} else {
					navigation_li(menu,"hide","nav_hide('#"+rect_id+"')");
				}
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

				
				navigation_li(menu,"show","nav_show('#"+rect_id+"')");
				if (isRoot){
					children = true;
					navigation_li(menu,"hide","");
				} else {
					navigation_li(menu,"hide","nav_hide('#"+rect_id+"')");
				}
				navigation_li(menu,"color","show_color(this)");
					//Comportant des items
		}
	 
		
		
		
		let menu = d3.select("#menu");
		let nav = menu.select("#navigation");	

		menu
		.style("z-index","10")
		.style("position","absolute")
		.style("left",event.clientX+"px")
		.style("top",event.clientY+"px");
		
		nav
		.style("visibility","")
		
		
	 d3.select("#menu")
	 
		
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
	set_objects(datas,{show:true});
	
	update();

}

function nav_hide(nom){  //nom de l'id
	
	let select = d3.select(nom);
	let data = select.datum();
	
	datas = get_all_childrens([data]);
	set_objects(datas,{show:false});
	
	update();
}




function nav_expand(nom){  //nom de l'id

	let select = d3.select(nom);
	let data = select.datum();
	
	datas = get_childrens([data]);
	datas = datas.flat();
	
	set_objects(datas,{show:true});
	
	update();

}


function nav_collapse(nom){ //nom de l'id
	let select = d3.select(nom);
	let data = select.datum();
	
	datas = get_all_childrens([data]);
	datas.shift();
	
	set_objects(datas,{show:false});
	
	update();

}

function color_branch(nom){
	let select = d3.select(nom);
	let data = select.datum();
	
	datas = get_all_childrens([data]);
	console.log(datas);
	set_objects(datas,{color:laCouleur});
	
	update();
}



function set_objects(datas,object){ // List d'objet
	
	datas.map(m => {
		Object.assign(m,object);
	});
}


function mouseup() {
	  console.log("upp")
	  hide_tooltip();
  w.on("mousedown", null).on("mouseup", null);
}
