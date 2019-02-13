
class data_json{
	
	constructor(root = undefined){ //node et root = liste d'objet
		this.node = root;
		this.root = root;
		this.feuilles = 0;
		this.depth = this.depth_node();
	}
	
	get node(){
		return this._node;
	}
	
	
	
	set node(value){
		this._node = value;
	}
	
	get branch(){
		
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
						
						if (m[d] != undefined){
							obj[d] = m[d];
							setting.push(obj)
							return obj;
						}
						
					});
					
				

					
				});
				return setting;
			
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
	
	
	
	depth_node (array = this.node, depth = [1]) {
	    let constr = this;
	    
	    //Pour chaque objet d'une liste
	    array = array.map(obj => {
	    		let brothers = constr.brothers(obj,"children");
	    		if (brothers != undefined){return brothers;
	    		} else {
	    			if (obj != undefined){
	    				
	    				//Dire que c'est une feuille
	    				Object.assign(obj, {feuilless:0});
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
	}

	set_feuilles(node){
		node = this.node_null(node);
		let branch = this.branch(node);
		
		
		//Longueur du tableau
		let length = branch.length - 1; //0 et le depart
		
		for (length ; length >= 0 ; length -= 1){
			let obj = branch[length];
			//console.log(obj);
			let brothersBool = this.have_brothers(obj,"children");
			if (brothersBool){
				//console.log(brothersBool);
				
				//Recuperer les feuilles
				let attribute = "feuilless";
				let feuilles = this.attr("brothers", [attribute], undefined, obj)
				console.log(feuilles);
				let somme = 0;
				feuilles.map(f => {
					(f[attribute] <= 0 ? somme += feuilles.length : somme += f[attribute]);
					
					});
	
				//Calculer la somme des enfants
				

				
				//Assigner
				Object.assign(obj,{feuilless:somme})			
				console.log(obj,somme);
			}
			

		}
		
	}
	
	initialise(node = undefined){ // root
		
		node = this.node_null(node);
		node = this.toArray(node);
		
		let constr = this;
		let depth = this.depth-1;
		
		//w = max_width / depth
		let height_const = 15;
		let x = 0;
		let y = 0;
		let w = 500/this.depth;
		for (i = depth-1 ; i>= 0 ; i-= 1){
			//console.log(i);
			//Recuperer les cousins
			node = this.cousin(node,"children");
			y = 0;
			//x += w
			x += w;
			//Pour chaque cousin
			node.map((obj,obj_indice) => {
				
				//height = feuilles * height_const
				
				//y += height
				//y += y_const;
				
				
				//Marquer la profondeur
				//Marquer la hauteur
				//Marquer x,y
				//console.log(obj);
				Object.assign(obj, {
					depths:i,
					hights:obj_indice,
					xx:x,
					yy:y,
				});
				
				
			//recuperer cousin
			})
				
			//console.log(node);
			
		}
		
		
	}
	
	son(node = undefined, number = undefined/*, filter = undefined*/){ //objet
		
		node = this.node_null(node);
		
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
		return node.children;
	}

	
	
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
		
	}

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
	cousin(liste, children = "*"){ //liste d'objet
		let save = [];
		liste.map(obj =>{
			let brothers = this.brothers(obj, children);
			if (brothers != undefined){
				save = save.concat(brothers);
			}
			
			
			
		})
		
		//liste = liste.flat();
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