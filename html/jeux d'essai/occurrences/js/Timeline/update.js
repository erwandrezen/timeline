



/*///////////////////////////////////////
 * REDESSINE LES ELEMENTS HIERARCHIQUE
 ///////////////////////////////////////*/
function update(){

	//Selectionne le root
	let root = d_json.root;
	
	//Le recalculer

	
	//Recuperer tous les noeud du root avec l'attributs show = true
	let occurs_list = d_json.getAttr(root,{occurs:null},"branch", true);
	
	console.log(occurs_list);

	/*Updates de tout les rectangles
	 * 
	 * A la fin des transition de ce rectangle
	 * => updates de tout les polygons
	 * => updates de tout les textes
	 * */
	//let lesElements = new elements(datas);

	//lesElements.update("#hierarchypart");
	
	//Reintegrer les evenements (clic droit etc ...)
	//event_doc();
}