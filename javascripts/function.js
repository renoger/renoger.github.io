1
2
3
4
5
6
7
8
// Code By Webdevtrick ( https://webdevtrick.com )
$(document).ready(function () {
  $(".single-image").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
});