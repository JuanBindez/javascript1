const botao = document.getElementById("btnClique")

botao.addEventListener("click", escolha)

function janela(){
    window.alert('esta janela')
    window.confirm('esta gostando do javascrip?')
    var nome = window.prompt('qual é seu nome')
    window.alert("olá " + nome + " vc gostou?")
}


function adicao(){
    var numero1 = Number.parseFloat(window.prompt('digite um numero'))
    var numero2 = Number.parseFloat(window.prompt('digite outro numero'))
    var r = numero1 + numero2
    window.alert('o resultado é:' + "" + r)
}


function mult(){
    var numero1 = Number.parseFloat(window.prompt('digite um numero'))
    var numero2 = Number.parseFloat(window.prompt('digite outro numero'))
    var r = numero1 * numero2
    window.alert('o resultado é:' + "" + r)
}


function sub(){
    var numero1 = Number.parseFloat(window.prompt('digite um numero'))
    var numero2 = Number.parseFloat(window.prompt('digite outro numero'))
    var r = numero1 - numero2
    window.alert('o resultado é:' + "" + r)
}


function divi(){
    var numero1 = Number.parseFloat(window.prompt('digite um numero'))
    var numero2 = Number.parseFloat(window.prompt('digite outro numero'))
    var r = numero1 / numero2
    window.alert('o resultado é:' + "" + r)
}


function escolha(){
    var operador = window.prompt('digite o operador:')
    if (operador == "a"){
        adicao()
    }
    if (operador == "m"){
        mult()
    }
    if (operador == "s"){
        sub()
    }
    if (operador == "d"){
        divi()
    }
}
