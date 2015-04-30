var tab = ""; // define que aba sera exibida na pagina

$(document).ready(function() {
  
  $("#manejo").click(function() {
    $("#" + tab).parent().toggleClass("active");
    tab = "manejo";
    $("#" + tab).parent().toggleClass("active");
    $("main").load("pages/" + tab + ".html");
  });

  $("#eventos").click(function() {
    $("#" + tab).parent().toggleClass("active");
    tab = "eventos";
    $("#" + tab).parent().toggleClass("active");
    $("main").load("pages/" + tab + ".html");
  });

  if (tab == "") {
    tab = "manejo";
    $("main").load("pages/" + tab + ".html");
  }





});