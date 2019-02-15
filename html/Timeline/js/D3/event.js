
function event_doc(){
	var shiftPress = false;
	var ctrlPress = false;
	
	let w_context = d3.select(window)
	.on("contextmenu",contextmenu)
	.on("mouseup",mouseup);
	
	
	let w_click = d3.select(window)
	.on("keydown",keydown)
	.on("keyup",keyup)
	.on("click",mousedown)
	.on("mouseup",mouseup);
	
	
	
	
	
	function keydown(){
		let shift = event.shiftKey;
		let ctrl = event.ctrlKey;
		
		
		if (shift){
			shiftPress = true;
			//console.log("true");
			d3.selectAll("text").style("user-select","none");
			d3.select("html")
	    	.style("cursor", "crosshair");
		}
		
		if (ctrl){
			ctrlPress = true;
		}
	}

	
	function keyup(){
		let shift = event.shiftKey;
		let ctrl = event.ctrlKey;
		
		
		if (!shift){
			shiftPress = false;
			//console.log("false");
			d3.select("html")
	    	.style("cursor", "inherit");
		}
		
		if (!ctrl){
			ctrlPress = false;
		}
	}

	function mousedown(){
		d3.event.preventDefault();
		let target = event.target;
		let tagName = target.tagName;
		
		/*
		let parentNode = target.parentNode;
		let parenId = parentNode.id;
		*/
		if(tagName == "rect"){
			if (shiftPress){
				
				console.log("shift pressed")
				
				d_json.node = d3.select(target).data(); //Selection des donnees cibles
	        	
	        	//Modifier ses donnees
	        	d_json.setAttr(null,{color:laCouleur},"branch");
	        	
	        	//Update l'affichage
	        	update();
			}
			
			
			if (ctrlPress){
				//console.log("ctrl pressed");
				show_tooltip();
			}


		}
	}


	function mouseup() {
		w_context.on("mousedown", null).on("mouseup", null);
		w_click.on("mousedown",null).on("mouseup", null);
	}


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
			show_context_menu(target);
		}
		
	}

	
	
	
	
	
	
	
	

}




