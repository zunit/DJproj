// window -> view -> label

// create window
var win = Titanium.UI.createWindow({
	backgroundColor: 'white'
});

// creating a view
var view = Titanium.UI.createView();

//this is how many points you have.
var mypoints = 100;

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
	},
	{
		profile_picture:'/images/stela.jpg', 
		name:"John", 
		age:'20', 
		hasChild:true,
		points: '80'
	},
	{
		profile_picture:'/images/stela.jpg', 
		name:"John", 
		age:'20', 
		hasChild:true,
		points: '100'
	},
	{
		profile_picture:'/images/stela.jpg', 
		name:"Sandy", 
		age:'22', 
		hasChild:true,
		points: '200'
	}
];

// we will push all the customized data into this list after reformatting
var data = [];

function messagedisplay(data_load){
	// seen value 
	if (data_load.seen) {		
		// seen last message
		return Ti.UI.createLabel({
			text: data_load.last_message,
			font:{fontSize:12},
			textAlign: 'left',
			width: 'auto',
			left: 60,
			bottom: 5,
			height: 12
		});
		
	} else {
		// last message
		return Ti.UI.createLabel({
			text: data_load.last_message,
			font:{fontSize:13, fontWeight:'bold'},
			textAlign: 'left',
			width: 'auto',
			left: 60,
			bottom: 5,
			height: 12
		});	
	}	
}

function namedisplay(namedata){
	if (namedata.seen) {
		// seen create name 
		return Ti.UI.createLabel({
			text: namedata.name,
			font:{fontSize:16},
			width: 'auto',
			textAlign:'left',
			top: 2, 
			left: 55,
			height: 16
		});
	} else {
		// create name 
		return Ti.UI.createLabel({
			text: namedata.name,
			font:{fontSize:17, fontWeight:'bold'},
			width: 'auto',
			textAlign:'left',
			top: 2, 
			left: 55,
			height: 16
		});			
	}
}

function profiledisplay(data_load){
	return Ti.UI.createImageView({
		image: data_load.profile_picture,
		height: 48,
		width: 48,
		left: 4,
		top: 2
	});
}

// function for figuring out valid point or not
function calculate_points(points){
	if (mypoints >= points){
		alert("Success you have" + String(mypoints - points) + " left!");
	} else {
		alert("not enough points! you need " + String(points - mypoints));
	}
}

// looping through each custom_data to create the right view. 
for (i = 0; i < custom_data.length; i++){
	
	// creating the row
	var row = Ti.UI.createTableViewRow();
	var profile_picture = profiledisplay(custom_data[i]);
	var name = namedisplay(custom_data[i]);
	
	// if we can talk to the user
	if (custom_data[i].points == -1){
		var last_message = messagedisplay(custom_data[i]);	
		row.add(last_message);
	} else {
		// have to unlock with points 
		// case 1 enough points 
		// this is a button 
		
		// this creates the label
		var unlock = Ti.UI.createLabel({
			text: "Unlock " + custom_data[i].points + " points",
			font:{fontSize:17, fontWeight:'bold'},
			width: 'auto',
			textAlign:'right',
			top: 2, 
			right: 55,
			height: 16
		});		
		row.add(unlock);
		// case 2 not enough points 		
	}
	
	
	row.height = 60;
	row.add(profile_picture);
	row.add(name);
	row.points = custom_data[i].points;
	
	row.hasChild = custom_data[i].hasChild;
	row.className = 'profile_tabs';
	console.log("row data: " + row.points);
	data.push(row);
}

// creating a Label
var table = Titanium.UI.createTableView({
	data: data
});  

// click button
table.addEventListener('click', function(e) {
	if (e.rowData.points == -1){
		alert("you received a message!");
	}
	else if (e.rowData.points <= mypoints){
		var selectedPerson = e.rowData;
	    alert("Unlocked! go say hi!");
	    alert("You have " + (mypoints - e.rowData.points) + " left!");
	} else {
    	alert("not enough points! You need " + (e.rowData.points - mypoints) + " points!");
    }
});

view.add(table);
win.add(view);

console.log("names: " + custom_data[1].name);
console.log("length:" + custom_data.length);
for (i = 0; i < custom_data.length; i++) { 
	console.log(i);
};

win.open();