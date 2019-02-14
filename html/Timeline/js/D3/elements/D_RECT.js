class D_RECT extends elements{
	

	constructor(data, ID = null, CLASS = null){
		super(data, ID, CLASS);
	}

	get elementName(){
		return "rect";
	}
	
	
	/*//////////////////////////////////////////
	 * CONFIG CHANGEMENT DE FORME DES RECTANGLES
	 /////////////////////////////////////////*/
	updateConfig(parent){
		parent
		.enter()
		.append('rect')
		.attr("x",function(d){return d.x+"px"})
		.attr("y",function(d){return d.y+"px"})
		.style("fill",function(d){return d.color})
		
		

		//Fonction collapse & expand lors d'un clic
		.on("click",function(d){
		    	// let childrens = get_childrens([d]);
		    	 //let filter = childrens.filter(f => f.show == true);
		    	
		    	 //(filter.length > 0 ? nav_collapse(d.uid) : nav_expand(d.uid));
		    	 

		     })
		     
		  //Surligner le rectangle s'il peux s'etendre
		 .on("mouseover",function(d){
			 //let childrens = get_childrens([d]);
	    	// let color = "";
	    	 //(childrens.length > 0 ? d3.select(this).style("fill","#ffc107")  : null);
	    	 

		     })
		 .on("mouseout",function(d){ //Reintialiser la couleur surligner
			 
	    	 d3.select(this)
	    	 .style("fill",d.color);

		     })
		     
		     
		     
		.merge(parent)
		.transition()
		.duration(150)
			
		.attr("x",function(d){return d.x+"px";})
		.attr("y",function(d){return d.y+"px";})

			.style("width", function(d){return d.width+"px";})
			.style("height", function(d){
				
/*
			
					let svg = d3.select("#hierarchypart svg");
					
					let bbox = svg.node().getBBox();
					//console.log(bbox);
					let height = bbox.height;
					(height == 0 ? height = d.height : height)
		
					console.log(height);
					svg.attr("height",height+"px");
		*/
				return d.height+"px";})
			.style("fill",function(d){return d.color;})
			
			.on('end', function () {
				
/*		
		        	update_polygons(datas);
		        	update_textes(datas);*/
		        })

		}


}