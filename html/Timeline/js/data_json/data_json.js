
class data_json{
	
	constructor(root = undefined, max_width = 500, min_rect_height = 15, childrenName = "children"){ //node et root = liste d'objet
		
		this.root = root;
		this.node = root;
		this.max_width = max_width;
		this.min_rect_height = min_rect_height;
		this.max_depth = 0;
		this.feuilles = 0;
		this.childrenName = childrenName;
		
		this.depth = 0;
		this.total_depth();
		
		this.min_rect_width = this.max_width / this.max_depth ;
		
		this.parcourir();
		this.set_feuilles();
		//this.initialise();
		
		
		
		//this.depth = this.depth_node();
	}
	
	get childrenName(){
		return this._childrenName;
	}
	
	
	
	set childrenName(value){
		this._childrenName = value;
	}
	
	get max_width(){
		return this._max_width;
	}
	
	
	
	set max_width(value){
		this._max_width = value;
	}
	
	get min_rect_height(){
		return this._min_rect_height;
	}
	
	
	
	set min_rect_height(value){
		this._min_rect_height = value;
	}
	
	
	get min_rect_width(){
		return this._min_rect_width;
	}
	
	
	
	set min_rect_width(value){
		this._min_rect_width = value;
	}
	
	get node(){
		return this._node;
	}
	
	
	
	set node(value){
		this._node = value;
	}
	
	get branch(){
		
	}
	
	
	get max_depth(){
		return this._max_depth;
	}
	
	
	
	set max_depth(value){
		this._max_depth = value;
	}
	
	
	//Recupere les donnees selon le mode choisi
	selectDatas(datas, expand = "branch"){
		
		
		
		
		
		if (expand == "branch"){ // Objet
			datas = this.branch(datas);
		}
		
		if (expand == "childrens"){ // Liste d'objets
			datas = this.childrens(datas);
		}
		
		if (expand == "cousin"){ // Liste d'objets
			datas = this.cousin(datas);
		}
		
		if (expand == "brothers"){ //N'existe plus (ou cas ou il reste des morceaux de cette fonction
			console.log("brothers n'existe plus il est remplacé par son")
		}
		
		if (expand == "son"){ // Objet
			datas = this.son(datas);
		}
		
		
		
		
		
		return datas;
	}
	
	getAttr(node, attribute,  expand = "branch"){
		
		node = this.node_null(node); // S'il est null récupere le noeud du JSON
		
		let datas = this.selectDatas(node, expand);
		let key = Object.keys(attribute);
		let value = Object.values(attribute);
		
		//Pour 1 attribut ( ne prend pas en compte une liste d'attribut )
		key = key[0];
		value = value[0];
		
		if (datas != undefined){

				
					let setting = []; 
		
						datas.map(obj => {
							let values = Object.values(obj);
							if (obj[key] == value){ 
								setting = setting.concat([obj]);
							}
						})

					setting = setting.flat();
					return setting;

	}
		
}
	
	
	setAttr(node, newAttribute, expand = "branch" ){
		
		node = this.node_null(node); // S'il est null récupere le noeud du JSON
		
		let datas = this.selectDatas(node, expand);
		
		
		
		if (datas != undefined){

				

		
					let setting = datas.map(obj => {
						
						//Assigne le nouvel objet
						Object.assign(obj, newAttribute);
						
						//Retourne l'objet
						return obj;
					})
					
					setting = setting.flat();
					return setting;

	}
		
}
	
	
	attr(expand = "branch", attribute, value = undefined,  node = undefined){
		node = this.node_null(node);
		let datas = node;
		
		if (expand == "branch"){
			
			datas = this.branch(node);
			
		}
		
		
		if (expand == "cousin"){
			datas = this.cousin(node,"children");
		}
		
		if (expand == "brothers"){
			datas = this.brothers(node,"children");
		}
		
		if (expand == "childrens"){
			datas = this.childrens(node);
		}
		
		
		
		if (datas != undefined){

			if (value != undefined){
				
				
				
				let setting = datas.map(m => {
					
					if (m.constructor.name == "Object"){
						return m[attribute] = value};
					}
				);
				
				
				return setting;
			} else {
				
					let setting = [];
					let liste = datas.map(m => {
						let obj = {};
						let attributes = attribute.forEach(function(d){

								//obj[d] = m[d];
								//setting.push(obj)
							setting.push(m);
								return obj;
		
							
						});
						
					
	
						
					});
					return setting;
				
				
			}
	}
		
}
	
	
	get depth(){
		return this._depth;
	}
	
