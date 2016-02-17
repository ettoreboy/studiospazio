/*
@author Ettore Ciprian [cipettaro@gmail.com]
*/

/**
 * load Configurations from a Json file
 * @param {String} the configuration file path
 * @return {Array} sum
 */
function loadConfig(filepath){
  $.ajaxSetup({beforeSend: function(xhr){
      if (xhr.overrideMimeType)
      {
        xhr.overrideMimeType("application/json");
      }
    }
    });
    var result;
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
  $('<a class="item" id="'+id+'"></a>').attr("href", path).appendTo("#lightgallery");
  $('<img>').attr("src", path).appendTo("#"+id);
}
