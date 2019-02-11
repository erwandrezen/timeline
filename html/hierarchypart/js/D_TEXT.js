class D_TEXT extends elements{
	

	constructor(data, ID = null, CLASS = null){
		super(data, ID, CLASS);
	}

	get elementName(){
		return "text";
	}

	
	updateConfig(parent){
		let datas = get_all_childrens(root, true);
		
		let filtre = datas.map(m => {
			
			return {
			text: m.uid,
			x: m.x,
			y:m.y,
			height: m.height,
			width: m.width
			}
		});
		
		let text = new d3plus.TextBox()
		text.select("#text")
		.data(filtre)
		
		//start ; middle ; end
		.textAnchor("middle")
		
		//top ; middle ; bot
		.verticalAlign("middle")
		
		.render();
	}
}