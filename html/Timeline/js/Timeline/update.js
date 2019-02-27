



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

	let datas = d_json.getAttr(root,[{occursLeaf:null},{x:null},{y:null},{width:null},{height:null},{color:null},{show:true}],"branch", true);
	
	let rect = new D_RECT(datas);
	rect.x = 0;
	rect.width = d_json.max_width;
	
	let circle = new D_CIRCLE(datas);
	let text = new D_TEXT(datas);
	
	rect.update("#occurpart #rect");
	circle.update("#occurpart #circle");
	let zoom = d3.zoom()
	.on("zoom",zoomed)
	
	d3.select("#occurpart svg").call(zoom);
	//d3.select("#timepart #text #chronologique").call(zoom);
	function zoomed(){
		let x = d3.event.transform.x;
		let synchronisation;
		
		synchronisation = d3.select("#occurpart svg #circle")
		synchronisation.style("transform","translateX("+x+"px)")
		
		synchronisation = d3.select("#timepart #text #chronologique")
		synchronisation.style("transform","translateX("+x+"px)")
	}
	
	//polygon.update("#polygon");
	//text.update("#text");
	
	//Reintegrer les evenements (clic droit etc ...)
	event_doc();
}