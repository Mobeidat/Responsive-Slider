   
$( document ).ready(function() {
    /* hide previous arrow on page ready
    /  return number of images ( slides )  
    */
    $(".arrow-prev").hide();
    var imagesNumber = $('div.slider-items img').length;
    var dotId = imagesNumber;
    if (imagesNumber == 2) {
      var clicked = 0;
      imagesCount = imagesNumber - 2;
    } else if (imagesNumber <= 1) {
      $(".arrow-next").hide();
    } else {
      var clicked = 1;
      imagesCount = imagesNumber - 1;
    }
    /* generate slider dots navigation */
    if (imagesNumber > 2) {
      for (var i = 0; i < imagesNumber; i++) {
        $("ul").prepend('<li class="slider-pagination carousel-dots" id="carousel' + dotId + '"></li>');
        var dotId = dotId - 1;
      }
    } else {}
    /* dots navigation action code */
    $(".carousel-dots").click(function() {
      var findClickedDot = $(this).attr("id");
      var splitString = findClickedDot.split("carousel")
      var findNumberDot = splitString[1];
      $(".carousel-dots").removeClass("active");
      $(this).addClass("active");
      clicked = parseInt(findNumberDot);
      var adjustNumberforSlide = findNumberDot - 1;
      $(".slider-items").animate({
        "left": -(100 * adjustNumberforSlide) + "vh"
      });
      if (findNumberDot == 1) {
        $(".arrow-prev").hide();
        $(".arrow-next").show();
      } else if (findNumberDot == imagesNumber) {
        $(".arrow-next").hide();
        $(".arrow-prev").show();
      } else {
        $(".arrow-next").show();
        $(".arrow-prev").show();
      }
    });
    /* add background color to dot */
    $(".slider-wrapper").find("li").first().addClass("active");

    /* prev/\next navigation */
    $(".arrow-next").click(function() {
      if (clicked < imagesCount) {
        $(".slider-items").animate({
          "left": "-=100vh"
        });
      } else {
        $(".slider-items").animate({
          "left": "-=100vh"
        });
        $(".arrow-next").hide();
      }
      clicked = clicked + 1;
      $(".arrow-prev").show();
      $(".carousel-dots").removeClass("active");
      $("#carousel" + clicked).addClass("active");

    });

    $(".arrow-prev").click(function() {
      if (clicked > 2) {
        $(".slider-items").animate({
          "left": "+=100vh"
        });
      } else {
        $(".slider-items").animate({
          "left": "+=100vh"
        });
        $(".arrow-prev").hide();
      }
      $(".arrow-next").show();
      clicked = clicked - 1;
      $(".carousel-dots").removeClass("active");
      $("#carousel" + clicked).addClass("active");
    });
});
