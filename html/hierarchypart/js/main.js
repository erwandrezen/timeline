let json = "mocks/mock22.json";


function hierarchy(data){
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
}



function readMultipleFiles(evt) {
    //Retrieve all the files from the FileList object

	
    var files = evt.target.files;
    if (files) {
        for (var i = 0, f; f = files[i]; i++) {
        	
            var r = new FileReader();
            
            r.onload = (function (f) {
            	
                return function (e) {
         
                    let contents = e.target.result;
                    
                    data = JSON.parse(contents);
                    hierarchy(data);
                };
            })(f);
            
           
            
            //f= file return
            r.readAsText(f);
            
           
            
            
        }
        
       
        
    } else {
        alert("Failed to load files");
    }
}

//readMultipleFiles(json);
document.getElementById('fileinput').addEventListener('change', readMultipleFiles, false);

