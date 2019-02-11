let string = "ceci est une phrase d'essai. Remplacement de charactère";
//var regex = new RegExp(string,g="e");



function replace(string){
	string = string.replace(/\s/g,"_");
	string = string.replace(/\./g , '-');
	return string
}

let repl = replace(string);
console.log(repl);