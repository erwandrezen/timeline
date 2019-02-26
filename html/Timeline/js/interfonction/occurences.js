function getOccurs(uid){
	//Indique le noeud cible : root
	let root = d_json.root;

	//Recupere tout les identifiant qui correspand
	let allUid = d_json.getAttr(root,{uid:uid}, "branch");
	
	let listOccurs = d_json.getAttr(allUid, {occurs:null},"branch", false, true);
	
	return listOccurs;
}

	Date.prototype.addDays = function(days, t0 = "1 January 1900") {
    var date = new Date(t0);
    date.setDate(date.getDate() + days);
    return date;
}