//store all of our randomized elements in relevant arrays

var originText = [
  "Hailing from the rugged streets of ",
  "Born and bred in the fires of ",
  "Molded, crafted, and refined in the city of "
];

var styleVerb = ["blending ", "fusing ", "coalescing "];

var styleNoun = ["accumen", "sensibilities", "rationale"];

var callVerb = ["Join ", "Wed with ", "Adhere to "];

var finalClause = [
  "as they launch a new frontier of artistry.",
  "in revolutionizing the way we experience music--for the better.",
  "in launching their creative zeitgiest at the mercy of all who stand in their way."
];

//select a random element from an array
function rand(arr) {
  return (arr = arr[Math.floor(Math.random() * arr.length)]);
}

//captialize the first letter of certain form inputs

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

function makeBio() {
  var bio = "";

  //if an input field is left blank, show an alert
  if ($(".input-field").val() === "") {
    alert("Please make sure all fields are completed :)");
  } else {
    $("#bio").empty();

    $("#bio").append(
      "<p>" +
        rand(originText) +
        titleCase($("#hometown").val()) +
        ", " +
        titleCase($("#first-name").val()) +
        " " +
        titleCase($("#last-name").val()) +
        " is a " +
        $("#descriptor")
          .val()
          .toLowerCase() +
        " currently based out of " +
        titleCase($("#current-town").val()) +
        ". " +
        titleCase($("#first-name").val()) +
        " is known for " +
        rand(styleVerb) +
        " " +
        $("#genre1")
          .val()
          .toLowerCase() +
        " traditions with " +
        $("#genre2")
          .val()
          .toLowerCase() +
        " " +
        rand(styleNoun) +
        ". " +
        rand(callVerb) +
        " " +
        titleCase($("#first-name").val()) +
        " " +
        rand(finalClause) +
        "</p>"
    );
  }

}

$("#submit").on("click", makeBio);

//The following function is to enable smooth scrolling in jQuery. 

function smoothScroll() {

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

}

smoothScroll();