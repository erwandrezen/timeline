let json = "mocks/mock22.json";
let d_json;
width = 400;
height = 800;
var laCouleur = "white";

function hierarchy(data){
	
	
	
	root = data['ownerlist'][0]['nodelist'];
	d_json = new data_json(root,width);
	console.log("root",d_json);
	update();
}



function readMultipleFiles(evt) {
    //Retrieve all the files from the FileList object
	tools = new tools("#tooltip")

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

