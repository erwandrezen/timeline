let w;


//AFF

function event_rect(){
	
	let rect = d3.select("#hierarchypart").selectAll("rect");
	
	let focused;
	
	rect.on("mouseenter",function(){
		let parent_node = d3.select(this).node().parentNode;
		let parent_id = parent_node.id;
		focused = String(parent_id);
		
		
		d3.select("svg")
		.on("keydown", function(){
			let event = d3.event;
			
			let alt = event.altKey;
			let ctrl = event.ctrlKey;
			let shift = event.shiftKey;
			
	
			

			
			return null;
		});
	});
	var shift_cliked = false;
	
	
	d3.select("body")
	
	.on("keydown", function() {
		
		let shift = event.shiftKey;
		let ctrl = event.ctrlKey;
		
		//#SHIFT
		if (shift){
			d3.selectAll("text").style("user-select","none");
			d3.select("html")
	    	.style("cursor", "crosshair");
			
			w = d3.select(window)
		      .on("mousedown", mousedown)
		      .on("mouseup", mouseup);
	
			
		      function mousedown() {

			        let target = event.target;
					let tagName = target.tagName;
					
					/*
					let parentNode = target.parentNode;
					let parenId = parentNode.id;
					*/
					
					if(tagName == "rect" ){
			        	
						//Indiquer qu'on veux modifier ses donnnees dans le json
						d_json.node = d3.select(target).data(); //Selection des donnees cibles
			        	
			        	//Modifier ses donnees
			        	d_json.setAttr(null,{color:laCouleur},"branch");
			        	
			        	//Update l'affichage
			        	update();
			        
			        }
			  
				} 
		      function mouseup() {

					w.on("mousedown", null)
				      .on("mouseup", null);
			  
				} 
		      
		}
		   
		
		else if (ctrl) //#CTRL
		      
		    	
		 {
				w = d3.select(window)
			      .on("mousedown", mousedown);
			  
				function mousedown() {
					let target = d3.event.target;
					let tagName = target.tagName;
					if (tagName == 'rect' || tagName == 'text' || tagName == 'polygon')
						{
						show_tooltip();
						}
					
					
				}
		
		} 
		
		
		else 
			
		{
			w = d3.select(window)
			.on("mouseup", mouseup);
		}


	})
	//Si une touche est levé
	.on("keyup", function() {
		
		let shift = event.shiftKey;
		let ctrl = event.ctrlKey;
		
		
		//Cette touche correspond au CTRL
		if (!ctrl){
			//On arrette la fonction mousedown
			w.on("mousedown", null);
		}
		if (!shift){
			d3.select("html")
	    	.style("cursor", "inherit");
		}
	})


	
	
	
	
		
		
		

}





function event_doc(){
	
	
	w = d3.select(window)
	.on("contextmenu",contextmenu)
	.on("mouseup",mouseup);
	
	function contextmenu(){
		d3.event.preventDefault();
		let target = event.target;
		let tagName = target.tagName;
		
		/*
		let parentNode = target.parentNode;
		let parenId = parentNode.id;
		*/
		
		if(tagName == "rect"){
			//console.log(parenId);
			let datas = d3.select(d3.event.target).data();
			d_json.node = datas;
			//debugger
			show_nav(target);
		}
		
	}
	


	

}


function mouseup() {
	//  hide_tooltip();
  w.on("mousedown", null).on("mouseup", null);
}
