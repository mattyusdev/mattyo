let lightBoxIndex;

////////////////////////
//Event Listeners
$(window).scroll(navBarScroll);
$(".nav-link").click(navClick);

$(".closebutton").click(closeLightbox);
$(".fa-angle-right").click(() => lightBoxSlide(1, "right"));
$(".fa-angle-left").click(() => lightBoxSlide(-1, "left"));

//.length!
for (let i = 0; i < $(".imagecol").length; i++) {
  $(".imagecol:eq(" + i + ")").click(() => popLightBox(0));
}

//.length!
for (let i = 0; i < $(".imagecol").length; i++) {
  $(".lightboximg:eq(" + i + ")").click(() => zoomImage(i));
}

////////////////////////
//Code
$("#navbarbutton").click(() => $(".navbar-collapse").slideToggle());

$("#loadMore").click(() => {
  $(".hiderow").slideToggle(200);
  if ($("#loadMore").text() == "Load More") {
    $("#loadMore").text("Show Less");
    $(".hiderow").css("display", "flex");
  } else {
    $("#loadMore").text("Load More");
  }
});

// Smooth scrolling | all browsers | remove # from url
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {}
      );
    } // End if
  });
});

////////////////////////
//Functions
function popLightBox(index) {
  $(".lightboxblock").css("height", "100%");
  $("body").css("overflow", "hidden");
  $(".lightboxcontainer:eq(" + index + ")").css("display", "block");
  $(".closebutton").css("display", "");
  $(".fa-angle-right, .fa-angle-left").css("display", "");
  $(".lightboximg:eq(" + index + ")").css("cursor", "zoom-in");
  lightBoxIndex = index;
}

//LightBox Zoom-in and out
function zoomImage(index) {
  if ($(".lightboximg:eq(" + index + ")").css("cursor") == "zoom-in") {
    $(".lightboximg:eq(" + index + ")").css({
      height: "auto",
      "max-width": "70%",
      cursor: "zoom-out",
    });
    $(".lightboxblock").css({ "overflow-y": "scroll", display: "block" });
    $(".closebutton").css("position", "fixed");
    $(".fa-angle-right, .fa-angle-left").css("display", "none");
  } else {
    $(".lightboximg:eq(" + index + ")").css({
      height: "80vh",
      cursor: "zoom-in",
    });
    $(".lightboxblock").css({ "overflow-y": "hidden", display: "flex" });
    $(".closebutton").css("position", "absolute");
    $(".fa-angle-right, .fa-angle-left").css("display", "");
  }
}

function closeLightbox() {
  if ($(".lightboximg:eq(" + lightBoxIndex + ")").css("cursor") == "zoom-out") {
    $(".fa-angle-right, .fa-angle-left").css("display", "");
  }
  $("body").css("overflow", "visible");
  $(".fa-angle-right, .fa-angle-left").css("display", "none");
  $(".closebutton").css({ display: "none", position: "absolute" });
  $(".lightboxblock").css({
    "overflow-y": "hidden",
    display: "flex",
    height: "0",
  });
  $(".lightboxcontainer:eq(" + lightBoxIndex + ")").css("display", "none");
  $(".lightboximg:eq(" + lightBoxIndex + ")").css("height", "80vh");
  $(".lightboxcontainer:eq(" + lightBoxIndex + ")").removeClass(
    "lightboxslideleft lightboxslideright"
  );
}

function lightBoxSlide(input, dir) {
  $(".lightboxcontainer:eq(" + lightBoxIndex + ")")
    .removeClass("lightboxslideleft lightboxslideright")
    .css("display", "none");

  if (lightBoxIndex + input >= 3) {
    lightBoxIndex = 0;
  } else if (lightBoxIndex + input < 0) {
    //imageCol.length
    lightBoxIndex = 2;
  } else {
    lightBoxIndex += input;
  }

  $(".lightboxcontainer:eq(" + lightBoxIndex + ")")
    .addClass("lightboxslide" + dir)
    .css("display", "block");
}

// Navbar scroll effects
function navBarScroll() {
  if ($(window).scrollTop() > 20) {
    $("#mainNav").css({ background: "#121c2e", transform: "scale(1.05)" });
  } else {
    $("#mainNav").css({ background: "transparent", transform: "scale(1)" });
  }
}

// Close responsive navbar with delay
function navClick() {
  if (window.innerWidth < 767) {
    setTimeout(() => $("#navbarbutton").click(), 500);
  }
}
