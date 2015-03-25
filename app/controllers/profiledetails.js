var args = arguments[0] || {};
console.log("this is args from detail page:");
console.log(args);
$.namelabel.text = args.name + " Profile";

 question_data = [
 	{
 		question:"would you rather banana or apple",
 		bool:"yes"
 	},
 	{
 		question:"would you rather a or b",
 		bool:"yes"
 	},
 	{
 		question:"would you rather c or d",
 		bool:"no"
 	}
 ];
 
function namedisplay(namedata){
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
}

function questiondisplay(quest){
	return Ti.UI.createLabel({
		text: quest,
		font:{fontSize:16},
		width: 'auto',
		top: 100,
		textAlign:'left',
		height: 16
	});
}

namedisplay(args.name);

for (i = 0; i < question_data.length; i++){
	questiondisplay(question_data[i].question);
}


