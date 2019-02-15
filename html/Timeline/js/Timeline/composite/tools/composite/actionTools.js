class tools{
	constructor(element){
		this.element = element;
	}
	
	get element(){
		return this._element;
	}
	
	set element(value){
		this._element = value;
	}
	

	get position(){
		let MouseX = event.clientX;
		let MouseY = event.clientY;
		
		let position = [MouseX, MouseY];

		return position;
	}
	
	
	
	show(setPosition = true){
		//selection du constructeur courant
		let tools_constructor = this;
		
		
		
		
		//lancement de la configuration d'affichage de l'outils
		this.showConfig();
		
		//selection de l'element
		let select = d3.select(this.element);
		
		select
		.transition()
		.duration(150)
		.on("start", function(d,i,e){
			select
			.style("position","absolute")
			.style("z-index","10")
			
		})
		.on("end", function(d){
			select.node().focus();
		})
		
		
		if (setPosition){
			let pos = this.position;
			select
			.style("left",pos[0]+"px")
			.style("top",pos[1]+"px")
		}
		
		
		select
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




select = d3.select("body #tools");
select.append("div")
.attr("id","menu");
function show_nav(element){
	
	let target = d3.event.target;
	let tagName = target.tagName;
	
	
	
	if (tagName == "rect" || tagName == "text" || tagName == "polygon"){

		let select = "body #tools #menu";
		let menuContextuel = new menu(select);
		menuContextuel.show();
	}
	
		
}
	


function nav_show(){  //nom de l'id


	d_json.attr("branch",["show"],true);
	update();

}

function nav_hide(){  //nom de l'id
	

	d_json.attr("branch",["show"],false);
	update();
}




function nav_expand(){  //nom de l'id
	
	//console.log(rect);
	//rect.attr("show",true,"fils");
	d_json.attr("cousin",["show"],true);
	update();

}


function nav_collapse(){ //nom de l'id

	d_json.attr("childrens",["show"],false);
	update();


}