	set depth(value){
		this._depth = value;
	}

	get feuilles(){
		return this._feuilles;
	}
	
	set feuilles(value){
		this._feuilles = value;
	}
	
	/*
	
	depth_node (array = this.node, depth = [1]) {
	    let constr = this;
	    
	    //Pour chaque objet d'une liste
	    array = array.map(obj => {
	    		let brothers = constr.son(obj);
	    		if (brothers != undefined){return brothers;
	    		} else {
	    			if (obj != undefined){
	    				
	    				//Dire que c'est une feuille
	    				Object.assign(obj, {feuilles:0});
		    			constr.feuilles += 1;
		    		}
	    		}
	    			
	    });
	   array = array.flat();
	    if (array.join('').length > 0){
	    	depth[0] += 1;
	    	constr.depth_node(array, depth);
	    } else {
	    	constr.feuilles -= 1;
	    }
	    
	    return depth[0];
	}*/

	set_feuilles(node){
		node = this.node_null(node);
		let branch = this.branch(node);
		let root = branch[0];
		Object.assign(root,{root:true});
		
		//Longueur du tableau
		let length = branch.length - 1; //0 et le depart
		let obj = {};
		
		while (obj != undefined){
			
			//Recuperer le dernier objet et le supprimer
			obj = branch.pop(); //Dernier objet (celui supprimer)
			
			let haveSon = this.getAttr(obj,{show:true},"son");
			let feuilles = 0;
			
			//S'il a des freres qui ont un attributs show
			if (haveSon != undefined){
				//Recuperer ses freres ci et compter ses feuilles
				
				haveSon.map(unObj => {
					(unObj.feuilles > 0 ? feuilles += unObj.feuilles : feuilles += 1);
				});
				
				
				//Object.assign(obj, {feuilles: feuilles});
				
			} else { //Sinon on le considere comme une feuille
			}
			
			let height = (feuilles <= 0 ? this.min_rect_height : this.min_rect_height * feuilles );
			if (obj != undefined){
				
				Object.assign(obj, {feuilles: feuilles, height: height});
			}	
			
			
		}
		
		//this.root = this.node;
	}
	
	total_depth(liste = this.node){
		this.max_depth += 1;
		let lesCousins = this.cousin(liste,"children");
		if (lesCousins.length > 0 ){
			this.total_depth(lesCousins);
		}
		
		return this.max_depth;
	}
	
	parcourir(root = this.root,informations = {depth:this.max_depth,x:0,y:0,w:0,h:0}){
		
		
		let depth = informations.depth;
		let width = this.min_rect_width;

		let noeuds = root.map(m => {
					//Recuperer l'enfant
					

					
					
					
					
					/* (S'il y'a des donnees (des enfants)) 
					 * ? 
					 * On reparcour 
					 * : 
					 * Sinon message dans la console
					*/
					// (childrens.length > 0 ? parcourir(childrens) : feuilles())

					Object.assign(m,{
						depth:depth,
						x:informations.x,
						y:informations.y,
						width:width})
						
						
						//Si show n'es pas assigner le faire
						if (m.show == undefined){
							Object.assign(m,{show:true})
						}
						
						if (m.color == undefined){
							Object.assign(m,{color:"white"})
							
						}
					
					
					
						let childrens = this.son(m);
						
						let trueSon = this.getAttr(m,{show:true},"son");
						let undefinedSon = this.getAttr(m,{show:undefined},"son");
						
						let son;
						if (trueSon != undefined && undefinedSon != undefined){
							son = (trueSon.length > 0 || undefinedSon.length > 0? true : false);
							
						} else {
							son = false;
						}
						
						//childrens = this.son(m);
							//childrens = this.attr("brothers",["show"],undefined,m);
	
					//Children identifie les freres avec attributs show
					
						//S'applique seulement au noeud qui sont (show = true ou show non identifier(par default))
					if (m.show == true || m.show == undefined){
						if(son != false){
							
							//console.log("Parent: ",m);
							//console.log("Childrens: ",childrens);
							
							
							informations.x += this._min_rect_width;
							//Profondeur = this.max_depth -1
							informations.depth -= 1;
							
							//Reparcourire
							this.parcourir(childrens, informations);
	
							
							
							
						} else {
							
							let width_feuille = width*(depth);
							Object.assign(m,{feuilles:0,width:width_feuille})
								
								
							informations.y += this.min_rect_height;
							//marquer la feuille
	
							//debugger
						
						}
					}
					
					
					
					
					
				
					
					//Retourne rien
				});
		informations.depth += 1;
		informations.x -= this._min_rect_width;
		
		//this.root = this.node;
	}
	//debugger;
		

		

