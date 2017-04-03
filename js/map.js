$(document).ready(function(){

    var fadeLength = 250; //miliseconds

     //button 1
    $("#mapbutton1").click(function(){
    	//If it's open lets close it and get rid of the class
        console.log("button 1 pressed");
        //Here out shit is still not visible
        // Yay!
        $('#fadeEffect').fadeOut(fadeLength, function(){

            $("#title360video").html( 
                "<h4><span class='glyphicon glyphicon-map-marker icon-success'></span> HUDSON STREET: June 25th, 1989</h4>" +
                "<p>Nelson in drag as Amnesia at the Gay Pride march.</p>"
            );

            $("#videospace").html( 
                '<iframe src="https://player.vimeo.com/video/210183879?color=ff00bd&title=0&byline=0&portrait=0" width="100%" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'

            );

            $("#description360video").html( 
                "<p> Nelson wanders “Gay Day” dressed as Amnesia, his drag persona. Amnesia had her hair and makeup done by Rupaul that day. Throughout the parade, Amnesia runs across a cast of characters from the worlds of nightlife, media, and fashion.</p>"
            );

        });

        //And same here
        $('#fadeEffect').fadeIn(fadeLength);
        console.log("Finished fading");


    });

    //button 2
  $("#mapbutton2").click(function(){
	//If it's open lets close it and get rid of the class

        console.log("button 2 pressed");

        $('#fadeEffect').fadeOut(fadeLength, function(){

            $("#title360video").html( 
                "<h4><span class='glyphicon glyphicon-map-marker icon-success'></span> MEMORIES AT STONEWALL: June 23rd, 1989</h4>" +
                "<p>Nelson remembers his accidental visit during the Stonewall Riots twenty years earlier.</p>"
            );

            $("#videospace").html( 
                '<iframe src="https://player.vimeo.com/video/210704401?title=0&byline=0&portrait=0" width="100%" height="240px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'

            );

            $("#description360video").html( 
                "<p>During a protest march commemorating the 20th anniversary of the Stonewall Riots, Nelson runs into his friend David Noh outside the Stonewall Inn. They’re awaiting a troupe of drag queens commemorating Judy Garland, whose death occurred on the night of the riots. The queens arrive later that night with a police escort, a strong sign of progress over the 20 year preceding years –  though there was still much work to be done for queer rights.</p>"
            );
        });

        $('#fadeEffect').fadeIn(fadeLength);
        console.log("Finished fading");

    });




});