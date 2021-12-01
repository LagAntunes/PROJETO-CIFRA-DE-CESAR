var cifra = document.querySelector("#cifra");
cifra.addEventListener("click", function(evento) {
    //evento.preventDefault();
    var formulario = document.querySelector("form");
    var botaoInput = document.createElement("input");
    botaoInput.setAttribute("type","number");
    formulario.appendChild(botaoInput);
}
);