	initialise(node = undefined){ // root
		this.parcourir(this.root);
		this.set_feuilles(this.root);
	}

	son(node = undefined, number = undefined/*, filter = undefined*/){ //objet
		
		node = this.node_null(node);
		let children = this.childrenName;
		//Si le noeud est une liste
		/*
		if (node.constructor.name == "Array"){
			if (number != undefined){
				node = node[number]; // On prend le fils indiquer
			} else {
				node = node[0]; // On prend le premier fils par default
			}
		}
*/
		return node[children];
	}

	/*
	//Enfant du noeud
	brothers(node = undefined, nom = "*"){ //objet
		node = this.node_null(node);
		//number = this.number_null(number);
		
		if (nom != "*"){
			node = node[nom]; // On prend le fils indiquer
		} else {
			node = Object.values(node);
			node = node.filter(f => f.constructor.name == "Array");
			node = node.flat();
		}
		
		
		if (node != undefined){
			return node;
		}
		
	}*/

	have_brothers(node, nom = "*"){
		let brothers = this.brothers(node,nom);
		
		brothers = (brothers != undefined ? true : false);
		
		return brothers;
	}
	
	//Enregistre tout les enfants sauf le noeud courrant
	childrens(node = undefined, filter = undefined){
		
		
		node = this.node_null(node);
		
		let listBrothers = node;
		let datas = [] //list d'objet
		
		while (listBrothers.length > 0){
			listBrothers = this.cousin(listBrothers,"children");

			datas = datas.concat(listBrothers);
		}
		
		//Pour chaque noeud recuperer ses cousins
			//P
			//Recuperer ses fils
			//O = aux fils
		
		/*
		datas = datas.flat();
		
		if (filter != undefined){
			datas = datas.filter(f => f.filter[0] == filter[1]);
		}
		*/
		return datas;
	}

	
	//Deriver de childrens mais enregistre le noeud courrant
	branch(node = undefined, filter = undefined){

		node = this.node_null(node);
		let datas = node; //liste d'objet
		
		let childrens = this.childrens(node,filter);
		datas = datas.concat(childrens);
		return datas;
	}

	//Enfant de chaque freres
	cousin(liste){ //liste d'objet
		let save = [];
		liste.map(obj =>{
			let son = this.son(obj);
			if (son != undefined){
				save = save.concat(son);
			}
			
			
			
		})
		
		return save;
	}
	
	
	node_null(node){
		if (node == undefined || node == null || node == ""){
			node = this.node;
		}
		
		return node;
	}

	
	
	number_null(number){
		if (number == undefined || number == null || number == ""){
			number = undefined;
		}
		
		return number;
	}

	
	
	toArray(element){
		//Si c'est un objet
		if (element.constructor.name == "Object"){
			element = [element]; // On le met dans une liste d'objet
		}
		
		return element;
	}

	
	
	toObject(element, name = undefined){
		//
	}
}