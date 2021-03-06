
var points = [
  [480, 200],
  [580, 400],
  [680, 100],
  [780, 300],
  [180, 300],
  [280, 100],
  [380, 400]
];

var svg = d3.select("body").append("svg")
    .attr("width", 960)
    .attr("height", 500);

var path = svg.append("path")
    .data([points])
    .attr("d", d3.svg.line()
    .tension(0) // Catmull–Rom
    .interpolate("cardinal-closed"));

var points =  svg.selectAll(".point")
    .data(points)
  .enter().append("circle")
    .attr("r", 4)
    .attr("transform", function(d) { return "translate(" + d + ")"; });

var circle = svg.append("circle")
    .attr("r", 13)
    .attr("transform", "translate(" + points[0] + ")");

transition();

function transition() {
  circle.transition()
      .duration(30000)
      .tween("attr", translateAlong(path.node()))
      .each("end", transition);
}

// Returns an attrTween for translating along the specified path element.
function translateAlong(path) {
  var l = path.getTotalLength();
  return function(d, i, a) {
    return function(t) {
      var p = path.getPointAtLength(t * l);

      d3.select(this).attr("transform","translate(" + p.x + "," + p.y + ")");
			
      if(collide(this))
        d3.select(this).style("fill", "red")
       else
         d3.select(this).style("fill", "steelblue")
    };
  };
}

points.each(function(d,i){
    var ntrans = d3.transform(d3.select(this).attr("transform")).translate,
  		nx1 = ntrans[0],
      nx2 = ntrans[0] + (+d3.select(this).attr("r")),
      ny1 = ntrans[1],
      ny2 = ntrans[1] + (+d3.select(this).attr("r"));
  		console.log("Matrice ???",nx1,nx2, ny1, ny2)
  		//Recuperation de matrice ??
});
var azei = 0;
function collide(node){
    var trans = d3.transform(d3.select(node).attr("transform")).translate,
  		x1 = trans[0],
      x2 = trans[0] + (+d3.select(node).attr("r")),
      y1 = trans[1],
      y2 = trans[1] + (+d3.select(node).attr("r"));
  
  var colliding = false;
  points.each(function(d,i){
	  
    var ntrans = d3.transform(d3.select(this).attr("transform")).translate,
  	//x du cercle mouvant
    nx1 = ntrans[0],
    
      nx2 = ntrans[0] + (+d3.select(this).attr("r")),
      ny1 = ntrans[1],
      ny2 = ntrans[1] + (+d3.select(this).attr("r"));

    	if(!(x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1)){
    		console.log("debug",nx1, nx2,ny1, ny2);
    		if (azei > 140 ){
    			console.log("azei",azei);
    			debugger;
    		} else {
    			azei++;
    		}
    		 
    	    	
     		colliding=true;
    	}
       
  })
  
  return colliding;
}
