



/*///////////////////////////////////////
 * REDESSINE LES ELEMENTS HIERARCHIQUE
 ///////////////////////////////////////*/
function update(){
	parcourir(root,500,15); //Recalcule du json: root = noeud root	;	500 = width	;	15 = feuille constant => height dynamic
	let datas = get_all_childrens(root, true); //Recupere tout les enfants avec show = true
	
	//Variable pas utile
	let datas_hide = get_all_childrens(root, false);  //Recupere tout les enfants avec show = false
	
	//console.log("history",datas_hide);

	/*Updates de tout les rectangles
	 * 
	 * A la fin des transition de ce rectangle
	 * => updates de tout les polygons
	 * => updates de tout les textes
	 * */
	let rect = new D_RECT(null);
	let polygon = new D_POLYGON(null);
	let text = new D_TEXT(null);
	

	rect.update("#rect");
	polygon.update("#polygon");
	text.update("#text");
	
	//Reintegrer les evenements (clic droit etc ...)
	event_rect(root);
	event_doc();
}

function change_color(id,color){
	let rect = new D_RECT(null);
	
	//Recupere les donnees
	let data = rect.datas_id(id);
	console.log(id,"data color", data);
	//Change les valeurs
	rect.attr(["color"],color);
	
	//div parent
	rect.update("#rect");
}