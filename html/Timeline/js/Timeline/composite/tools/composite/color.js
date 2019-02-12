class color extends tools{
	constructor(element){
		super(element);
	}
	
	
	showConfig(){
		let color = d3.selectAll("#tools .color");
		
		color
		.style("position","absolute");
	}
}