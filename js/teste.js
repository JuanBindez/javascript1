const botao = document.getElementById("btnClique")

botao.addEventListener("click", janela)

function janela(){
    window.alert('esta janela')
    window.confirm('esta gostando do javascrip?')
    var nome = window.prompt('qual é seu nome')
    window.alert("olá " + nome + " vc gostou?")
}


