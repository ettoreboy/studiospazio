/**
* @author Ettore Ciprian [cipettaro@gmail.com]
*/

function updateText (id) {
  var currentId = flkty.selectedElement.id;
  if (flkty.selectedIndex >= 0 && currentId !== id) {
    $("div.textgallery #" + id).hide()
    if (open_text) {
      $('div.textgallery div#'+currentId).fadeIn()
    }
    if (open_plan) {
      $('div.textgallery img#'+currentId).fadeIn(1000);
    }
  }
}

function toggleText (element, show_text, show_plan) {
  if (show_text) {
    $(".overlay").fadeIn();
    $('div.textgallery div#'+ element.id).fadeIn()
  }else if (!show_text) {
    $(".overlay").fadeOut();
    $('div.textgallery div#'+ element.id).fadeOut()
  }
  if (show_plan) {
    $('div.textgallery img#'+ element.id).fadeIn(1000)
  }else if (!show_plan) {
    $('div.textgallery img#'+ element.id).fadeOut()
  }
}
