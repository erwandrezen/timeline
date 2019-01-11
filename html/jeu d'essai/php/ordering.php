<html>
<!-- Essai de commit nouveau bureau : Chomphoo -->
    <head>  
        <script src="http://d3js.org/d3.v3.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../css/css.css">
    </head>
    
    <body>
    	<div class="ordering">
    	</div>
        
    </body>
	<script>
		var ordering_svg = d3.select(".ordering").append("svg");
		var foreign_object = ordering_svg.append("foreignobject")
		.attr("width", "100")
		.attr("height", "100")
		.attr("class", "node");
		
		foreign_object.append("div").attr("class", "vide1");
		foreign_object.append("div").attr("class", "vide2");
	</script>
</html>