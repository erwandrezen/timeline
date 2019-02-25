function getOccurs(uid){
	//Indique le noeud cible : root
	let root = d_json.root;

	//Recupere tout les identifiant qui correspand
	let allUid = d_json.getAttr(root,{uid:uid}, "branch");
	
	let listOccurs = d_json.getAttr(allUid, {occurs:null},"branch", false, true);
	
	console.log(listOccurs);
}