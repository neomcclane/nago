var origin, botona, botonb, destino;

function page(origin,botona,botonb,destino){

		$(origin).fadeOut();
   		$(origin).removeClass("visible");
   		$(origin).addClass("hide");

   		$(botona).removeClass("btn-small-style-active");
   		$(botona).addClass("btn-small-style");
   		$(botonb).removeClass("btn-small-style");
   		$(botonb).addClass("btn-small-style-active");

		$(destino).fadeIn();
		$(destino).removeClass("hide");
   		$(destino).addClass("visible");

}	

// Call the function when is clicked
$("#button2").click(function(){
	// izquierda
	if ($('#page1').hasClass("visible")){
 		page("#page1","#button1","#button2","#page2");
	}
	// derecha
	else if ($('#page3').hasClass("visible")){
		page("#page3","#button3","#button2","#page2");
	}
})
$("#button1").click(function(){
	// izquierda
	if ($('#page2').hasClass("visible")){
			page("#page2","#button2","#button1","#page1");
	}
	// derecha
	else if ($('#page4').hasClass("visible")){
		page("#page4","#button4","#button1","#page1");
	}
})
 
$("#button3").click(function(){
	// izquierda
	if ($('#page1').hasClass("visible")){
 		page("#page1","#button1","#button3","#page3");
	}
	// derecha
	else if ($('#page2').hasClass("visible")){
		page("#page2","#button2","#button3","#page3");
	}
	 	
})

$("#button4").click(function(){
	// izquierda
	if ($('#page3').hasClass("visible")){
 		page("#page3","#button3","#button4","#page4");
	}
	// derecha
	else if ($('#page1').hasClass("visible")){
		page("#page1","#button1","#button4","#page4");
	}
})


// Event Swipe  ||  Compare if page is visible
$(".content-list-menu").on("swipeleft",function()
	{
		
		if ($('#page1').hasClass("visible")){
			page("#page1","#button1","#button2","#page2");			 
		}
		else if ($('#page2').hasClass("visible")){
			page("#page2","#button2","#button3","#page3");
		}
		else if ($('#page3').hasClass("visible")){
			page("#page3","#button3","#button4","#page4");
		}
		else if ($('#page4').hasClass("visible")){
			page("#page4","#button4","#button1","#page1");
		}  	
	}
);


$(".content-list-menu").on("swiperight",function()
	{
		if ($('#page2').hasClass("visible")){
			page("#page2","#button2","#button1","#page1");	   		
		}
		else if ($('#page3').hasClass("visible")){
			page("#page3","#button3","#button2","#page2");		 	  		   		
		}
		else if ($('#page1').hasClass("visible")){
			page("#page1","#button1","#button4","#page4");
		} 
		else if ($('#page4').hasClass("visible")){
			page("#page4","#button4","#button3","#page3");
		}
	}	
);




// Event Swipe  ||  Compare if page is visible in main
$(".content-list-notifications").on("swipeleft",function(){
		
	if ($('#page1').hasClass("visible")){
		page("#page1","#button1","#button2","#page2");			 
	}
	else if ($('#page2').hasClass("visible")){
		page("#page2","#button2","#button3","#page3");
	}
	else {
		if ($('#page3').hasClass("visible")){
			page("#page3","#button3","#button1","#page1");
		} 	
	}
});


$(".content-list-notifications").on("swiperight",function(){
	if ($('#page2').hasClass("visible")){
		page("#page2","#button2","#button1","#page1");	   		
	}
	else if ($('#page3').hasClass("visible")){
		page("#page3","#button3","#button2","#page2");		 	  		   		
	}
	else{ 	
		if ($('#page1').hasClass("visible")){
			page("#page1","#button1","#button3","#page3");
		} 
	}	
});


