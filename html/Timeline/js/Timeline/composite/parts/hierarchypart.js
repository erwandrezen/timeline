width = 500;
height = 800;
body = d3.select("body");
timeline = body.select("#timeline");
hierarchypart = timeline.append("div").attr("id","hierarchypart");

svg = hierarchypart.append("svg").attr("width",width+"px").attr("height",height+"px");
		
svg 
	.append("g").attr("id","rect");
		
svg 
	.append("g").attr("id","polygon");
		
svg 
	.append("g").attr("id","text");
	

