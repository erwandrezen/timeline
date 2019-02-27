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
		//d3.selectAll('#timeline #occurpart #circle *').remove();
		datas = datas.map(obj => {
			let unY = obj.y;
			let unX = obj.x
			let uneOccur = obj.occursLeaf;
			
			return {x:unX,y:unY, occursLeaf:uneOccur};
			})
			
		let leParent = d3.select("#timeline #occurpart #circle").selectAll("g").data(datas);
		leParent.exit().remove();
		console.log(datas)
		let info = [];
		
		let monupdate = leParent
	
		.enter()
		.append("g")
		
		.merge(leParent)
		.style("transform",function(d){
			let calc = 15/2+d.y;
			return "translateY("+calc+"px)"
		})
		.selectAll("circle")
		.data(function(d,i){
			let min = Math.min(...d.occursLeaf);
			if (occur_min > min || typeof occur_min == "undefined"){
				occur_min = min;
			}
			
			let max = Math.max(...d.occursLeaf);
			if (occur_max < max || typeof occur_max == "undefined"){
				occur_max = max;
			}
			
			width_max = d.width;
			
			y = d.y;
			return d.occursLeaf;
		})
		monupdate.exit().remove();
		monupdate
		.enter()
		.append("circle")
		.attr("r", 15/3)
		.style("fill","red")
		
		.merge(monupdate)
		.attr("cx",function(x){
			let diff = occur_max-occur_min;
			let t0 = x-occur_min;
			console.log(occur_min);
			let xPos = (width_max/diff)*(x-t0);
			return t0+"px"
			})

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