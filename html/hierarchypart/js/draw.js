



/*///////////////////////////////////////
 * REDESSINE LES ELEMENTS HIERARCHIQUE
 ///////////////////////////////////////*/
function update(){
	parcourir(root,500,15); //Recalcule du json: root = noeud root	;	500 = width	;	15 = feuille constant => height dynamic
	let datas = get_all_childrens(root, true); //Recupere tout les enfants avec show = true
	
	//Variable pas utile
	let datas_hide = get_all_childrens(root, false);  //Recupere tout les enfants avec show = false
	
	//console.log("history",datas_hide);

	/*Updates de tout les rectangles
	 * 
	 * A la fin des transition de ce rectangle
	 * => updates de tout les polygons
	 * => updates de tout les textes
	 * */
	update_rectangles(datas);
	
	//Reintegrer les evenements (clic droit etc ...)
	event_rect(root);
	event_doc();
}




/*///////////////////////////////////////
 * FONCTION CONSOLE D'ESSAI
 ///////////////////////////////////////*/
function console_log(datas){
	console.log(datas.map(m => m.name));
	console.log(datas.map(m => [m.x,m.y]));
	console.log(datas.map(m => [m.width,m.height]));
	console.log(datas.map(m => m.color));
	let childrens = datas.map(m => {
		let obj = Object.values(m);
		obj = obj.filter(f => f.constructor.name == "Array")
		obj = obj.flat();
		return obj;
	});
	
	datas.map(m => {
		delete m.depth;
		delete m.feuilles;
		});
	
}




/*///////////////////////////////////////
 * CHANGEMENT DE FORME DES RECTANGLES
 ///////////////////////////////////////*/
function update_rectangles(datas){
	
	let hierarchy = d3.select("#hierarchypart");
	let svg = hierarchy.select("svg")
	let part = svg.select("#part");
	let g = part.select("#rect");
	let elements = g.selectAll("rect");
let updates = elements.data(datas, function(d){return d});
	
//Supression ancien element
updates.exit().remove();
	
	updates
	.enter()
	.append('rect')
	.attr("x",function(d){x = d.x+20; return d.x+"px"})
	.attr("y",function(d){y = d.y;return d.y+"px"})
	.style("fill",function(d){return d.color})
	
	.merge(updates)
	.transition()
	.duration(150)
	
	.attr("id",function(d){return d.name})
	.attrTween("x",function(d){
		let attribute = this.getAttribute("x");
		x = d.x+20;
		return d3.interpolateString(attribute,d.x+"px");
	})
	.attrTween("y",function(d){
		
		let attribute = this.getAttribute("y");


		y = d.y;
		return d3.interpolateString(attribute,d.y+"px");
	})

	.style("width", function(d){return d.width+"px";})
	.style("height", function(d){
		if (d.root){
			let bbox = d3.select("#part").node().getBBox();
			let height = d.height;
			
			svg.attr("height",height);
		}
		return d.height+"px";})
	.style("fill",function(d){return d.color;})
	.on('end', function () {
		

        	update_polygons(datas);
        	update_textes(datas);
        })


	
	

}




/*///////////////////////////////////////
 * CHANGEMENT DE FORME DES POLYGONS
 ///////////////////////////////////////*/
function update_polygons(datas){
	let hierarchy = d3.select("#hierarchypart");
	let svg = hierarchy.select("svg").select("#part");
	let g = svg.select("#polygon");
	elements = g.selectAll("polygon");
	
	updates = elements.data(datas);
	
	
	
	//Supression ancien element
	updates.exit().remove();
	
	
	
	let bool;
	let bool2;
	
	updates
	.enter()
	.append('polygon')
	
	.merge(updates)

	.attr("points",function(d){
		
		let object_values = Object.values(d);
		let mapping = object_values.filter(f => f.constructor.name == "Array");
		
		mapping = mapping.flat();
		let mapping2 = mapping.filter(f => f.show == true);

		
		bool = (mapping.length > 0 ? true : false);
		bool2 = (mapping2.length > 0 ? true : false);
		
		y = d.y;
		x = d.x+d.width;

		
		
		if (bool){

			let datas = elements.data();
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
					nav_expand("#"+d.name);

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
					nav_collapse("#"+d.name);
	
				})
				
		
				
				

			}
			
			
			//datas = get_all_childrens(datas);	
			
			
			return points;
			
		} else {
			this.remove();
		}
		
		
		
		
		
	})
	
	
}




/*///////////////////////////////////////
 * CHANGEMENT DE POSITION DES TEXTES
 ///////////////////////////////////////*/
function update_textes(datas){
	let hierarchy = d3.select("#hierarchypart");
	let svg = hierarchy.select("svg").select("#part");
	let g = svg.select("#text");
	elements = g.selectAll("text");
	
	updates = elements.data(datas);
	
	let filtre = datas.map(m => {
		
		return {
		text: m.uid,
		x: m.x,
		y:m.y,
		height: m.height,
		width: m.width
		}
	});
	
	let text = new d3plus.TextBox()
	text.select("#text")
	.data(filtre)
	
	//start ; middle ; end
	.textAnchor("middle")
	
	//top ; middle ; bot
	.verticalAlign("middle")
	
	.render();

	
}