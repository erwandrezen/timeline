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
			let rect_id =  target.getAttribute("class");
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
				
				console.log(rect_id);
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
		 
		
			
			
	}
}