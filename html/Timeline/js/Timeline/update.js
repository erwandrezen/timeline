



/*///////////////////////////////////////
 * REDESSINE LES ELEMENTS HIERARCHIQUE
 ///////////////////////////////////////*/
function update(){

	//Selectionne le root
	let root = d_json.root;
	
	//Le recalculer
	d_json.initialise(root);
	
	//Recuperer tous les noeud du root avec l'attributs show = true
	let datas = d_json.getAttr(root,[{show:true}],"branch");
	
	
	//console.log(datas)
	//debugger
	
	
	let rect = new D_RECT(datas);
	let polygon = new D_POLYGON(datas);
	let text = new D_TEXT(datas);
	
	rect.update("#hierarchypart #rect");
	polygon.update("#hierarchypart #polygon");
	text.update("#hierarchypart #text");
	
	//Reintegrer les evenements (clic droit etc ...)
	update_occurs();
	//event_doc();
	
	
}

function update_occurs(){

	//Selectionne le root
	let root = d_json.root;

	let datas = d_json.getAttr(root,[{occursLeaf:null},{show:true}],"branch");
	//let datas = d_json.getAttr(root,[{occursLeaf:null},{x:null},{y:null},{width:null},{height:null},{color:null},{show:true}],"branch", true);
	
	let rect = new D_RECT(datas);
	rect.x = 0;
	rect.width = d_json.max_width;
	
	let circle = new D_CIRCLE(datas);
	let text = new D_TEXT(datas);
	
	rect.update("#occurpart #rect");
	circle.update("#occurpart #circle");


	
	
	//d3.select("#occurpart svg").call(zoom);
	let synchronisation = d3.selectAll("#parts svg")
	
	synchronisation.on("wheel",wheel)
	
	function wheel(){
		d3.event.preventDefault();
		
		let event = d3.event;
		let target = event.target;
		let select = synchronisation;
		let translate = select.style("transform") //Recupere la valeur
		
		//d = digit g=grouper |=ou
		//soit digit positif ou negatif
		translate = translate .match(/(\d+)|(-\d+)/g); // We grab only the digits    
		
		
		
		
		function elementAttr(element){
			return element.getBoundingClientRect();
		}
		
		
		function svgAttr(element){
			return element.getBBox();
		}
		
		/*
		let svgHeight = svgAttr(select).height;
		let eTimeline = d3.select("#timeline").node();
		let eTimepart = d3.select("#timepart").node();
		let eParts = d3.select("#parts").node();
		*/
		//let posYtimeline = eTimeline//position y timeline
		//position y timepart
		//position y parts

		//hauteur h timeline
		//hauteur h timepart
		//hauteur h parts
		/*
		let positionY = element.y;
		let svgPositionY = svgAttr(select)
		*/
		let layerY = event.layerY;
		let deltaY = event.wheelDeltaY;
		let k = 10;
		let y = translate;
		try {
			y = y[0];
			y = parseInt(y);
		} catch(e) {
			y = 0;
		}
		
		//HAUT
		//position svg
		//== 
		//position timeline + freeze
		//HAUT

		
		//BAS
		//si la hauteur du svg + position
		//== 
		//hauteur timeline + position
		
		synchronisation = d3.selectAll(
				"#parts svg #rect," +
				"#parts svg #circle," +
				"#parts svg #polygon," +
				"#parts svg #text")
		if (deltaY > 0){ //Wheel up
			///Voir les parts d'en haut
			y -= k;
			
			synchronisation.style("transform","translateY("+y+"px)");
		} else {// Wheel down
			//Voir les parts d'en bas
			y += k;
			synchronisation.style("transform","translateY("+y+"px)");
		}

		
	}
	
	function zoomed(){
		/*
		let y = d3.event.transform.y;
		
		console.log(d3.event)
		
		synchronisation.style("transform","translateY("+y+"px)")*/
		

		
		
		/*
		synchronisation = d3.select("#timepart #text #chronologique")
		synchronisation.style("transform","translateX("+x+"px)")*/
	}
	
	//polygon.update("#polygon");
	//text.update("#text");
	
	//Reintegrer les evenements (clic droit etc ...)
	event_doc();
}