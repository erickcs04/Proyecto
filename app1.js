function verificarNumero() {
    var numero = document.getElementById('numero').value;
    var resultado = document.getElementById('resultado');
    
    if (numero >= 1 && numero <= 10) {
        resultado.innerText = "Correcto";
    } else {
        resultado.innerText = "Incorrecto";
    }
}
