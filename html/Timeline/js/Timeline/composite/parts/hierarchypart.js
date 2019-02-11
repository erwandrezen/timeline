width = 500;
body = d3.select("body");
timeline = body.select("#timeline");
hierarchypart = timeline.append("div").attr("id","hierarchypart");

svg = hierarchypart.append("svg").attr("width",width);
		
svg 
	.append("g").attr("id","rect");
		
svg 
	.append("g").attr("id","polygon");
		
svg 
	.append("g").attr("id","text");
	

