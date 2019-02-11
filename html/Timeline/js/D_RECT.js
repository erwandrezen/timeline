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
		    	 let childrens = get_childrens([d]);
		    	 let filter = childrens.filter(f => f.show == true);
		    	
		    	 (filter.length > 0 ? nav_collapse(d.name) : nav_expand(d.name));
		    	 

		     })
		     
		  //Surligner le rectangle s'il peux s'etendre
		 .on("mouseover",function(d){
			 let childrens = get_childrens([d]);
	    	 let color = "";
	    	 (childrens.length > 0 ? d3.select(this).style("fill","#ffc107")  : null);
	    	 

		     })
		 .on("mouseout",function(d){ //Reintialiser la couleur surligner
			 
	    	 d3.select(this)
	    	 .style("fill",d.color);

		     })
		     
		     
		     
		.merge(parent)
		.transition()
		.duration(150)
			
		.attr("id",function(d){return d.name})
		.attr("x",function(d){return d.x+"px";})
		.attr("y",function(d){return d.y+"px";})

			.style("width", function(d){return d.width+"px";})
			.style("height", function(d){
				if (d.root){
					/*
					let bbox = d3.select("#part").node().getBBox();
					let height = d.height;
					
					svg.attr("height",height);*/
				}
				return d.height+"px";})
			.style("fill",function(d){return d.color;})
			
			.on('end', function () {
				
/*
		        	update_polygons(datas);
		        	update_textes(datas);*/
		        })

		}


}