// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	//initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures
function initGestures() {
	$(function() {
    $(".judge-img").bind("taphold", tapholdHandler);
    function tapholdHandler(event) {
      var targetIDPrefix = event.target.id;
      console.log("got prefix: " + targetIDPrefix);
      $("#" + targetIDPrefix + "-bio").show();
    }
  });
}

// init RSVP form submit listener
function initRSVPForm() {
  $('#rsvpForm').submit(function(e){
    e.preventDefault();
    console.log("submitting form...");
    var rsvpEmail = $("#rsvpEmail").val();
    $.post('addRSVP', {rsvpEmail: rsvpEmail}, postCallback);
  });
  function postCallback(res) {
    alert("RSVP form successfully submitted!");
    $('#rsvpEmail').val('');
  }
}
function initMap() {
	// add your code here
  L.mapquest.key = 't69jGscXR3NtI8ZLv05jXO6HWnQDVL7i';
  var map = L.mapquest.map('map', {
    center: [32.88, -117.236],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.88, -117.236]).addTo(map);
}
