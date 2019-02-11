class elements{
	
	constructor(newData, ID = null, CLASS = null){
		this.newData = newData;
		this.ID = ID;
		this.CLASS = CLASS;
		
	}
	
	get elementName(){
		return "*";
	}
	

	get newData(){
		return this._newData;

	}
	
	set newData(value){
		this._newData = value;
	}

	get datas(){
		return this._datas;

	}
	
	set datas(value){
		this._datas = value;
	}
	
	
	
	//Recuperer l'id de cet objet
	get ID(){
		return "#"+this._ID;
	}
	
	//Modifier l'id de cet objet
	set ID(value){
		this._ID = value;
	}

	
	
	
	
	//Recuperer la class de cet objet
	get CLASS(){
		return "."+this._CLASS;
	}
	
	//Modifier la class de cet objet
	set CLASS(value){
		this._CLASS = value;
	}
	
	
	
	//Modifier une liste d'objet
	attr(attribute, value = undefined, expand = "branch"){
		
		if (value != undefined){
			var datas = this.datas;
			
			
			if (expand == "branch"){
				datas = get_all_childrens(datas);
				
				
			}
			
			if (expand == "fils"){
				datas = get_childrens(datas);
			}
			
			if (expand == "childrens"){
				datas = get_all_childrens(datas);
				datas.shift();
			}
			
			
			let setting = datas.map(m => m[attribute] = value);
			return setting;
		} else {
			
				let setting = this.datas.map(m => {
					let obj = {};
					attribute.forEach(function(d){
					
						obj[d] = m[d];
					});
					
					return obj;
				});
				
				return setting;
			
		}
		
	}
	
	
	
	
	
	//Recuperer les donnees des tout les ID
	datas_id (ID, parent = null){
			try{
				ID = "#"+ID;
				
				let select = d3.selectAll(this.elementName+ID).data();
				
				console.log("????",this.elementName+ID);
				if (parent){
					select = d3.selectAll(parent+" "+this.elementName+ID).data();
				}
				
				this.datas = select;
				return this.datas;
			} catch (e){
				console.log("impossible de recuperer l'id",e)
			}
			
	}
		

	//Recuperer les donnees des toute les class
	datas_class (CLASS, parent = null){
		try{
			CLASS = "#"+CLASS;

			let select = d3.selectAll(this.elementName).selectAll(CLASS).data();
			
			
			if (parent){
				select = d3.select(parent).selectAll(this.elementName).selectAll(CLASS).data();
			}
			
			this.datas = select;
			return this.datas;
		} catch (e){
			console.log("impossible de recuperer l'id",e)
		}
		
}
	
	
	update(parent = "*"){
		let datas = get_all_childrens(root, true);
		parent = d3.select(parent).selectAll(this.elementName).data(datas);
		
		console.log(parent);
		//Suppressio des anciens elements
		parent.exit().remove();
		
		
		this.updateConfig(parent);

	}
	
	updateConfig(parent){
		return null;
		
	}
	
	get element(){
		return this;
	}
	
	
}