/**
* @author Ettore Ciprian [cipettaro@gmail.com]
*/

/**
 * load Configurations from a Json file
 */
function loadConfig(filepath){
  $.ajaxSetup({beforeSend: function(xhr){
      if (xhr.overrideMimeType)
      {
        xhr.overrideMimeType("application/json");
      }
    }
    });
     //Load config
    return $.getJSON(filepath, function(json) {
      return json;
     });
}

//Load images with jquery
function loadImage(id, path, target) {
          $('<img id="img_'+id+'" class="img-resp" src="'+ path +'">').load(function() {
            $(this).appendTo(target);
        });
    }

function createGalleryItem(id, path){

  $('<img class="img-resp lazyload" data-sizes="auto" id="'+id+'"/>').attr("data-src", path).attr("src", path).appendTo("#lightgallery");
}

function loadFile(file) {
var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
    reader.open('get', file, true);
    reader.onreadystatechange = displayContents;
    reader.send(null);
}

function displayContents(objectID) {
    if(reader.readyState==4) {
        var el = document.getElementById(objectID);
        el.innerHTML = reader.responseText;
    }
}


function updateText(id){
  var currentId =  flkty.selectedElement.id;
  if(flkty.selectedIndex >= 0 && currentId !== id){
    $("div.textgallery #"+id).hide();
   if(open_text){
     $('div.textgallery div#'+currentId).fadeIn();
   }
   if(open_plan){
     $('div.textgallery img#'+currentId).fadeIn(1000);
   }
  }
}

function toggleText(element, show_text, show_plan){
  if(show_text){
    $('div.textgallery div#'+element.id).fadeIn();
     console.log(element.id +" - Show text: " + show_text );
  }else if(!show_text){
     $('div.textgallery div#'+element.id).fadeOut();
     console.log(element.id +" - Show text: " + show_text );
  }
  if(show_plan){
    $('div.textgallery img#'+element.id).fadeIn(1000);
  }else if(!show_plan){
    $('div.textgallery img#'+element.id).fadeOut();
  }
}
