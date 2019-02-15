class color extends tools{
	constructor(element){
		super(element);
	}
	
	
	
	
	
	showConfig(){
		let color = d3.selectAll("#tools .color");
		
		let pos = this.position;
		let x = pos[0];
		let y = pos[1];
		
		color
		.style("position","fixed")
		.style("left",x+"px")
		.style("top",y+"px")
		.style("transform","translate(-49%, -26%)")
	}
	
	
	
	
	
}