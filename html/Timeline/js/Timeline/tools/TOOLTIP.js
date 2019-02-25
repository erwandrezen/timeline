class tooltip extends tools{
	constructor(element){
		super(element);
	}





	showConfig(){
		let select = d3.select(this.element);
		
		//Information de l'element
		let target = event.target;
		let tagName = target.tagName;
		let id = target.getAttribute("id");
		let x = target.getAttribute("x");
		let y = target.getAttribute("y");
		
		
		
		//Information souris
		let pos = this.position;
		
		
		//Information donnees de l'elements
		let select_target = d3.select(target);
		let data;
		let color;
		let depth;
		let height;
		let width;
		let d_x;
		let d_y;
		let d_pos;
		let detail;
		if (tagName == "rect" || tagName == "polygon" || tagName == "text"){
			data = select_target.datum();
			color = data.color;
			depth = data.depth;
			height = data.height;
			width = data.width;
			d_x = data.x;
			d_y = data.y;
			d_pos = [d_x,d_y];
			detail = data.detail;
		} else {
			console.log("tooltip: Les informations ne font pas parties du SVG et ne sont pas disponible")
		}
		
		let keys = Object.keys(data);
		let values = Object.values(data);
		let data_values = "";
		for (let i in keys){
			data_values += keys[i] + ": " + values[i] + "<br/>";
		}
		
		select
		
		.html( //Retourne du html
				"INFORMATION ELEMENT <br/>"+
				"tag: "+tagName + "<br/>" +
				"id: " + id  + "<br/>" +
				"pos: " + pos  + "<br/>" +
				
				
				"<br/><br/><br/>"+
				"INFORMATION DONNEES <br/>"+
				data_values
				)
		//IMPORTANT PERMET LE FOCUS DE L'ELEMENT
		.attr("tabindex","0") ;
		
		
		/*
		.style("z-index","10")
		.transition()
		.duration(250)
		
		.style("opacity","1");*/
	}

	hideConfig(){
		let select = d3.select(this.element);
		select.html("");
	}





}





function show_tooltip(){
	mytooltip = new tooltip("#tools #tooltip");
	mytooltip.show();
	
}


