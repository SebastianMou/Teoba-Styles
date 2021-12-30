$(document).ready(function () {
    // MDB Lightbox Init
    $(function () {
      $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });
  });

/*COMENTARIOS*/
  document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('textarea').onkeyup = function () {
    document.getElementById('count').innerHTML = "Characters left: " + (500 - this.value.length);
    };
    
    });


