
function changeColor(uid, newColor, expand = "branch", ownNode = true){

	//Indique le noeud cible : root
	let root = d_json.root;

	//Recupere tout les identifiant qui correspand
	let allUid = d_json.getAttr(root,{uid:uid}, "branch");
	
	thisNode = allUid[0];
	//Si on souhaite modifier le propre noeud
	if (ownNode){
		Object.assign(thisNode, {color:newColor});
	}
	
	d_json.setAttr(allUid, {color:newColor}, expand);
	update();
}