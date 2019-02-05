//Ouvrire le json
//Parcourire en profondeur
	//w,h referencer
	//Ecrire les feuilles
	//Ecrire x,y
	//Referencer un ordre en fonction du parent


//Ouvrire le json



let json = "mocks/mock22.json";
d3.json(json).then(function(data){
	//console.log(data);
	let width = 500;
	//root = data['ownerlist'][0]['nodelist'];
	root = data['ownerlist'][0]['nodelist'];

	parcourir(root,width,15);

	//console.log("*p",p)
	//nombre max de profondeur

	
	
	let svg = d3.select("#hierarchypart").append("svg").attr("width",width)
	.append("g")
	.attr("id","hierarchy");
	
	drawing("hierarchy", root);
	event_rect();
	
	
	

});

/*
var depthCount = function (branch,children) {
    if (!branch[children]) {
        return 1;
    }
    return 1 + d3.max(branch[children].map(depthCount));
 }*/

