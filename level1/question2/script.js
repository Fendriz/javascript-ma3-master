//Console.log out elements in JSON file

$(document).ready(function()
{
  $.getJSON('author.json', function(info){

  	//First i loop trought the video array (only 1 object inside)
  	for (var i = 0; i < info.video.length; i++) {
  		//Then I loop through each elemts inside that object
  		for (key in info.video[i]){
  			var videoInfo = info.video[i][key];
  			//Print out each element inside the object in the video array.
  			console.log(videoInfo);

  			var check = typeof videoInfo;
  			//Check if there is an object inside that object that I can loop through
  			if(check === "object"){
  				//loops through the data array (Only 1 object inside)
  				for (var i = 0; i < videoInfo.data.length; i++){
  					//Then I loop through each elements inside that object.
	  				for (keys in videoInfo.data[i]){
	  					var datainfo = videoInfo.data[i][keys];
	  					//Print out each element inside the object in the data array.
	  					console.log(datainfo);
  					}
  				}
  			}
  		}
  	}
  });
});