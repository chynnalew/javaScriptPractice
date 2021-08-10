$(document).ready(function() {
  $("#clickShow").click(function() {
    $("#walrusShowing").fadeIn();
    $("#walrusHidden").fadeOut();
  });
  $("#clickHide").click(function() {
    $("#walrusHidden").fadeIn();
    $("#walrusShowing").fadeOut();
  });

  $("button#darkMode").click(function() {
    $("body").removeClass();
    $("body").addClass("darkBackground");
  });

  $("button#lightMode").click(function(){
    $("body").removeClass();
  });

  $("p#walrusInfo").click(function(){
    $("p#walrusInfo").toggleClass("highlight");
  });

});