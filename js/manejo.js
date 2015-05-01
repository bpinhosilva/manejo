var tab = ""; // define que aba sera exibida na pagina

$(document).ready(function() {
  
  // para recolher menu responsivo quando clicar na opcao
  
  $('.nav a').on('click', function(){
    // verifica o tamanho da tela para eliminar bugs
    // em desktop e tablets no menu
    if (window.innerWidth <= 768) {
      $(".navbar-toggle").click();
    }
    //$(".navbar-collapse").collapse('hide');
  });


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