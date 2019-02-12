class D_TEXT extends elements{
	

	constructor(data, ID = null, CLASS = null){
		super(data, ID, CLASS);
	}

	get elementName(){
		return "text";
	}

	
	updateConfig(parent){
		let datas = get_all_childrens(root, true);
		
		console.log(parent);
		parent
		.enter()
		.append('text')
		.html(function(d){
			//Taille d'un caracteres
			let unCaractere = 10;
			let length = d.name.length * unCaractere;
			
			//Nombre de caracteres disponible
			let nombre_max = d.width / unCaractere
			let text;
			if (d.width < length){
				text = d.name.slice(0, nombre_max);
				
			}
			return text;
			})
		.attr("x",function(d){return d.x+5})
		.attr("y",function(d){return d.y+10})
		
		.merge(parent)
		.html(function(d){
			//Taille d'un caracteres
			let unCaractere = 10;
			let length = d.name.length * unCaractere;
			
			//Nombre de caracteres disponible
			let nombre_max = d.width / unCaractere
			let text;
			if (d.width < length){
				text = d.name.slice(0, nombre_max);
				
			}
			return text;
			})
		.attr("x",function(d){return d.x+5})
		.attr("y",function(d){return d.y+10})
		
		
		/*

		let text = new d3plus.TextBox()
		text.select("#hierarchypart svg #text")
		.data(datas)
		.text(function(d){
			return d.name;})
		
		//start ; middle ; end
		.textAnchor("middle")
		
		//top ; middle ; bot
		.verticalAlign("middle")
		
		.render();*/
	}
}