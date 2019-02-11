class tools{
	constructor(parent){
		this.parent = parent;
	}
	
	get parent(){
		return this._parent;
	}
	
	set parent(value){
		this._parent = value;
	}
	
	
	
	show(){
		let select = this.parent + " *";
		d3.selectAll(select)
		.style("visibility","visible");
	}
	
	hide(){
		let select = this.parent + " *";
		d3.selectAll(select)
		.style("visibility","hidden");
	}
}




function show_tooltip(){
	
	let tool = d3.selectAll("#tools");
	let tooltip = tool.selectAll("#tooltip");
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
	let tool = d3.selectAll("#tools");
	let tooltip = tool.selectAll("#tooltip");
	
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




function show_nav(element){
	d3.select("body #tools #menu").remove();
	
	
	let mon_menu = d3.select("body #tools")
	.append("div")
	.attr("id","menu")
	
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
			
			//Ajout d'une div principal
			let nav = navigation(mon_menu);
			//Ajout d'un menu
			let menu = navigation_menu(nav);
			
			navigation_li(menu,"show",null,"show","nav_show('"+rect_id+"')");
			if (isRoot){
				children = false;
				navigation_li(menu,"hide",null,"hide","");
			} else {
				navigation_li(menu,"hide",null,"show","nav_hide('"+rect_id+"')");
			}
			navigation_li(menu,"expand",null,"show","nav_expand('"+rect_id+"')");
			navigation_li(menu,"collapse",null,"show","nav_collapse('"+rect_id+"')");
			navigation_li(menu,"color",null,"show","show_color(this)");
		//Comportant des items
	}
		
		
		//S'il n'y as pas d'enfant et que la variable children étais true
		if (mapping.length < 1 && (children == true || children == undefined)){
			console.log("Not children");
			children = false;
			
			
			//suppresion de l'ancien menu

			
			//Ajout d'une div principal
			let nav = navigation(mon_menu);
				//Ajout d'un menu
				let menu = navigation_menu(nav);

				
				
				if (isRoot){
					children = true;
					navigation_li(menu,"hide",null,"hide","");
				} else {
					navigation_li(menu,"hide",null,"show","nav_hide('"+rect_id+"')");
				}
				navigation_li(menu,"color",null,"show","show_color(this)");
					//Comportant des items
		}
	 
		
		
		
		let menu = d3.select("body #tools #menu");
		let nav = menu.select("body #tools #menu #navigation");		

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
	let menu = d3.select("body #tools #menu");
	let nav = menu.select("body #tools #menu #navigation");	
	
	menu
	.style("z-index","-100");
	
	
	nav
	.style("visibility","hidden")
	
}



function nav_show(nom){  //nom de l'id

	let rect = new D_RECT(null);
	rect.datas_id(nom, "svg");
	rect.attr("show",true);
	
	update();

}

function nav_hide(nom){  //nom de l'id
	

	let rect = new D_RECT(null);
	rect.datas_id(nom, "svg");
	rect.attr("show",false);
	
	update();
}




function nav_expand(nom){  //nom de l'id


	let rect = new D_RECT(null);
	rect.datas_id(nom, "svg");
	rect.attr("show",true,"fils");
	
	update();

}


function nav_collapse(nom){ //nom de l'id
	let rect = new D_RECT(null);
	rect.datas_id(nom, "svg");
	rect.attr("show",false,"childrens");
	
	update();


}
