// início da formatação do select
var opçoesSelect = document.querySelector("#opçoes");
var displayOpçoes = document.querySelector("#incrementoDisplay");

opçoesSelect.addEventListener("change", function(){
    if(opçoesSelect.value == "CifraDeCesar") {
        displayOpçoes.style.display = "block";
    }
    else {
        displayOpçoes.style.display = "none";
    }
})
// fim da formatação do select

//início da formatação dos botões
var botaoCodificar = document.getElementById("Codificar");
function botao1() {
    Codificar.style.display = "block";
    Decodificar.style.display = "none";
    botoes.style.display = "block";
}

var botaoDecodificar = document.getElementById("Decodificar");
function botao2() {
    Decodificar.style.display = "block";
    Codificar.style.display = "none";
    botoes.style.display = "block";
}
//fim da formatação dos botões

//início da formatação da lógica da cifra (codificação e decodificação)
var mensagem = document.getElementById("escrita");
var letrasDoAlfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var incrementoDaCifra = document.getElementById("incrementoCifra");

function codificacaoDaMensagemCifra() {
    var conteudoDaMensagem = mensagem.value;
    var mensagemEmLetraMinuscula = conteudoDaMensagem.toLowerCase();
    var n = (Number(incrementoDaCifra.value) % 26);
    var mensagemCodificada = " ";

    for(var i = 0; i < mensagemEmLetraMinuscula.length; i++){
        for(var o = 0; o < letrasDoAlfabeto.length; o++) {
            if(mensagemEmLetraMinuscula[i] == letrasDoAlfabeto[o]) {
                mensagemCodificada += letrasDoAlfabeto[o + n];
                break;
            }
            else if(mensagemEmLetraMinuscula[i] == " ") {
                mensagemCodificada += " ";
                break;
            }
        }
    }
    return mensagemCodificada;
}

function decodificacoDaMensagemCifra() {
    var conteudoDaMensagem = mensagem.value;
    var mensagemEmLetraMinuscula = conteudoDaMensagem.toLowerCase();
    var n = (Number(incrementoDaCifra.value) % 26);
    var mensagemCodificada = " ";

    for(var i = 0; i < mensagemEmLetraMinuscula.length; i++) {
        for(var o = letrasDoAlfabeto.length - 1; o >= 0; o--) {
            if(mensagemEmLetraMinuscula[i] == letrasDoAlfabeto[o]) {
                mensagemCodificada += letrasDoAlfabeto[o - n];
                break;
            }
            else if(mensagemEmLetraMinuscula[i] == " ") {
                mensagemCodificada += " ";
                break;
            }
        }
    }
    return mensagemCodificada;
}
//fim da formatação da lógica da cifra (codificação e decodificação)

//início da formatação da lógica da base (codificação e decodificação)
function codificacaoDaMensagemBase() {
    var conteudoDaMensagem = mensagem.value;
    return btoa(conteudoDaMensagem);
}

function decodificacaoDaMensagemBase() {
    var conteudoDaMensagem = mensagem.value;
    return atob(conteudoDaMensagem);
}
//fim da formatação da lógica da base (codificação e decodificação)

//início da funcionalidade da lógica por meio dos botões
var resultado = document.getElementById("mensagemResultado");

botaoCodificar.addEventListener("click", function(pararTexto1){
    pararTexto1.preventDefault();

    if(opçoesSelect.value === "CifraDeCesar") {
        if(botaoCodificar.value === "Codificar mensagem") {
            resultado.innerText = codificacaoDaMensagemCifra();
        }
        else {

        }
    }
    else if(opçoesSelect.value === "Base64") {
        if(botaoCodificar.value === "Codificar mensagem") {
            resultado.innerText = codificacaoDaMensagemBase();
        }
        else {
            
        }
    }
})

botaoDecodificar.addEventListener("click", function(pararTexto2){
    pararTexto2.preventDefault();

    if(opçoesSelect.value === "CifraDeCesar") {
        if(botaoCodificar.innerText === "Decodificar mensagem") {
            resultado.innerText = decodificacaoDaMensagemCifra();
        }
        else {

        }
    }
    else if(opçoesSelect.value === "Base64") {
        if(botaoCodificar.innerText === "Decodificar mensagem") {
            resultado.innerText = decodificacaoDaMensagemBase();
        }
        else {
            
        }
    }
})
//fim da funcionalidade da lógica por meio dos botões


