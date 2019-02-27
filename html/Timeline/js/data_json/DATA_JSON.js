
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
	
	getAttr(node, attribute,  expand = "branch", getOnlyAttr = false, getOnlyValue = false){
		
		node = this.node_null(node); // S'il est null récupere le noeud du JSON
		
		let datas = this.selectDatas(node, expand);
		let breaked;
		
		if (datas != undefined && datas.constructor.name == "Array"){

				
					let setting; 
					
					
					datas.map(obj => {
						
						let tmpObj = {};
						let tmpObjList = [];
						//Pour chaque attributs
						for (let i in attribute){
							
							
							//Recuperer key, val d'attribut i
							let newAttrObj = attribute[i]; //Un seul objet
							let keyAttrObj;
							let valueAttrObj;
							
		
							
							//console.log(newAttrObj, newAttrObj == null,obj)
							
							//Sortir du for
							breaked = true;
							if (newAttrObj == null || newAttrObj.constructor.name != "Object"){ //L'attribut i doit être un objet
								//debugger;
								break; //Sort du for
							} else {
								//console.log("else",keyAttrObj, valueAttrObj, obj);
							}
							
							


							try{
								keyAttrObj = Object.keys(newAttrObj); //Recupere la cle
								valueAttrObj = Object.values(newAttrObj); //Recupere la valeur
								
							} catch (e){
								console.log(e,obj,newAttrObj);
								break;
							}
							
							keyAttrObj = keyAttrObj[0]; //Selectionne dans la liste le premier et le seul
							valueAttrObj = valueAttrObj[0]; //Selectionne dans la liste le premier et le seul
							
							//console.log(newAttrObj,keyAttrObj,obj)
							
							//Recuperer val objet
							let valueObj = obj[keyAttrObj]; //Recupere la valeur de l'objet selon la cle de notre attribut
							valueObj = valueObj;
							
							
							
							if (typeof valueAttrObj != "undefined" && typeof valueObj == "undefined"){
								break;
							}
						
							//Si val de l'attribut == null
							if (valueAttrObj == null){
								//val attribut = val objet
								valueAttrObj = valueObj;
								//console.log(valueAttrObj)
							}
							
							
							
							
							
							
							
							
							
							//getOnlyAttr & getOnlyValue
							if (getOnlyAttr == true) //Si getOnlyAttr  == true
								
							{
								if (obj[keyAttrObj] == valueAttrObj){
									//tmpObj;
									let unObjTmp = {};
									unObjTmp[keyAttrObj] = valueObj;//Créer l'objet
									try {
										Object.assign(tmpObj, unObjTmp); //Push
						
									} catch (e){
										//console.log(tmpObj)
										tmpObj = unObjTmp;
									}
									
									

								}
							} else if (getOnlyValue == true){ //Sinon si getOnlyValue == true
								//valueObj

								if (obj[keyAttrObj] == valueAttrObj){
									
									
									/*let uneListeTmp = valueObj;//Créer la valeur
									
									debugger;
									try {
										setting = setting.concat([valueObj]); //Push
										debugger;
									} catch (e){
										//console.log(tmpObj)
										setting = [valueObj];
										debugger;
									}
									*/

									try {
										setting = setting.concat(valueObj);
									} catch (e){
										setting = []
										setting = setting.concat(valueObj);
										
									}
								}
							} else { //(getOnlyAttr == false && getOnlyValue == false)
								//Recuperer l'objet
								
								if (obj[keyAttrObj] == valueAttrObj){
									try {
										setting = setting.concat([obj]);
									} catch (e){
										setting = [obj];
									}
								}
								
								
								//console.log(setting, newAttrObj, keyAttrObj, valueAttrObj, obj[keyAttrObj] == valueAttrObj, obj);
							} 
							
							
							
								
							//console.log("not exit",setting,valueAttrObj,obj);	
									
							

						
							breaked = false;
						} //END FOR
						
					
						if (Object.keys(tmpObj).length > 0 && breaked == false){
							
							try {
								setting = setting.concat([tmpObj]);
							} catch (e){
								setting = [tmpObj];
							}

						}
						
					}) //END MAP
					
					if (typeof setting != "undefined"){
						return setting;
						
					}
					
					
					
					

	}
		
}
	
	
	setAttr(node, newAttribute, expand = "branch" ){
		
		node = this.node_null(node); // S'il est null récupere le noeud du JSON
		
		let datas = this.selectDatas(node, expand);
		
		
		
		if (datas != undefined){

				

		
					let setting = datas.map(obj => {
						//console.log(obj);
						//Pour chaque attribut
						for (let i in newAttribute){
							let newAttrObj = newAttribute[i];
							let keyAttrObj = Object.keys(newAttrObj);
							let valueAttrObj = Object.values(newAttrObj);
							console.log(newAttribute,valueAttrObj);
							keyAttrObj = keyAttrObj[0];
							valueAttrObj = valueAttrObj[0];
							
							//debugger;
							if (typeof valueAttrObj == "undefined"){
								delete obj[keyAttrObj];
			
							} else {
								//Assigne le nouvel objet
								Object.assign(obj, newAttribute[i]);
							}
							
						}
						
						
						//Retourne l'objet
						return obj;
					})
					
					setting = setting.flat();
					return setting;

	}
		
}
	
	/*
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
	
	*/
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
		
		
		//Longueur du tableau
		let length = branch.length - 1; //0 et le depart
		let obj = {};
		
		while (obj != undefined){
			
			//Recuperer le dernier objet et le supprimer
			obj = branch.pop(); //Dernier objet (celui supprimer)
			
			let haveSon = this.getAttr(obj,[{show:true}],"son");
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
	
	parcourir(root = this.root,informations = {depth:this.max_depth,x:0,y:0,w:0,h:0,root:true}){
		
		
		let depth = informations.depth;
		let rootBool = informations.root;
		let width = this.min_rect_width;
		
		let noeuds = root.map(obj => {
					//Recuperer l'enfant
					

					
					
					
					
					/* (S'il y'a des donnees (des enfants)) 
					 * ? 
					 * On reparcour 
					 * : 
					 * Sinon message dans la console
					*/
					// (childrens.length > 0 ? parcourir(childrens) : feuilles())

					Object.assign(obj,{
						depth:depth,
						x:informations.x,
						y:informations.y,
						width:width})
						
						if (rootBool){
							Object.assign(obj,{root:rootBool})
						}
						
						//Si show n'es pas assigner le faire
						if (obj.show == undefined){
							Object.assign(obj,{show:true})
						}
						
						if (obj.color == undefined){
							Object.assign(obj,{color:"white"})
							
						}
						
		
					
					
						let childrens = this.son(obj);
						
						let trueSon = this.getAttr(obj,[{show:true}],"son");
						let undefinedSon = this.getAttr(obj,[{show:undefined}],"son");
						
						let son;
						if (trueSon != undefined && undefinedSon != undefined){
							son = (trueSon.length > 0 || undefinedSon.length > 0? true : false);
							
						} else {
							son = false;
						}
						
						//childrens = this.son(obj);
							//childrens = this.attr("brothers",["show"],undefined,obj);
	
					//Children identifie les freres avec attributs show
					
						//S'applique seulement au noeud qui sont (show = true ou show non identifier(par default))
					if (obj.show == true || obj.show == undefined){
						if(son != false){
							
							//console.log("Parent: ",obj);
							//console.log("Childrens: ",childrens);
							
							
							informations.x += this._min_rect_width;
							//Profondeur = this.max_depth -1
							informations.depth -= 1;
							informations.root = false;
							
							//Reparcourire
							this.parcourir(childrens, informations);
	
							
							
							
						} else { //Sinon c'est une feuille
							
							let width_feuille = width*(depth);
							
							//Parcourir les occurences
							let listOccurs = this.getAttr([obj], [{occurs:null}],"branch", false, true);
							//console.log("feuille", obj, listOccurs);
							//debugger
							Object.assign(obj,{feuilles:0,width:width_feuille,occursLeaf:listOccurs});
								
							
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