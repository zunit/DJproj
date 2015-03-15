// window -> view -> label

// create window
var win = Titanium.UI.createWindow({
	backgroundColor: 'white'
});

// creating a view
var view = Titanium.UI.createView();

var custom_data = [
	// {leftImage: 'http://www.ginaraimondo.com/sites/ginaraimondo/files/bill-clinton.jpg', title:'Car1', hasChild:true},
	// {leftImage: '/images/default.png', title:'Jooo', haschild:true}
	{
		profile_picture:'/images/daniel.png', 
		name:"Daniel", 
		age:'21', 
		last_message:"Where are you?", 
		seen:true, 
		hasChild:true, 
		points:'-1'
	},
	
	{
		profile_picture:'/images/jack.png', 
		name:"Jack", 
		age:'24', 
		last_message:"Cool!", 
		seen:false, 
		hasChild:true,
		points: '-1'
	},
	{
		profile_picture:'/images/stela.jpg', 
		name:"Stela", 
		age:'20', 
		last_message:"Where are you?", 
		seen:true, 
		hasChild:true,
		points: '-1'
	}
];

// we will push all the customized data into this list after reformatting
var data = [];

// looping through each custom_data to create the right view. 
for (i = 0; i < custom_data.length; i++){
	
	// creating the row
	var row = Ti.UI.createTableViewRow();
	
	// picture flag
	var profile_picture = Ti.UI.createImageView({
		image: custom_data[i].profile_picture,
		height: 48,
		width: 48,
		left: 4,
		top: 2
	});
	
	// seen value 
	if (custom_data[i].seen) {
		// seen create name 
		var name = Ti.UI.createLabel({
			text: custom_data[i].name,
			font:{fontSize:16},
			width: 'auto',
			textAlign:'left',
			top: 2, 
			left: 55,
			height: 16
		});
		
		// seen last message
		var last_message = Ti.UI.createLabel({
			text: custom_data[i].last_message,
			font:{fontSize:12},
			textAlign: 'left',
			width: 'auto',
			left: 60,
			bottom: 5,
			height: 12
		});
		
	} else {
		// create name 
		var name = Ti.UI.createLabel({
			text: custom_data[i].name,
			font:{fontSize:17, fontWeight:'bold'},
			width: 'auto',
			textAlign:'left',
			top: 2, 
			left: 55,
			height: 16
		});
		
		// last message
		var last_message = Ti.UI.createLabel({
			text: custom_data[i].last_message,
			font:{fontSize:13, fontWeight:'bold'},
			textAlign: 'left',
			width: 'auto',
			left: 60,
			bottom: 5,
			height: 12
		});	
	}
	
	 
	row.height = 60;
	row.add(profile_picture);
	row.add(name);
	row.add(last_message);
	row.hasChild = custom_data[i].hasChild;
	row.className = 'profile_tabs';
	
	data.push(row);
}

// creating a Label
var table = Titanium.UI.createTableView({
	data: data
});

// function showMessage(event) {
    // var showMessage = event.source;
    // console.log("MESSAGEPAGE" + showMessage);
    // var args = {
        // title: "HELLO",
        // //author: selectedBook.author
    // };
    // var messageView = Alloy.createController("messaging_page", args).getView();
    // messageView.open();
// }   

view.add(table);
win.add(view);

console.log("names: " + custom_data[1].name);
console.log("length:" + custom_data.length);
for (i = 0; i < custom_data.length; i++) { 
	console.log(i);
};

win.open();