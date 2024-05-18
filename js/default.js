

(function($) {
    $(".abrirSobreMenu").click((e) => {
        $("#mySidenav").css("width", "60%")
    })
})(jQuery);

function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
