
function changeColor(uid, newColor, expand = "branch", ownNode = true){

	//Indique le noeud cible : root
	let root = d_json.root;

	//Recupere tout les identifiant qui correspand
	let allUid = d_json.get_attr("branch", "uid",uid, root);
	
	thisNode = allUid[0];
	//Si on souhaite modifier le propre noeud
	if (ownNode){
		Object.assign(thisNode, {color:newColor});
	}
	
	d_json.set_attr(expand, "color",newColor, allUid);

	update();
}