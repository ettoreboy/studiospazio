var flkty;
open_text = false;
open_plan = false;
var clicks = 0;
prevId = "";
currentId = "";

function updateText() {
  flkty = Flickity.data(carousel);
  prevId = currentId;
  currentId = flkty.selectedElement.id;
  if (flkty.selectedIndex >= 0 && prevId !== currentId) {
    $("div.textgallery > *").hide();
    $("div.plans > *").hide();
    if (open_text) {
      $('div.textgallery div#' + currentId).fadeIn()
    }
    if (open_plan) {
      $('div.plans #' + currentId).fadeIn(1000);
    }
  }
}

function toggleText(element, show_text, show_plan) {
  if (show_plan) {
    $('div.textgallery div#' + element.id).hide()
    $('div.plans #' + element.id).fadeIn(1000)
  } else if (!show_plan) {
    $('div.plans #' + element.id).fadeOut()
  }
  if (show_text) {
    $('div.plans #' + element.id).hide()
    $('div.textgallery div#' + element.id).fadeIn()
  } else if (!show_text) {
    $('div.textgallery div#' + element.id).fadeOut()
  }
}

/** READY */
$(document).ready(function () {
  carousel = document.querySelector('.gallery');

  $('.gallery').on('select.flickity', function (element) {
    updateText();
  });

  $("#more-button").on("click", function (e) {

    $(this).fadeOut("fast").fadeIn("fast");

    flkty = Flickity.data(carousel);
    clicks++;
    if (clicks === 1) {
      if (!open_text) {
        open_plan = false;
        open_text = true;
      } else {
        open_text = false;
      }

    } else if (clicks === 2) {
      if (!open_plan) {
        open_text = false;
        open_plan = true;
      } else {
        open_plan = false;
      }

    } else if (clicks > 2) {
      clicks = 0;
      open_text = false;
      open_plan = false;
    }

    toggleText(flkty.selectedElement, open_text, open_plan);
  })
    .on("dblclick", function (e) {
      e.preventDefault();  //cancel system double-click event
    });

  var isScrolling = false;
  $('.gallery').on('scroll.flickity', function (event, progress) {
    isScrolling = true;
    //console.log( 'Flickity scrolled ' + progress * 100 + '%' )
  })
  $('.gallery').on('settle.flickity', function () {
    isScrolling = false;
    //console.log( 'Flickity settled at ' + flkty.selectedIndex )
  })


  $('.gallery').on('mousewheel', { mousewheel: { debounce: { preventDefault: true, leading: true, trailing: false, delay: 300 } } }, function (event) {
    event.preventDefault();
    flkty = Flickity.data(this);
    //normalize for mac
    var deltaY = event.deltaY
    var deltaX = event.deltaX
    var deltaFactor = event.deltaFactor

    var directions = {
      isUp: deltaY > 0,
      isLeft: deltaX < 0,
      isDown: deltaY < 0,
      isRight: deltaX > 0
    };
    if (!isScrolling) {
      if (directions.isLeft) {
        flkty.previous();
      } else if (directions.isRight) {
        flkty.next();
      }
    }
  });

  //start lazyload
  $(".img-resp").addClass("lazyload");
  $(document).on('lazybeforesizes', function (e) {
    //use width of parent node instead of the image width itself
    e.detail.width = $('.flickity-viewport').width();
  });

});

$(window).on('load', function () {
  var totalImg = $(".gallery-cell").length

  jQuery('.gallery').flickity({
    // options
    freeScroll: true,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: false,
    resize: true,
    initialIndex: 0,
    setGallerySize: false,
    imagesLoaded: true,
    selectedAttraction: 0.010,
    friction: 0.40,
    freeScrollFriction: 0.09
  });

  $(".se-pre-con").fadeOut("slow");

});
