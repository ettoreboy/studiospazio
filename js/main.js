/**
* @author Ettore Ciprian [cipettaro@gmail.com]
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
  $('<img class="img-resp lazy" id="'+id+'"/>').attr("data-original", path).height(800).width(800).appendTo("#lightgallery");
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
