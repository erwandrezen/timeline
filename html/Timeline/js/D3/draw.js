



/*///////////////////////////////////////
 * REDESSINE LES ELEMENTS HIERARCHIQUE
 ///////////////////////////////////////*/
function update(){
	//parcourir(root,500,15); //Recalcule du json: root = noeud root	;	500 = width	;	15 = feuille constant => height dynamic

	//let datas = get_all_childrens(root, true); //Recupere tout les enfants avec show = true
	console.log(d_json);
	let root = d_json.root;
	d_json.initialise(root);
	//let datas = d_json.branch(root);
	let datas = d_json.get_attr("branch","show",true,root);
	
	//Variable pas utile
	//let datas_hide = get_all_childrens(root, false);  //Recupere tout les enfants avec show = false
	
	//console.log("history",datas);

	/*Updates de tout les rectangles
	 * 
	 * A la fin des transition de ce rectangle
	 * => updates de tout les polygons
	 * => updates de tout les textes
	 * */
	let rect = new D_RECT(datas);
	let polygon = new D_POLYGON(datas);
	let text = new D_TEXT(datas);
	

	rect.update("#rect");
	polygon.update("#polygon");
	text.update("#text");
	
	//Reintegrer les evenements (clic droit etc ...)
	event_rect(root);
	event_doc();
}