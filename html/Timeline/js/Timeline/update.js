



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
	synchronisation.on("wheel",wheeling)
	
	synchronisation = d3.select("#parts #occurpart svg")
	synchronisation.call(d3.drag().on("drag", dragging));
	
	function wheeling(){
		d3.event.preventDefault();
		
		let event = d3.event;
		let target = event.target;
		let select = synchronisation;
		let translate = select.style("transform") //Recupere la valeur
		
		//d = digit g=grouper |=ou
		//soit digit positif ou negatif
		translate = translate .match(/(\d+)|(-\d+)/g); // We grab only the digits    
		translate = (translate == null ? [0,0] : translate);
		
		let x = (translate[0] == null ? 0 : parseInt(translate[0]));
		let y = (translate[1] == null ? 0 : parseInt(translate[1]));
		
		function elementAttr(element){
			return element.getBoundingClientRect();
		}
		
		
		function svgAttr(element){
			return element.getBBox();
		}
		
		
		let eSVG = select.node();
		let eTimeline = d3.select("#timeline").node();
		let eTimepart = d3.select("#timepart").node();
		let eParts = d3.select("#parts").node();
		
		
		let posYsvg = elementAttr(eSVG).y;
		let posYtimeline = elementAttr(eTimeline).y;		//position y timeline
		let posYtimepart = elementAttr(eTimepart).y;		//position y timepart
		let posYparts = elementAttr(eParts).y;				//position y parts

		
		let sizeHsvg = svgAttr(eSVG).height;
		let sizeHtimeline = elementAttr(eTimeline).height;	//hauteur h timeline
		let sizeHtimepart = elementAttr(eTimepart).height;	//hauteur h timepart
		let sizeHparts = elementAttr(eParts).height;		//hauteur h parts
		

		let heightCordSVG = posYsvg + sizeHsvg;
		let heightCordTimeline = posYtimeline + sizeHtimeline;
		let heightCordParts = posYparts + sizeHparts;
		//hauteur h parts
		/*
		let positionY = element.y;
		let svgPositionY = svgAttr(select)
		*/
		let layerY = event.layerY;
		let deltaY = event.wheelDeltaY;
		let k = 10;

		

		function checkScrollingTop(coef){

			if (heightCordSVG <= heightCordParts){
				console.log("*inf.");
				return true;
			} else {
				console.log("*superior");
				return false;
			}
		}
		
		

		function checkScrollingBot(coef){
			
			if (posYsvg >= posYparts){
				console.log("superior");
				return true;
			} else {
				console.log("inf.");
				return false;
			}
		}
		
		
		
		

		synchronisation = d3.selectAll(
				"#parts svg #rect," +
				"#parts svg #polygon," +
				"#parts svg #text")
		if (deltaY > 0){ //Wheel up
			///Voir les parts d'en haut
			k = -k;
			y += k;
			
			if (!checkScrollingTop(k)){
				synchronisation.style("transform","translateY("+y+"px)");
				synchronisation = d3.selectAll("#parts svg #circle")
				synchronisation.style("transform","translate("+x+"px,"+y+"px)");
			}
			
		} else {// Wheel down
			//Voir les parts d'en bas
			y += k;
			
			if(!checkScrollingBot(k)){
				synchronisation.style("transform","translateY("+y+"px)");
				synchronisation = d3.selectAll("#parts svg #circle")
				synchronisation.style("transform","translate("+x+"px,"+y+"px)");
			}
			
			
		}

		
	}
	
	
	
	
	function dragging(){
		function checkScrollingLeft(){
			
		}
		
		function checkScrollingRight(){
			
		}
		
		
		let select = d3.select("#occurpart #circle");
		let translate = select.style("transform") //Recupere la valeur
		
		translate = translate.match(/(\d+)|(-\d+)/g); // We grab only the digits    
		translate = (translate == null ? [0,0] : translate);
		
		let x = (translate[0] == null ? 0 : parseInt(translate[0]));
		let y = (translate[1] == null ? 0 : parseInt(translate[1]));
		
		
		let event = d3.event;
		let dx = event.dx;
		
		
		x += dx;
		synchronisation = d3.selectAll("#parts #occurpart svg #circle,"+
									"#timepart svg #chronologique")
		synchronisation.style("transform","translate("+x+"px,"+y+"px)");
	

	}
	
	//polygon.update("#polygon");
	//text.update("#text");
	
	//Reintegrer les evenements (clic droit etc ...)
	event_doc();
}