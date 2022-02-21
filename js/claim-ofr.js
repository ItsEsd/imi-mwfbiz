
  $("#clmofr").on('click', (event) => {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        if(name != "imimwfoffrthus"){
          document.cookie = name + "=true;"+"expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }     
    }
      ewfSetCookie(365);
      clmoffrcook(7);
      setTimeout(function(){ location.reload();}, 2000);
     
      });

  // Cook MWF offer

var ewf_expire, formfullid = 'formsign',
form = document.getElementById(formfullid),
cookieSaved = false;
var ewfGetCookie = function() {
  var name = "iomwfclmoffr=true";
  var ca = document.cookie.split(';');
  for (var i = 0; i <
    ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      ewf_expire = true;
      return;
    }
  }
  ewf_expire = false;
}();
var ewfSetCookie = function(exsec) {
  var d = new Date();
  d.setTime(d.getTime() + (exsec * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = "iomwfclmoffr=true; expires=" + expires + ";path=/;domain=mwfbiz.com";
};


var clofr_expire,
cookieSaved = false;
var ewfGetCookie = function() {
  var name = "imimwfoffrthus=true";
  var ca = document.cookie.split(';');
  for (var i = 0; i <
    ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        clofr_expire = true;
      return;
    }
  }
  clofr_expire = false;
}();
var clmoffrcook = function(exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = "imimwfoffrthus=true; expires=" + expires + ";path=/;domain=mwfbiz.com";
};