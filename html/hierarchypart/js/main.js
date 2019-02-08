let json = "mocks/mock22.json";

d3.json(json).then(function(data){
	//console.log(data);
	let width = 500;
	
	let hierarchypart = d3.select("#hierarchypart");
	
	hierarchypart
	.append("div")
	.attr("id","tooltip");
	let svg = hierarchypart.append("svg").attr("width",width);
	let g = 
	svg.append("g").attr("id","part");
	
	g
	.append("g").attr("id","rect");
	
	g
	.append("g").attr("id","polygon");
	
	g
	.append("g").attr("id","text");
	
	root = data['ownerlist'][0]['nodelist'];
	update();

	
	
	
	
	

});

/*
var depthCount = function (branch,children) {
    if (!branch[children]) {
        return 1;
    }
    return 1 + d3.max(branch[children].map(depthCount));
 }*/

