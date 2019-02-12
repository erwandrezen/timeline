class tools{
	constructor(element){
		this.element = element;
	}
	
	get element(){
		return this._element;
	}
	
	set element(value){
		console.log(value);
		this._element = value;
	}
	

	get position(){
		let MouseX = event.clientX;
		let MouseY = event.clientY;
		
		let position = [MouseX, MouseY];

		return position;
	}
	
	
	
	show(){
		//selection du constructeur courant
		let tools_constructor = this;
		
		let pos = this.position;
		
		
		//lancement de la configuration d'affichage de l'outils
		this.showConfig();
		
		//selection de l'element
		let select = d3.select(this.element);
		
		select
		.transition()
		.duration(150)
		.on("start", function(d,i,e){
			select
			.style("z-index","10")
			
		})
		.on("end", function(d){
			select.node().focus();
		})
		.style("left",pos[0]+"px")
		.style("top",pos[1]+"px")
		.style("visibility","visible")
		.style("opacity","1");
		
		select
		.on("blur",function(){
			
				tools_constructor.hide();
			})
		
		 
		
		
		
	}
	
	showConfig(){
		return null;
	}
	
	hide(){
		
		//selection de l'element
		let select = d3.select(this.element);
		let tools_constructor = this;
		
		select
		.transition()
		.duration(150)
		.on("end", function(d){
			select
			.style("z-index","-10")
			.style("visibility","hidden");
			
			tools_constructor.hideConfig();
			
		})
		.style("opacity","0");
	}
	
	
	hideConfig(){
		return null;
	}
}






function show_nav(element){
	d3.select("body #tools #menu").remove();
	
	
	let mon_menu = d3.select("body #tools")
	.append("div")
	.attr("id","menu")
	//console.log("contextmenu");
	 
	//Recuperation des donnees cible
		let data = d3.select(element).datum();
		let children;
		let isRoot = (data.root != undefined ? true : false);
		let rect_id =  element.getAttribute("id");
		//Recuperation des enfants
		let object_values = Object.values(data);
		let mapping = object_values.filter(f => f.constructor.name == "Array");
		mapping = mapping.flat();
		
		
		
		//S'il y as  des enfants et que la variable children étais false
		if (mapping.length > 0 && (children == false || children == undefined)){
			children = true;
			
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
