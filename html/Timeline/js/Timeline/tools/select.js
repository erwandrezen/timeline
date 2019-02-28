
    var hierarchypart = d3.select('#hierarchypart svg')

    var brush = d3.brush()
        .extent( [ [0,0], [200,200] ] )
    	.on("end", brushmoved)
    var gBrush = hierarchypart.append("g")

    .call(brush);
    
function brushmoved(){
	console.log(d3.event)
	let select = hierarchypart.selectAll("rect") //selectionner tout les rect
	
	let extent = d3.event.selection   // looks like [ [12,11], [132,178]]
	
	
	select.classed("selected",function(d){
		let x = d.x;
		let y = d.y;
		
		let isInArea = isBrushed(extent, x, y);

		return isInArea;

		
		})
	select = d3.selectAll(".selected") // Recuperer les classes "selected"
	
	let datas = select.data();
	d_json.setAttr(datas,[{color:"blue"}],"branch");
	update();
	// Is the circle in the selection?
	function isBrushed(area,x,y){
		//console.log(area);
		let isInArea = area[0][0] <= x && area[1][0] >= x &&//bool se trouve entre x de debut et fin
		area[0][1] <= y && area[1][1] >= y//bool se trouve entre y de debut et fin
		
		return isInArea; // retourn vrai ou faux selon s'il est dans la zone
	}

}
    //hierarchypart.call(brush);
