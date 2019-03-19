// define jQuery
jQuery(function($){

var accessibility = {

	elms: {
		skip: $('.skip')
	},

	//  Skip navigation functionality for tab navigation
	skipNav: function() {
		accessibility.elms.skip.click(function(){
			var skipTo='#'+this.href.split('#')[1];
			$(skipTo).attr('tabindex', -1).on('blur focusout', function () {
				$(this).removeAttr('tabindex');
			}).focus();
		});
	},

	init: function() {
		accessibility.skipNav();
	}
};
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
var loader = {
	init: function() {
		  // number of loaded images for preloader progress 
		  var loadedCount = 0; //current number of images loaded
		  var imagesToLoad = $('.bcg').length; //number of slides with .bcg container
		  var loadingProgress = 0; //timeline progress - starts at 0

		  $('.bcg').imagesLoaded({
		    background: true
		  }).progress(function(instance, image) {
		    loadProgress();
		  });

		  function loadProgress(imgLoad, image) {
		    //one more image has been loaded
		    loadedCount++;

		    loadingProgress = (loadedCount / imagesToLoad);

		    //console.log(loadingProgress);

		    // GSAP timeline for our progress bar
		    TweenLite.to(progressTl, 0.7, {
		      progress: loadingProgress,
		      ease: Linear.easeNone
		    });

		  }

		  //progress animation instance. the instance's time is irrelevant, can be anything but 0 to void  immediate render
		  var progressTl = new TimelineMax({
		    paused: true,
		    onUpdate: progressUpdate,
		    onComplete: loadComplete
		  });

		  progressTl
		  //tween the progress bar width
		    .to($('.progress span'), 1, {
		    width: 100,
		    ease: Linear.easeNone
		  });

		  //as the progress bar witdh updates and grows we put the precentage loaded in the screen
		  function progressUpdate() {
		    //the percentage loaded based on the tween's progress
		    loadingProgress = Math.round(progressTl.progress() * 100);
		    //we put the percentage in the screen
		    $(".txt-perc").text(loadingProgress + '%');
		  } 

		function loadComplete() { 
			var preloaderOutTl = new TimelineMax(); 
			preloaderOutTl
			.to($('.progress'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn})
			.to($('.txt-perc'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn}, 0.1)
			.set($('body'), {className: '-=is-loading'})
			.set($('body'), {className: '+=is-loaded'})
			.to($('#preloader'), 0.7, {autoAlpha: 0, ease:Power4.easeInOut})
			.set($('#preloader'), {className: '+=is-hidden'})

			// .to($('#intro .anchor-nav'), 0.5, {className: '+=active',onComplete:function(){
			// 		TweenMax.set($('#intro .anchor-nav a'), {autoAlpha: 1})
 		// 			TweenMax.staggerFrom('.anchor-nav li a',  0.5, {scale:0.5, autoAlpha:0, delay:0.5, ease:Elastic.easeOut, force3D:true},0.2)
	  //   	}}, 10)
 			.to($('.scroll-hint'), 1.3, {bottom: 10, autoAlpha: 1, ease:Power1.easeOut}, 2)
			

			return preloaderOutTl;
		} 

		




 

 

	}

}
var navigation = {
	init: function() {
 
	  function slideMenu() {
	    var activeState = $("#menu-container .menu-list").hasClass("active");
	    $("#menu-container .menu-list").animate({right: activeState ? "0%" : "-100%"}, 400);
	  }
	  
	  $("#menu-wrapper").click(function(event) {
	    event.stopPropagation();
	    $("#hamburger-menu").toggleClass("open");
	    $("#menu-container .menu-list").toggleClass("active");
	    slideMenu();

	    $("body").toggleClass("overflow-hidden");
	  });
	   
	}
}











 var perspective = {
	init: function() {
  
	 //  	var $body=$("body"),
		// $heroA=$(".bcg-container .bcg"),
		// $heroB=$(".bcg-container .shadow");
		


		// TweenMax.set( $heroA, { transformStyle: 'preserve-3d'  }); 
		// TweenMax.set( $heroB, { transformStyle: 'preserve-3d'  });
		

		// $body.mousemove(function(e) {
		// 	var sxPos =  e.pageX / $body.width()  * 100 - 50;
		// 	var syPos =  e.pageY / $body.height() * 100 - 50;

		// 	TweenMax.to( $heroA, 1, { rotationY: 0.05 * sxPos, rotationX: 0.20 * syPos, rotationZ: '-0.1', transformPerspective:500, transformOrigin:'center center' }); 
		// 	TweenMax.to( $heroB, 1, {opacity:1, rotationY: 0.50 * sxPos, rotationX: 0.55 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });

		// });

		// $body.mouseout(function() {
		// 	TweenMax.to( $heroA, 1, {rotationY: 0, rotationX: 0, rotationZ: '0', transformPerspective:500, transformOrigin:'center center' }); 
		// 	TweenMax.to( $heroB, 1, {opacity:0.4, rotationY: 0, rotationX: 0, rotationZ: '0', transformPerspective:500, transformOrigin:'center center' }); 
		// });
	}
}
//  ***********************
//  $$ Document ready
//  ***********************
$(function() {

	window.windowWidth = window.innerWidth;
	window.windowHeight = window.innerHeight;

	window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
	window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
	window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');
	window.isAndroid = function(){ return /Android/i.test(navigator.userAgent); }
	window.getAndroidVersion = function(ua) {
		ua = (ua || navigator.userAgent).toLowerCase();
		var match = ua.match(/android\s([0-9\.]*)/);
		return match ? match[1] : false;
	};


	if ( window.isiPhone > 0 || window.isiPad > 0 || window.isiPod > 0 ) {
		window.isIOS = true;
	} else {
		window.isIOS = false;
	}

	window.tablet = 640;
	window.tabletWide = 800;
	window.desktop = 1024;

	window.isTouch = false;
	if (('ontouchstart' in document.documentElement) || Modernizr.touchevents) {window.isTouch = true}
	// isTouch = true;

	if (isTouch || Modernizr.touchevents) {
		$('html').addClass('touch');
	}

	// Detect IE11 and Add Modernizer-like Class to HTML Element
	if ( $.browser.msie && $.browser.version <= 11 )
		$( 'html' ).addClass( 'lt-ie12' );

	/// Detect Desktop/Mobile and Add Modernizer-like Class to HTML Element
	if ( $.browser.desktop )
		$( 'html' ).addClass( 'desktop' );
	else if ( $.browser.mobile )
		$( 'html' ).addClass( 'mobile' );

	if (window.isAndroid())
		$( 'html' ).addClass( 'android' )

	if (parseInt(getAndroidVersion(), 10) == 6)
		$( 'html' ).addClass( 'android6' )

	// Add functions here 
	accessibility.init();  
	loader.init();    
	functions.init();    
	navigation.init();  
  
});
});// jQuery end
// no writting in this file
//# sourceMappingURL=app.js.map
