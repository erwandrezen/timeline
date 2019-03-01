
    var hierarchypart = d3.select('#hierarchypart svg')

    var brush = d3.brush()
    	.on("end", brushmoved)
    var gBrush = hierarchypart.append("g")

    .call(brush);
    
function brushmoved(){

	let select = hierarchypart.selectAll("rect") //selectionner tout les rect
	
	let extent = d3.event.selection   // looks like [ [12,11], [132,178]]
	
	
	select.classed("selected",function(d){
		
		let x = d.x;
		let y = d.y;
		let x2 = x+d.width;
		let y2 = y+d.height;
		
		let area = [[x,y],[x2,y2]]
		let isInArea = isBrushed(extent, area);
		if (isInArea){

			return isInArea;
		}


		
		})
	select = d3.selectAll(".selected") // Recuperer les classes "selected"
	let datas = select.data();
	if (datas.length > 0){
		d_json.setAttr(datas,[{color:laCouleur}],"branch");
		
	}
	update();
	// Is the circle in the selection?
	function isBrushed(area,area2){
		console.log(area);
		let posTopX1 = area[0][0];
		let posTopY1 = area[0][1];
		let posBotX1 = area[1][0];
		let posBotY1 = area[1][1];
		
		let posTopX2 = area2[0][0];
		let posTopY2 = area2[0][1];
		let posBotX2 = area2[1][0];
		let posBotY2 = area2[1][1];
		
		//Quand la zone 1 est dans la zone 2
		let isInArea = posTopX1 <= posTopX2 && posBotX1 >= posTopX2 &&//bool se trouve entre x de debut et fin
		posTopY1 <= posTopY2 && posBotY1 >= posTopY2//bool se trouve entre y de debut et fin
		
		//Ou l'inverse
		
		//Quand la zone 2 est dans la zone 1
		let isInArea2 = posTopX2 <= posTopX1 && posBotX2 >= posTopX1 &&//bool se trouve entre x de debut et fin
		posTopY2 <= posTopY1 && posBotY2 >= posTopY1//bool se trouve entre y de debut et fin
		
		isInArea = isInArea || isInArea2; // Retourn le bouleen true
		
		return isInArea; // retourn vrai ou faux selon s'il est dans la zone
	}

}
    //hierarchypart.call(brush);
