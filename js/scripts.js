$(document).ready(function() {
  $("#clickShow").click(function() {
    $("#walrusShowing").fadeIn();
    $("#walrusHidden").fadeOut();
  });
  $("#clickHide").click(function() {
    $("#walrusHidden").fadeIn();
    $("#walrusShowing").fadeOut();
  });
});