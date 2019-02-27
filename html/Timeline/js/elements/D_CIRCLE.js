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
		
		let y;
		let timeline_t0 = 40900;
		let timeline_tMax = timeline_t0+500;
		let diff = timeline_tMax-timeline_t0;
		let width_max = d_json.max_width;
		let k = width_max/diff;

		//debugger
		let datas = this.datas;
		//d3.selectAll('#timeline #occurpart #circle *').remove();

			
		let leParent = d3.select("#timeline #occurpart #circle").selectAll("g").data(datas);
		leParent.exit().remove();
		console.log(datas)
		let info = [];
		
		let monupdate = leParent
	
		.enter()
		.append("g")
		
		.merge(leParent)
		.style("transform",function(d){
			console.log(d.y)
			let calc = 15/2+d.y;
			return "translateY("+calc+"px)"
		})
		.selectAll("circle")
		.data(function(d,i){
			console.log(d,d.occursLeaf);
			/*
			let min = Math.min(...d.occursLeaf);
			if (occur_min > min || typeof occur_min == "undefined"){
				occur_min = min;
			}
			
			let max = Math.max(...d.occursLeaf);
			if (occur_max < max || typeof occur_max == "undefined"){
				occur_max = max;
			}
			
			width_max = d.width;
			
			y = d.y;*/
			
			
			info = d;
			
			return d.occursLeaf;
		})

		
		

		monupdate.exit().remove();
		monupdate
		.enter()
		.append("circle")
		.attr("r", 15/3)
		.style("fill","red")
		
		.merge(monupdate)
		.attr("cx",function(date){
			
			let x = date-timeline_t0;
			return k*x+"px";
			})
		.datum(function(date){
			let uneDate = new Date();
			uneDate = uneDate.addDays(date);
			return {date:uneDate};
			})


		
		
	
		}


}