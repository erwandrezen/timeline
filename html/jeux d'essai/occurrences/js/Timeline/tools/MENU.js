class menu extends tools{
	constructor(element){
		super(element);
	}





	showConfig(){
		let target = d3.event.target;
		let tagName = target.tagName;
		
		
		let mon_menu = d3.select(this.element);

		//console.log("contextmenu");
		 
		//Recuperation des donnees cible
			let data = d3.select(target).datum();
		
			let children;
			let isRoot = (data.root != undefined ? true : false);
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
				
				navigation_li(menu,"show",null,"show","hierarchy_show()");
				if (isRoot){
					children = false;
					navigation_li(menu,"hide",null,"hide","");
				} else {
					navigation_li(menu,"hide",null,"show","hierarchy_hide()");
				}
				navigation_li(menu,"expand",null,"show","hierarchy_expand()");
				navigation_li(menu,"collapse",null,"show","hierarchy_collapse()");
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
						navigation_li(menu,"hide",null,"show","hierarchy_hide()");
					}
					navigation_li(menu,"color",null,"show","show_color(this)");
						//Comportant des items
			}
		 
		
			
			
	}





}




//Affiche le menu contextuel
function show_context_menu(element){
	
	let target = d3.event.target;
	let tagName = target.tagName;
	
	
	
	if (tagName == "rect" || tagName == "text" || tagName == "polygon"){

		let select = "body #tools #menu";
		let menuContextuel = new menu(select);
		menuContextuel.show();
	}
	
		
}
	


function hierarchy_show(){  //nom de l'id


	d_json.attr("branch",["show"],true);
	update();

}



function hierarchy_hide(){  //nom de l'id
	

	d_json.attr("branch",["show"],false);
	update();
}



function hierarchy_expand(){  //nom de l'id
	
	//console.log(rect);
	//rect.attr("show",true,"fils");
	d_json.attr("cousin",["show"],true);
	update();

}



function hierarchy_collapse(){ //nom de l'id

	d_json.attr("childrens",["show"],false);
	update();


}


