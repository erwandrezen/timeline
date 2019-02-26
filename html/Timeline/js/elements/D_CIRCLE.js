class D_CIRCLE extends elements{
	

	constructor(data, onStart = null, onEnd = null){
		super(data, onStart, onEnd);
	}

	get elementName(){
		return "circle";
	}
	
	
	/*//////////////////////////////////////////
	 * CONFIG CHANGEMENT DE FORME DES RECTANGLES
	 /////////////////////////////////////////*/
	updateConfig(parent){
		let constr = this;
		let occur_min;
		let occur_max;
		let width_max;
		let y;
		let datas = this.datas;
		d3.selectAll('#timeline #occurpart #circle *').remove();
		let leParent = d3.select("#timeline #occurpart #circle").selectAll("g").data(datas);
		console.log(leParent);
		leParent.exit();
		
		let monupdate = leParent
	
		.enter()
		.append("g")
		.selectAll("circle")
		.data(function(d){
			occur_min = Math.in(...d.occursLeaf);
			occur_max = Math.max(...d.occursLeaf);
			width_max = d.width;
			
			y = d.y;
			console.log(occur_min)
			return [{y:d.y,occursLeaf:d.occursLeaf}];
		})
		.enter()
		.append("circle")
		.attr("r", 15/3)
		.style("fill","red")
		
		.attr("cx",function(d){
			let xPos = (width_max/occur_max)*d.occursLeaf;
			return xPos+"px"
			})
		.attr("cy",function(d){return 15/2+d.y+"px"})
		/*
		console.log(y)
		monupdate.exit();
		
		monupdate

		.enter()
		.append("circle")
		.attr("r",function(d){return 15/3})
		.style("fill",function(d){return "red"})
		
		.merge(monupdate)
		.attr("cx",function(x){
			let xPos = (width_max/occur_max)*x;
			return xPos+"px"
			})
		.attr("cy",function(d){return 15/2+y+"px"})
		*/
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/*
		let monupdate = leParent
		
		.selectAll("#occurpart #circle g circle")
		.data(function(d){
			occur_max = Math.max(...d.occursLeaf);
			width_max = d.width;
			
			y = d.y;
			console.log(y);
			return d.occursLeaf;
		})

		//console.log(monupdate);
		monupdate
		.enter()

		.append(this.elementName)
		
		.attr("r",function(d){return 15/3})
		.style("fill",function(d){return "red"})

	
		.merge(monupdate)
		.attr("cx",function(x){
			let xPos = (width_max/occur_max)*x;
			return xPos+"px"
			})
		.attr("cy",function(d){return 15/2+y+"px"})
		*/
		}


}