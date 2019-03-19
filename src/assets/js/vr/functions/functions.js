var functions = {
  init: function() {
  	//console.clear();
 

	// carousel
	$('.single-item').slick({
		dots: true
	});

	//FORM output
 
 

var nameInput = document.getElementById('Name');
var emailInput = document.getElementById('Email');
var numberInput = document.getElementById('Telephone');
var subjectInput = document.getElementById('Subject');

document.querySelector('#formSubmit').addEventListener('submit', function (e) {
    //prevent the normal submission of the form
    e.preventDefault();

    console.log(nameInput.value);    
    console.log(emailInput.value);    
    console.log(numberInput.value);    
    console.log(subjectInput.value);  
    GEEKFORGEEKS();  
});

 

	   function GEEKFORGEEKS() {
	    var name = document.forms["RegForm"]["Name"];               
	    var email = document.forms["RegForm"]["Email"];    
	    var phone = document.forms["RegForm"]["Telephone"]; 
	    var what =  document.forms["RegForm"]["Subject"];   

	   
	    if (name.value == "")                                  
	    { 
	        window.alert("Please enter your name."); 
	        name.focus(); 
	        return false; 
	    } 
	   
	    if (email.value == "")                                   
	    { 
	        window.alert("Please enter a valid e-mail address."); 
	        email.focus(); 
	        return false; 
	    } 
	   
	    if (email.value.indexOf("@", 0) < 0)                 
	    { 
	        window.alert("Please enter a valid e-mail address."); 
	        email.focus(); 
	        return false; 
	    } 
	   
	    if (email.value.indexOf(".", 0) < 0)                 
	    { 
	        window.alert("Please enter a valid e-mail address."); 
	        email.focus(); 
	        return false; 
	    } 
	   
	    if (phone.value == "")                           
	    { 
	        window.alert("Please enter your telephone number."); 
	        phone.focus(); 
	        return false; 
	    } 
	   
	    
	   
	    if (what.selectedIndex < 1)                  
	    { 
	        alert("Please enter your option."); 
	        what.focus(); 
	        return false; 
	    } 
	   
	    return true; 
	}

 

	 


	// SLider for form
		var panelCount = 4; // change to meet your needs

		var panelStop = (panelCount-1)*2; 
		// how much the panel wrap moves in relation to the dragger's x position
		// *2 works because the stage is twice the width of the dragger travel area (adjust accordingly)


		var markerSpacing = 300/(panelCount-1); 
		// 300 is the travel distance of the dragger (400 wide bounds - 100px width of the actual dragger)
		// subtract 1 from the panel count so the panel wrap slides to the correct ending position as we start at 0

		var dragStop = document.getElementById("dragBounds");
		var snapStops = []; // empty snap array

		for (i=0; i<panelCount; i++) {
		 $( ".panelWrap" ).append("<div class='action smile0"+(i+1) +" '></div>"); //add panels

		  var panels = $(".action");
		  snapStops.push(i*markerSpacing); // fill the snap array
		  TweenMax.set(panels[i], {right: i*100+"%" }); // position the panels
		}

		Draggable.create("#dragControl", {
		  type: "x",
		  throwProps: true,
		  bounds: dragStop,
		  edgeResistance: 1,
		  snap: snapStops,
		  onDrag: makeEmMove,
		  onThrowUpdate: makeEmMove
		});

		function makeEmMove() {
		  TweenMax.set(".panelWrap", { x: this.x * panelStop});
		}

 




 

  }
}