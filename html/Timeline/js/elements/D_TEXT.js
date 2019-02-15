class D_TEXT extends elements{
	
	
	constructor(data, onStart = null, onEnd = null){
		super(data, onStart, onEnd);
	}
	
	
	
	
	
	get elementName(){
		return "text";
	}
	
	
	
	
	
	updateConfig(parent){
		let datas = this.datas;
		
		parent
		.enter()
		.append('text')
		.html(function(d){
			let text = wrap(d.name, d.width);
			return text;
			})
		.attr("x",function(d){return d.x+5})
		.attr("y",function(d){return d.y+10})
		
		.merge(parent)
		.html(function(d){
			
			let text = wrap(d.name, d.width);
			
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





function wrap(text, width){
	//Taille d'un caracteres
	let unCaractere = 10;
	let length = text.length * unCaractere;
	
	
	//Nombre de caracteres disponible
	let nombre_max = width / unCaractere -1;
	let text_wrap = text.slice(0, nombre_max);
	if (length > width){
		text_wrap += " ...";
	}
	
	return text_wrap;
}