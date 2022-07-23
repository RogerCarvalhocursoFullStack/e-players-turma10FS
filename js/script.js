// Uso do JQuery

$(document).ready(function () {

    $(".btn-buy").click(function(){
        alert("Este Produto não está disponível")
    });
    // $(".menu-bars").click(function(){
    //     $(".menu").toggleClass('mostraEscomdeMenu')
    // });
    
});

function abreFechaMenu() {
    let navbar = document.querySelector(".menu");
    navbar.classList.toggle("mostraEscondeMenu");
}
