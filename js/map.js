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

        $("#title360video").html( 
            "<h4>HUDSON STREET: June 25th, 1989</h4>" +
            "<p>Nelson in drag as Amnesia at the Gay Pride march.</p>"
        );

        $("#description360video").html( 
            "<p> Nelson wanders “Gay Day” dressed as Amnesia, his drag persona. Amnesia had her hair and makeup done by Rupaul that day. Throughout the parade, Amnesia runs across a cast of characters from the worlds of nightlife, media, and fashion.</p>"
        );

      // $("#regTitle").html("Hello World");

    	if($("#vidholder1").hasClass("vidOpen")){
    		$("#vidholder1").animate({
    			//animate out
    			right: "-1500px"
    		}, 500);
    			//Get rid of class
    		$("#vidholder1").removeClass("vidOpen");

    	//If it's closed let's open it
    	} else {

    		//if(!$("#vidholder2").hasClass("vidOpen")){
    		if($("#vidholder2").hasClass("vidOpen")){
    			
	  			$("#vidholder2").animate({
    			//animate out
    			right: "-1500px"
	    		}, 500, function(){
    			//I am done happening
    			
	    			//Get rid of class
	    			$("#vidholder2").removeClass("vidOpen");

	    			//animate in
	    			$("#vidholder1").animate({
		  				right: "-150px"
		    		}, 500);
		  				//add class
		    		$("#vidholder1").addClass("vidOpen");

    		});
	  				//add class
	    		//$("#vidholder1").addClass("vidOpen");
    		} else {
			//animate in
				$("#vidholder1").animate({
	  				right: "-150px"
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

    $("#title360video").html( 
        "<h4>MEMORIES AT STONEWALL: June 23rd, 1989</h4>" +
        "<p>Nelson remembers his accidental visit during the Stonewall Riots twenty years earlier.</p>"
    );

    $("#description360video").html( 
        "<p>During a protest march commemorating the 20th anniversary of the Stonewall Riots, Nelson runs into his friend David Noh outside the Stonewall Inn. They’re awaiting a troupe of drag queens commemorating Judy Garland, whose death occurred on the night of the riots. The queens arrive later that night with a police escort, a strong sign of progress over the 20 year preceding years –  though there was still much work to be done for queer rights.</p>"
    );


	if($("#vidholder2").hasClass("vidOpen")){

		$("#vidholder2").animate({
			//animate out
			right: "-1500px"
		}, 500);
			//Get rid of class
		$("#vidholder2").removeClass("vidOpen");

	//If it's closed let's open it
	} else {

		if($("#vidholder1").hasClass("vidOpen")){
				
 			$("#vidholder1").animate({
    			//animate out
    			right: "-1500px"
    		}, 500, function(){
    			//I am done happening
    			
    			//Get rid of class
    			$("#vidholder1").removeClass("vidOpen");

    			//animate in
    			$("#vidholder2").animate({
	  				right: "-150px"
	    		}, 500);
	  				//add class
	    		$("#vidholder2").addClass("vidOpen");

    		});


		} else {
			//animate in
			$("#vidholder2").animate({
  				right: "-150px"
    		}, 500);
  				//add class
    		$("#vidholder2").addClass("vidOpen");
		}

    	}
    });




});