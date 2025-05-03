/*Criar um botão abaixo do parágrafo com o texto "Clique para ver uma
mensagem!".*/
let botao = document.querySelector('#botao')
let mensagem = document.querySelector('#msg')

/*Quando o usuário clicar, uma mensagem (por exemplo uma frase de
motivação, saudação, boas vindas, etc.) deverá aparecer abaixo do botão.*/
botao.addEventListener("click",botaoClicado)
function botaoClicado(){
    mensagem.textContent = 'Bem-vindo (a) ao meu mundo!'
}