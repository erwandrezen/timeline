//comparaison
function get_position(){
	let y_height = d3.select("#rect")
	.node()
	.getBBox().height;
	let y = d3.select("#rect")
	.node()
	.getBBox().y;
	
	let y_other = d3.select("#other")
	.node()
	.getBBox().y;

	//let y_move = y+y_height;
	y_other -= y_height;
	return [y,y_other];
}


function bool_essai(){
	let position = get_position();
		(position[0] > position[1] ? transtion_color() : blue_color());
	
}

//Fonction principal
function move(){
	let y = d3.select("#rect")
	.node()
	.getBBox().y;
	
	let rect = d3.select("#rect");
	rect
	.attr("y",y);
	
	rect
	.transition()
	.duration(1000)
	.tween("attr.y",function(){
		let position = get_position();
		var essai = d3.interpolateNumber(position[0], position[1]);
		 return function(t) {
			 rect.attr("y",essai(t));
	        console.log(position,essai(t));
	      };
	})



	.each('end',  function (){bool_essai()});
	
}

//Button couleur
function transtion_color(){
	console.log("color");
	d3.select("#rect")
	.transition()
	.style("fill","#FFEB3B");
}

function blue_color(){
	console.log("color");
	d3.select("#rect")
	.transition()
	.style("fill","#03a9f4");
}

//Button y=0
function transition_0(){
	d3.select("#rect")
	.transition()
	.attr("y","0")
	.each('end',  function (){bool_essai()});
}

//Button y=50
function transition_50(){
	//(false ? console.log("true"):console.log("false"));
	let y = d3.select("#rect")
	.node()
	.getBBox().y;
	
	let rect = d3.select("#rect");
	rect
	.attr("y",y);
	
	rect
	.transition()
	.duration(1000)
	.attr("y","56")
	.each('end',  function (){bool_essai()});
	
}