$(document).ready(function(){
  $(".hamburgler").click(function(e){
    e.preventDefault();
    $(this).toggleClass("no-hamburgler");
  });
});

/* Click burger icon to see animation */
