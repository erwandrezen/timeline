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
		.append('foreignObject')

		.merge(parent)
		.html(function(d){return d.name;})
		.attr("x",function(d){return d.x+5+"px"})
		.attr("y",function(d){return d.y+"px"})
		.attr("width",function(d){return d.width-19+"px"})
		.attr("height",function(d){return d.height+"px"})
		
		/*WRAP NE VERIFIE PAS QU'IL N Y A PAS D'ENFANT 
		 * => WRAP A CHAQUE FOIS 
		 * EN ENLEVANT LA LARGEUR DU POLYGON
		*/
		.style("pointer-events","none") // enlevement du clique souris
		.style("word-break","break-word") // wrap
		.style("white-space","pre") // wrap sur une ligne
		.style("text-overflow","ellipsis");//wrap avec 3 petit point possible
		
		
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


