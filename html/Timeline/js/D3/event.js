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
			        let select = d3.select(target);
			        let tagName = select.node().tagName
			        
			        
			        //color_branch
			        if (tagName == "rect"){
			        	let rect = new D_RECT();
			        	let data = d3.select(target).data();
			        	
			        	//Modifier les donnees
			        	
			        	
			        	//Change les valeurs
			        	d_json.set_attr("branch","color",laCouleur,data);
			        	console.log(d_json);
			        	//rect.datas = d_json.node;
			        	console.log(rect);
			        	//div parent
			        	rect.datas = d_json.root;
			        	rect.update("#rect");
			        	//change_color(id,laCouleur);
			        
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
	.on("click",click)
	
	function contextmenu(){
		d3.event.preventDefault();
		let target = event.target;
		let tagName = target.tagName;
		
		if(tagName == "rect"){
			let datas = d3.select(d3.event.target).data();
			d_json.node = datas;
			show_nav(target);
		}
		
	}
	
	function click(){
		//hide_nav();
	}

	

}



function set_objects(datas,object){ // List d'objet
	
	datas.map(m => {
		Object.assign(m,object);
	});
}


function mouseup() {
	 d3.selectAll("text").style("user-select","select");
	//  hide_tooltip();
  w.on("mousedown", null).on("mouseup", null);
}
