class D_POLYGON extends elements{
	
	
	constructor(data, onStart = null, onEnd = null){
		super(data, onStart, onEnd);
	}
	
	
	
	
	
	get elementName(){
		return "polygon";
	}
	
	
	
	
	
	updateConfig(parent){
		let bool;
		let bool2;
		
		parent
		.enter()
		.append('polygon')
		
		.merge(parent)

		.attr("points",function(d){
			let y = d.y;
			let x = d.x;
			

			//S'il a des enfant
			let mapping = d_json.son(d);
			
			//S'il a des enfant qui ont show = true;
			let mapping2 = d_json.getAttr([d],{show:true},"cousin");
			

			bool = (mapping != undefined ? true : false);
			bool2 = ( mapping2.length > 0 ? true : false);
			
			y = d.y;
			x = d.x+d.width;
			/*
			if (mapping2 == undefined){
				bool2 = false;
			} else {
				bool2 = true;
			}*/
			
			if (bool){

				let rect_data = [d];
				
				x -= 15;
				y += 2;
				let points = "";
				if (bool2 == false){

					let point1X = 0+x;
					let point2X = 10+x;
					let point3X = 0+x;
					
					let point1Y = 10+y;
					let point2Y = 5+y;
					let point3Y = 0+y;
					
					let point1 = point1X + " " + point1Y;
					let point2 = point2X + " " + point2Y;
					let point3 = point3X + " " + point3Y;
					
					points = [point1,point2,point3];
					
					d3.select(this).on("click",function(d){
						d3.selectAll("polygon").remove();
						let datas = d3.select(d3.event.target).data();
						d_json.node = datas;
						hierarchy_expand();
						
					})

				
				} else {

					let point1X = 5+x;
					let point2X = 10+x;
					let point3X = 0+x;
					
					let point1Y = 10+y;
					let point2Y = 0+y;
					let point3Y = 0+y;
					
					let point1 = point1X + " " + point1Y;
					let point2 = point2X + " " + point2Y;
					let point3 = point3X + " " + point3Y;
					
					points = [point1,point2,point3];
					d3.select(this).on("click",function(d){
						d3.selectAll("polygon").remove();
						let datas = d3.select(d3.event.target).data();
						d_json.node = datas;
						hierarchy_collapse();
		
					})
					
			
					
					

				}
				
				
				//datas = get_all_childrens(datas);	
				
				
				return points;
				
			} else {
				this.remove();
			}
			
			
			
			
			
		})
	}
	
	
	
	
	
}