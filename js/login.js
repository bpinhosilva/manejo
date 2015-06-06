// modulo para funcoes de login
// Padrao Modulo

var login = (function(){
  // private members
  var btnLogin = "";
  var btnCadastro = "";
  var formName = "";

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

      switch(c0) {
        case 4: // successful login
          window.location.href = "http://104.236.14.87/ManejoNovo/home.html";
          break;
      }     
    });
  };

  // public members
  return {
    init: function () {
      $(".form-signin").submit( function (e) {
        e.preventDefault();
        var btnType = $(document.activeElement).attr('id');
        
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
    setBtnLogin: function (btn) {
      this.btnLogin = btn;
    },
    getBtnLogin: function () {
      return this.btnLogin;
    }
  };
}());