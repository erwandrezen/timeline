let json = "mocks/mock22.json";

d3.json(json).then(function(data){
	//console.log(data);
	let width = 500;

	let svg = d3.select("#hierarchypart").append("svg").attr("width",width)
	.append("g");
	
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

