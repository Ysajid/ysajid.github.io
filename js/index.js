$("a").on('click', function(event) { //event overriding for smoothe scrolling effect
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      document.getElementById("page-nav").classList.toggle("hidden-xs");
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});

$("#menu-btn").on('click' , function() {
  document.getElementById("page-nav").classList.toggle("hidden-xs");
});


