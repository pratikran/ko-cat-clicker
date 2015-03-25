var initialCats = [
	{
		"name": "kitty", "count": 0, "image": "images/kitty.jpg", "nickName": ["Pretty"]
	},
	{
		"name": "sitty", "count": 0, "image": "images/sitty.jpg", "nickName": ["Sweetie"]
	},
	{
		"name": "catty", "count": 0, "image": "images/catty.jpg", "nickName": ["Meethi"]
	},
	{
		"name": "pitty", "count": 0, "image": "images/pitty.jpg", "nickName": ["Pucchi"]
	},
	{
		"name": "mitty", "count": 0, "image": "images/mitty.jpg", "nickName": ["Kucchi"]
	}
];

var Cat = function(data){
	this.catName = ko.observable(data.name);
	this.numberOfClicks = ko.observable(data.count);
	//this.catLabel = ko.observable("born");
	this.nicknameTitle = ko.observable("Nicknames");
	this.catLabels = ko.observableArray(["born","infant","youth","old","dead"]);

	this.nickNames = ko.observableArray(data.nickName);
	this.imgSrc = ko.observable(data.image);

	this.catLabel = ko.computed(function(){
		if(this.numberOfClicks() <= 5){
			//this.imgSrc("images/kitty.jpg");
			return this.catLabels()[0];
		} else if(this.numberOfClicks() <= 10){
			//this.imgSrc("images/catty.jpg");
			return this.catLabels()[1];
		} else if(this.numberOfClicks() <= 35){
			//this.imgSrc("images/sitty.jpg");
			return this.catLabels()[2];
		} else if(this.numberOfClicks() <= 60){
			//this.imgSrc("images/pitty.jpg");
			return this.catLabels()[3];
		} else {
			//this.imgSrc("images/mitty.jpg");
			return this.catLabels()[4];
		}
	},this);


};

var koCatClickerViewModel = function(){

	var self = this;

	self.catList = ko.observableArray([]);

	initialCats.forEach(function(cat){
		self.catList.push(new Cat(cat));
	});

	self.currentCat = ko.observable(self.catList()[0]);

	self.setCurrentCat = function(newCat){
		self.currentCat(newCat);
	};

	self.updateClicks = function(){
		this.numberOfClicks(this.numberOfClicks()+1);
	};

};

ko.applyBindings(new koCatClickerViewModel());