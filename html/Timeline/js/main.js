let json = "mocks/mock22.json";


function hierarchy(data){
	
	
	
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
