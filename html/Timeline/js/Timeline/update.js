



/*///////////////////////////////////////
 * REDESSINE LES ELEMENTS HIERARCHIQUE
 ///////////////////////////////////////*/
function update(){

	//Selectionne le root
	let root = d_json.root;
	
	//Le recalculer
	d_json.initialise(root);
	
	//Recuperer tous les noeud du root avec l'attributs show = true
	let datas = d_json.getAttr(root,{show:true},"branch");
	
	

	/*Updates de tout les rectangles
	 * 
	 * A la fin des transition de ce rectangle
	 * => updates de tout les polygons
	 * => updates de tout les textes
	 * */
	let rect = new D_RECT(datas);
	let polygon = new D_POLYGON(datas);
	let text = new D_TEXT(datas);
	
	rect.update("#hierarchypart #rect");
	polygon.update("#hierarchypart #polygon");
	text.update("#hierarchypart #text");
	
	//Reintegrer les evenements (clic droit etc ...)
	event_doc();
	
	update_occurs();
}

function update_occurs(){

	//Selectionne le root
	let root = d_json.root;

	//Recuperer tous les noeud du root avec l'attributs show = true
	let datas = d_json.getAttr(root,{occursLeaf:null},"branch");
	

	/*Updates de tout les rectangles
	 * 
	 * A la fin des transition de ce rectangle
	 * => updates de tout les polygons
	 * => updates de tout les textes
	 * */

	let rect = new D_RECT(datas);
	rect.x = 0;
	rect.width = 100;
	let text = new D_TEXT(datas);
	
	rect.update("#occurpart #rect");
	//polygon.update("#polygon");
	//text.update("#text");
	
	//Reintegrer les evenements (clic droit etc ...)
	event_doc();
}