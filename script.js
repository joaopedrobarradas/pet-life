var elementosDuvida = document.querySelectorAll(".duvida")
var buttonMenu = document.querySelector('.botaoMenu')
var nav = document.querySelector('.menu')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})

buttonMenu.addEventListener('click', () => {
    nav.classList.toggle('botao__menu__ativo')
    buttonMenu.classList.toggle('botao__menu__x')
})



