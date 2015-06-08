// modulo para funcoes de login
// Padrao Modulo

var login = (function(){
  // private members
  var btnLogin = "";
  var btnCadastro = "";
  var formName = "";
  var userName = "";

  var checkLogin = function () {
    //console.log( $(".form-signin input[type=email]").val() );
    //console.log( $("input[type=password]").val() );

    // get user credentials
    var userLogin    = $(".form-signin input[type=email]").val();
    var userPassword = $(".form-signin input[type=password]").val();

    $.post("cgi-bin/swb56.cgi", {
      c0: 1,
      c1: userLogin,
      c2: userPassword
    }, function (data) {
      console.log("retorno");      
      eval(data); 
      var c0, c1, c2;
      $('#modalLoading').modal('hide');
      switch(c0) {
        case 4: // successful login
          US = "BRuno";
          login.setUserName("Bruno");
          //window.location.href = "http://104.236.14.87/ManejoNovo/home.html";
          $("main").load("test.html", function () {
            alert(US);
            alert(login.getUserName());
          });
          break;
      }     
    });
  };

  // public members
  return {
    init: function () {
      this.userName = "";
      $(".form-signin").submit( function (e) {
        e.preventDefault();
        var btnType = $(document.activeElement).attr('id');
        $('#modalLoading').modal('show');
        switch(btnType) {
          // caso login
          case "btnLogin":
            checkLogin();
            break;     
          // caso cadastro     
        }

      });
    },
    setFormName: function (name) {
      this.formName = name;
    },
    getUserName: function () {
      return this.userName;
    },
    setUserName: function (name) {
      return this.userName = name;
    },
    setBtnLogin: function (btn) {
      this.btnLogin = btn;
    },
    getBtnLogin: function () {
      return this.btnLogin;
    }
  };
}());