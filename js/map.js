$(document).ready(function(){

	//This would be regular JS routine
    // var button = document.getElementById("fuckbutton");
    // button.addEventListener("mousedown", handleClicks);

    // function handleClicks(){

    // }

    //object.animate(animationProps, duration, callback);

     //button 1
    $("#mapbutton1").click(function(){
    	//If it's open lets close it and get rid of the class

    console.log("button 1 pressed");

    	if($("#vidholder1").hasClass("vidOpen")){
    		$("#vidholder1").animate({
    			//animate out
    			right: "-1000px"
    		}, 500);
    			//Get rid of class
    		$("#vidholder1").removeClass("vidOpen");

    	//If it's closed let's open it
    	} else {

    		//if(!$("#vidholder2").hasClass("vidOpen")){
    		if($("#vidholder2").hasClass("vidOpen")){
    			
	  			$("#vidholder2").animate({
    			//animate out
    			right: "-1000px"
	    		}, 500, function(){
    			//I am done happening
    			
	    			//Get rid of class
	    			$("#vidholder2").removeClass("vidOpen");

	    			//animate in
	    			$("#vidholder1").animate({
		  				right: "200px"
		    		}, 500);
		  				//add class
		    		$("#vidholder1").addClass("vidOpen");

    		});
	  				//add class
	    		//$("#vidholder1").addClass("vidOpen");
    		} else {
			//animate in
				$("#vidholder1").animate({
	  				right: "200px"
	    		}, 500);
	  				//add class
	    		$("#vidholder1").addClass("vidOpen");
			}

    	}
    });

    //button 2
  $("#mapbutton2").click(function(){
	//If it's open lets close it and get rid of the class

    console.log("button 2 pressed");


	if($("#vidholder2").hasClass("vidOpen")){

		$("#vidholder2").animate({
			//animate out
			right: "-1000px"
		}, 500);
			//Get rid of class
		$("#vidholder2").removeClass("vidOpen");

	//If it's closed let's open it
	} else {

		if($("#vidholder1").hasClass("vidOpen")){
				
 			$("#vidholder1").animate({
    			//animate out
    			right: "-1000px"
    		}, 500, function(){
    			//I am done happening
    			
    			//Get rid of class
    			$("#vidholder1").removeClass("vidOpen");

    			//animate in
    			$("#vidholder2").animate({
	  				right: "200px"
	    		}, 500);
	  				//add class
	    		$("#vidholder2").addClass("vidOpen");

    		});


		} else {
			//animate in
			$("#vidholder2").animate({
  				right: "200px"
    		}, 500);
  				//add class
    		$("#vidholder2").addClass("vidOpen");
		}

    	}
    });




});