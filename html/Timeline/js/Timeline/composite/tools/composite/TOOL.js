class tools{
	constructor(element){
		this.element = element;
		this.durationStart = 328;
		this.durationEnd = 80;
	}





	get element(){
		return this._element;
	}
	
	set element(value){
		this._element = value;
	}

	
	
	get durationStart(){
		return this._durationStart;
	}
	
	set durationStart(value){
		this._durationStart = value;
	}

	
	
	get durationEnd(){
		return this._durationEnd;
	}
	
	set durationEnd(value){
		this._durationEnd = value;
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
		.duration(this.durationStart) // Control la duree de transition
		.style("opacity","1")
		.on("start", function(d,i,e){ //Avant toute transition
			
			select
			.style("opacity","0")
			.style("z-index","10");
			
		})
		.on("end", function(d){ //Après toute transition
			
			select.node().focus();
			
		})
		
		
		if (setPosition){
			
			let pos = this.position;
			select
			.style("position","absolute")
			.style("left",pos[0]+"px")
			.style("top",pos[1]+"px");
			
		}
		
		
		select
		.style("visibility","visible")

		
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
		.duration(this.durationEnd) // Control la duree de transition
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





