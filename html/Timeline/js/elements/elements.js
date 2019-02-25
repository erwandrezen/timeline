class elements{
	
	
	constructor(newData, onStart = null, onEnd = null){
		this.newData = newData;
		this.datas = newData;
		this.x = undefined;
		this.width = undefined;
		
	}
	
	
	
	
	
	get elementName(){
		return "*";
	}
	
	
	
	get newData(){
		return this._newData;

	}
	
	set newData(value){
		this._newData = value;
	}
	
	
	
	get datas(){
		return this._datas;

	}
	
	set datas(value){
		this._datas = value;
	}
	
	get x(){
		return this._x;

	}
	
	set x(value){
		this._x = value;
	}
	
	get width(){
		return this._width;

	}
	
	set width(value){
		this._width = value;
	}
	
	
	
	get onStart(){
		return this._onStart;
	}
	
	set onStart(value){
		this._onStart = value;
	}

	
	
	get onEnd(){
		return this._onEnd;
	}
	
	set onEnd(value){
		this._onEnd = value;
	}
	
	
	
	
	
	update(parent = "*"){
		let datas = this.datas;
		if (this.elementName != "*"){
			parent = d3.select(parent).selectAll(this.elementName).data(datas);
			parent.exit().remove();
			parent
			.on('end', function () {
				let fonction = this.onEnd;
		     })
			//Suppression des anciens elements
			
		}
		
		this.updateConfig(parent);

	}
	
	updateConfig(parent){
		
		
		let datas = this.datas;

		let rect = new D_RECT(datas);
		let polygon = new D_POLYGON(datas);
		let text = new D_TEXT(datas);
		
		rect.update("#rect");
		polygon.update("#polygon");
		text.update("#text");

		
	}
	
	
	
	
	
}